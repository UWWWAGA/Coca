/* eslint-disable prettier/prettier */
import '/scss/contact.scss';
// components
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { useHeader } from './components/header.js';
import { usePartnersSlider } from './components/slider.js';
import { useAccordionFooter } from './components/footer.js';

useTheme();
useBurger();
useHeader();
usePartnersSlider();
useAccordionFooter();
