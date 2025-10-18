// ===================================
// 1. التفاعل مع زر "Explore Courses"
// ===================================
// نحصل على زر "Explore Courses" باستخدام مُحدّد الـ class
const exploreButton = document.querySelector('.explore');

// إضافة مُستمع حدث (Event Listener) للنقر
exploreButton.addEventListener('click', function() {
    console.log("تم النقر على زر استكشاف الدورات!");
    // عرض رسالة تنبيه بسيطة
    alert("مرحبًا بك في Coursify! استكشف آلاف الدورات المتاحة.");
});


// ===================================
// 2. التفاعل مع أزرار الـ Header
// ===================================
// نحصل على زر "Search Courses"
const searchButton = document.querySelector('.search-icon');

searchButton.addEventListener('click', function() {
    console.log("تم النقر على زر البحث.");
    // هنا يمكن إضافة منطق لفتح شريط بحث فعلي
    alert("سيتم عرض شريط البحث هنا قريبًا!");
});

// // نحصل على زر "Login"
// const loginButton = document.querySelector('.user-profile-icon');

// loginButton.addEventListener('click', function() {
//     console.log("تم النقر على زر تسجيل الدخول.");
//     // هنا يمكن توجيه المستخدم لصفحة تسجيل الدخول
//     alert("جاري التوجيه إلى صفحة تسجيل الدخول...");
// });


// ===================================
// 3. تأثير بسيط على العنوان الرئيسي (Hero Section)
// ===================================
// نحصل على العنصر <span> الذي يحمل id="classroom"
const classroomSpan = document.getElementById('classroom');

// تغيير نص الـ <span> بعد فترة قصيرة من تحميل الصفحة
setInterval(() => {
    if (classroomSpan){
        var text= classroomSpan.textContent;
        console.log(text);
        switch(text){
            case "Future":
                classroomSpan.textContent = "Classroom";
                console.log("تم تغيير النص في العنوان الرئيسي.");
                break;
            case "Classroom":
                classroomSpan.textContent = "Future";
                console.log("تم تغيير النص في العنوان الرئيسي.");
                break;
            default:
                break;
        }
    }
}, 1500); // سيتم التغيير بعد 1.5 ثانية (1500 مللي ثانية)