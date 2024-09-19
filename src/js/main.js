import '../assets/scss/main.scss';

// components
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import {
  useInsightSlider,
  useTestimonialsSlider,
} from './components/home/slider.js';

useTheme();
useBurger();
useInsightSlider();
useTestimonialsSlider();

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
