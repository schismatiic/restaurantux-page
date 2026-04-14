import "./styles.css";
import { page, home, menu, about, content } from "./index.js";
const home__container = document.createElement("div");
const renderIndex = () => {
  home__container.textContent = "";
  // ====================== DOM Index only
  const hero = document.createElement("img");
  const information__card = document.createElement("div");
  const title = document.createElement("h3");
  const paragraph = document.createElement("p");
  // ====================== Index content
  hero.src =
    "https://i.pinimg.com/736x/47/46/35/474635f0092e9f3183f4735f1e6c4651.jpg";
  hero.alt = "tux-kill-win";
  title.textContent = "More info";
  paragraph.textContent =
    "Welcome to Tux’s revenge kitchen, where the spirit of Kill Win lives on. Inspired by the clash between penguin power and the Windows empire, our dishes are bold, rebellious, and crafted to perfection. Step into a world where flavor strikes first—and every bite is a victory.";
  hero.className = "hero";
  information__card.className = "information__card";
  // ====================== Index APPEND
  home__container.appendChild(hero);
  home__container.appendChild(information__card);
  information__card.appendChild(title);
  information__card.appendChild(paragraph);
  content.appendChild(home__container);
};
export { renderIndex, home__container };
