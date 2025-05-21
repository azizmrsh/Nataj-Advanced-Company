// حل احتياطي للتأكد من تحميل الموقع حتى في حالة وجود أخطاء في السكريبتات الأخرى
window.addEventListener('DOMContentLoaded', function () {
    // التأكد من إزالة شاشة التحميل بعد 8 ثوانٍ كحد أقصى
    setTimeout(function () {
        const preloader = document.getElementById('preloader');
        if (preloader && preloader.style.display !== 'none') {
            preloader.style.opacity = '0';
            preloader.style.display = 'none';
            console.log('تم تنفيذ الحل الاحتياطي لإزالة شاشة التحميل');
        }
    }, 8000);

    // التأكد من تفعيل السكريبتات الأساسية
    setTimeout(function () {
        // منع تجميد الصفحة بسبب أي أخطاء محتملة
        try {
            // التأكد من عمل التبويبات
            const tabBtns = document.querySelectorAll('.tab-btn');
            if (tabBtns.length > 0) {
                tabBtns.forEach(btn => {
                    btn.addEventListener('click', function () {
                        const tabId = this.getAttribute('data-tab');
                        document.querySelectorAll('.tab-btn').forEach(t => t.classList.remove('active'));
                        this.classList.add('active');
                        document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
                        const targetPane = document.getElementById(tabId);
                        if (targetPane) targetPane.classList.add('active');
                    });
                });
            }
        } catch (e) {
            console.error('خطأ في تفعيل التبويبات:', e);
        }
    }, 1000);
});
