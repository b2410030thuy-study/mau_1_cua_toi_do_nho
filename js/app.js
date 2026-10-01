// Khởi tạo các biến trạng thái
let currentUser = null;
let currentRole = 'student';
let currentLetter = ALPHABET[0];
let currentQuizIndex = 0;
let userScore = 0;
let learnedLetters = new Set();

// Canvas context
let canvas, ctx;
let isDrawing = false;
let history = [];
let showGuide = true;

window.addEventListener('DOMContentLoaded', () => {
  initCanvas();
  renderAlphabet();
  checkSession();
});

// Chuyển đổi Role Đăng nhập
function setRole(role) {
  currentRole = role;
  document.querySelectorAll('.role-btn').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
}

// Xử lý Xát thực / Đăng nhập
function handleAuth(e) {
  e.preventDefault();
  const username = document.getElementById('username').value.trim();
  const pin = document.getElementById('pin').value.trim();

  if (!username || pin.length !== 4) {
    showAuthError('Vui lòng nhập tên và mã PIN 4 số!');
    return;
  }

  currentUser = { name: username, role: currentRole, pin: pin };
  localStorage.setItem('user_session', JSON.stringify(currentUser));
  
  showMainScreen();
  showToast(`Chào mừng ${username} đến với lớp học! 🎉`);
}

function showAuthError(msg) {
  const errEl = document.getElementById('auth-error');
  errEl.textContent = msg;
  errEl.classList.remove('hidden');
}

function checkSession() {
  const saved = localStorage.getItem('user_session');
  if (saved) {
    currentUser = JSON.parse(saved);
    showMainScreen();
  }
}

function showMainScreen() {
  document.getElementById('auth-screen').classList.add('hidden');
  document.getElementById('main-screen').classList.remove('hidden');
  
  document.getElementById('display-name').textContent = currentUser.name;
  document.getElementById('home-name').textContent = currentUser.name;
  document.getElementById('display-role').textContent = currentUser.role === 'student' ? 'Học Sinh' : 'Giáo Viên';
  
  showPage('home');
  renderBadges();
}

function handleLogout() {
  localStorage.removeItem('user_session');
  location.reload();
}

// Điều hướng trang
function showPage(pageId) {
  document.querySelectorAll('.page-content').forEach(p => p.classList.add('hidden'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  
  document.getElementById(`page-${pageId}`).classList.remove('hidden');
  document.querySelector(`[data-page="${pageId}"]`)?.classList.add('active');

  if (pageId === 'lesson') {
    selectLetter(currentLetter.id);
  } else if (pageId === 'exercise') {
    loadQuiz();
  }
}

// Render danh sách chữ cái
function renderAlphabet() {
  const container = document.getElementById('alphabet-list');
  if (!container) return;
  container.innerHTML = '';

  ALPHABET.forEach(item => {
    const btn = document.createElement('button');
    btn.className = `letter-btn ${learnedLetters.has(item.id) ? 'done' : ''}`;
    btn.textContent = item.letter;
    btn.onclick = () => selectLetter(item.id);
    btn.id = `btn-letter-${item.id}`;
    container.appendChild(btn);
  });
}

// Chọn chữ cái bài học
function selectLetter(id) {
  const item = ALPHABET.find(l => l.id === id) || ALPHABET[0];
  currentLetter = item;

  document.querySelectorAll('.letter-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(`btn-letter-${id}`)?.classList.add('active');

  document.getElementById('big-letter').textContent = item.letter;
  document.getElementById('word-emoji').textContent = item.emoji;
  document.getElementById('word-text').textContent = item.word;
  document.getElementById('letter-title').textContent = `Chữ ${item.letter}`;
  document.getElementById('letter-height').textContent = item.height;
  document.getElementById('letter-desc').textContent = item.desc;
  document.getElementById('video').src = item.video;

  // Đánh dấu đã học
  learnedLetters.add(item.id);
  document.getElementById('practice-count').textContent = learnedLetters.size;
  renderBadges();
  clearCanvas();
}

// Nghe âm thanh phát âm
function speakLetter() {
  if ('speechSynthesis' in window) {
    const utterance = new SpeechSynthesisUtterance(currentLetter.letter);
    utterance.lang = 'vi-VN';
    utterance.rate = 0.8;
    window.speechSynthesis.speak(utterance);
    triggerMascotAnim('jump', `Âm "${currentLetter.letter}" nè bé!`);
  }
}

// Bảng tập tô Canvas
function initCanvas() {
  canvas = document.getElementById('writeCanvas');
  if (!canvas) return;
  ctx = canvas.getContext('2d');

  // Sự kiện chuột/Cảm ứng
  canvas.addEventListener('mousedown', startDrawing);
  canvas.addEventListener('mousemove', draw);
  canvas.addEventListener('mouseup', stopDrawing);
  canvas.addEventListener('mouseleave', stopDrawing);

  canvas.addEventListener('touchstart', handleTouchStart);
  canvas.addEventListener('touchmove', handleTouchMove);
  canvas.addEventListener('touchend', stopDrawing);

  drawGrid();
}

function drawGrid() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // Vẽ đường kẻ ô li
  ctx.strokeStyle = '#bfdbfe';
  ctx.lineWidth = 1;
  for (let y = 0; y < canvas.height; y += 30) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(canvas.width, y);
    ctx.stroke();
  }

  // Chữ mẫu nét mờ
  if (showGuide && currentLetter) {
    ctx.save();
    ctx.font = 'bold 160px Mali, sans-serif';
    ctx.fillStyle = 'rgba(203, 213, 225, 0.6)';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(currentLetter.letter, canvas.width / 2, canvas.height / 2);
    ctx.restore();
  }
}

function startDrawing(e) {
  isDrawing = true;
  saveState();
  draw(e);
}

function draw(e) {
  if (!isDrawing) return;
  const rect = canvas.getBoundingClientRect();
  const x = (e.clientX || e.touches[0].clientX) - rect.left;
  const y = (e.clientY || e.touches[0].clientY) - rect.top;

  ctx.lineWidth = 12;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.strokeStyle = '#ff4757';

  ctx.lineTo(x, y);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(x, y);
}

function stopDrawing() {
  if (isDrawing) {
    isDrawing = false;
    ctx.beginPath();
  }
}

function handleTouchStart(e) {
  e.preventDefault();
  startDrawing(e.touches[0]);
}

function handleTouchMove(e) {
  e.preventDefault();
  draw(e.touches[0]);
}

function clearCanvas() {
  history = [];
  drawGrid();
}

function saveState() {
  history.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
}

function undoCanvas() {
  if (history.length > 0) {
    const previousState = history.pop();
    ctx.putImageData(previousState, 0, 0);
  } else {
    drawGrid();
  }
}

function toggleGuide() {
  showGuide = !showGuide;
  const btn = document.getElementById('btn-guide');
  btn.classList.toggle('off', !showGuide);
  drawGrid();
}

// Xử lý Đố Vui
function loadQuiz() {
  const quiz = QUIZ_QUESTIONS[currentQuizIndex];
  if (!quiz) return;

  document.getElementById('quiz-progress').textContent = `Câu ${currentQuizIndex + 1}/${QUIZ_QUESTIONS.length}`;
  document.getElementById('quiz-question').textContent = quiz.question;
  document.getElementById('quiz-feedback').classList.add('hidden');

  const optionsContainer = document.getElementById('quiz-options');
  optionsContainer.innerHTML = '';

  quiz.options.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'quiz-opt-btn';
    btn.textContent = opt;
    btn.onclick = () => checkAnswer(opt, quiz.answer);
    optionsContainer.appendChild(btn);
  });
}

function checkAnswer(selected, correct) {
  const feedback = document.getElementById('quiz-feedback');
  const buttons = document.querySelectorAll('.quiz-opt-btn');
  
  buttons.forEach(b => b.disabled = true);

  if (selected === correct) {
    userScore += 10;
    updateScoreDisplay();
    feedback.textContent = '🎉 Chính xác! Bé giỏi quá!';
    feedback.className = 'quiz-feedback success';
    triggerMascotAnim('jump', 'Xuất sắc luôn bé ơi! 🌟');
  } else {
    feedback.textContent = `❌ Tiếc quá! Đáp án đúng là: ${correct}`;
    feedback.className = 'quiz-feedback error';
    triggerMascotAnim('shake', 'Cố gắng ở câu sau nhé!');
  }

  feedback.classList.remove('hidden');

  setTimeout(() => {
    currentQuizIndex = (currentQuizIndex + 1) % QUIZ_QUESTIONS.length;
    loadQuiz();
  }, 2000);
}

function updateScoreDisplay() {
  document.getElementById('header-score').textContent = userScore;
  document.getElementById('quiz-score').textContent = userScore;
}

// Render Danh sách Huy hiệu
function renderBadges() {
  const container = document.getElementById('badge-grid');
  if (!container) return;
  container.innerHTML = '';

  const badges = [
    { name: 'Khởi Đầu', icon: '🌱', req: 1, desc: 'Tập tô 1 chữ' },
    { name: 'Siêu Nhí', icon: '⭐', req: 5, desc: 'Tập tô 5 chữ' },
    { name: 'Chăm Chỉ', icon: '🏆', req: 15, desc: 'Tập tô 15 chữ' },
    { name: 'Thần Đồng', icon: '👑', req: 29, desc: 'Hoàn thành 29 chữ' }
  ];

  badges.forEach(b => {
    const isUnlocked = learnedLetters.size >= b.req;
    const badgeEl = document.createElement('div');
    badgeEl.className = `badge ${isUnlocked ? '' : 'locked'}`;
    badgeEl.innerHTML = `
      <div class="badge-icon">${b.icon}</div>
      <b>${b.name}</b>
      <small>${b.desc}</small>
    `;
    container.appendChild(badgeEl);
  });
}

// Linh vật & Modal Helper
function triggerMascotAnim(animName, text) {
  const mascot = document.getElementById('mascot-body');
  const bubble = document.getElementById('bubble');
  
  mascot.className = `mascot-body ${animName}`;
  if (text) bubble.textContent = text;

  setTimeout(() => {
    mascot.className = 'mascot-body';
  }, 1000);
}

function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.remove('hidden');
  setTimeout(() => toast.classList.add('hidden'), 3000);
}

function openEditModal() {
  document.getElementById('edit-modal').classList.remove('hidden');
}

function closeEditModal() {
  document.getElementById('edit-modal').classList.add('hidden');
}

function saveNewName() {
  const newName = document.getElementById('new-name-input').value.trim();
  if (newName) {
    currentUser.name = newName;
    localStorage.setItem('user_session', JSON.stringify(currentUser));
    document.getElementById('display-name').textContent = newName;
    document.getElementById('home-name').textContent = newName;
    closeEditModal();
    showToast('Đã đổi tên thành công!');
  }
}
