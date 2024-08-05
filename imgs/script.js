document.addEventListener('DOMContentLoaded', function() {
    
    const hamburger = document.querySelector('.hamburger-icon');
    const nav = document.querySelector('header nav');
    const navLinks = document.querySelectorAll('header nav a');

    hamburger.addEventListener('click', function() {
        nav.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            nav.classList.remove('active');
        });
    });
});
