let currentUser = JSON.parse(localStorage.getItem("currentUser")) || null;
let currentRole = "HS";
let authTab = "login";
let currentTabType = "alphabet"; // 'alphabet' hoặc 'strokes'
let selectedItemId = "a";

const LETTER_ICONS = {
    "a": "🍎", "aw": "🍇", "aa": "🍋", "b": "🐮", "c": "🐶", "d": "🐬", "dd": "🐥",
    "e": "🐘", "ee": "🐸", "g": "🐔", "h": "🐯", "i": "🍦", "k": "🍬", "l": "🍃",
    "m": "🐱", "n": "🐝", "o": "🎈", "oo": "☂️", "ow": "🍓", "p": "🐼", "q": "🎁",
    "r": "🤖", "s": "🦁", "t": "🚀", "u": "⛵", "uw": "🦒", "v": "🎻", "x": "🚗", "y": "🍭"
};

window.addEventListener("DOMContentLoaded", () => {
    checkAuthState();
});

function checkAuthState() {
    const authScreen = document.getElementById("auth-screen");
    const appScreen = document.getElementById("app-screen");

    if (currentUser) {
        authScreen.classList.add("hidden");
        appScreen.classList.remove("hidden");
        updateUserInfoUI();
        renderNav();
        renderContent("study");
    } else {
        authScreen.classList.remove("hidden");
        appScreen.classList.add("hidden");
    }
}

function setRole(role) {
    currentRole = role;
    document.getElementById("role-hs").classList.toggle("active", role === "HS");
    document.getElementById("role-gv").classList.toggle("active", role === "GV");
}

function switchAuthTab(tab) {
    authTab = tab;
    document.getElementById("tab-login").classList.toggle("active", tab === "login");
    document.getElementById("tab-register").classList.toggle("active", tab === "register");
    
    const regGroup = document.getElementById("register-fullname-group");
    const btnSubmit = document.getElementById("btn-auth-submit");

    if (tab === "register") {
        regGroup.classList.remove("hidden");
        btnSubmit.innerText = "✨ Đăng Ký Tài Khoản";
    } else {
        regGroup.classList.add("hidden");
        btnSubmit.innerText = "🚀 BẮT ĐẦU VUI HỌC";
    }
}

function handleAuth(event) {
    event.preventDefault();
    const username = document.getElementById("auth-username").value.trim();
    const password = document.getElementById("auth-password").value.trim();
    const fullname = document.getElementById("auth-fullname").value.trim();

    if (!username || !password) return alert("Vui lòng điền đầy đủ thông tin!");

    currentUser = {
        username: username,
        fullname: fullname || username,
        role: currentRole,
        avatar: currentRole === "GV" ? "👩‍🏫" : "🐱"
    };
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
    checkAuthState();
}

function logout() {
    localStorage.removeItem("currentUser");
    currentUser = null;
    checkAuthState();
}

function updateUserInfoUI() {
    if (!currentUser) return;
    document.getElementById("user-name-display").innerText = currentUser.fullname;
    document.getElementById("user-avatar-display").innerText = currentUser.avatar || "🐱";
    document.getElementById("user-role-tag").innerText = currentUser.role === "GV" ? "👩‍🏫 Giáo viên" : "👶 Học sinh";
}

function renderNav() {
    const navContainer = document.getElementById("main-nav-container");
    if (currentUser.role === "HS") {
        navContainer.innerHTML = `
            <button class="nav-btn active" onclick="switchTab(this, 'study')">📚 Bài Học</button>
            <button class="nav-btn" onclick="switchTab(this, 'homework')">📝 Bài Tập</button>
        `;
    } else {
        navContainer.innerHTML = `
            <button class="nav-btn active" onclick="switchTab(this, 'study')">📚 Bài Học</button>
            <button class="nav-btn" onclick="switchTab(this, 'manage')">👩‍🏫 Quản Lý Bài Tập</button>
        `;
    }
}

function switchTab(btn, tabName) {
    document.querySelectorAll(".nav-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderContent(tabName);
}

function renderContent(tabName) {
    const contentArea = document.getElementById("content-area");

    if (tabName === "study") {
        contentArea.innerHTML = `
            <div class="workspace-grid">
                <aside class="alphabet-sidebar">
                    <div style="display:flex; gap:8px; margin-bottom:15px;">
                        <button id="btn-type-alpha" class="role-btn active" style="font-size:14px; padding:8px;" onclick="switchStudyType('alphabet')">🔤 29 Chữ Cái</button>
                        <button id="btn-type-stroke" class="role-btn" style="font-size:14px; padding:8px;" onclick="switchStudyType('strokes')">✏️ 14 Nét Cơ Bản</button>
                    </div>
                    <div class="alphabet-grid" id="alphabet-grid"></div>
                </aside>
                <section class="lesson-card" id="lesson-detail-area"></section>
            </div>
        `;
        renderSidebarGrid();
        renderLessonDetail();
    } else if (tabName === "homework") {
        contentArea.innerHTML = `
            <div class="lesson-card">
                <h2>📝 Bài Tập Về Nhà Của Bé</h2>
                <p style="margin-top:10px; font-weight:700;">Hãy hoàn thành các bài tập dưới đây nhé!</p>
                <div style="margin-top:15px; background:#FEF3C7; padding:15px; border-radius:15px; border:2px dashed #F59E0B;">
                    📌 <strong>Bài 1:</strong> Xem video và luyện viết 14 nét cơ bản vào vở ô ly.
                </div>
            </div>
        `;
    } else if (tabName === "manage") {
        contentArea.innerHTML = `
            <div class="lesson-card">
                <h2>👩‍🏫 Bảng Quản Lý Dành Cho Giáo Viên</h2>
                <p style="margin-top:10px; font-weight:700;">Cô có thể giao thêm bài tập cho các bé tại đây.</p>
            </div>
        `;
    }
}

function switchStudyType(type) {
    currentTabType = type;
    document.getElementById("btn-type-alpha").classList.toggle("active", type === "alphabet");
    document.getElementById("btn-type-stroke").classList.toggle("active", type === "strokes");
    selectedItemId = type === "alphabet" ? "a" : "sothang";
    renderSidebarGrid();
    renderLessonDetail();
}

function renderSidebarGrid() {
    const grid = document.getElementById("alphabet-grid");
    if (!grid) return;

    const dataset = currentTabType === "alphabet" ? ALPHABET_DATA : BASIC_STROKES_DATA;

    grid.innerHTML = dataset.map(item => {
        const icon = currentTabType === "alphabet" ? (LETTER_ICONS[item.id] || "✏️") : "✍️";
        const displayText = currentTabType === "alphabet" ? `${item.upper} ${item.lower}` : item.char;
        const isActive = item.id === selectedItemId ? "active" : "";
        return `
            <button class="letter-btn ${isActive}" onclick="selectItem('${item.id}')">
                <span class="char">${displayText}</span>
                <span class="sub-icon">${icon}</span>
            </button>
        `;
    }).join("");
}

function selectItem(id) {
    selectedItemId = id;
    renderSidebarGrid();
    renderLessonDetail();
}

function renderLessonDetail() {
    const detailArea = document.getElementById("lesson-detail-area");
    if (!detailArea) return;

    const dataset = currentTabType === "alphabet" ? ALPHABET_DATA : BASIC_STROKES_DATA;
    const lesson = dataset.find(item => item.id === selectedItemId) || dataset[0];
    const icon = currentTabType === "alphabet" ? (LETTER_ICONS[lesson.id] || "✏️") : "✍️";

    detailArea.innerHTML = `
        <h2 style="font-size:26px; color:#FF477E; font-weight:900;">
            ${icon} Bài Học: ${lesson.name} ${lesson.upper ? `(${lesson.upper} -${lesson.lower})` : ''}
        </h2>

        <div class="tv-container">
            <div class="video-frame-container">
                <iframe 
                    src="https://www.youtube-nocookie.com/embed/${lesson.youtubeId}?rel=0" 
                    title="${lesson.name}"
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            </div>
        </div>

        <div class="lesson-guide">
            <div class="guide-title">
                <span>✏️</span> Hướng dẫn nét viết:
            </div>
            <div class="guide-text">${lesson.description}</div>
        </div>
    `;
}

function openEditProfileModal() {
    if (!currentUser) return;
    document.getElementById("edit-name-input").value = currentUser.fullname;
    document.getElementById("edit-avatar-select").value = currentUser.avatar || "🐱";
    document.getElementById("profile-modal").classList.remove("hidden");
}

function closeEditProfileModal() {
    document.getElementById("profile-modal").classList.add("hidden");
}

function saveProfile() {
    const newName = document.getElementById("edit-name-input").value.trim();
    const newAvatar = document.getElementById("edit-avatar-select").value;

    if (newName) {
        currentUser.fullname = newName;
        currentUser.avatar = newAvatar;
        localStorage.setItem("currentUser", JSON.stringify(currentUser));
        updateUserInfoUI();
        closeEditProfileModal();
    }
}
