import "./styles.css";
import { renderIndex, home__container, homeRendered } from "./home.js";
import { renderMenu, menu__container, menuRendered } from "./menu.js";
import { renderAbout, about__container } from "./about.js";

// ====================== DOM Buttons
const home = document.getElementById("home");
const menu = document.getElementById("menu");
const about = document.getElementById("about");
// ====================== DOM Content
const content = document.getElementById("content");

const unrender = (parent, child) => {
  parent.removeChild(child);
};

let page = "home";
home.addEventListener("click", () => {
  if (page === "menu") {
    unrender(content, menu__container);
  } else if (page === "about") {
    unrender(content, about__container);
  }
  if (page !== "home") {
    page = "home";
    renderIndex();
    console.log(home__container);
  }
});
menu.addEventListener("click", () => {
  if (page === "home") {
    unrender(content, home__container);
  } else if (page === "about") {
    unrender(content, about__container);
  }
  if (page !== "menu") {
    page = "menu";
    renderMenu();
    console.log(menu__container);
  }
});
about.addEventListener("click", () => {
  if (page === "home") {
    unrender(content, home__container);
  } else if (page === "menu") {
    unrender(content, menu__container);
  }
  if (page !== "about") {
    page = "about";
    renderAbout();
    console.log(about__container);
  }
});
renderIndex();
export { page, home, menu, about, content };
