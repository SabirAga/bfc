"use client";

import React, { useState } from "react";
import ReactModal from "@/components/ui/ReactModal";
import { CardComponentDouble } from "@/components/ui/cardComponent";

const meals = [
  {
    id: 1,
    title: "Meal Chicken",
    src: "/images/products/menus/meals/chickenBurgerMeal.png",
  },
  {
    id: 2,
    title: "Meal Maxi Chicken",
    src: "/images/products/menus/meals/maxiChickenMeal.png",
  },
  {
    id: 3,
    title: "Meal Meat",
    src: "/images/products/menus/meals/meatBurgerMeal.png",
  },
  {
    id: 4,
    title: "Meal Maxi Meat",
    src: "/images/products/menus/meals/mealMaxiMeat.png",
  },
];

function Meals() {
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

  return (
    <div className="px-[50px] pt-[68px]">
      <div className="mt-24 pl-[100px] ">
        <div className="grid place-items-center px-9 py-5">
          <h1 className="text-4xl mb-8">Meals</h1>
          <div className="grid grid-cols-2 gap-x-7 justify-items-center ">
            {meals.map((product, index) => (
              <CardComponentDouble product={product} openModal={openModal} />
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
