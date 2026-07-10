// ===============================
// نظام الدخول السري للإدارة
// الإصدار الأول
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    const logo = document.getElementById("secretAdminTrigger");
    const overlay = document.getElementById("adminLoginOverlay");

    if (!logo || !overlay) return;

    let clickCount = 0;
    let firstClickTime = 0;

    logo.addEventListener("click", function (e) {

        const now = Date.now();

        if (firstClickTime === 0 || (now - firstClickTime) > 5000) {
            clickCount = 1;
            firstClickTime = now;
        } else {
            clickCount++;
        }

        if (clickCount >= 7) {

            e.preventDefault();

            clickCount = 0;
            firstClickTime = 0;

            overlay.style.display = "flex";
        }

    });

});
