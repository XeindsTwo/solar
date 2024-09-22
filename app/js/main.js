import {calc} from './calc.js';
import {bindScrollToLinks} from './scroll.js';

calc();
bindScrollToLinks();

new Swiper('.swiper-reviews', {
  allowTouchMove: true,
  grabCursor: true,
  slidesPerView: 'auto',
  spaceBetween: 16,
  speed: 700,
  loop: false,
  freeMode: true,
});

Fancybox.bind("[data-fancybox]", {});