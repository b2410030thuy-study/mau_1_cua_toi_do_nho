// ==========================================
// 1. DỮ LIỆU CHỮ CÁI CHUẨN (GIÁO TRÌNH SP076)
// ==========================================
const alphabetData = [
  {
    letter: "a",
    title: "Chữ a (thường)",
    height: "1 ô li (Cỡ vừa)",
    strokes: "Nét cong kín + Nét móc ngược nhỏ",
    guide: "Đặt bút dưới đường kẻ 3 một chút, viết nét cong kín. Từ điểm dừng bút, lia lên đường kẻ 3 viết nét móc ngược nhỏ sát nét cong kín, dừng bút ở đường kẻ 2.",
    videoId: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    letter: "b",
    title: "Chữ b (thường)",
    height: "2.5 ô li (Cỡ vừa)",
    strokes: "Nét khuyết trên + Nét thắt",
    guide: "Đặt bút ở đường kẻ 2, viết nét khuyết trên cao 2.5 ô li, rê bút viết tiếp nét thắt ở ngang đường kẻ 3 rồi dừng bút.",
    videoId: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    letter: "c",
    title: "Chữ c (thường)",
    height: "1 ô li (Cỡ vừa)",
    strokes: "Nét cong trái",
    guide: "Đặt bút dưới đường kẻ 3 một chút, viết nét cong trái, dừng bút ở khoảng giữa đường kẻ 1 và đường kẻ 2.",
    videoId: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    letter: "d",
    title: "Chữ d (thường)",
    height: "2 ô li (Cỡ vừa)",
    strokes: "Nét cong kín + Nét móc ngược dài",
    guide: "Viết nét cong kín cao 1 ô li. Lia bút lên đường kẻ 5 viết nét móc ngược dài cao 2 ô li áp sát nét cong kín.",
    videoId: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    letter: "e",
    title: "Chữ e (thường)",
    height: "1 ô li (Cỡ vừa)",
    strokes: "Nét cong xéo liền nét cong trái",
    guide: "Đặt bút trên đường kẻ 1 một chút, viết nét cong xéo lên rồi chuyển hướng viết nét cong trái, dừng bút ở đường kẻ 2.",
    videoId: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  }
];

// Dữ liệu bài tập trắc nghiệm
const quizData = [
  {
    question: "Chữ 'a' thường (cỡ vừa) có độ cao bao nhiêu ô li?",
    options: [
      { text: "1 Ô li", correct: true },
      { text: "2 Ô li", correct: false },
      { text: "2.5 Ô li", correct: false },
      { text: "3 Ô li", correct: false }
    ]
  },
  {
    question: "Chữ 'b' thường gồm những nét cơ bản nào?",
    options: [
      { text: "Nét cong kín + Nét móc", correct: false },
      { text: "Nét khuyết trên + Nét thắt", correct: true },
      { text: "Nét thẳng + Nét cong", correct: false },
      { text: "Nét khuyết dưới + Nét móc", correct: false }
    ]
  }
];

// Biến lưu trạng thái ứng dụng
let currentLetter = alphabetData[0];
let currentQuizIndex = 0;
let userScore = 0;
let userRole = 'student';

// ==========================================
// 2. KHI TRANG WEB TẢI XONG (INITIALIZATION)
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  renderAlphabetGrid();
  loadLetterData(alphabetData[0]);
  loadQuizQuestion();
});

// Render danh sách nút chữ cái ở Sidebar
function renderAlphabetGrid() {
  const gridContainer = document.getElementById("alphabet-list");
  if (!gridContainer) return;

  gridContainer.innerHTML = "";
  alphabetData.forEach((item, index) => {
    const btn = document.createElement("button");
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

// Load thông tin bài học của chữ cái được chọn
function loadLetterData(data) {
  currentLetter = data;
  document.getElementById("current-letter-title").innerText = `Học ${data.title}`;
  document.getElementById("char-height").innerText = data.height;
  document.getElementById("char-strokes").innerText = data.strokes;
  document.getElementById("char-guide").innerText = data.guide;
  
  const iframe = document.getElementById("lesson-video");
  if (iframe) iframe.src = data.videoId;
}

// ==========================================
// 3. XỬ LÝ ĐĂNG NHẬP, ĐĂNG XUẤT & ĐỔI TÊN
// ==========================================
function switchAuthTab(tab) {
  const tabs = document.querySelectorAll('.tab-btn');
  tabs.forEach(t => t.classList.remove('active'));
  if (tab === 'login') tabs[0].classList.add('active');
  else tabs[1].classList.add('active');
}

function setRole(role) {
  userRole = role;
  const btns = document.querySelectorAll('.role-btn');
  btns.forEach(b => b.classList.remove('active'));
  if (role === 'student') btns[0].classList.add('active');
  else btns[1].classList.add('active');
}

function handleAuth(event) {
  event.preventDefault();
  const nameInput = document.getElementById("username").value;
  if (!nameInput.trim()) return;

  document.getElementById("display-name").innerText = nameInput;
  document.getElementById("display-role").innerText = userRole === 'student' ? 'Học Sinh' : 'Giáo Viên';

  document.getElementById("auth-screen").classList.add("hidden");
  document.getElementById("main-screen").classList.remove("hidden");
}

function handleLogout() {
  document.getElementById("main-screen").classList.add("hidden");
  document.getElementById("auth-screen").classList.remove("hidden");
}

// Modal đổi tên
function openEditModal() {
  document.getElementById("edit-modal").classList.remove("hidden");
}
function closeEditModal() {
  document.getElementById("edit-modal").classList.add("hidden");
}
function saveNewName() {
  const newName = document.getElementById("new-name-input").value;
  if (newName.trim()) {
    document.getElementById("display-name").innerText = newName;
  }
  closeEditModal();
}

// ==========================================
// 4. CHUYỂN TRANG (NAVIGATION)
// ==========================================
function showPage(pageName) {
  const pages = ['home', 'lesson', 'exercise'];
  pages.forEach(p => {
    const el = document.getElementById(`page-${p}`);
    if (el) el.classList.add("hidden");
  });

  const activePage = document.getElementById(`page-${pageName}`);
  if (activePage) activePage.classList.remove("hidden");

  // Highlight menu nút
  const navBtns = document.querySelectorAll(".nav-btn");
  navBtns.forEach(btn => btn.classList.remove("active"));
  if (pageName === 'home') navBtns[0]?.classList.add("active");
  if (pageName === 'lesson') navBtns[1]?.classList.add("active");
  if (pageName === 'exercise') navBtns[2]?.classList.add("active");
}

// Phát âm chữ cái
function speakLetter() {
  if ('speechSynthesis' in window) {
    const utterance = new SpeechSynthesisUtterance(currentLetter.letter);
    utterance.lang = 'vi-VN';
    speechSynthesis.speak(utterance);
  } else {
    alert("Trình duyệt không hỗ trợ phát âm!");
  }
}

// ==========================================
// 5. BÀI TẬP TRẮC NGHIỆM
// ==========================================
function loadQuizQuestion() {
  const quiz = quizData[currentQuizIndex];
  if (!quiz) return;

  document.getElementById("quiz-question").innerText = quiz.question;
  const optionsGrid = document.getElementById("quiz-options");
  optionsGrid.innerHTML = "";

  quiz.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.className = "quiz-opt-btn";
    btn.innerText = opt.text;
    btn.onclick = () => checkAnswer(opt.correct);
    optionsGrid.appendChild(btn);
  });

  const feedback = document.getElementById("quiz-feedback");
  feedback.classList.add("hidden");
}

function checkAnswer(isCorrect) {
  const feedback = document.getElementById("quiz-feedback");
  feedback.classList.remove("hidden");

  if (isCorrect) {
    userScore += 10;
    document.getElementById("quiz-score").innerText = userScore;
    feedback.className = "quiz-feedback success";
    feedback.innerText = "🎉 Chính xác! Bé giỏi quá!";
    
    setTimeout(() => {
      currentQuizIndex = (currentQuizIndex + 1) % quizData.length;
      loadQuizQuestion();
    }, 1500);
  } else {
    feedback.className = "quiz-feedback error";
    feedback.innerText = "❌ Chưa đúng rồi, bé thử lại xem sao nhé!";
  }
}
