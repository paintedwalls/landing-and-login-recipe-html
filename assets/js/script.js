document.addEventListener('scroll', () => {
  const navbar = document.querySelector('nav');

  if (window.scrollY > 0) {
    navbar.classList.add('navbar-scroll');
  } else {
    navbar.classList.remove('navbar-scroll');
  }
});

const humbergerMenu = document.getElementById('humberger-menu');

const navbarLeft = document.querySelector('.navbar-left');
const navbarRight = document.querySelector('.navbar-right');

humbergerMenu.addEventListener('click', () => {
  navbarLeft.classList.toggle('slide-navbar');
  navbarRight.classList.toggle('slide-navbar');
});
