// 1. Smooth Scrolling for Navigation Links
document.querySelectorAll('.navbar-nav .nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});

// 2. Navbar Toggle Enhancement (if needed beyond Bootstrap)
const navbarToggle = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('.navbar-collapse');

navbarToggle.addEventListener('click', () => {
    navbarCollapse.classList.toggle('show');
});

// 3. Biography Section Expansion (if you want more control)
const moreButton = document.querySelector('details summary');
moreButton.addEventListener('click', function() {
    const content = this.nextElementSibling;
    content.classList.toggle('expanded'); // Toggle 'expanded' class to control visibility
});

// 4. Social Icons Hover Effect (if you want to add animations or tracking)
const socialIcons = document.querySelectorAll('.social-icon');
socialIcons.forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        icon.style.transform = 'scale(1.1)';
    });
    icon.addEventListener('mouseleave', () => {
        icon.style.transform = 'scale(1)';
    });
});

// 5. Optional: Image Gallery Lightbox (if you add a gallery)
const galleryImages = document.querySelectorAll('.grid-item img');
galleryImages.forEach(img => {
    img.addEventListener('click', function() {
        const lightbox = document.createElement('div');
        lightbox.classList.add('lightbox');
        const fullSizeImage = document.createElement('img');
        fullSizeImage.src = this.src;
        lightbox.appendChild(fullSizeImage);
        document.body.appendChild(lightbox);

        // Close lightbox when clicked
        lightbox.addEventListener('click', () => {
            lightbox.remove();
        });
    });
});
