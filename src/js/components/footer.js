/* eslint-disable prettier/prettier */
export const useFooter = () => {
  const accordionLists = document.querySelectorAll('.footer__list-mobil');

  accordionLists.forEach((el) => {
    el.addEventListener('click', (e) => {
      const accordionList = e.currentTarget;
      const accordionOpenItem = accordionList.querySelector(
        '.accordion-list__item--opened',
      );
      const accordionOpenContent = accordionList.querySelector(
        '.accordion-list__item--opened .footer__sublist',
      );

      const accordionControl = e.target.closest('.footer__list-mobil-control');
      if (!accordionControl) return;
      e.preventDefault();
      const accordionItem = accordionControl.parentElement;
      const accordionContent = accordionControl.nextElementSibling;

      if (accordionOpenItem && accordionItem != accordionOpenItem) {
        accordionOpenItem.classList.remove('accordion-list__item--opened');
        accordionOpenContent.style.maxHeight = null;
      }

      accordionItem.classList.toggle('accordion-list__item--opened');

      if (accordionItem.classList.contains('accordion-list__item--opened')) {
        accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
      } else {
        accordionContent.style.maxHeight = null;
      }
    });
  });
};
