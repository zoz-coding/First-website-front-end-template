// Add this to a <script> tag at the bottom of your HTML
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function(e) {
        // Only apply to internal links
        if (this.hostname === window.location.hostname) {
            e.preventDefault(); // Stop the immediate jump
            let target = this.href;

            // Apply a fade-out class to the body
            document.body.style.opacity = '0';
            document.body.style.transition = 'opacity 0.4s';

            // Wait for the animation to finish, then change page
            setTimeout(() => {
                window.location.href = target;
            }, 400);
        }
    });
});