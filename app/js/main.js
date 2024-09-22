new Swiper('.swiper-reviews', {
  allowTouchMove: true,
  grabCursor: true,
  slidesPerView: 'auto',
  spaceBetween: 16,
  speed: 700,
  loop: false,
  freeMode: true,
});

const sliderMoney = document.getElementById('slider_money');
const sliderValueMoney = document.getElementById('slider-value-money');

noUiSlider.create(sliderMoney, {
  start: [2300],
  range: {
    'min': [500],
    'max': [100000]
  },
  step: 100,
  tooltips: true,
  connect: [true, false],
  animate: true,
  animationDuration: 500
});

sliderMoney.noUiSlider.on('update', function(values, handle) {
  sliderValueMoney.textContent = Math.round(values[handle]).toLocaleString('en-US').replace(/,/g, ' ');
});

const sliderMounth = document.getElementById('slider_mounth');
const sliderValueMounth = document.getElementById('slider-value-mounth');

noUiSlider.create(sliderMounth, {
  start: [28],
  range: {
    'min': [24],
    'max': [60]
  },
  step: 1,
  tooltips: true,
  connect: [true, false],
  animate: true,
  animationDuration: 500
});

sliderMounth.noUiSlider.on('update', function(values, handle) {
  sliderValueMounth.textContent = Math.round(values[handle]);
});