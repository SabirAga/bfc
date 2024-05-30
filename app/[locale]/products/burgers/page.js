"use client";

import React, { useState } from "react";
import ReactModal from "@/components/ui/ReactModal";
import {
  CardComponentDouble,
  CardComponentTriple,
} from "@/components/ui/cardComponent";
import NavigationProducts from "@/components/productsPageComponents/navigation";

const chickenBurgers = [
  {
    id: 1,
    title: "Chicken Burger",
    src: "/images/products/singleItems/burgers/chickenBurger.png",
  },
  {
    id: 2,
    title: "Maxi Chicken Burger",
    src: "/images/products/singleItems/burgers/maxiChicken.png",
  },
];
const meatBurgers = [
  {
    id: 3,
    title: "Meat Burger",
    src: "/images/products/singleItems/burgers/meatBurger.png",
  },
  {
    id: 4,
    title: "Maxi Meat Burger",
    src: "/images/products/singleItems/burgers/maxiMeat.png",
  },
];

const specials = [
  {
    id: 5,
    title: "Cruncy Burger",
    src: "/images/products/singleItems/burgers/crunchy.png",
  },
  {
    id: 6,
    title: "Wrap",
    src: "/images/products/singleItems/burgers/wrap.png",
  },
  {
    id: 7,
    title: "Fish Burger",
    src: "/images/products/singleItems/burgers/fishBurger.png",
  },
];

function Burger() {
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
          <h1 className="text-4xl mb-8">Chicken Burgers</h1>
          <div className="grid grid-cols-2 gap-x-7 justify-items-center ">
            {chickenBurgers.map((product, index) => (
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
        <div className="grid place-items-center px-9 py-5">
          <h1 className="text-4xl mb-8">Meat Burgers</h1>
          <div className="grid grid-cols-2 gap-7 justify-items-center ">
            {meatBurgers.map((product, index) => (
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
        <div className="grid place-items-center px-9 py-5">
          <h1 className="text-4xl mb-8">Specials</h1>

          <div className="grid grid-cols-2 gap-x-7 justify-items-center ">
            {specials.map((product, index) => (
              <CardComponentTriple
                product={product}
                index={index}
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

export default Burger;
