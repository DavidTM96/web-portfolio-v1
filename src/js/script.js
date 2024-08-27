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
const typed = new Typed(".typing", {
  strings: ["Web Developer", "Web Designer", "Freelancer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

// Logic to add active class to the clicked nav item
const handleNavItemClick = (event) => {
  disableObserver = true;
  navItems.forEach((nav) => nav.classList.remove("active"));
  event.currentTarget.classList.add("active");

  setTimeout(() => {
    disableObserver = false;
  }, 1000);
};

const navItems = document.querySelectorAll("#nav-list li a");
navItems.forEach((item) => {
  item.addEventListener("click", handleNavItemClick);
});

// Function to handle section intersection
const handleIntersection = (entries) => {
  if (disableObserver) return;

  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const targetId = entry.target.getAttribute("id");
      navItems.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").substring(1) === targetId) {
          link.classList.add("active");
        }
      });
    }
  });
};

// Adding active class to the nav item when scrolling into view
const sections = document.querySelectorAll(".section");
const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.7, // 70% of the section is visible
};

// Disable the observer temporarily when a nav item is clicked
let disableObserver = false;
const observer = new IntersectionObserver(handleIntersection, observerOptions);
sections.forEach((section) => observer.observe(section));
