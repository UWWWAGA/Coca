import '../assets/scss/main.scss';

// components
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import {
  useInsightSlider,
  useTestimonialsSlider,
  autoParthersSlider,
} from './components/home/slider.js';
import { useFooter } from './components/footer.js';

useTheme();
useBurger();
useInsightSlider();
useTestimonialsSlider();
autoParthersSlider();
useFooter();
