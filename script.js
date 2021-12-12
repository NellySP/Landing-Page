// burger

// function MyFunction() {
//   var x = document.getElementById("myLinks");
//   if (x.style.display === "block") {
//     x.style.display = "none";
//   } else {
//     x.style.display = "block";
//   }
// }

// let menuButton = document.getElementById("nav-toggle");
// menuButton.addEventListener("click", function (e) {
//   MyFunction();
// });

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}
navLink.forEach((n) => n.addEventListener("click", closeMenu));
hamburger.addEventListener("click", mobileMenu);
