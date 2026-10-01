// TRẠNG THÁI KHỞI TẠO
let currentAuthMode = 'login'; // 'login' hoặc 'register'
let selectedRole = 'HS';       // 'HS' hoặc 'GV'
let currentUser = null;
let currentSelectedLetter = 'a';

// KHỞI CHẠY KHI TRANG TẢI XONG
document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

function initApp() {
    // 1. Kiểm tra xem người dùng đã đăng nhập từ trước chưa (lưu trong LocalStorage)
    const savedUser = localStorage.getItem('app_current_user');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        showMainScreen();
    } else {
        showAuthScreen();
    }

    // 2. Render danh sách 29 chữ cái
    renderAlphabetSidebar();
}

// CHUYỂN ĐỔI TAB ĐĂNG NHẬP / ĐĂNG KÝ
function switchAuthTab(mode) {
    currentAuthMode = mode;
    const tabLogin = document.getElementById('tab-login');
    const tabRegister = document.getElementById('tab-register');
    const fullnameGroup = document.getElementById('fullname-group');
    const btnSubmit = document.getElementById('btn-submit');
    const errorBanner = document.getElementById('auth-error');

    errorBanner.classList.add('hidden');

    if (mode === 'login') {
        tabLogin.classList.add('active');
        tabRegister.classList.remove('active');
        fullnameGroup.classList.add('hidden');
        btnSubmit.innerHTML = '🚀 Đăng Nhập Ngay';
    } else {
        tabRegister.classList.add('active');
        tabLogin.classList.remove('active');
        fullnameGroup.classList.remove('hidden');
        btnSubmit.innerHTML = '✨ Tạo Tài Khoản';
    }
}

// CHỌN VAI TRÒ (HỌC SINH / GIÁO VIÊN)
function selectRole(role) {
    selectedRole = role;
    const btnHS = document.getElementById('role-hs');
    const btnGV = document.getElementById('role-gv');

    if (role === 'HS') {
        btnHS.classList.add('active');
        btnGV.classList.remove('active');
    } else {
        btnGV.classList.add('active');
        btnHS.classList.remove('active');
    }
}

// XỬ LÝ KHI BẤM NÚT SUBMIT (ĐĂNG NHẬP / ĐĂNG KÝ)
function handleAuthSubmit(event) {
    event.preventDefault();
    const errorBanner = document.getElementById('auth-error');
    errorBanner.classList.add('hidden');

    const usernameInput = document.getElementById('username').value.trim();
    const passwordInput = document.getElementById('password').value.trim();
    const fullnameInput = document.getElementById('reg-fullname').value.trim();

    if (!usernameInput || !passwordInput) {
        showAuthError('Vui lòng nhập đầy đủ tên đăng nhập và mật khẩu!');
        return;
    }

    // Lấy danh sách tài khoản đã lưu hoặc mặc định từ USERS
    let localUsers = JSON.parse(localStorage.getItem('app_users_data')) || USERS;

    if (currentAuthMode === 'login') {
        // --- XỬ LÝ ĐĂNG NHẬP ---
        const userList = localUsers[selectedRole] || [];
        const foundUser = userList.find(u => u.username === usernameInput && u.password === passwordInput);

        if (foundUser) {
            currentUser = { ...foundUser, role: selectedRole };
            localStorage.setItem('app_current_user', JSON.stringify(currentUser));
            showMainScreen();
        } else {
            showAuthError('Tên đăng nhập hoặc mật khẩu không chính xác!');
        }
    } else {
        // --- XỬ LÝ ĐĂNG KÝ ---
        if (!fullnameInput) {
            showAuthError('Vui lòng nhập Họ và Tên!');
            return;
        }

        if (!localUsers[selectedRole]) {
            localUsers[selectedRole] = [];
        }

        // Kiểm tra xem tên đăng nhập đã tồn tại chưa
        const exists = localUsers[selectedRole].some(u => u.username === usernameInput);
        if (exists) {
            showAuthError('Tên đăng nhập này đã được sử dụng!');
            return;
        }

        // Tạo tài khoản mới
        const newUser = {
            username: usernameInput,
            password: passwordInput,
            name: fullnameInput
        };

        localUsers[selectedRole].push(newUser);
        localStorage.setItem('app_users_data', JSON.stringify(localUsers));

        currentUser = { ...newUser, role: selectedRole };
        localStorage.setItem('app_current_user', JSON.stringify(currentUser));
        showMainScreen();
    }
}

function showAuthError(msg) {
    const errorBanner = document.getElementById('auth-error');
    errorBanner.innerText = msg;
    errorBanner.classList.remove('hidden');
}

// HIỂN THỊ MÀN HÌNH CHÍNH & THÔNG TIN CÁ NHÂN
function showMainScreen() {
    document.getElementById('auth-screen').classList.add('hidden');
    document.getElementById('main-screen').classList.remove('hidden');

    // Cập nhật thông tin User trên Header
    const avatar = currentUser.role === 'GV' ? '👩‍🏫' : '👶';
    const roleText = currentUser.role === 'GV' ? 'Giáo Viên' : 'Học Sinh';

    document.getElementById('user-avatar').innerText = avatar;
    document.getElementById('user-role-badge').innerText = roleText;
    document.getElementById('user-display-name').innerText = currentUser.name;

    // Load chữ cái mặc định (a)
    selectLetter('a');
}

function showAuthScreen() {
    document.getElementById('main-screen').classList.add('hidden');
    document.getElementById('auth-screen').classList.remove('hidden');
}

// BẤM ĐĂNG XUẤT
function handleLogout() {
    localStorage.removeItem('app_current_user');
    currentUser = null;
    showAuthScreen();
}

// RENDER DANH SÁCH 29 CHỮ CÁI BÊN SIDEBAR
function renderAlphabetSidebar() {
    const container = document.getElementById('alphabet-container');
    container.innerHTML = '';

    ALPHABET_DATA.forEach(item => {
        const btn = document.createElement('button');
        btn.className = `letter-btn ${item.letter === currentSelectedLetter ? 'active' : ''}`;
        btn.id = `btn-letter-${item.letter}`;
        btn.innerText = item.letter;
        btn.onclick = () => selectLetter(item.letter);
        container.appendChild(btn);
    });
}

// CHỌN BÀI HỌC THEO CHỮ CÁI
function selectLetter(letter) {
    currentSelectedLetter = letter;

    // Active button được chọn
    document.querySelectorAll('.letter-btn').forEach(btn => btn.classList.remove('active'));
    const selectedBtn = document.getElementById(`btn-letter-${letter}`);
    if (selectedBtn) selectedBtn.classList.add('active');

    // Lấy dữ liệu chữ cái từ ALPHABET_DATA (data.js)
    const letterData = ALPHABET_DATA.find(item => item.letter === letter);
    if (!letterData) return;

    // Cập nhật giao diện bài học
    document.getElementById('current-letter-title').innerText = `Bài học chữ ${letter.toUpperCase()} (${letter})`;
    document.getElementById('letter-description').innerText = letterData.description;

    // Cập nhật Video YouTube iframe
    const player = document.getElementById('youtube-player');
    player.src = `https://www.youtube.com/embed/${letterData.youtubeId}?rel=0&autoplay=0`;
}

// PHÁT ÂM CHỮ CÁI (VOICE SPEECH)
function speakCurrentLetter() {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel(); // Dừng phát âm cũ
        const utterance = new SpeechSynthesisUtterance(`Chữ ${currentSelectedLetter}`);
        utterance.lang = 'vi-VN';
        utterance.rate = 0.8; // Đọc chậm rãi cho bé
        window.speechSynthesis.speak(utterance);
    } else {
        alert('Trình duyệt của bạn không hỗ trợ tính năng phát âm!');
    }
}

// XỬ LÝ ĐỔI TÊN HỌC SINH
function openEditNameModal() {
    document.getElementById('new-display-name').value = currentUser.name;
    document.getElementById('edit-name-modal').classList.remove('hidden');
}

function closeEditNameModal() {
    document.getElementById('edit-name-modal').classList.add('hidden');
}

function saveNewName() {
    const newName = document.getElementById('new-display-name').value.trim();
    if (!newName) return;

    currentUser.name = newName;
    document.getElementById('user-display-name').innerText = newName;

    // Lưu lại thông tin mới vào LocalStorage
    localStorage.setItem('app_current_user', JSON.stringify(currentUser));

    // Cập nhật lại trong danh sách tài khoản chung
    let localUsers = JSON.parse(localStorage.getItem('app_users_data')) || USERS;
    if (localUsers[currentUser.role]) {
        const uObj = localUsers[currentUser.role].find(u => u.username === currentUser.username);
        if (uObj) uObj.name = newName;
        localStorage.setItem('app_users_data', JSON.stringify(localUsers));
    }

    closeEditNameModal();
}
