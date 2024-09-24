export function calc() {
  const annualRate = 0.47;

  const sliderMoney = document.getElementById('slider_money');
  const sliderValueMoney = document.getElementById('slider-value-money');
  const sliderMounth = document.getElementById('slider_mounth');
  const sliderValueMounth = document.getElementById('slider-value-mounth');

  noUiSlider.create(sliderMoney, {
    start: [5000],
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

  function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  }

  function updateResults() {
    const amount = Math.round(sliderMoney.noUiSlider.get());
    const months = Math.round(sliderMounth.noUiSlider.get());

    const yearlyProfit = amount * annualRate;
    const dailyProfit = yearlyProfit / 365;
    const monthlyProfit = yearlyProfit / 12;
    const totalReturn = amount + yearlyProfit * (months / 12);

    document.getElementById('calc_day').textContent = `$${formatNumber(Math.round(dailyProfit))}`;
    document.getElementById('calc_mounth').textContent = `$${formatNumber(Math.round(monthlyProfit))}`;
    document.getElementById('calc_year').textContent = `$${formatNumber(Math.round(yearlyProfit))}`;
    document.getElementById('calc_end_period').textContent = `$${formatNumber(Math.round(totalReturn))}`;
  }

  sliderMoney.noUiSlider.on('update', function() {
    sliderValueMoney.textContent = Math.round(sliderMoney.noUiSlider.get()).toLocaleString('en-US').replace(/,/g, ' ');
    updateResults();
  });

  sliderMounth.noUiSlider.on('update', function() {
    sliderValueMounth.textContent = Math.round(sliderMounth.noUiSlider.get());
    updateResults();
  });

  updateResults();
}