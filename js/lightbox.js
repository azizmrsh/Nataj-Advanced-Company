// Simple Lightbox functionality for image viewing
document.addEventListener('DOMContentLoaded', function () {
    // Create lightbox container
    const lightboxContainer = document.createElement('div');
    lightboxContainer.className = 'lightbox';
    lightboxContainer.innerHTML = `
        <div class="lightbox-content">
            <span class="close-lightbox">&times;</span>
            <img class="lightbox-image" alt="Image Preview">
            <div class="lightbox-caption"></div>
        </div>
    `;
    document.body.appendChild(lightboxContainer);

    // Get lightbox elements
    const lightbox = document.querySelector('.lightbox');
    const lightboxImg = document.querySelector('.lightbox-image');
    const lightboxCaption = document.querySelector('.lightbox-caption');
    const closeLightbox = document.querySelector('.close-lightbox');

    // Add click event to lightbox images
    const lightboxImages = document.querySelectorAll('.lightbox-img');

    if (lightboxImages.length > 0) {
        lightboxImages.forEach(image => {
            image.style.cursor = 'pointer';

            image.addEventListener('click', function () {
                lightbox.style.display = 'flex';
                lightboxImg.src = this.src;
                lightboxCaption.textContent = this.alt;

                // Disable scroll on body
                document.body.style.overflow = 'hidden';

                // Fade in effect
                setTimeout(() => {
                    lightbox.style.opacity = '1';
                }, 10);
            });
        });
    }

    // Close lightbox when clicking X
    closeLightbox.addEventListener('click', function () {
        closeLightboxFunc();
    });

    // Close lightbox when clicking outside the image
    lightbox.addEventListener('click', function (e) {
        if (e.target === this) {
            closeLightboxFunc();
        }
    });

    // Close lightbox with ESC key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && lightbox.style.display === 'flex') {
            closeLightboxFunc();
        }
    });

    // Function to close lightbox
    function closeLightboxFunc() {
        lightbox.style.opacity = '0';
        setTimeout(() => {
            lightbox.style.display = 'none';
            // Re-enable scrolling
            document.body.style.overflow = '';
        }, 300);
    }
});
