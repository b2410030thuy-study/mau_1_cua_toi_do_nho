// ==========================================
// 1. DỮ LIỆU 29 CHỮ CÁI TIẾNG VIỆT CHUẨN SP076
// ==========================================
const alphabetData = [
  {
    letter: "a",
    title: "Chữ a (thường)",
    height: "1 ô li (Cỡ vừa)",
    strokes: "Nét cong kín + Nét móc ngược nhỏ",
    guide: "Đặt bút dưới đường kẻ 3 một chút, viết nét cong kín từ phải sang trái. Lia bút lên đường kẻ 3 viết nét móc ngược nhỏ sát nét cong kín, dừng bút ở đường kẻ 2."
  },
  {
    letter: "ă",
    title: "Chữ ă (thường)",
    height: "1 ô li (Cỡ vừa)",
    strokes: "Chữ 'a' + Dấu nón ngược (nét cong dưới)",
    guide: "Viết chữ 'a' hoàn chỉnh. Lia bút lên trên đường kẻ 3 viết nét cong dưới nhỏ cân đối trên đầu chữ a."
  },
  {
    letter: "â",
    title: "Chữ â (thường)",
    height: "1 ô li (Cỡ vừa)",
    strokes: "Chữ 'a' + Dấu mũ (2 nét xiên ngắn)",
    guide: "Viết chữ 'a' hoàn chỉnh. Lia bút lên trên đường kẻ 3, viết nét xiên trái ngắn nối liền nét xiên phải ngắn tạo dấu mũ cân đối."
  },
  {
    letter: "b",
    title: "Chữ b (thường)",
    height: "2.5 ô li (Cỡ vừa)",
    strokes: "Nét khuyết trên + Nét thắt",
    guide: "Đặt bút ở đường kẻ 2, viết nét khuyết trên cao 2.5 ô li. Đến điểm dừng bút rê tiếp nét thắt ở đường kẻ 3 rồi dừng bút."
  },
  {
    letter: "c",
    title: "Chữ c (thường)",
    height: "1 ô li (Cỡ vừa)",
    strokes: "Nét cong trái",
    guide: "Đặt bút dưới đường kẻ 3 một chút, viết nét cong trái, dừng bút ở khoảng giữa đường kẻ 1 và đường kẻ 2."
  },
  {
    letter: "d",
    title: "Chữ d (thường)",
    height: "2 ô li (Cỡ vừa)",
    strokes: "Nét cong kín + Nét móc ngược dài",
    guide: "Viết nét cong kín cao 1 ô li. Lia bút lên đường kẻ 5 viết nét móc ngược dài cao 2 ô li áp sát nét cong kín, dừng ở đường kẻ 2."
  },
  {
    letter: "đ",
    title: "Chữ đ (thường)",
    height: "2 ô li (Cỡ vừa)",
    strokes: "Chữ 'd' + Nét ngang ngắn",
    guide: "Viết chữ 'd' hoàn chỉnh. Lia bút lên đường kẻ 4 viết nét ngang ngắn cắt ngang nét móc ngược dài."
  },
  {
    letter: "e",
    title: "Chữ e (thường)",
    height: "1 ô li (Cỡ vừa)",
    strokes: "Nét cong xéo liền nét cong trái",
    guide: "Đặt bút trên đường kẻ 1 một chút, viết nét cong xéo lên rồi chuyển hướng viết nét cong trái, dừng bút ở đường kẻ 2."
  },
  {
    letter: "ê",
    title: "Chữ ê (thường)",
    height: "1 ô li (Cỡ vừa)",
    strokes: "Chữ 'e' + Dấu mũ",
    guide: "Viết chữ 'e' hoàn chỉnh. Lia bút lên trên đường kẻ 3 viết dấu mũ nhỏ cân đối đỉnh chữ e."
  },
  {
    letter: "g",
    title: "Chữ g (thường)",
    height: "2.5 ô li (Cỡ vừa)",
    strokes: "Nét cong kín + Nét khuyết dưới",
    guide: "Viết nét cong kín cao 1 ô li. Lia bút lên đường kẻ 3 viết nét khuyết dưới sâu 1.5 ô li xuống dưới đường kẻ 1, dừng ở đường kẻ 2."
  },
  {
    letter: "h",
    title: "Chữ h (thường)",
    height: "2.5 ô li (Cỡ vừa)",
    strokes: "Nét khuyết trên + Nét móc hai đầu",
    guide: "Đặt bút ở đường kẻ 2, viết nét khuyết trên cao 2.5 ô li. Từ điểm dừng bút rê ngược lên đường kẻ 2 viết nét móc hai đầu."
  },
  {
    letter: "i",
    title: "Chữ i (thường)",
    height: "1 ô li (Cỡ vừa)",
    strokes: "Nét hất + Nét móc ngược + Dấu chấm",
    guide: "Đặt bút ở đường kẻ 2 viết nét hất lên đường kẻ 3. Kéo thẳng xuống viết nét móc ngược nhỏ. Lia bút chấm 1 chấm nhỏ trên đầu."
  },
  {
    letter: "k",
    title: "Chữ k (thường)",
    height: "2.5 ô li (Cỡ vừa)",
    strokes: "Nét khuyết trên + Nét thắt giữa",
    guide: "Viết nét khuyết trên cao 2.5 ô li. Rê bút lên đường kẻ 2 viết nét thắt giữa rồi móc ngược ra, dừng bút ở đường kẻ 2."
  },
  {
    letter: "l",
    title: "Chữ l (thường)",
    height: "2.5 ô li (Cỡ vừa)",
    strokes: "Nét khuyết trên liền nét móc ngược",
    guide: "Đặt bút ở đường kẻ 2, viết nét khuyết trên cao 2.5 ô li, đến chân nét kéo rộng ra viết nét móc ngược, dừng ở đường kẻ 2."
  },
  {
    letter: "m",
    title: "Chữ m (thường)",
    height: "1 ô li (Cỡ vừa)",
    strokes: "2 Nét móc xuôi + 1 Nét móc hai đầu",
    guide: "Đặt bút giữa đường kẻ 2 và 3, viết nét móc xuôi thứ 1. Rê bút viết nét móc xuôi thứ 2 rộng hơn, rê tiếp viết nét móc hai đầu."
  },
  {
    letter: "n",
    title: "Chữ n (thường)",
    height: "1 ô li (Cỡ vừa)",
    strokes: "Nét móc xuôi + Nét móc hai đầu",
    guide: "Đặt bút giữa đường kẻ 2 và 3, viết nét móc xuôi nhỏ. Rê bút lên đường kẻ 2 viết tiếp nét móc hai đầu, dừng ở đường kẻ 2."
  },
  {
    letter: "o",
    title: "Chữ o (thường)",
    height: "1 ô li (Cỡ vừa)",
    strokes: "Nét cong kín",
    guide: "Đặt bút dưới đường kẻ 3 một chút, đi nét tròn cong kín từ trái sang phải rồi trở về điểm bắt đầu."
  },
  {
    letter: "ô",
    title: "Chữ ô (thường)",
    height: "1 ô li (Cỡ vừa)",
    strokes: "Chữ 'o' + Dấu mũ",
    guide: "Viết chữ 'o' tròn đều. Lia bút lên trên đường kẻ 3 viết dấu mũ nhọn cân đối."
  },
  {
    letter: "ơ",
    title: "Chữ ơ (thường)",
    height: "1 ô li (Cỡ vừa)",
    strokes: "Chữ 'o' + Dấu râu",
    guide: "Viết chữ 'o' tròn đều. Lia bút viết nét râu nhỏ ở đường kẻ 3 phía bên phải chữ o."
  },
  {
    letter: "p",
    title: "Chữ p (thường)",
    height: "2 ô li (Cỡ vừa)",
    strokes: "Nét hất + Nét thẳng + Nét móc hai đầu",
    guide: "Đặt bút ở đường kẻ 2 hất lên đường kẻ 3. Kéo thẳng xuống sâu 1 ô li dưới đường kẻ 1. Rê bút viết nét móc hai đầu."
  },
  {
    letter: "q",
    title: "Chữ q (thường)",
    height: "2 ô li (Cỡ vừa)",
    strokes: "Nét cong kín + Nét thẳng đứng",
    guide: "Viết nét cong kín cao 1 ô li. Lia bút lên đường kẻ 3 kéo nét thẳng đứng dài 2 ô li xuống dưới đường kẻ 1."
  },
  {
    letter: "r",
    title: "Chữ r (thường)",
    height: "1.25 ô li (Cỡ vừa)",
    strokes: "Nét thắt + Nét móc ngược",
    guide: "Đặt bút ở đường kẻ 1, viết nét thắt hơi nhô qua đường kẻ 3 một chút, đưa sang phải rồi hạ xuống nét móc ngược."
  },
  {
    letter: "s",
    title: "Chữ s (thường)",
    height: "1.25 ô li (Cỡ vừa)",
    strokes: "Nét thắt + Nét cong xoắn",
    guide: "Đặt bút ở đường kẻ 1, viết nét xoắn hơi qua đường kẻ 3, lượn cong xuống tạo thân chữ s, dừng bút xoắn nhẹ."
  },
  {
    letter: "t",
    title: "Chữ t (thường)",
    height: "1.5 ô li (Cỡ vừa)",
    strokes: "Nét hất + Nét móc ngược cao + Nét ngang",
    guide: "Đặt bút ở đường kẻ 2 viết nét hất. Kéo thẳng từ giữa đường kẻ 3 và 4 xuống nét móc ngược. Viết nét ngang ngắn ở đường kẻ 3."
  },
  {
    letter: "u",
    title: "Chữ u (thường)",
    height: "1 ô li (Cỡ vừa)",
    strokes: "Nét hất + Nét móc ngược rộng + Nét móc ngược nhỏ",
    guide: "Viết nét hất từ đường kẻ 2. Viết nét móc ngược thứ nhất rộng 1.5 ô li. Rê bút lên đường kẻ 3 viết nét móc ngược nhỏ áp sát."
  },
  {
    letter: "ư",
    title: "Chữ ư (thường)",
    height: "1 ô li (Cỡ vừa)",
    strokes: "Chữ 'u' + Dấu râu",
    guide: "Viết chữ 'u' hoàn chỉnh. Lia bút lên nét móc thứ hai ở đường kẻ 3 viết một nét râu nhỏ."
  },
  {
    letter: "v",
    title: "Chữ v (thường)",
    height: "1 ô li (Cỡ vừa)",
    strokes: "Nét móc hai đầu + Nét thắt",
    guide: "Đặt bút giữa đường kẻ 2 và 3 viết nét móc hai đầu. Lượn lên đường kẻ 3 làm nét thắt nhỏ dừng bút."
  },
  {
    letter: "x",
    title: "Chữ x (thường)",
    height: "1 ô li (Cỡ vừa)",
    strokes: "Nét cong phải + Nét cong trái lưng chạm nhau",
    guide: "Viết nét cong phải dừng bút. Lia bút sang phải viết nét cong trái chạm lưng vào nét cong vừa viết."
  },
  {
    letter: "y",
    title: "Chữ y (thường)",
    height: "2.5 ô li (Cỡ vừa)",
    strokes: "Nét hất + Nét móc hai đầu rộng + Nét khuyết dưới",
    guide: "Viết nét hất rồi nét móc hai đầu rộng giống chữ u. Lia bút lên đường kẻ 3 viết nét khuyết dưới dài 2.5 ô li."
  }
];

// DỮ LIỆU BÀI TẬP TRẮC NGHIỆM
const quizData = [
  {
    question: "Chữ 'a' thường (cỡ vừa) có độ cao chuẩn là bao nhiêu ô li?",
    options: [
      { text: "1 Ô li", correct: true },
      { text: "2 Ô li", correct: false },
      { text: "2.5 Ô li", correct: false },
      { text: "3 Ô li", correct: false }
    ]
  },
  {
    question: "Chữ cái nào sau đây gồm có 'Nét khuyết trên' và 'Nét thắt'?",
    options: [
      { text: "Chữ c", correct: false },
      { text: "Chữ b", correct: true },
      { text: "Chữ d", correct: false },
      { text: "Chữ o", correct: false }
    ]
  },
  {
    question: "Nét khuyết dưới có trong chữ cái nào dưới đây?",
    options: [
      { text: "Chữ h và Chữ k", correct: false },
      { text: "Chữ g và Chữ y", correct: true },
      { text: "Chữ a và Chữ c", correct: false },
      { text: "Chữ m và Chữ n", correct: false }
    ]
  }
];

// BIẾN TRẠNG THÁI
let currentLetter = alphabetData[0];
let currentQuizIndex = 0;
let userScore = 0;
let userRole = 'student';

// BIẾN CANVAS VẼ TƯƠNG TÁC
let canvas, ctx;
let isDrawing = false;
let canvasHistory = [];

// ==========================================
// 2. KHỞI TẠO ỨNG DỤNG
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  renderAlphabetGrid();
  loadLetterData(alphabetData[0]);
  loadQuizQuestion();
  initCanvas();
});

// Render danh sách 29 chữ cái
function renderAlphabetGrid() {
  const gridContainer = document.getElementById("alphabet-list");
  if (!gridContainer) return;

  gridContainer.innerHTML = "";
  alphabetData.forEach((item, index) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `letter-btn ${index === 0 ? 'active' : ''}`;
    btn.innerText = item.letter;
    btn.onclick = () => {
      document.querySelectorAll(".letter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      loadLetterData(item);
    };
    gridContainer.appendChild(btn);
  });
}

// Cập nhật thông tin chữ cái được chọn
function loadLetterData(data) {
  currentLetter = data;
  
  document.getElementById("big-letter-display").innerText = data.letter;
  document.getElementById("current-letter-title").innerText = `Học ${data.title}`;
  document.getElementById("char-height").innerText = `📐 Độ cao: ${data.height}`;
  document.getElementById("char-strokes").innerText = `✏️ ${data.strokes}`;
  document.getElementById("char-guide").innerText = data.guide;

  // Xóa bảng ô li khi chuyển chữ mới
  clearCanvas();
}

// ==========================================
// 3. CANVAS TẬP VIẾT VỚI DÒNG KẺ Ô LI
// ==========================================
function initCanvas() {
  canvas = document.getElementById("writeCanvas");
  if (!canvas) return;
  ctx = canvas.getContext("2d");

  // Vẽ lưới ô li ban đầu
  drawGrid();

  // Sự kiện Chuột
  canvas.addEventListener("mousedown", startDrawing);
  canvas.addEventListener("mousemove", draw);
  canvas.addEventListener("mouseup", stopDrawing);
  canvas.addEventListener("mouseleave", stopDrawing);

  // Sự kiện Cảm ứng (Điện thoại/iPad)
  canvas.addEventListener("touchstart", (e) => {
    e.preventDefault();
    const touch = e.touches[0];
    const rect = canvas.getBoundingClientRect();
    startDrawing({ clientX: touch.clientX, clientY: touch.clientY, rect });
  });

  canvas.addEventListener("touchmove", (e) => {
    e.preventDefault();
    const touch = e.touches[0];
    draw({ clientX: touch.clientX, clientY: touch.clientY });
  });

  canvas.addEventListener("touchend", stopDrawing);
}

function drawGrid() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // Vẽ nền ô li màu xanh nhạt chuẩn vở bài tập
  const gridSize = 30; // Kích thước mỗi ô vuông
  ctx.lineWidth = 1;

  for (let x = 0; x <= canvas.width; x += gridSize) {
    ctx.beginPath();
    ctx.strokeStyle = (x % (gridSize * 5) === 0) ? '#a5d6a7' : '#e8f5e9';
    ctx.moveTo(x, 0);
    ctx.lineTo(x, canvas.height);
    ctx.stroke();
  }

  for (let y = 0; y <= canvas.height; y += gridSize) {
    ctx.beginPath();
    ctx.strokeStyle = (y % (gridSize * 5) === 0) ? '#a5d6a7' : '#e8f5e9';
    ctx.moveTo(0, y);
    ctx.lineTo(canvas.width, y);
    ctx.stroke();
  }

  // Lưu trạng thái lưới ban đầu
  saveCanvasState();
}

function startDrawing(e) {
  isDrawing = true;
  const rect = canvas.getBoundingClientRect();
  const x = (e.clientX || e.rect.left) - rect.left;
  const y = (e.clientY || e.rect.top) - rect.top;

  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineWidth = 6;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.strokeStyle = "#ff4757"; // Nét mực bút đỏ tươi cho trẻ dễ nhìn
}

function draw(e) {
  if (!isDrawing) return;
  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  ctx.lineTo(x, y);
  ctx.stroke();
}

function stopDrawing() {
  if (isDrawing) {
    isDrawing = false;
    ctx.closePath();
    saveCanvasState();
  }
}

function saveCanvasState() {
  if (canvasHistory.length >= 10) canvasHistory.shift();
  canvasHistory.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
}

function clearCanvas() {
  canvasHistory = [];
  drawGrid();
}

function undoCanvas() {
  if (canvasHistory.length > 1) {
    canvasHistory.pop(); // Bỏ nét vẽ hiện tại
    const previousState = canvasHistory[canvasHistory.length - 1];
    ctx.putImageData(previousState, 0, 0);
  } else {
    drawGrid();
  }
}

// ==========================================
// 4. QUẢN LÝ NGƯỜI DÙNG & ĐĂNG NHẬP
// ==========================================
function setRole(role) {
  userRole = role;
  const btns = document.querySelectorAll('.role-btn');
  btns.forEach(b => b.classList.remove('active'));
  if (role === 'student') btns[0]?.classList.add('active');
  else btns[1]?.classList.add('active');
}

function handleAuth(event) {
  event.preventDefault();
  const nameInput = document.getElementById("username")?.value;
  if (!nameInput || !nameInput.trim()) return;

  document.getElementById("display-name").innerText = nameInput;
  document.getElementById("display-role").innerText = userRole === 'student' ? 'Học Sinh' : 'Giáo Viên';

  document.getElementById("auth-screen").classList.add("hidden");
  document.getElementById("main-screen").classList.remove("hidden");
}

function handleLogout() {
  document.getElementById("main-screen").classList.add("hidden");
  document.getElementById("auth-screen").classList.remove("hidden");
}

function openEditModal() { document.getElementById("edit-modal")?.classList.remove("hidden"); }
function closeEditModal() { document.getElementById("edit-modal")?.classList.add("hidden"); }
function saveNewName() {
  const newName = document.getElementById("new-name-input")?.value;
  if (newName && newName.trim()) {
    document.getElementById("display-name").innerText = newName;
  }
  closeEditModal();
}

// ==========================================
// 5. CHUYỂN TRANG & PHÁT ÂM TIẾNG VIỆT
// ==========================================
function showPage(pageName) {
  ['home', 'lesson', 'exercise'].forEach(p => {
    const el = document.getElementById(`page-${p}`);
    if (el) el.classList.add("hidden");
  });

  const activePage = document.getElementById(`page-${pageName}`);
  if (activePage) activePage.classList.remove("hidden");

  const navBtns = document.querySelectorAll(".nav-btn");
  navBtns.forEach(btn => btn.classList.remove("active"));
  if (pageName === 'home') navBtns[0]?.classList.add("active");
  if (pageName === 'lesson') navBtns[1]?.classList.add("active");
  if (pageName === 'exercise') navBtns[2]?.classList.add("active");
}

function speakLetter() {
  if ('speechSynthesis' in window) {
    const utterance = new SpeechSynthesisUtterance(currentLetter.letter);
    utterance.lang = 'vi-VN';
    utterance.rate = 0.8; // Đọc chậm rãi cho trẻ nghe rõ
    speechSynthesis.speak(utterance);
  } else {
    alert("Trình duyệt không hỗ trợ phát âm!");
  }
}

// ==========================================
// 6. BÀI TẬP TRẮC NGHIỆM
// ==========================================
function loadQuizQuestion() {
  const quiz = quizData[currentQuizIndex];
  if (!quiz) return;

  document.getElementById("quiz-question").innerText = quiz.question;
  const optionsGrid = document.getElementById("quiz-options");
  if (!optionsGrid) return;
  optionsGrid.innerHTML = "";

  quiz.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "quiz-opt-btn";
    btn.innerText = opt.text;
    btn.onclick = () => checkAnswer(opt.correct);
    optionsGrid.appendChild(btn);
  });

  document.getElementById("quiz-feedback")?.classList.add("hidden");
}

function checkAnswer(isCorrect) {
  const feedback = document.getElementById("quiz-feedback");
  if (!feedback) return;
  feedback.classList.remove("hidden");

  if (isCorrect) {
    userScore += 10;
    document.getElementById("quiz-score").innerText = userScore;
    document.getElementById("header-score").innerText = userScore;
    feedback.className = "quiz-feedback success";
    feedback.innerText = "🎉 Hoan hô! Bé trả lời chính xác rồi!";
    
    setTimeout(() => {
      currentQuizIndex = (currentQuizIndex + 1) % quizData.length;
      loadQuizQuestion();
    }, 1500);
  } else {
    feedback.className = "quiz-feedback error";
    feedback.innerText = "❌ Gần đúng rồi, bé chọn lại thử xem nhé!";
  }
}
