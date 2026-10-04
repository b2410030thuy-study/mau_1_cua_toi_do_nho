// Helper tách ID YouTube từ URL bất kỳ
function extractYoutubeId(url) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
}

// ================= 1. DỮ LIỆU NÉT CƠ BẢN (14 NÉT CHUẨN ĐÃ CẬP NHẬT LINK) =================
const strokesData = [
    { 
        letter: "Sổ thẳng", 
        title: "Nét sổ thẳng", 
        height: "2 ô li", 
        strokes: "Đường thẳng đứng từ trên xuống", 
        guide: "Đặt bút trên đường kẻ ngang 3, kéo thẳng xuống đường kẻ 1 rồi dừng bút.", 
        youtubeUrl: "https://youtu.be/qeVv7ApZr1I?si=6tA1Mh_Y4sDm-FZJ",
        sampleText: "|" 
    },
    { 
        letter: "Ngang", 
        title: "Nét ngang", 
        height: "Độ rộng 2 ô li", 
        strokes: "Đường ngang từ trái sang phải", 
        guide: "Đặt bút trên đường kẻ ngang 2, đưa bút từ trái sang phải.", 
        youtubeUrl: "https://youtu.be/1inzb8uiVio?si=CgPl2z_wz312HZdb",
        sampleText: "—" 
    },
    { 
        letter: "Xiên trái", 
        title: "Nét xiên trái", 
        height: "2 ô li", 
        strokes: "Đường chéo từ phải sang trái", 
        guide: "Đặt bút ở đường kẻ 3, kéo chéo xuống góc trái đường kẻ 1.", 
        youtubeUrl: "https://youtu.be/2hjEJp9L1rM?si=1pbkARbB3FEpQXwU",
        sampleText: "╱" 
    },
    { 
        letter: "Xiên phải", 
        title: "Nét xiên phải", 
        height: "2 ô li", 
        strokes: "Đường chéo từ trái sang phải", 
        guide: "Đặt bút ở đường kẻ 3, kéo chéo xuống góc phải đường kẻ 1.", 
        youtubeUrl: "https://youtu.be/ZutfvPYwK40?si=0bIT1AzsgjdBmIJ5",
        sampleText: "╲" 
    },
    { 
        letter: "Móc xuôi", 
        title: "Nét móc xuôi", 
        height: "2 ô li", 
        strokes: "Nét cong trên rồi kéo thẳng xuống", 
        guide: "Đặt bút giữa ô li 2 và 3, vòng cong lên đường kẻ 3 rồi kéo thẳng xuống đường kẻ 1.", 
        youtubeUrl: "https://youtu.be/9Xekg3rU7sc?si=iTkNW8dYPzgGJEFj",
        sampleText: "∩" 
    },
    { 
        letter: "Móc ngược", 
        title: "Nét móc ngược", 
        height: "2 ô li", 
        strokes: "Kéo thẳng xuống rồi móc lên bên phải", 
        guide: "Đặt bút ở đường kẻ 3, kéo thẳng xuống đường kẻ 1 rồi lượn cong hất lên.", 
        youtubeUrl: "https://youtu.be/dfbBiT2aAYs?si=Qvm4G7cBNjyuaq0b",
        sampleText: "∪" 
    },
    { 
        letter: "Móc 2 đầu", 
        title: "Nét móc hai đầu", 
        height: "2 ô li", 
        strokes: "Móc xuôi nối liền móc ngược", 
        guide: "Đặt bút ở đường kẻ 2, lượn cong lên đường kẻ 3 rồi kéo xuống móc hất lên.", 
        youtubeUrl: "https://youtu.be/LYJ_MVg5Ggs?si=CGV7phIB96w2io-y",
        sampleText: "ʃ" 
    },
    { 
        letter: "Cong hở trái", 
        title: "Nét cong hở trái", 
        height: "2 ô li", 
        strokes: "Nét cong quay mặt sang trái", 
        guide: "Đặt bút dưới đường kẻ 3, lượn cong sang phải rồi vòng xuống đường kẻ 1.", 
        youtubeUrl: "https://youtu.be/IEdfR38gcjo?si=Wlbk5_XlY5Y4g-Bi",
        sampleText: "⊃" 
    },
    { 
        letter: "Cong hở phải", 
        title: "Nét cong hở phải", 
        height: "2 ô li", 
        strokes: "Nét cong quay mặt sang phải", 
        guide: "Đặt bút dưới đường kẻ 3, lượn cong sang trái rồi vòng xuống đường kẻ 1.", 
        youtubeUrl: "https://youtu.be/OZ98t9hNipo?si=_mquPbt6HLrBmNeS",
        sampleText: "⊂" 
    },
    { 
        letter: "Cong kín", 
        title: "Nét cong khép kín", 
        height: "2 ô li", 
        strokes: "Nét cong tròn khép kín", 
        guide: "Đặt bút dưới đường kẻ 3, viết nét cong từ phải sang trái khép kín thành hình tròn.", 
        youtubeUrl: "https://youtu.be/oTDP5kYTd6o?si=BRuW1bRZy46-V-in",
        sampleText: "O" 
    },
    { 
        letter: "Khuyết trên", 
        title: "Nét khuyết trên", 
        height: "5 ô li", 
        strokes: "Nét xiên hất lên vòng đầu rồi kéo thẳng xuống", 
        guide: "Đặt bút đường kẻ 2, kéo xiên lên đường kẻ 6, lượn cong vòng xuống kéo thẳng về đường kẻ 1.", 
        youtubeUrl: "https://youtu.be/KM3cqrhKeSw?si=tZdPei6-a0GK3ix6",
        sampleText: "l" 
    },
    { 
        letter: "Khuyết dưới", 
        title: "Nét khuyết dưới", 
        height: "5 ô li (rơi xuống dưới)", 
        strokes: "Nét kéo thẳng xuống dưới rồi vòng lên", 
        guide: "Đặt bút đường kẻ 3, kéo thẳng xuống dưới đường kẻ 1 (3 ô li), lượn cong hất xiên lên.", 
        youtubeUrl: "https://youtu.be/h7YOnn63EQU?si=tdFiwCoupXxGYkST",
        sampleText: "g" 
    },
    { 
        letter: "Thắt trên", 
        title: "Nét thắt trên", 
        height: "2 ô li", 
        strokes: "Nét thẳng ngắn tạo vòng thắt ở đỉnh", 
        guide: "Đặt bút đường kẻ 1, đưa lên đường kẻ 3 xoắn một vòng nhỏ thắt lại.", 
        youtubeUrl: "https://youtu.be/X3YNUW3q_7A?si=hB7TObpvuLbam17O",
        sampleText: "r" 
    },
    { 
        letter: "Thắt giữa", 
        title: "Nét thắt giữa", 
        height: "2.5 ô li", 
        strokes: "Nét khuyết kết hợp vòng thắt ở giữa", 
        guide: "Đặt bút viết nét khuyết, đến đường kẻ 2 xoắn vòng thắt nhỏ rồi kéo ra.", 
        youtubeUrl: "https://youtu.be/xVstl9bH2_o?si=SbGYAvd66lZmVCrL",
        sampleText: "k" 
    }
];

// ================= 2. DỮ LIỆU BẢNG CHỮ CÁI TIẾNG VIỆT =================
const alphabetData = [
    { letter: "a", title: "Chữ a (thường)", height: "1 ô li", strokes: "Nét cong kín + Móc ngược nhỏ", guide: "Đặt bút dưới đường kẻ 3 viết nét cong kín, sau đó viết nét móc ngược.", youtubeUrl: "https://youtu.be/Hk0-19cv-i4", sampleText: "a" },
    { letter: "ă", title: "Chữ ă (thường)", height: "Gần 2 ô li", strokes: "Chữ a + Dấu ă (nón ngửa)", guide: "Viết chữ a, thêm dấu ă hình chiếc nón ngửa ở phía trên.", youtubeUrl: "https://youtu.be/Hk0-19cv-i4", sampleText: "ă" },
    { letter: "â", title: "Chữ â (thường)", height: "Gần 2 ô li", strokes: "Chữ a + Dấu â (nón úp)", guide: "Viết chữ a, thêm dấu â hình chiếc nón úp nhọn phía trên.", youtubeUrl: "https://youtu.be/Hk0-19cv-i4", sampleText: "â" },
    { letter: "b", title: "Chữ b (thường)", height: "2.5 ô li", strokes: "Nét khuyết xuôi + Nét thắt", guide: "Viết nét khuyết xuôi cao 2.5 ô li, lượn lên viết nét thắt ngang.", youtubeUrl: "https://youtu.be/Hk0-19cv-i4", sampleText: "b" },
    { letter: "c", title: "Chữ c (thường)", height: "1 ô li", strokes: "Nét cong hở phải", guide: "Đặt bút dưới đường kẻ 3, viết nét cong hở bên phải.", youtubeUrl: "https://youtu.be/Hk0-19cv-i4", sampleText: "c" },
    { letter: "d", title: "Chữ d (thường)", height: "2 ô li", strokes: "Nét cong kín + Nét móc ngược", guide: "Viết nét cong kín, lia bút lên đường kẻ 4 viết nét móc ngược dài.", youtubeUrl: "https://youtu.be/Hk0-19cv-i4", sampleText: "d" },
    { letter: "đ", title: "Chữ đ (thường)", height: "2 ô li", strokes: "Chữ d + Nét ngang ngắn", guide: "Viết chữ d, viết thêm nét ngang ngắn cắt phần trên thân chữ.", youtubeUrl: "https://youtu.be/Hk0-19cv-i4", sampleText: "đ" },
    { letter: "e", title: "Chữ e (thường)", height: "1 ô li", strokes: "Nét khuyết ngang + Cong hở phải", guide: "Đặt bút trên đường kẻ 1, viết nét khuyết vòng qua nét cong hở phải.", youtubeUrl: "https://youtu.be/Hk0-19cv-i4", sampleText: "e" },
    { letter: "ê", title: "Chữ ê (thường)", height: "Gần 2 ô li", strokes: "Chữ e + Dấu mũ ê", guide: "Viết chữ e rồi thêm dấu mũ nón úp phía trên.", youtubeUrl: "https://youtu.be/Hk0-19cv-i4", sampleText: "ê" },
    { letter: "g", title: "Chữ g (thường)", height: "2.5 ô li (rơi xuống dưới)", strokes: "Nét cong kín + Nét khuyết dưới", guide: "Viết nét cong kín, nối nét khuyết dưới kéo dài xuống 1.5 ô li.", youtubeUrl: "https://youtu.be/Hk0-19cv-i4", sampleText: "g" },
    { letter: "h", title: "Chữ h (thường)", height: "2.5 ô li", strokes: "Nét khuyết xuôi + Móc 2 đầu", guide: "Viết nét khuyết xuôi cao 2.5 ô li, liền nét viết nét móc hai đầu.", youtubeUrl: "https://youtu.be/Hk0-19cv-i4", sampleText: "h" },
    { letter: "i", title: "Chữ i (thường)", height: "1 ô li", strokes: "Nét móc ngược + Dấu chấm", guide: "Viết nét móc ngược nhỏ, chấm một điểm nhỏ trên đầu.", youtubeUrl: "https://youtu.be/Hk0-19cv-i4", sampleText: "i" },
    { letter: "k", title: "Chữ k (thường)", height: "2.5 ô li", strokes: "Nét khuyết xuôi + Thắt giữa", guide: "Viết nét khuyết xuôi, viết nét thắt giữa ở ô li 1.", youtubeUrl: "https://youtu.be/Hk0-19cv-i4", sampleText: "k" },
    { letter: "l", title: "Chữ l (thường)", height: "2.5 ô li", strokes: "Nét khuyết xuôi dài", guide: "Viết nét khuyết xuôi kéo dài cao 2.5 ô li.", youtubeUrl: "https://youtu.be/Hk0-19cv-i4", sampleText: "l" },
    { letter: "m", title: "Chữ m (thường)", height: "1 ô li", strokes: "3 Nét móc nối tiếp", guide: "Viết 1 nét móc xuôi, 1 nét móc 2 đầu nối liền nhau rộng 1.5 ô li.", youtubeUrl: "https://youtu.be/Hk0-19cv-i4", sampleText: "m" },
    { letter: "n", title: "Chữ n (thường)", height: "1 ô li", strokes: "2 Nét móc", guide: "Viết nét móc xuôi nối liền nét móc hai đầu.", youtubeUrl: "https://youtu.be/Hk0-19cv-i4", sampleText: "n" },
    { letter: "o", title: "Chữ o (thường)", height: "1 ô li", strokes: "Nét cong kín tròn", guide: "Đặt bút dưới đường kẻ 3, viết nét cong tròn khép kín.", youtubeUrl: "https://youtu.be/Hk0-19cv-i4", sampleText: "o" },
    { letter: "ô", title: "Chữ ô (thường)", height: "Gần 2 ô li", strokes: "Chữ o + Dấu mũ ô", guide: "Viết chữ o, thêm dấu mũ nón úp phía trên.", youtubeUrl: "https://youtu.be/Hk0-19cv-i4", sampleText: "ô" },
    { letter: "ơ", title: "Chữ ơ (thường)", height: "Gần 2 ô li", strokes: "Chữ o + Dấu râu", guide: "Viết chữ o, đặt dấu râu nhỏ ở góc trên bên phải.", youtubeUrl: "https://youtu.be/Hk0-19cv-i4", sampleText: "ơ" },
    { letter: "p", title: "Chữ p (thường)", height: "2 ô li", strokes: "Nét xiên ngắn + Nét thẳng + Móc 2 đầu", guide: "Viết nét thẳng xuống đường kẻ dưới 1 ô li, sau đó viết nét móc 2 đầu.", youtubeUrl: "https://youtu.be/Hk0-19cv-i4", sampleText: "p" },
    { letter: "q", title: "Chữ q (thường)", height: "2 ô li", strokes: "Nét cong kín + Nét thẳng", guide: "Viết nét cong kín, kéo nét thẳng đứng xuống dưới 1 ô li.", youtubeUrl: "https://youtu.be/Hk0-19cv-i4", sampleText: "q" },
    { letter: "r", title: "Chữ r (thường)", height: "1.25 ô li", strokes: "Nét thắt trên", guide: "Viết nét thắt xoắn ở đỉnh rồi lượn sang phải viết nét móc ngược.", youtubeUrl: "https://youtu.be/Hk0-19cv-i4", sampleText: "r" },
    { letter: "s", title: "Chữ s (thường)", height: "1.25 ô li", strokes: "Nét thắt nhỏ + Cong trái", guide: "Viết nét xiên lên thắt nhẹ rồi lượn cong xuống.", youtubeUrl: "https://youtu.be/Hk0-19cv-i4", sampleText: "s" },
    { letter: "t", title: "Chữ t (thường)", height: "1.5 ô li", strokes: "Nét móc ngược + Nét ngang", guide: "Viết nét móc ngược cao 1.5 ô li, thêm nét ngang ngắn cắt ngang.", youtubeUrl: "https://youtu.be/Hk0-19cv-i4", sampleText: "t" },
    { letter: "u", title: "Chữ u (thường)", height: "1 ô li", strokes: "2 Nét móc", guide: "Viết nét móc ngược rộng nối liền nét móc ngược nhỏ.", youtubeUrl: "https://youtu.be/Hk0-19cv-i4", sampleText: "u" },
    { letter: "ư", title: "Chữ ư (thường)", height: "Gần 2 ô li", strokes: "Chữ u + Dấu râu", guide: "Viết chữ u rồi thêm dấu râu ở góc phải.", youtubeUrl: "https://youtu.be/Hk0-19cv-i4", sampleText: "ư" },
    { letter: "v", title: "Chữ v (thường)", height: "1 ô li", strokes: "Móc xuôi + Nét hất", guide: "Viết nét móc xuôi rồi lượn lên viết nét hất thắt nhẹ.", youtubeUrl: "https://youtu.be/Hk0-19cv-i4", sampleText: "v" },
    { letter: "x", title: "Chữ x (thường)", height: "1 ô li", strokes: "2 Nét cong lưng vào nhau", guide: "Viết nét cong trái nối liền nét cong phải đan chéo.", youtubeUrl: "https://youtu.be/Hk0-19cv-i4", sampleText: "x" },
    { letter: "y", title: "Chữ y (thường)", height: "2.5 ô li (rơi xuống dưới)", strokes: "Móc 2 đầu + Khuyết dưới", guide: "Viết nét móc 2 đầu, nối liền nét khuyết dưới kéo xuống 1.5 ô li.", youtubeUrl: "https://youtu.be/Hk0-19cv-i4", sampleText: "y" }
];

// ================= 3. TRẮC NGHIỆM =================
const quizData = [
    { question: "Nét nào dưới đây kéo thẳng từ trên xuống dưới?", options: [{ text: "Nét sổ thẳng", correct: true }, { text: "Nét ngang", correct: false }, { text: "Nét cong kín", correct: false }, { text: "Nét xiên trái", correct: false }] },
    { question: "Nét cong khép kín tròn trịa giống hình dạng quả trứng là nét gì?", options: [{ text: "Nét móc xuôi", correct: false }, { text: "Nét cong khép kín", correct: true }, { text: "Nét khuyết trên", correct: false }, { text: "Nét thắt giữa", correct: false }] },
    { question: "Chữ cái nào sau đây có chứa nét khuyết xuôi cao 2.5 ô li?", options: [{ text: "Chữ c", correct: false }, { text: "Chữ b", correct: true }, { text: "Chữ a", correct: false }, { text: "Chữ m", correct: false }] },
    { question: "Nét khuyết dưới kéo dài xuống phía dưới đường kẻ đậm thường xuất hiện ở chữ cái nào?", options: [{ text: "Chữ g và chữ y", correct: true }, { text: "Chữ n và chữ m", correct: false }, { text: "Chữ o và chữ ê", correct: false }, { text: "Chữ t và chữ i", correct: false }] },
    { question: "Chữ 'ă' khác chữ 'a' ở điểm nào?", options: [{ text: "Có dấu mũ ngửa phía trên", correct: true }, { text: "Có nét khuyết trên", correct: false }, { text: "Rơi xuống dưới ô li", correct: false }, { text: "Không có điểm khác", correct: false }] }
];

// Lời khen từ Mèo Miu
const aiFeedbackList = [
    "Bé viết nét này chuẩn nét uốn lượn lắm nha! ⭐⭐⭐⭐⭐",
    "Tuyệt vời! Nét chữ tròn trịa và thẳng thắn đúng chuẩn 10 điểm! 🎉",
    "Bé giữ vững tay nhé, nét chữ rất đều và đẹp mắt! 💖",
    "Khéo tay quá! Cố gắng uốn cong nhẹ thêm một xíu nữa là siêu hoàn hảo! 🌟"
];

const mascotQuotes = [
    "Bé ơi, bấm vào ô nét hoặc chữ để Mèo Miu bật video hướng dẫn nha! 🐱",
    "Bé có thích mực Cầu Vồng Thần Kỳ không? Đẹp lắm đó! 🌈",
    "Viết xong nhớ bấm 'AI Chấm điểm' để Mèo Miu khen bé nha! ⭐",
    "Cùng tập viết thật chăm chỉ để vào lớp 1 đạt điểm 10 nha bé! 🌸"
];

// ================= 4. KHỞI TẠO XỬ LÝ GIAO DIỆN =================
document.addEventListener("DOMContentLoaded", () => {
    let currentMode = "strokes"; // "strokes" hoặc "letters"
    let currentDataSet = strokesData;
    let currentIndex = 0;
    let selectedInkColor = "#2f3542";

    // Tab chuyển đổi chính
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

    // Chuyển chế độ Sidebar (Nét cơ bản / Chữ cái)
    const btnModeStrokes = document.getElementById("btnModeStrokes");
    const btnModeLetters = document.getElementById("btnModeLetters");
    const sidebarTitle = document.getElementById("sidebarTitle");

    btnModeStrokes.addEventListener("click", () => {
        currentMode = "strokes";
        currentDataSet = strokesData;
        btnModeStrokes.classList.add("active");
        btnModeLetters.classList.remove("active");
        sidebarTitle.textContent = "Danh sách nét cơ bản";
        currentIndex = 0;
        renderGrid();
        updateWorkspace();
    });

    btnModeLetters.addEventListener("click", () => {
        currentMode = "letters";
        currentDataSet = alphabetData;
        btnModeLetters.classList.add("active");
        btnModeStrokes.classList.remove("active");
        sidebarTitle.textContent = "Danh sách chữ cái Tiếng Việt";
        currentIndex = 0;
        renderGrid();
        updateWorkspace();
    });

    // Render danh sách chọn bên trái
    const letterGrid = document.getElementById("letterGrid");

    function renderGrid() {
        letterGrid.innerHTML = "";
        currentDataSet.forEach((item, index) => {
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

    // Cập nhật thông tin & Embed Video YouTube
    const displayChar = document.getElementById("displayChar");
    const charTitle = document.getElementById("charTitle");
    const charHeight = document.getElementById("charHeight");
    const charStrokes = document.getElementById("charStrokes");
    const charGuide = document.getElementById("charGuide");
    const youtubeVideo = document.getElementById("youtubeVideo");
    const mascotSpeech = document.getElementById("mascotSpeech");

    function updateWorkspace() {
        const item = currentDataSet[currentIndex];
        displayChar.textContent = item.sampleText || item.letter;
        charTitle.textContent = item.title;
        charHeight.textContent = item.height;
        charStrokes.textContent = item.strokes;
        charGuide.textContent = item.guide;

        // Tách YouTube ID từ link đã khai báo
        const ytId = extractYoutubeId(item.youtubeUrl);
        if (ytId) {
            youtubeVideo.src = `https://www.youtube.com/embed/${ytId}?autoplay=0`;
        } else {
            youtubeVideo.src = "";
        }

        // Đổi câu nói Mèo Miu ngẫu nhiên
        const randomMascotQuote = mascotQuotes[Math.floor(Math.random() * mascotQuotes.length)];
        mascotSpeech.textContent = randomMascotQuote;

        redrawCanvas();
    }

    // Phát âm giọng đọc
    document.getElementById("speakBtn").addEventListener("click", () => {
        const item = currentDataSet[currentIndex];
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(item.title);
            utterance.lang = 'vi-VN';
            utterance.rate = 0.85;
            window.speechSynthesis.speak(utterance);
        }
    });

    // AI Chấm điểm + Pháo hoa
    document.getElementById("aiGradeBtn").addEventListener("click", () => {
        const randomFeedback = aiFeedbackList[Math.floor(Math.random() * aiFeedbackList.length)];
        mascotSpeech.textContent = randomFeedback;

        if (typeof confetti === 'function') {
            confetti({
                particleCount: 80,
                spread: 70,
                origin: { y: 0.6 }
            });
        }
    });

    // --- CÀI ĐẶT MỰC BÚT & VẼ CANVAS ---
    const inkBtns = document.querySelectorAll(".ink-btn");
    inkBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            inkBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            selectedInkColor = btn.dataset.color;
        });
    });

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

        const boxSize = 35;
        const rows = Math.floor(canvas.height / boxSize);
        const cols = Math.floor(canvas.width / boxSize);

        // Kẻ khung ô li chuẩn Tiểu Học
        for (let r = 0; r <= rows; r++) {
            let y = r * boxSize;
            for (let sub = 0; sub < 5; sub++) {
                let subY = y + (sub * (boxSize / 5));
                if (subY > canvas.height) break;

                if (sub === 0) {
                    ctx.strokeStyle = "#ff9999";
                    ctx.lineWidth = 1.2;
                } else {
                    ctx.strokeStyle = "#ffcccc";
                    ctx.lineWidth = 0.5;
                }
                ctx.beginPath();
                ctx.moveTo(0, subY);
                ctx.lineTo(canvas.width, subY);
                ctx.stroke();
            }
        }

        for (let c = 0; c <= cols; c++) {
            let x = c * boxSize;
            ctx.strokeStyle = "#ffcccc";
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, canvas.height);
            ctx.stroke();
        }

        // Vẽ chữ / nét mẫu mờ chìm
        const item = currentDataSet[currentIndex];
        ctx.font = "bold 90px 'Comic Neue', sans-serif";
        ctx.fillStyle = "rgba(200, 200, 200, 0.35)";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(item.sampleText || item.letter, canvas.width / 2, canvas.height / 2);
    }

    // Sự kiện vẽ chuột/tay
    let isDrawing = false;
    let lastX = 0, lastY = 0;
    let rainbowHue = 0;

    function getCoords(e) {
        const rect = canvas.getBoundingClientRect();
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;
        return { x: clientX - rect.left, y: clientY - rect.top };
    }

    function startDraw(e) {
        isDrawing = true;
        const coords = getCoords(e);
        lastX = coords.x;
        lastY = coords.y;
    }

    function draw(e) {
        if (!isDrawing) return;
        const coords = getCoords(e);

        if (selectedInkColor === "rainbow") {
            rainbowHue = (rainbowHue + 5) % 360;
            ctx.strokeStyle = `hsl(${rainbowHue}, 100%, 50%)`;
        } else {
            ctx.strokeStyle = selectedInkColor;
        }

        ctx.lineWidth = 4;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";

        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(coords.x, coords.y);
        ctx.stroke();

        lastX = coords.x;
        lastY = coords.y;
    }

    function stopDraw() { isDrawing = false; }

    canvas.addEventListener("mousedown", startDraw);
    canvas.addEventListener("mousemove", draw);
    window.addEventListener("mouseup", stopDraw);

    canvas.addEventListener("touchstart", (e) => { startDraw(e); e.preventDefault(); });
    canvas.addEventListener("touchmove", (e) => { draw(e); e.preventDefault(); });
    window.addEventListener("touchend", stopDraw);

    document.getElementById("clearCanvasBtn").addEventListener("click", redrawCanvas);

    // ================= 5. XỬ LÝ TRẮC NGHIỆM =================
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
            if (typeof confetti === 'function') confetti({ particleCount: 50, spread: 60 });
        } else {
            btnElement.classList.add("incorrect");
            allBtns.forEach(b => {
                const matchedOpt = quizData[currentQuizIndex].options.find(o => o.text === b.textContent);
                if (matchedOpt && matchedOpt.correct) b.classList.add("correct");
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

    // Khởi động ứng dụng
    renderGrid();
    updateWorkspace();
    resizeCanvas();
    initQuiz();
});
