
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('.side-bar').style.display = "none";
});

const btnHamburger = document.querySelector('.mini-menu');
const sideBar = document.querySelector('.side-bar');
const Close = document.getElementById('close');
const btnClose = document.getElementById('btn-close');

btnHamburger.addEventListener('click', () => {
    sideBar.style.display = "flex";
});


btnClose.addEventListener('click', () => {
    sideBar.style.display = "none";
});