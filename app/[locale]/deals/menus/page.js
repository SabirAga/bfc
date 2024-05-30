"use client";

import React, { useState } from "react";
import ReactModal from "@/components/ui/ReactModal";
import { CardComponentDouble } from "@/components/ui/cardComponent";

const menus = [
  {
    id: 1,
    title: "Menu Tenders",
    src: "/images/products/menus/menuTenders.png",
  },
  {
    id: 2,
    title: "Solo Bucket",
    src: "/images/products/menus/soloBucket.png",
  },
  {
    id: 3,
    title: "Menu Hotwings",
    src: "/images/products/menus/menuHotwings.png",
  },
  {
    id: 4,
    title: "Maxi Bucket",
    src: "/images/products/menus/maxiBucket.png",
  },
  {
    id: 5,
    title: "Family Bucket",
    src: "/images/products/menus/familyBucket.png",
  },
  {
    id: 6,
    title: "Friends Menu",
    src: "/images/products/menus/friendsMenu.png",
  },
  {
    id: 7,
    title: "Chicken Burger Menu",
    src: "/images/products/menus/chickenBurgerMenu.png",
  },
  {
    id: 8,
    title: "Maxi Chicken Menu",
    src: "/images/products/menus/maxiChickenMenu.png",
  },
  {
    id: 9,
    title: "Crunchy Menu",
    src: "/images/products/menus/crunchyMenu.png",
  },
  {
    id: 10,
    title: "Fish Burger Menu",
    src: "/images/products/menus/fishBurgerMenu.png",
  },
];

function Menus() {
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
            {menus.map((product, index) => (
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

export default Menus;
