// ======================================
// نظام الدخول السري للإدارة
// 5 ضغطات عادية (بدون أي مفتاح) + 2 ضغطات مع Ctrl
// ======================================

console.log("admin-auth.js loaded");

document.addEventListener("DOMContentLoaded", function () {

    console.log("DOM Loaded");

    const trigger = document.getElementById("secretAdminTrigger");

    if (!trigger) {
        console.error("❌ لم يتم العثور على العنصر secretAdminTrigger");
        return;
    }

    console.log("✅ العنصر موجود:", trigger);

    // قراءة القيم المحفوظة
    let clickCount = Number(sessionStorage.getItem("adminClickCount")) || 0;
    let firstClickTime = Number(sessionStorage.getItem("adminFirstClick")) || 0;

    console.log("📊 الحالة الأولية - Count:", clickCount, "FirstTime:", firstClickTime);

    trigger.addEventListener("click", function (e) {

        e.preventDefault();

        const now = Date.now();
        const hasCtrl = e.ctrlKey;

        console.log("🖱️ ضغطة جديدة - Ctrl:", hasCtrl, "الوقت:", now);

        // إعادة العد إذا مر أكثر من 5 ثوانٍ
        if (firstClickTime === 0 || (now - firstClickTime) > 5000) {
            console.log("⏰ انتهى الوقت - إعادة العد");
            clickCount = 0;
            firstClickTime = now;
        }

        // المرحلة 1: الضغطات 1-5 يجب أن تكون عادية (بدون Ctrl)
        if (clickCount < 5) {
            if (hasCtrl) {
                console.log("❌ Ctrl في المرحلة الأولى - إعادة العد");
                clickCount = 0;
                firstClickTime = 0;
                sessionStorage.removeItem("adminClickCount");
                sessionStorage.removeItem("adminFirstClick");
                return;
            }
            console.log("✅ ضغطة عادية مقبولة");
        }
        // المرحلة 2: الضغطات 6-7 يجب أن تكون مع Ctrl
        else if (clickCount >= 5 && clickCount < 7) {
            if (!hasCtrl) {
                console.log("❌ Ctrl مفقود في المرحلة الثانية - إعادة العد");
                clickCount = 0;
                firstClickTime = 0;
                sessionStorage.removeItem("adminClickCount");
                sessionStorage.removeItem("adminFirstClick");
                return;
            }
            console.log("✅ ضغطة Ctrl مقبولة");
        }

        clickCount++;
        firstClickTime = now;

        console.log("📈 العد الآن:", clickCount, "/ 7");

        sessionStorage.setItem("adminClickCount", clickCount);
        sessionStorage.setItem("adminFirstClick", firstClickTime);

        if (clickCount >= 7) {
            console.log("🔓 نجاح! فتح الإدارة...");
            sessionStorage.removeItem("adminClickCount");
            sessionStorage.removeItem("adminFirstClick");
            window.location.href = "raseen-fiqh-admin-2026-X8M4.html";
        }

    });

});