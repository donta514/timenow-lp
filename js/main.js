const header = document.querySelector("header");
const menuBtn = document.querySelector("#menu");
const sticky = header.offsetTop;
const monthlySub = document.getElementById("monthly");
const yearlySub = document.getElementById("yearly");
const priceNum = document.getElementById("priceNum");
const subCount = priceNum.length;
const toggle = document.getElementById("toggle");

// menuBtn.addEventListener("click", () => {
//   header.classList.toggle("open");
// });

// window.onscroll = () => {
//   stickyHeader();
// };

// const stickyHeader = () => {
//   if (window.pageYOffset > sticky) {
//     header.classList.add("sticky-bg");
//   } else {
//     header.classList.remove("sticky-bg");
//   }
// };

// monthlySub.addEventListener("click", () => {
//   if (monthlySub.classList.contains("bold")) {
//     for (let i = 0; i < subCount; ++i) {
//       const subVal = Number(priceNum[i].innerHTML) * 11;
//       priceNum[i].innerHTML = subVal;
//     }
//   }
// });

// yearlySub.addEventListener("click", () => {
//   monthlySub.classList.remove("bold");
//   yearlySub.style.fontWeight = "bold";
//   const newVal = Number(priceNum.innerHTML) * 11;

// });



// left: calc(100% - 5px);
// transform: translateX(-100%);