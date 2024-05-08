"use client";

import { SlickCarousel } from "../ui/carouselComponent";

const images = [
  {
    name: "Solo",
    src: "/images/products/menus/Solo.jpeg",
  },
  {
    name: "Crunchy Menu",
    src: "/images/products/menus/crunchyMenu.jpeg",
  },
  {
    name: "Meal Chicken Burger",
    src: "/images/products/menus/mealChickenBurger.jpeg",
  },
  {
    name: "Meal Maxi Chicken",
    src: "/images/products/menus/mealMaxiChicken.jpeg",
  },
  {
    name: "Meal Maxi Meat",
    src: "/images/products/menus/mealMaxiMeat.jpeg",
  },

  {
    name: "Meal Meat",
    src: "/images/products/menus/mealMeat.jpeg",
  },

  {
    name: "Menu Maxi Meat",
    src: "/images/products/menus/menuMaxiMeat.jpeg",
  },

  {
    name: "Menu Meat Burger",
    src: "/images/products/menus/menuMeatBurger.jpeg",
  },
];

export const MenusCarousel = () => {
  return (
    <div className="my-20">
      <SlickCarousel images={images} />
    </div>
  );
};
