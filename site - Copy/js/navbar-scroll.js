let lastScrollTop = 0;

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    if (window.innerWidth > 992) return;

    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop && scrollTop > 80) {
        navbar.classList.add('nav-hide');
        navbar.classList.remove('nav-show');
    } else {
        navbar.classList.add('nav-show');
        navbar.classList.remove('nav-hide');
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});