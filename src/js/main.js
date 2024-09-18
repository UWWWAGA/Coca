/* eslint-disable prettier/prettier */
import '../assets/scss/main.scss';

// components
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';

useTheme();
useBurger();

const header = document.querySelector('.header');
const headerHeight = header.offsetHeight;
let prevScrollPos = window.pageYOffset;

window.addEventListener('scroll', () => {
  const currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos && currentScrollPos > headerHeight) {
    header.classList.add('fixed');
  } else {
    header.classList.remove('fixed');
  }
  prevScrollPos = currentScrollPos;
});



