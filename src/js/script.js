// Logic to switch between different color schemes
const colorSwitcherToggler = document.querySelector(".color-switcher-toggler");

colorSwitcherToggler.addEventListener("click", () => {
  document.querySelector(".color-switcher").classList.toggle("open");
});

window.addEventListener("scroll", () => {
  if (document.querySelector(".color-switcher").classList.contains("open")) {
    document.querySelector(".color-switcher").classList.remove("open");
  }
});

const alternateColor = document.querySelectorAll(".alternate-color");

const setActiveColor = (color) => {
  alternateColor.forEach((style) => {
    if (color === style.getAttribute("title")) {
      style.removeAttribute("disabled");
    } else {
      style.setAttribute("disabled", "true");
    }
  });
};

// Logic to switch betwwen dark and light mode
const dayNightToggler = document.querySelector(".day-night");

dayNightToggler.addEventListener("click", () => {
  dayNightToggler.querySelector("i").classList.toggle("fa-sun");
  dayNightToggler.querySelector("i").classList.toggle("fa-moon");
  document.body.classList.toggle("dark");
});

window.addEventListener("load", () => {
  if (document.body.classList.contains("dark")) {
    dayNightToggler.querySelector("i").classList.add("fa-sun");
  } else {
    dayNightToggler.querySelector("i").classList.add("fa-moon");
  }
});

// Typing animation
var typed = new Typed(".typing", {
  strings: ["Web Developer", "Web Designer", "Freelancer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

// Adding active class to the clicked nav item
const navItems = document.querySelectorAll("#nav-list li a");

navItems.forEach((item) => {
  item.addEventListener("click", function () {
    navItems.forEach((nav) => nav.classList.remove("active"));
    this.classList.add("active");
  });
});
