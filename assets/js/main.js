// Grab elements
const _ = (selector) => {
  const element = document.querySelector(selector);

  if (element) return element;
  throw new Error(`Make sure that selector exist or is typed correctly`);
};

console.log(_(".navbar"));
//Nav styles on scroll
const scrollHeader = () => {
  const headerElement = _("#header");

  if (this.scrollY >= 15) {
    headerElement.classList.add("activated");
  } else {
    headerElement.classList.remove("activated");
  }
};

window.addEventListener("scroll", scrollHeader);

// Open menu & search pop-up
const menuToggleIcon = _("#menu-toggle-icon");

const toggleMenu = () => {
  const mobileMenu = _("#menu");

  mobileMenu.classList.toggle("activated");
  menuToggleIcon.classList.toggle("activated");
};

menuToggleIcon.addEventListener("click", toggleMenu);

// Open/Close search form popup

// -- Close the search form popup on ESC keypress

// Switch theme/add to local storage
const bodyElement = document.body;
const themeToggleBtn = _("#theme-toggle-btn");
const currentTheme = localStorage.getItem("currentTheme");

if (currentTheme) {
  bodyElement.classList.add('light-theme')
}

themeToggleBtn.addEventListener("click", () => {
  bodyElement.classList.toggle("light-theme");

  if (bodyElement.classList.contains("light-theme")) {
    localStorage.setItem("currentTheme", "themeActive");
  } else {
    localStorage.removeItem("currentTheme", "themeActive");
  }
});

console.log(currentTheme);

// Swiper
