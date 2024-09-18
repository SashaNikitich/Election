document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;

    menuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('show');
        menuBtn.classList.toggle('toggle');
        body.classList.toggle('menu-open');
    });

    // Закривати меню при кліку на посилання
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('show');
            menuBtn.classList.remove('toggle');
            body.classList.remove('menu-open');
        });
    });

    // Закривати меню при кліку поза ним
    document.addEventListener('click', function(event) {
        if (!navLinks.contains(event.target) && !menuBtn.contains(event.target)) {
            navLinks.classList.remove('show');
            menuBtn.classList.remove('toggle');
            body.classList.remove('menu-open');
        }
    });
});