const priceSlider = document.querySelector(".price-slider");

const timeframes = document.querySelectorAll(".timeframe");
const actualPrices = document.querySelectorAll(".actualPrice");
const cardCount = actualPrices.length;

priceSlider.addEventListener("click", () => {
  priceSlider.classList.toggle("yr");

  if (priceSlider.classList.contains("yr")) {
    for (let i = 0; i < cardCount; ++i) {
      const newVal = Number(actualPrices[i].innerHTML) * 11;
      actualPrices[i].innerHTML = newVal;
      timeframes[i].innerHTML = "/yr";
    }
  } else {
    for (let i = 0; i < cardCount; ++i) {
      const newVal = Number(actualPrices[i].innerHTML) / 11;
      actualPrices[i].innerHTML = newVal;
      timeframes[i].innerHTML = "/mo";
    }
  }
});
