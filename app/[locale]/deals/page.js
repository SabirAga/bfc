"use client";

import React, { useState } from "react";
import ReactModal from "@/components/ui/ReactModal";
import { CardComponentDouble } from "@/components/ui/cardComponent";
import { useTranslation } from "react-i18next";
import { Carousel } from "@/components/ui/carouselComponent";

const meals = (t) => [
  {
    id: 1,
    title: "Meal Chicken",
    src: "/images/products/menus/meals/chickenBurgerMeal.png",
    description: t("deals:chicken_burger_meal"),
  },
  {
    id: 2,
    title: "Meal Maxi Chicken",
    src: "/images/products/menus/meals/maxiChickenMeal.png",
    description: t("deals:maxi_chicken_meal"),
  },
  {
    id: 3,
    title: "Meal Meat",
    src: "/images/products/menus/meals/meatBurgerMeal.png",
    description: t("deals:meat_burger_meal"),
  },
  {
    id: 4,
    title: "Meal Maxi Meat",
    src: "/images/products/menus/meals/mealMaxiMeat.png",
    description: t("deals:meal_maxi_meat"),
  },
];

function Meals() {
  const { t } = useTranslation();
  const [currentProduct, setCurrentProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = (product) => {
    setCurrentProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentProduct(null); // Clear the current product when closing the modal
  };

  const translatedProducts = meals(t);

  return (
    <div className=" md:px-[50px] lg:pt-[68px] ">
      <div className="lg:mt-24 md:mx-auto lg:pl-[100px] pl-0 ">
        <div className=" md:px-9 py-3 lg:py-5">
          <h1 className="text-4xl font-bold text-center text-black mb-8">
            Meals
          </h1>
          <div className="md:hidden">
            <Carousel
              products={translatedProducts}
              openModal={openModal}
            />
          </div>
          <div className="hidden md:grid md:grid-cols-2 gap-x-7 justify-items-center ">
            {meals(t).map((product, index) => (
              <CardComponentDouble
                product={product}
                key={product.id}
                openModal={openModal}
              />
            ))}
          </div>
          {isModalOpen && currentProduct && (
            <ReactModal
              product={currentProduct}
              modalOpen={isModalOpen}
              modalClose={closeModal}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Meals;
