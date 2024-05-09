"use client";

import { SlickCarousel } from "../ui/carouselComponent";

const images = [
  {
    title: "Family menu",
    src: "/images/products/menus/family.jpeg",
  },
  {
    title: "Friends menu",
    src: "/images/products/menus/test/friends.jpeg",
  },
  {
    title: "maxi bucket menu",
    src: "/images/products/menus/maxiBucket.jpeg",
  },
  {
    title: "menu Hotwings",
    src: "/images/products/menus/menuHotwings.jpeg",
  },
  {
    title: "menu Tenders",
    src: "/images/products/menus/menuTenders.jpeg",
  },
  {
    title: "solo bucket",
    src: "/images/products/menus/solo.jpeg",
  },
  {
    title: "chicken Burger Meal",
    src: "/images/products/menus/chickenBurgerMeal.jpeg",
  },
  {
    title: "meal Maxi Meat",
    src: "/images/products/menus/mealMaxiMeat.jpeg",
  },
  {
    title: "meal Meat Burger",
    src: "/images/products/menus/mealMeatBurger.jpeg",
  },
  {
    title: "crunchy Menu",
    src: "/images/products/menus/crunchyMenu.jpeg",
  },
  {
    title: "maxi Chicken Menu",
    src: "/images/products/menus/maxiChickenMenu.jpeg",
  },
  {
    title: "menu Chicken Burger",
    src: "/images/products/menus/menuChickenBurger.jpeg",
  },
  {
    title: "menu Fish Burger",
    src: "/images/products/menus/menuFishBurger.jpeg",
  },
];

export const MenusCarousel = () => {
  return (
    <div className="my-24">
      <SlickCarousel images={images} />
    </div>
  );
};
