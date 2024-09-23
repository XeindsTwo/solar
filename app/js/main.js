import {calc} from './calc.js';
import {bindScrollToLinks} from './scroll.js';
import {setupMobileMenu} from './mobileMenu.js';

calc();
bindScrollToLinks();
setupMobileMenu();

new Swiper('.swiper-reviews', {
  allowTouchMove: true,
  grabCursor: true,
  slidesPerView: 'auto',
  speed: 700,
  loop: false,
  freeMode: true,
  breakpoints: {
    992: {
      spaceBetween: 16
    },
    220: {
      spaceBetween: 11
    }
  }
});

Fancybox.bind("[data-fancybox]", {});