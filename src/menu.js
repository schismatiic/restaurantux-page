import "./styles.css";
import { home, menu, about, content } from "./home.js";
const renderMenu = () => {
  const menu__container = document.createElement("ul");
  const menu__title = document.createElement("h2");
  menu__title.textContent = "Menu";
  menu__container.className = "menu__container";
  menu__container.appendChild(menu__title);

  for (let index = 0; index < 3; index++) {
    const menu__item = document.createElement("li");
    const item__title = document.createElement("h3");
    const item__p = document.createElement("p");

    menu__item.className = "menu__item";
    if (index === 0) {
      item__title.textContent = "1._ Penguin’s Revenge Ramen";
      item__p.textContent =
        "A bold black garlic ramen infused with smoky broth, tender pork slices, soft-boiled egg, and a spicy kick that strikes without warning. Dark, deep, and unforgettable.";
    } else if (index === 1) {
      item__title.textContent = "2._ Terminal Tempura Strike";
      item__p.textContent =
        "Crispy shrimp and vegetables fried to golden perfection, served with a sharp wasabi-soy dip. Light, fast, and precise—just like a clean command line.";
    } else if (index === 2) {
      item__title.textContent = "3._ Pori Pari Ramen";
      item__p.textContent =
        "A crunchy snack with a spicy chicken flavor, perfect for ramen- lovers with an itch for that tasty noodle goodness. Comes with a side of kewpie mayonnaise.";
    }
    menu__item.appendChild(item__title);
    menu__item.appendChild(item__p);
    menu__container.appendChild(menu__item);
  }
  content.appendChild(menu__container);
};

export { renderMenu };
