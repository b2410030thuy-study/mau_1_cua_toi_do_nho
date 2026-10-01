let currentRole = 'HS';
let authMode = 'login';
let currentSelectedLetter = 'a';
let currentUserData = null;

function getRegisteredUsers() {
    const saved = localStorage.getItem('app_registered_users');
    return saved ? JSON.parse(saved) : [];
}

function saveRegisteredUsers(usersList) {
    localStorage.setItem('app_registered_users', JSON.stringify(usersList));
}

function switchAuthMode(mode) {
    authMode = mode;
    document.getElementById('tab-login').classList.toggle('active', mode === 'login');
    document.getElementById('tab-register').classList.toggle('active', mode === 'register');

    const fullnameGroup = document.getElementById('group-fullname');
    const submitBtn = document.getElementById('btn-auth-submit');
    const authSubtitle = document.getElementById('auth-subtitle');
    const msgEl = document.getElementById('auth-msg');

    msgEl.classList.add('hidden');

    if (mode === 'register') {
        fullnameGroup.classList.remove('hidden');
        submitBtn.innerText = 'Tạo Tài Khoản Mới ✨';
        authSubtitle.innerText = 'Đăng ký tài khoản để bắt đầu học';
    } else {
        fullnameGroup.classList.add('hidden');
        submitBtn.innerText = 'Đăng Nhập Ngay ✨';
        authSubtitle.innerText = 'Đăng nhập để bắt đầu luyện chữ';
    }
}

function selectRole(role) {
    currentRole = role;
    document.getElementById('btn-role-hs').classList.toggle('active', role === 'HS');
    document.getElementById('btn-role-gv').classList.toggle('active', role === 'GV');
}

function handleAuthSubmit(event) {
    event.preventDefault();

    const usernameVal = document.getElementById('username').value.trim();
    const passwordVal = document.getElementById('password').value.trim();
    const fullnameVal = document.getElementById('fullname').value.trim();
    const msgEl = document.getElementById('auth-msg');

    msgEl.classList.add('hidden');

    const defaultAccounts = USERS[currentRole] || [];
    const registeredAccounts = getRegisteredUsers().filter(u => u.role === currentRole);
    const allAccounts = [...defaultAccounts, ...registeredAccounts];

    if (authMode === 'register') {
        if (!fullnameVal) {
            showAuthMsg('⚠️ Vui lòng nhập Họ và tên!');
            return;
        }

        const isExist = allAccounts.some(u => u.username.toLowerCase() === usernameVal.toLowerCase());
        if (isExist) {
            showAuthMsg('⚠️ Tên tài khoản này đã tồn tại. Vui lòng chọn tên khác!');
            return;
        }

        const newUser = { username: usernameVal, password: passwordVal, name: fullnameVal, role: currentRole };
        const currentUsers = getRegisteredUsers();
        currentUsers.push(newUser);
        saveRegisteredUsers(currentUsers);

        alert('🎉 Đăng ký tài khoản thành công! Bạn có thể đăng nhập ngay.');
        switchAuthMode('login');
        document.getElementById('username').value = usernameVal;
        document.getElementById('password').value = passwordVal;

    } else {
        const foundUser = allAccounts.find(u => u.username.toLowerCase() === usernameVal.toLowerCase() && u.password === passwordVal);

        if (foundUser) {
            currentUserData = { ...foundUser, role: currentRole };

            const savedCustomName = localStorage.getItem(`custom_name_${currentUserData.username}`);
            if (savedCustomName) {
                currentUserData.name = savedCustomName;
            }

            document.getElementById('login-screen').classList.add('hidden');
            document.getElementById('main-screen').classList.remove('hidden');

            document.getElementById('avatar-icon').innerText = currentRole === 'HS' ? '👶' : '👩‍🏫';
            document.getElementById('user-role-tag').innerText = currentRole === 'HS' ? 'Học Sinh' : 'Giáo Viên';
            document.getElementById('user-display-name').innerText = currentUserData.name;

            initAlphabetGrid();
        } else {
            showAuthMsg('⚠️ Sai tài khoản hoặc mật khẩu! Nếu chưa có tài khoản, hãy bấm Đăng Ký nhé.');
        }
    }
}

function showAuthMsg(text) {
    const msgEl = document.getElementById('auth-msg');
    msgEl.innerText = text;
    msgEl.classList.remove('hidden');
}

function logout() {
    document.getElementById('main-screen').classList.add('hidden');
    document.getElementById('login-screen').classList.remove('hidden');
}

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
        localStorage.setItem(`custom_name_${currentUserData.username}`, newName);
        document.getElementById('user-display-name').innerText = newName;
        closeEditNameModal();
    } else {
        alert('Vui lòng nhập tên muốn đổi!');
    }
}

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
        document.getElementById('current-letter-title').innerText = `Bài học chữ ${letterObj.letter.toUpperCase()}`;

        const videoIframe = document.getElementById('letter-video');
        if (videoIframe && letterObj.youtubeId) {
            videoIframe.src = `https://www.youtube.com/embed/${letterObj.youtubeId}?autoplay=1&rel=0`;
        }

        document.getElementById('video-caption').innerText = letterObj.description || 'Theo dõi từng nét bút trên màn hình để luyện viết theo.';
        speakLetter();
    }
}

function speakLetter() {
    if (!currentSelectedLetter) return;
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(currentSelectedLetter);
        utterance.lang = 'vi-VN';
        utterance.rate = 0.85;
        window.speechSynthesis.speak(utterance);
    }
}
