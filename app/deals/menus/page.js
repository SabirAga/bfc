"use client";

import React, { useState } from "react";
import Image from "next/image";
import ReactModal from "@/components/ui/ReactModal";

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

export default Menus;
