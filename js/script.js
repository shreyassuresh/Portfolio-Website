
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});


const navToggle = document.createElement('button');
navToggle.textContent = 'Menu';
navToggle.classList.add('nav-toggle');
document.querySelector('nav').insertBefore(navToggle, document.querySelector('nav ul'));

navToggle.addEventListener('click', () => {
    const navList = document.querySelector('nav ul');
   // navList.classList.toggle('active');//
});
