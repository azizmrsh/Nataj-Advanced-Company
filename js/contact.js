// Contact form validation and submission
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        // Form validation
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');

            // Simple validation
            let isValid = true;

            if (!nameInput.value.trim()) {
                showError(nameInput, 'يرجى إدخال الاسم');
                isValid = false;
            } else {
                removeError(nameInput);
            }

            if (!emailInput.value.trim()) {
                showError(emailInput, 'يرجى إدخال البريد الإلكتروني');
                isValid = false;
            } else if (!isValidEmail(emailInput.value)) {
                showError(emailInput, 'يرجى إدخال بريد إلكتروني صحيح');
                isValid = false;
            } else {
                removeError(emailInput);
            }

            if (!messageInput.value.trim()) {
                showError(messageInput, 'يرجى إدخال الرسالة');
                isValid = false;
            } else {
                removeError(messageInput);
            }

            if (isValid) {
                // Show loading
                const submitBtn = contactForm.querySelector('.submit-btn');
                const originalText = submitBtn.textContent;
                submitBtn.textContent = 'جاري الإرسال...';
                submitBtn.disabled = true;

                // Simulate form submission (replace with actual form submission)
                setTimeout(function () {
                    // Show success message
                    contactForm.innerHTML = '<div class="success-message fade-in-up">' +
                        '<i class="fas fa-check-circle"></i>' +
                        '<h3>تم إرسال رسالتك بنجاح!</h3>' +
                        '<p>سنقوم بالرد عليك في أقرب وقت ممكن.</p>' +
                        '</div>';

                    // Reset form after success (if needed)
                    // contactForm.reset();
                    // submitBtn.textContent = originalText;
                    // submitBtn.disabled = false;
                }, 2000);
            }
        });
    }

    // Helper functions
    function showError(input, message) {
        const formGroup = input.parentElement;
        const errorElement = formGroup.querySelector('.error-message') || document.createElement('div');

        errorElement.className = 'error-message';
        errorElement.textContent = message;

        if (!formGroup.querySelector('.error-message')) {
            formGroup.appendChild(errorElement);
        }

        formGroup.className = 'form-group error';
    }

    function removeError(input) {
        const formGroup = input.parentElement;
        const errorElement = formGroup.querySelector('.error-message');

        if (errorElement) {
            formGroup.removeChild(errorElement);
        }

        formGroup.className = 'form-group';
    }

    function isValidEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
});

// English contact form
document.addEventListener('DOMContentLoaded', function () {
    const contactFormEn = document.getElementById('contact-form-en');

    if (contactFormEn) {
        // Form validation
        contactFormEn.addEventListener('submit', function (e) {
            e.preventDefault();

            const nameInput = document.getElementById('name-en');
            const emailInput = document.getElementById('email-en');
            const messageInput = document.getElementById('message-en');

            // Simple validation
            let isValid = true;

            if (!nameInput.value.trim()) {
                showError(nameInput, 'Please enter your name');
                isValid = false;
            } else {
                removeError(nameInput);
            }

            if (!emailInput.value.trim()) {
                showError(emailInput, 'Please enter your email');
                isValid = false;
            } else if (!isValidEmail(emailInput.value)) {
                showError(emailInput, 'Please enter a valid email');
                isValid = false;
            } else {
                removeError(emailInput);
            }

            if (!messageInput.value.trim()) {
                showError(messageInput, 'Please enter your message');
                isValid = false;
            } else {
                removeError(messageInput);
            }

            if (isValid) {
                // Show loading
                const submitBtn = contactFormEn.querySelector('.submit-btn');
                const originalText = submitBtn.textContent;
                submitBtn.textContent = 'Sending...';
                submitBtn.disabled = true;

                // Simulate form submission (replace with actual form submission)
                setTimeout(function () {
                    // Show success message
                    contactFormEn.innerHTML = '<div class="success-message fade-in-up">' +
                        '<i class="fas fa-check-circle"></i>' +
                        '<h3>Message Sent Successfully!</h3>' +
                        '<p>We will get back to you as soon as possible.</p>' +
                        '</div>';
                }, 2000);
            }
        });
    }

    // Helper functions
    function showError(input, message) {
        const formGroup = input.parentElement;
        const errorElement = formGroup.querySelector('.error-message') || document.createElement('div');

        errorElement.className = 'error-message';
        errorElement.textContent = message;

        if (!formGroup.querySelector('.error-message')) {
            formGroup.appendChild(errorElement);
        }

        formGroup.className = 'form-group error';
    }

    function removeError(input) {
        const formGroup = input.parentElement;
        const errorElement = formGroup.querySelector('.error-message');

        if (errorElement) {
            formGroup.removeChild(errorElement);
        }

        formGroup.className = 'form-group';
    }

    function isValidEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
});
