const menu = document.querySelector('#mobile-menu');
const menuLinls = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinls.classList.toggle('active');
});
    
