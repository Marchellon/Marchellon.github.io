document.addEventListener('DOMContentLoaded', function() {
    
    const hamburger = document.querySelector('.hamburger-icon');
    const nav = document.querySelector('header nav');
    const navLinks = document.querySelectorAll('header nav a');

    hamburger.addEventListener('click', function() {
        nav.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function() {

            if (link.getAttribute('href') !== '#contact') {

                document.querySelectorAll('.section').forEach(section => section.classList.remove('flash'));
                
                const targetId = link.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);
                if (targetSection) {
                    targetSection.classList.add('flash');
                }
            }

            nav.classList.remove('active');
        });
    });
});
