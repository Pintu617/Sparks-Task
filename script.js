const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// let donatebtn = document.queryselector('button');
// donatebtn.addEventListener('click',GotoURl);

// function GotoURl(){
//  donatebtn.toggle
// }