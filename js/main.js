const header = document.querySelector("header");
const menuBtn = document.querySelector("#menu");
const sticky = header.offsetTop;
const monthlySub = document.querySelector("monthly");
const yearlySub = document.querySelector("yearly");
const priceNum = document.querySelector("priceNum");
const subCount = priceNum.length;

menuBtn.addEventListener("click", () => {
  header.classList.toggle("open");
});

window.onscroll = () => {
  stickyHeader();
};

const stickyHeader = () => {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky-bg");
  } else {
    header.classList.remove("sticky-bg");
  }
};

monthlySub.addEventListener("click", () => {
  if (monthlySub.classList.contains("bold")) {
    for (let i = 0; i < subCount; ++i) {
      const subVal = Number(priceNum[i].innerHTML) * 11;
      priceNum[i].innerHTML = subVal;
    }
  }
});
