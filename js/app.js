/* =========================================================
   WEB BÉ TẬP VIẾT HP001 - PHIÊN BẢN MỚI
   ========================================================= */

let currentRole = 'HS';
let currentSelectedLetter = 'a';
let currentUserData = null;

// 1. XỬ LÝ CHUYỂN VAI TRÒ & ĐĂNG NHẬP
function selectRole(role) {
    currentRole = role;
    document.getElementById('btn-role-hs').classList.toggle('active', role === 'HS');
    document.getElementById('btn-role-gv').classList.toggle('active', role === 'GV');
    
    document.getElementById('label-username').innerText = role === 'HS' ? 'Mã số học sinh:' : 'Mã số giáo viên:';
    document.getElementById('username').value = role === 'HS' ? 'HS001' : 'GV001';
}

function handleLogin(event) {
    event.preventDefault();
    const userVal = document.getElementById('username').value.trim();
    const passVal = document.getElementById('password').value.trim();
    const errorEl = document.getElementById('login-error');

    const accountList = USERS[currentRole] || [];
    const foundUser = accountList.find(u => u.username === userVal && u.password === passVal);

    if (foundUser) {
        errorEl.innerText = "";
        currentUserData = { ...foundUser, role: currentRole };

        // Kiểm tra xem người dùng đã từng đổi tên trước đó chưa (trong localStorage)
        const savedCustomName = localStorage.getItem(`custom_name_${currentUserData.username}`);
        if (savedCustomName) {
            currentUserData.name = savedCustomName;
        }

        // Cập nhật giao diện màn hình chính
        document.getElementById('login-screen').classList.add('hidden');
        document.getElementById('main-screen').classList.remove('hidden');
        
        document.getElementById('user-role-badge').innerText = currentRole === 'HS' ? 'Học Sinh' : 'Giáo Viên';
        document.getElementById('user-display-name').innerText = currentUserData.name;
        
        initAlphabetGrid();
    } else {
        errorEl.innerText = "Sai mã số hoặc mật khẩu! Vui lòng thử lại.";
    }
}

function logout() {
    document.getElementById('main-screen').classList.add('hidden');
    document.getElementById('login-screen').classList.remove('hidden');
}

// 2. TÍNH NĂNG ĐỔI TÊN HIỂN THỊ (SỬA LỖI BẠN PHẢN HỒI)
function openEditNameModal() {
    if (!currentUserData) return;
    document.getElementById('new-name-input').value = currentUserData.name;
    document.getElementById('edit-name-modal').classList.remove('hidden');
}

function closeEditNameModal() {
    document.getElementById('edit-name-modal').classList.add('hidden');
}

function saveNewName() {
    const newName = document.getElementById('new-name-input').value.trim();
    if (newName) {
        currentUserData.name = newName;
        // Lưu lại tên mới vào bộ nhớ trình duyệt theo ID người dùng
        localStorage.setItem(`custom_name_${currentUserData.username}`, newName);
        
        // Đổi tên trên giao diện ngay lập tức
        document.getElementById('user-display-name').innerText = newName;
        closeEditNameModal();
        alert("Đã cập nhật tên hiển thị thành công!");
    } else {
        alert("Vui lòng nhập tên hợp lệ!");
    }
}

// 3. HIỂN THỊ CHỮ CÁI VÀ VIDEO
function initAlphabetGrid() {
    const gridContainer = document.getElementById('alphabet-list');
    if (!gridContainer || typeof ALPHABET_DATA === 'undefined') return;

    gridContainer.innerHTML = '';
    ALPHABET_DATA.forEach((item, index) => {
        const btn = document.createElement('button');
        btn.className = 'letter-btn';
        btn.innerText = item.letter;
        btn.onclick = () => selectLetter(item.letter);
        gridContainer.appendChild(btn);

        if (index === 0) selectLetter(item.letter);
    });
}

function selectLetter(letterChar) {
    currentSelectedLetter = letterChar;

    document.querySelectorAll('.letter-btn').forEach(btn => {
        btn.classList.toggle('active', btn.innerText === letterChar);
    });

    const letterObj = ALPHABET_DATA.find(item => item.letter === letterChar);

    if (letterObj) {
        document.getElementById('current-letter-title').innerText = `Bài học chữ ${letterObj.letter}`;
        
        const videoIframe = document.getElementById('letter-video');
        if (videoIframe && letterObj.youtubeId) {
            videoIframe.src = `https://www.youtube.com/embed/${letterObj.youtubeId}?autoplay=1&rel=0`;
        }

        document.getElementById('video-caption').innerText = `${letterObj.description || 'Hướng dẫn nét vẽ.'} Em hãy xem kỹ video nhé!`;
        speakLetter();
    }
}

function speakLetter() {
    if (!currentSelectedLetter) return;
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(currentSelectedLetter);
        utterance.lang = 'vi-VN';
        utterance.rate = 0.8;
        window.speechSynthesis.speak(utterance);
    }
}
