import "./styles.css";
import { home, menu, about, content } from "./home.js";
const renderAbout = () => {
  const about__container = document.createElement("div");
  const about__title = document.createElement("h2");
  const about__p = document.createElement("p");
  about__title.textContent = "About";
  about__p.textContent =
    "Welcome to Restaurantux, a rebellious restaurant where code meets cuisine and flavor fights back. Inspired by the legendary clash between Tux the penguin and the Windows empire, we’ve created a space where bold ideas and fearless cooking come together. Here, every dish is crafted with precision, creativity, and a touch of defiance. From powerful flavors to striking presentation, our menu is designed to break the rules and deliver something unforgettable. This is more than just a place to eat—it’s a statement. Choose your side, take a seat, and enjoy the taste of victory.";
  about__container.className = "about__container";
  about__container.appendChild(about__title);
  about__container.appendChild(about__p);
  content.appendChild(about__container);
};
export { renderAbout };
