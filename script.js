const navbar = document.querySelector(".navbar");
const topofnav = navbar.offsetTop;
const logo = document.querySelector(".logo");
console.log(navbar.offsetTop);
function fixedcontent() {
  if (window.scrollY >= topofnav) {
    navbar.classList.add("fixed");
    logo.classList.add("logo2");
  }
  if (window.scrollY < topofnav) {
    navbar.classList.remove("fixed");
    logo.classList.remove("logo2");
  }
}
document.addEventListener("scroll", fixedcontent);
