document.addEventListener('DOMContentLoaded', function () {
    // شاشة التحميل
    const preloader = document.getElementById('preloader');

    window.addEventListener('load', function () {
        setTimeout(function () {
            preloader.style.opacity = '0';
            setTimeout(function () {
                preloader.style.display = 'none';
            }, 500);
        }, 1000);
    });

    // تثبيت القائمة العلوية عند التمرير
    window.addEventListener('scroll', function () {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.padding = '10px 0';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.padding = '20px 0';
            header.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        }

        // إظهار زر العودة للأعلى
        const scrollTopBtn = document.getElementById('scroll-top');
        if (scrollTopBtn) {
            if (window.scrollY > 500) {
                scrollTopBtn.classList.add('active');
            } else {
                scrollTopBtn.classList.remove('active');
            }
        }

        // تأثيرات التمرير المتحركة
        const animatedElements = document.querySelectorAll('.service-card, .value-card, .feature-card, .team-card, .cert-detail-card, .location-card');

        animatedElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight - 50) {
                element.classList.add('scrolled');
            }
        });
    });

    // زر العودة للأعلى
    const scrollTopBtn = document.getElementById('scroll-top');
    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', function (e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // قائمة الهاتف المحمول
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    const navLinks = document.querySelectorAll('nav ul li a');

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', function () {
            nav.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });

        // إغلاق القائمة عند النقر على أي رابط
        navLinks.forEach(link => {
            link.addEventListener('click', function () {
                nav.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });

        // إغلاق القائمة عند النقر خارجها
        document.addEventListener('click', function (e) {
            if (nav.classList.contains('active') &&
                !nav.contains(e.target) &&
                e.target !== menuToggle) {
                nav.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });
    }

    // التبويبات (المنتجات)
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    if (tabBtns.length > 0 && tabPanes.length > 0) {
        tabBtns.forEach(tab => {
            tab.addEventListener('click', function () {
                // إزالة الكلاس النشط من جميع التبويبات
                tabBtns.forEach(t => t.classList.remove('active'));

                // إضافة الكلاس النشط للتبويب المحدد
                this.classList.add('active');                // إخفاء جميع المحتويات
                tabPanes.forEach(pane => pane.classList.remove('active'));

                // إظهار المحتوى المرتبط بالتبويب المحدد
                const tabId = this.getAttribute('data-tab');
                const targetPane = document.getElementById(tabId);
                if (targetPane) {
                    targetPane.classList.add('active');
                }
            });
        });
    }

    // التمرير السلس للروابط الداخلية
    const internalLinks = document.querySelectorAll('a[href^="#"]');

    internalLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            if (this.getAttribute('href') !== '#') {
                e.preventDefault();

                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    const headerHeight = document.querySelector('header').offsetHeight;
                    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // إضافة عداد وتعزيز تأثيرات التمرير
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // إضافة تأثيرات للصفحة على التحميل
    const fadeElements = document.querySelectorAll('.fade-in-up');

    fadeElements.forEach(element => {
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, 300);
    });
});
