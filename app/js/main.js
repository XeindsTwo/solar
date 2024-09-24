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

fetch('./js/data.json')
  .then(response => response.json())
  .then(data => {
    insertContent(data);
  })
  .catch(error => console.error('Error loading JSON:', error));

function insertContent(data) {
  const buttons = document.querySelectorAll('[data-btn]');

  buttons.forEach(button => {
    const textNode = button.firstChild;
    if (textNode) {
      textNode.textContent = data.btn;
    }
  });

  const buttonsIcnome = document.querySelectorAll('[data-btn-income]');

  buttonsIcnome.forEach(button => {
    button.textContent = data.btn_income;
  });

  const footerNavLinks = document.querySelectorAll('[data-footer-nav]');
  footerNavLinks.forEach((link, index) => {
    link.textContent = data.footer.nav[index];
  });

  document.querySelector('[data-home-title]').textContent = data.home.title;
  document.querySelector('[data-home-text]').textContent = data.home.info.text;
  document.querySelector('[data-steps-title]').textContent = data.steps.title;
  document.querySelector('[data-steps-number1]').textContent = data.steps.items[0].number;
  document.querySelector('[data-steps-name1]').textContent = data.steps.items[0].name;
  document.querySelector('[data-steps-text1]').textContent = data.steps.items[0].text;
  document.querySelector('[data-steps-number2]').textContent = data.steps.items[1].number;
  document.querySelector('[data-steps-name2]').textContent = data.steps.items[1].name;
  document.querySelector('[data-steps-text2]').textContent = data.steps.items[1].text;
  document.querySelector('[data-steps-number3]').textContent = data.steps.items[2].number;
  document.querySelector('[data-steps-name3]').textContent = data.steps.items[2].name;
  document.querySelector('[data-steps-text3]').textContent = data.steps.items[2].text;

  document.querySelector('[data-indicators-subtitle]').textContent = data.indicators.subtitle;
  document.querySelector('[data-indicators-title]').textContent = data.indicators.title;

  data.indicators.items.forEach((item, index) => {
    document.querySelector(`[data-indicators-name${index + 1}]`).textContent = item.name;
    document.querySelector(`[data-indicators-text${index + 1}]`).textContent = item.text;
    document.querySelector(`[data-indicators-icon${index + 1}]`).src = item.icon;
  });

  document.querySelector('[data-calculator-title]').textContent = data.calculator.title;
  document.querySelector('[data-calculator-subtext]').textContent = data.calculator.subtext;

  document.querySelector('[data-calculator-investment-amount]').textContent = data.calculator.investment_amount;
  document.querySelector('[data-calculator-investment-period]').textContent = data.calculator.investment_period;

  document.querySelector('[data-calculator-end-period]').textContent = data.calculator.income.endPeriod;
  document.querySelector('[data-calculator-daily-income]').textContent = data.calculator.income.dailyIncome;
  document.querySelector('[data-calculator-monthly-income]').textContent = data.calculator.income.monthlyIncome;
  document.querySelector('[data-calculator-yearly-income]').textContent = data.calculator.income.yearlyIncome;

  document.querySelector('[data-guarantees-title]').textContent = data.guarantees.title;

  data.guarantees.items.forEach((item, index) => {
    document.querySelector(`[data-guarantees-name${index + 1}]`).textContent = item.name;
    document.querySelector(`[data-guarantees-text${index + 1}]`).textContent = item.text;
  });

  document.querySelector('[data-guarantees-name3]').textContent = data.guarantees.items[2].name;

  document.querySelector('[data-reviews-title]').textContent = data.reviews.title;
  document.querySelector('[data-reviews-description]').textContent = data.reviews.description;

  const swiperWrapper = document.querySelector('.swiper-wrapper');
  swiperWrapper.innerHTML = '';

  data.reviews.items.forEach(item => {
    const slide = `
            <div class="swiper-slide">
                <div class="reviews__item">
                    <div class="reviews__head">
                        <span class="reviews__name">${item.name}</span>
                        <span class="reviews__exp">${item.exp}</span>
                    </div>
                    <img class="reviews__img" src="images/icons/quote.svg" width="23" height="16" alt="декор иконка">
                    <span class="reviews__title">${item.title}</span>
                    <p class="reviews__description">${item.description}</p>
                    <img class="reviews__img right" src="images/icons/quote.svg" width="23" height="16" alt="декор иконка">
                    <ul class="reviews__turnover">
                        ${item.attachments.map(attachment => `
                            <li class="reviews__attachments">
                                <p class="reviews__sum">${attachment.sum}</p>
                                <p class="reviews__attr">${attachment.attr}</p>
                            </li>
                        `).join('')}
                    </ul>
                </div>
            </div>
        `;
    swiperWrapper.insertAdjacentHTML('beforeend', slide);
  });

  updateHeaderNav(data.header.nav);
  updateMobileNav(data.header.navMobile);
}

function updateHeaderNav(navItems) {
  const navLinks = document.querySelectorAll('[data-header-nav]');
  navLinks.forEach((link, index) => {
    link.textContent = navItems[index] || '';
  });
}

function updateMobileNav(navItems) {
  const mobileNavLinks = document.querySelectorAll('[data-header-nav-mobile]');
  mobileNavLinks.forEach((link, index) => {
    link.textContent = navItems[index] || '';
  });
}