const dropdownMenu = document.querySelector('#hamburgerMenu');
const menu = document.querySelector('.menu');

dropdownMenu.addEventListener('click', () => {
    menu.classList.toggle('dropdown');
})