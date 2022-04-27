// ================ GRAB ELEMENTS ================

const _ = (selector) => {
  const element = document.querySelector(selector);

  if (element) return element;
  throw new Error(`Make sure that selector exist or is typed correctly`);
};

//================ NAV STYLES ON SCROLL ================

const scrollHeader = () => {
  const headerElement = _("#header");

  if (this.scrollY >= 15) {
    headerElement.classList.add("activated");
  } else {
    headerElement.classList.remove("activated");
  }
};

window.addEventListener("scroll", scrollHeader);

// ================ OPEN MENU AND SEARCH POP-UP ================
const menuToggleIcon = _("#menu-toggle-icon");

const toggleMenu = () => {
  const mobileMenu = _("#menu");

  mobileMenu.classList.toggle("activated");
  menuToggleIcon.classList.toggle("activated");
};

menuToggleIcon.addEventListener("click", toggleMenu);

// ================ OPEN/CLOSE SEARCH FORM POP UP ================
const formOpenBtn = _("#search-icon");
const formCloseBtn = _("#form-close-btn");
const searchFormContainer = _("#search-form-container");

formOpenBtn.addEventListener("click", () => {
  searchFormContainer.classList.add("activated");
});

formCloseBtn.addEventListener("click", () => {
  searchFormContainer.classList.remove("activated");
});

// ================ CLOSE THE SEARCH FORM POP UP ON ESC KEYPRESS ================

window.addEventListener("keyup", (e) => {
  if (e.key === "Escape") {
    searchFormContainer.classList.remove("activated");
  }
});
// ================ SWITCH THEME || ADD TO LOCAL STORAGE ================

const bodyElement = document.body;
const themeToggleBtn = _("#theme-toggle-btn");
const currentTheme = localStorage.getItem("currentTheme");


if (currentTheme) {
  bodyElement.classList.add("light-theme");
}

themeToggleBtn.addEventListener("click", () => {
  bodyElement.classList.toggle("light-theme");

  if (bodyElement.classList.contains("light-theme")) {
    localStorage.setItem("currentTheme", "themeActive");
  } else {
    localStorage.removeItem("currentTheme", "themeActive");
  }
});



// ================ SWIPER ================
