"use client";

import React, { useState } from "react";
import Image from "next/image";
import ReactModal from "@/components/ui/ReactModal";

const meals = [
  {
    id: 1,
    title: "Chicken Burger Meal",
    src: "/images/products/menus/meals/chickenBurgerMeal.png",
  },
  {
    id: 2,
    title: "Maxi Chicken Meal",
    src: "/images/products/menus/meals/maxiChickenMeal.png",
  },
  {
    id: 3,
    title: "Meat Burger Meal",
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
              <div
                key={product.id}
                className="rounded-xl transition duration-300 grid justify-items-center relative"
                onClick={() => openModal(product)}
              >
                <Image
                  src={product.src}
                  width={450}
                  height={450}
                  className="rounded-xl shadow-2xl"
                  alt={product.title}
                />
                <h2 className="relative bottom-36 text-3xl text-center">
                  {product.title}
                </h2>
                <div className="flex justify-items-center absolute  bottom-12  mt-3 py-4 px-10 mx-auto">
                  <button className="py-4 px-10 bg-gray-300 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl hover:bg-[#ff6307] hover:text-white">
                    See more
                  </button>
                </div>
              </div>
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
