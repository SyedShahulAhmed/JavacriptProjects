const menu= document.getElementById('menu-toggle');
const ulLinks = document.querySelector('.ul-links');

menu.addEventListener('click', () => {
    ulLinks.classList.toggle('active');
});
