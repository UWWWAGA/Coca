/* eslint-disable no-unused-vars */
import Swiper from 'swiper';
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';

export const useInsightSlider = () => {
  new Swiper('.insight__slider', {
    modules: [Navigation],
    slidesPerView: 'auto',
    spaceBetween: 32,
    loop: true,
    centeredSlides: true,
    navigation: {
      prevEl: '.insight__btn--prev-1',
      nextEl: '.insight__btn--next-1',
    },
    breakpoints: {
      993: {
        centeredSlides: false,
      },
    },
  });
};

export const useTestimonialsSlider = () => {
  new Swiper('.testimonials__slider', {
    modules: [Navigation, EffectFade],
    speed: 500,
    slidesPerView: 'auto',
    spaceBetween: 22,
    loop: true,
    navigation: {
      prevEl: '.testimonials__btn--prev',
      nextEl: '.testimonials__btn--next',
    },
  });
};

export const autoParthersSlider = () => {
  new Swiper('.partners__slider-mobile', {
    modules: [Autoplay],
    slidesPerView: 3,
    spaceBetween: 0,
    loop: true,
    speed: 1000,
    centeredSlides: true,
    autoplay: {
      delay: 500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
  });
};
