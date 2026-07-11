// ======================================
// Raseen Cloud - User Profile Manager
// الإصدار 1.0
// ======================================

const USER_KEY = "fiqh_user";

function saveUser(user) {
    if (!user) return;

    user.lastLogin = new Date().toISOString();

    if (!user.registerDate) {
        user.registerDate = user.lastLogin;
    }

    localStorage.setItem(USER_KEY, JSON.stringify(user));
}

function getUser() {
    try {
        return JSON.parse(localStorage.getItem(USER_KEY));
    } catch {
        return null;
    }
}

function updateLastLogin() {
    const user = getUser();
    if (!user) return;

    user.lastLogin = new Date().toISOString();
    saveUser(user);
}

function clearUser() {
    localStorage.removeItem(USER_KEY);
}
