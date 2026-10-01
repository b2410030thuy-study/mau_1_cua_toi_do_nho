// ================= 1. DỮ LIỆU BẢNG CHỮ CÁI TIẾNG VIỆT CHUẨN & LINK YOUTUBE =================
// (Mỗi chữ cái được đính kèm link video YouTube hướng dẫn cách viết chuẩn)
const alphabetData = [
    { letter: "a", title: "Chữ a (thường)", height: "1 ô li (Cỡ vừa)", strokes: "Nét cong kín + Nét móc ngược nhỏ", guide: "Đặt bút dưới đường kẻ ngang 2, viết nét cong kín, sau đó lia bút lên đường kẻ ngang 3 viết nét móc ngược sát nét cong.", youtubeId: "Hk0-19cv-i4" },
    { letter: "ă", title: "Chữ ă (thường)", height: "Gần 2 ô li (Có dấu ă)", strokes: "Chữ a + Dấu ă (mũi ngửa phía trên)", guide: "Viết chữ a, sau đó viết thêm dấu ă (hình chiếc mũ ngửa lên) ở phía trên đầu chữ a.", youtubeId: "Hk0-19cv-i4" },
    { letter: "â", title: "Chữ â (thường)", height: "Gần 2 ô li (Có dấu â)", strokes: "Chữ a + Dấu â (mũi nhọn phía trên)", guide: "Viết chữ a, sau đó viết thêm dấu â (hình chiếc mũ nhọn) ở phía trên đầu chữ a.", youtubeId: "Hk0-19cv-i4" },
    { letter: "b", title: "Chữ b (thường)", height: "2.5 ô li", strokes: "Nét khuyết xuôi + Nét thắt", guide: "Đặt bút trên đường kẻ ngang 1, viết nét khuyết xuôi kéo lên đường kẻ 5, xuống đường kẻ 1 rồi viết nét thắt ngang.", youtubeId: "Hk0-19cv-i4" },
    { letter: "c", title: "Chữ c (thường)", height: "1 ô li", strokes: "Nét cong hở phải", guide: "Đặt bút dưới đường kẻ ngang 3, viết nét cong hở bên phải, dừng bút giữa ô li 1 và 2.", youtubeId: "Hk0-19cv-i4" },
    { letter: "d", title: "Chữ d (thường)", height: "2 ô li", strokes: "Nét cong kín + Nét móc ngược", guide: "Viết nét cong kín, sau đó lia bút lên đường kẻ ngang 4 viết nét móc ngược sát bên phải nét cong.", youtubeId: "Hk0-19cv-i4" },
    { letter: "đ", title: "Chữ đ (thường)", height: "2 ô li (Có nét ngang)", strokes: "Chữ d + Nét ngang ngắn", guide: "Viết chữ d, sau đó viết thêm một nét ngang ngắn cắt ngang phần trên nét móc.", youtubeId: "Hk0-19cv-i4" },
    { letter: "e", title: "Chữ e (thường)", height: "1 ô li", strokes: "Nét khuyết ngược / cong hở", guide: "Đặt bút trên đường kẻ ngang 1, đưa bút lên viết nét cong hở phải rồi vòng xuống tạo nét khuyết.", youtubeId: "Hk0-19cv-i4" },
    { letter: "ê", title: "Chữ ê (thường)", height: "Gần 2 ô li (Có dấu ê)", strokes: "Chữ e + Dấu ê (mũ hất)", guide: "Viết chữ e, sau đó viết thêm dấu ê hình chiếc mũ ngửa nhỏ phía trên.", youtubeId: "Hk0-19cv-i4" },
    { letter: "g", title: "Chữ g (thường)", height: "2.5 ô li (Rơi xuống dưới)", strokes: "Nét cong kín + Nét khuyết ngược", guide: "Viết nét cong kín, nối liền với nét khuyết ngược kéo dài xuống 1.5 ô li ở phía dưới.", youtubeId: "Hk0-19cv-i4" },
    { letter: "h", title: "Chữ h (thường)", height: "2.5 ô li", strokes: "Nét khuyết xuôi + Nét móc hai đầu", guide: "Đặt bút trên đường kẻ 1, viết nét khuyết xuôi lên đường kẻ 5, rồi viết tiếp nét móc hai đầu.", youtubeId: "Hk0-19cv-i4" },
    { letter: "i", title: "Chữ i (thường)", height: "1 ô li (Có dấu chấm)", strokes: "Nét móc ngược + Dấu chấm", guide: "Đặt bút trên đường kẻ 2, viết nét móc ngược dừng ở đường kẻ 1, chấm một điểm nhỏ phía trên.", youtubeId: "Hk0-19cv-i4" },
    { letter: "k", title: "Chữ k (thường)", height: "2.5 ô li", strokes: "Nét khuyết xuôi + Nét thắt giữa", guide: "Viết nét khuyết xuôi, đến đường kẻ 1 thì viết nét thắt và nét móc ngược nhỏ bên phải.", youtubeId: "Hk0-19cv-i4" },
    { letter: "l", title: "Chữ l (thường)", height: "2.5 ô li", strokes: "Nét khuyết xuôi dài", guide: "Đặt bút trên đường kẻ 1, viết nét khuyết xuôi cao 2.5 ô li, dừng bút ở đường kẻ 1.", youtubeId: "Hk0-19cv-i4" },
    { letter: "m", title: "Chữ m (thường)", height: "1 ô li", strokes: "3 Nét móc ngược liên tiếp", guide: "Viết 3 nét móc ngược nhỏ liền nhau, rộng khoảng 1.5 ô li.", youtubeId: "Hk0-19cv-i4" },
    { letter: "n", title: "Chữ n (thường)", height: "1 ô li", strokes: "2 Nét móc ngược", guide: "Viết 2 nét móc ngược nhỏ liền nhau.", youtubeId: "Hk0-19cv-i4" },
    { letter: "o", title: "Chữ o (thường)", height: "1 ô li", strokes: "Nét cong kín", guide: "Đặt bút dưới đường kẻ ngang 3, viết nét cong kín tròn đều sang trái rồi khép kín nét.", youtubeId: "Hk0-19cv-i4" },
    { letter: "ô", title: "Chữ ô (thường)", height: "Gần 2 ô li (Có dấu ô)", strokes: "Chữ o + Dấu mũ ô", guide: "Viết chữ o, phía trên đỉnh viết thêm dấu mũ xuôi (hình chóp nhọn).", youtubeId: "Hk0-19cv-i4" },
    { letter: "ơ", title: "Chữ ơ (thường)", height: "Gần 2 ô li (Có dấu râu)", strokes: "Chữ o + Dấu râu", guide: "Viết chữ o, ở góc trên bên phải viết thêm một nét phẩy nhỏ gọi là dấu râu.", youtubeId: "Hk0-19cv-i4" },
    { letter: "p", title: "Chữ p (thường)", height: "2 ô li (Rơi xuống dưới)", strokes: "Nét thẳng + Nét móc hai đầu", guide: "Đặt bút trên đường kẻ 2, viết nét thẳng xuống dưới đường kẻ 1 (1 ô li), sau đó viết nét móc hai đầu.", youtubeId: "Hk0-19cv-i4" },
    { letter: "q", title: "Chữ q (thường)", height: "2 ô li (Rơi xuống dưới)", strokes: "Nét cong kín + Nét thẳng", guide: "Viết nét cong kín, sau đó viết nét thẳng đứng kéo dài xuống 1 ô li rồi hất nhẹ lên.", youtubeId: "Hk0-19cv-i4" },
    { letter: "r", title: "Chữ r (thường)", height: "1 ô li", strokes: "Nét thẳng ngắn + Nét thắt nhỏ", guide: "Đặt bút trên đường kẻ 1, viết nét thẳng lên hơi ngả về phải, thắt nhẹ tạo móc nhỏ.", youtubeId: "Hk0-19cv-i4" },
    { letter: "s", title: "Chữ s (thường)", height: "1.25 ô li", strokes: "Nét cong trái kết hợp cong phải", guide: "Đặt bút dưới đường kẻ 3, viết nét lượn cong trái rồi lượn cong phải tạo dáng chữ s.", youtubeId: "Hk0-19cv-i4" },
    { letter: "t", title: "Chữ t (thường)", height: "1.5 ô li", strokes: "Nét thẳng ngắn + Nét ngang ngắn", guide: "Viết nét thẳng ngắn cao 1.5 ô li, sau đó viết nét ngang ngắn cắt ngang thân chữ ở đường kẻ 2.", youtubeId: "Hk0-19cv-i4" },
    { letter: "u", title: "Chữ u (thường)", height: "1 ô li", strokes: "Nét móc ngược + Nét móc ngược phải", guide: "Viết nét móc ngược thứ nhất, nối liền nét móc ngược thứ hai rộng hơn một chút.", youtubeId: "Hk0-19cv-i4" },
    { letter: "ư", title: "Chữ ư (thường)", height: "Gần 2 ô li (Có dấu râu)", strokes: "Chữ u + Dấu râu", guide: "Viết chữ u, ở góc trên bên phải nét móc thứ hai viết thêm một dấu râu nhỏ.", youtubeId: "Hk0-19cv-i4" },
    { letter: "v", title: "Chữ v (thường)", height: "1 ô li", strokes: "Nét móc xuôi + Nét hất", guide: "Viết nét móc xuôi hơi cong, sau đó đưa bút chéo lên phía bên phải tạo nét hất.", youtubeId: "Hk0-19cv-i4" },
    { letter: "x", title: "Chữ x (thường)", height: "1 ô li", strokes: "Hai nét cong chéo nhau", guide: "Viết nét cong trái và nét cong phải đan chéo vào nhau tạo thành hình chữ x.", youtubeId: "Hk0-19cv-i4" },
    { letter: "y", title: "Chữ y (thường)", height: "2 ô li (Rơi xuống dưới)", strokes: "Nét khuyết ngược", guide: "Viết nét móc hai đầu, sau đó kéo dài thành nét khuyết ngược đi xuống phía dưới.", youtubeId: "Hk0-19cv-i4" }
];

// ================= 2. DỮ LIỆU CÂU HỎI TRẮC NGHIỆM =================
const quizData = [
    {
        question: "Chữ cái nào sau đây có độ cao 2.5 ô li và có nét khuyết xuôi?",
        options: [
            { text: "Chữ c", correct: false },
            { text: "Chữ b", correct: true },
            { text: "Chữ a", correct: false },
            { text: "Chữ o", correct: false }
        ]
    },
    {
        question: "Chữ 'ă' khác chữ 'a' ở điểm nào?",
        options: [
            { text: "Có thêm dấu mũ ngửa phía trên", correct: true },
            { text: "Cao hơn 2 ô li", correct: false },
            { text: "Có nét khuyết ngược", correct: false },
            { text: "Không có điểm khác biệt", correct: false }
        ]
    },
    {
        question: "Chữ cái nào khi viết sẽ kéo dài xuống phía dưới đường kẻ đậm (rơi xuống dưới)?",
        options: [
            { text: "Chữ m", correct: false },
            { text: "Chữ g", correct: true },
            { text: "Chữ i", correct: false },
            { text: "Chữ e", correct: false }
        ]
    },
    {
        question: "Chữ cái nào có nét ngang ngắn cắt ngang thân chữ ở đường kẻ số 2?",
        options: [
            { text: "Chữ t", correct: true },
            { text: "Chữ l", correct: false },
            { text: "Chữ h", correct: false },
            { text: "Chữ n", correct: false }
        ]
    },
    {
        question: "Đâu là chữ cái nguyên âm đôi/có thêm dấu râu ở góc trên bên phải?",
        options: [
            { text: "Chữ ô", correct: false },
            { text: "Chữ ơ", correct: true },
            { text: "Chữ ê", correct: false },
            { text: "Chữ v", correct: false }
        ]
    }
];

// ================= 3. XỬ LÝ GIAO DIỆN & TẬP VIẾT CANVAS (Ô LI) =================
document.addEventListener("DOMContentLoaded", () => {
    // Chuyển Tab
    const tabBtns = document.querySelectorAll(".tab-btn");
    const tabContents = document.querySelectorAll(".tab-content");

    tabBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            tabBtns.forEach(b => b.classList.remove("active"));
            tabContents.forEach(c => c.classList.remove("active"));
            btn.classList.add("active");
            document.getElementById(`${btn.dataset.tab}-tab`).classList.add("active");
        });
    });

    // Render Bảng Chữ Cái Sidebar
    const letterGrid = document.getElementById("letterGrid");
    let currentIndex = 0;

    function renderAlphabetGrid() {
        letterGrid.innerHTML = "";
        alphabetData.forEach((item, index) => {
            const btn = document.createElement("button");
            btn.className = `letter-btn ${index === currentIndex ? "active" : ""}`;
            btn.textContent = item.letter;
            btn.addEventListener("click", () => {
                currentIndex = index;
                updateWorkspace();
                document.querySelectorAll(".letter-btn").forEach(b => b.classList.remove("active"));
                btn.classList.add("active");
            });
            letterGrid.appendChild(btn);
        });
    }

    // Cập nhật thông tin chữ cái & Video YouTube
    const displayChar = document.getElementById("displayChar");
    const charTitle = document.getElementById("charTitle");
    const charHeight = document.getElementById("charHeight");
    const charStrokes = document.getElementById("charStrokes");
    const charGuide = document.getElementById("charGuide");
    const youtubeVideo = document.getElementById("youtubeVideo");

    function updateWorkspace() {
        const currentItem = alphabetData[currentIndex];
        displayChar.textContent = currentItem.letter;
        charTitle.textContent = currentItem.title;
        charHeight.textContent = currentItem.height;
        charStrokes.textContent = currentItem.strokes;
        charGuide.textContent = currentItem.guide;
        
        // Cập nhật link nhúng video YouTube theo chữ cái tương ứng
        youtubeVideo.src = `https://www.youtube.com/embed/${currentItem.youtubeId}?autoplay=0`;
        
        redrawCanvas();
    }

    // Phát âm
    document.getElementById("speakBtn").addEventListener("click", () => {
        const currentItem = alphabetData[currentIndex];
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(currentItem.letter);
            utterance.lang = 'vi-VN';
            utterance.rate = 0.8; // Đọc chậm cho bé dễ nghe
            window.speechSynthesis.speak(utterance);
        } else {
            alert("Trình duyệt của bạn không hỗ trợ phát âm giọng nói.");
        }
    });

    // --- CÀI ĐẶT VẼ Ô LI TRÊN CANVAS ---
    const canvas = document.getElementById("writingCanvas");
    const ctx = canvas.getContext("2d");

    function resizeCanvas() {
        const container = canvas.parentElement;
        canvas.width = container.clientWidth - 2;
        canvas.height = 280;
        redrawCanvas();
    }

    window.addEventListener("resize", resizeCanvas);

    function redrawCanvas() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        const boxSize = 35; // Kích thước 1 ô li
        const rows = Math.floor(canvas.height / boxSize);
        const cols = Math.floor(canvas.width / boxSize);

        // Vẽ lưới ô li chuẩn Tiểu Học (Màu hồng nhạt và đỏ nhạt)
        for (let r = 0; r <= rows; r++) {
            let y = r * boxSize;
            for (let sub = 0; sub < 5; sub++) {
                let subY = y + (sub * (boxSize / 5));
                if (subY > canvas.height) break;
                
                if (sub === 0) {
                    ctx.strokeStyle = "#ff9999"; // Đường kẻ ngang đậm
                    ctx.lineWidth = 1.2;
                } else {
                    ctx.strokeStyle = "#ffcccc"; // Đường kẻ ngang ô li nhỏ
                    ctx.lineWidth = 0.5;
                }
                ctx.beginPath();
                ctx.moveTo(0, subY);
                ctx.lineTo(canvas.width, subY);
                ctx.stroke();
            }
        }

        // Vẽ các đường kẻ dọc
        for (let c = 0; c <= cols; c++) {
            let x = c * boxSize;
            ctx.strokeStyle = "#ffcccc";
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, canvas.height);
            ctx.stroke();
        }

        // Hiển thị chữ mẫu mờ để bé tập viết đè lên
        ctx.font = "bold 90px 'Comic Neue', sans-serif";
        ctx.fillStyle = "rgba(200, 200, 200, 0.35)";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(alphabetData[currentIndex].letter, canvas.width / 2, canvas.height / 2);
    }

    // Sự kiện vẽ bằng chuột / cảm ứng
    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;

    function getCoords(e) {
        const rect = canvas.getBoundingClientRect();
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;
        return {
            x: clientX - rect.left,
            y: clientY - rect.top
        };
    }

    canvas.addEventListener("mousedown", (e) => {
        isDrawing = true;
        const coords = getCoords(e);
        lastX = coords.x;
        lastY = coords.y;
    });

    canvas.addEventListener("mousemove", (e) => {
        if (!isDrawing) return;
        const coords = getCoords(e);
        
        ctx.strokeStyle = "#2f3542"; // Màu mực viết của bé
        ctx.lineWidth = 3.5;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";

        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(coords.x, coords.y);
        ctx.stroke();

        lastX = coords.x;
        lastY = coords.y;
    });

    window.addEventListener("mouseup", () => { isDrawing = false; });

    canvas.addEventListener("touchstart", (e) => {
        isDrawing = true;
        const coords = getCoords(e);
        lastX = coords.x;
        lastY = coords.y;
        e.preventDefault();
    });

    canvas.addEventListener("touchmove", (e) => {
        if (!isDrawing) return;
        const coords = getCoords(e);
        
        ctx.strokeStyle = "#2f3542";
        ctx.lineWidth = 3.5;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";

        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(coords.x, coords.y);
        ctx.stroke();

        lastX = coords.x;
        lastY = coords.y;
        e.preventDefault();
    });

    window.addEventListener("touchend", () => { isDrawing = false; });

    // Nút xóa bảng
    document.getElementById("clearCanvasBtn").addEventListener("click", redrawCanvas);


    // ================= 4. XỬ LÝ LOGIC QUIZ TRẮC NGHIỆM =================
    let currentQuizIndex = 0;
    let score = 0;

    const currentQNum = document.getElementById("currentQNum");
    const totalQNum = document.getElementById("totalQNum");
    const scoreNum = document.getElementById("scoreNum");
    const questionText = document.getElementById("questionText");
    const optionsContainer = document.getElementById("optionsContainer");
    const nextQuizBtn = document.getElementById("nextQuizBtn");
    const quizCard = document.getElementById("quizCard");
    const quizResult = document.getElementById("quizResult");
    const finalScore = document.getElementById("finalScore");
    const restartQuizBtn = document.getElementById("restartQuizBtn");

    function initQuiz() {
        currentQuizIndex = 0;
        score = 0;
        scoreNum.textContent = score;
        totalQNum.textContent = quizData.length;
        quizCard.style.display = "block";
        quizResult.style.display = "none";
        loadQuizQuestion();
    }

    function loadQuizQuestion() {
        nextQuizBtn.style.display = "none";
        const currentQ = quizData[currentQuizIndex];
        currentQNum.textContent = currentQuizIndex + 1;
        questionText.textContent = currentQ.question;
        optionsContainer.innerHTML = "";

        currentQ.options.forEach(opt => {
            const btn = document.createElement("button");
            btn.className = "option-btn";
            btn.textContent = opt.text;
            btn.addEventListener("click", () => selectOption(opt, btn));
            optionsContainer.appendChild(btn);
        });
    }

    function selectOption(selectedOpt, btnElement) {
        const allBtns = optionsContainer.querySelectorAll(".option-btn");
        allBtns.forEach(b => b.disabled = true);

        if (selectedOpt.correct) {
            btnElement.classList.add("correct");
            score += 10;
            scoreNum.textContent = score;
        } else {
            btnElement.classList.add("incorrect");
            allBtns.forEach(b => {
                const matchedOpt = quizData[currentQuizIndex].options.find(o => o.text === b.textContent);
                if (matchedOpt && matchedOpt.correct) {
                    b.classList.add("correct");
                }
            });
        }

        if (currentQuizIndex < quizData.length - 1) {
            nextQuizBtn.style.display = "inline-block";
        } else {
            setTimeout(() => {
                quizCard.style.display = "none";
                quizResult.style.display = "block";
                finalScore.textContent = `${score} / ${quizData.length * 10} điểm`;
            }, 1000);
        }
    }

    nextQuizBtn.addEventListener("click", () => {
        currentQuizIndex++;
        loadQuizQuestion();
    });

    restartQuizBtn.addEventListener("click", initQuiz);

    // Khởi chạy ứng dụng
    renderAlphabetGrid();
    updateWorkspace();
    resizeCanvas();
    initQuiz();
});
