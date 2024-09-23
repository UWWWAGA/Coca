/* eslint-disable prettier/prettier */
import '/scss/pricing.scss';
// components
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { useHeader } from './components/header.js';
import { usePriceSwitcher } from './components/pricing/priceSwitcher.js';
import { useAccordionFooter } from './components/footer.js';

useTheme();
useBurger();
useHeader();
usePriceSwitcher();
useAccordionFooter();
