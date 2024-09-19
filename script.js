const menuActive = document.querySelector('.menu_active');
const burger = document.querySelector('.burgerButton');
const menuClose = document.querySelector('.menu_close');
function toggleMenu() {
    menuActive.classList.toggle('hidden');
}
burger.addEventListener('click', toggleMenu);
menuClose.addEventListener('click', toggleMenu);