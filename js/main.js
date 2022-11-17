const header = document.querySelector("header");
const menuBtn = document.querySelector("#menu");
const sticky = header.offsetTop;
const monthlySub = document.querySelector("monthly");
const yearlySub = document.querySelector("yearly");

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
  monthlySub.classList.add("bold");
});
