const header = document.querySelector("header");
const menuBtn = document.querySelector("#menu");
const sticky = header.offsetTop;

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
