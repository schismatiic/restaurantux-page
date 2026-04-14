import "./styles.css";
import { home, menu, about, content, renderIndex } from "./home.js";
import { renderMenu } from "./menu.js";
import { renderAbout } from "./about.js";

let page = "home";
home.addEventListener("click", () => {
  if (page !== "home") {
    renderIndex();
  }
  page = "home";
});
menu.addEventListener("click", () => {
  if (page !== "menu") {
    renderMenu();
  }
  page = "menu";
});
about.addEventListener("click", () => {
  if (page !== "about") {
    renderAbout();
  }
  page = "about";
});
renderIndex();
export { page };
