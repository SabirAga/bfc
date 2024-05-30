"use client";

import React, { useState } from "react";
import ReactModal from "@/components/ui/ReactModal";
import { CardComponentDouble } from "@/components/ui/cardComponent";

const products = [
  {
    title: "Pepsi",
    src: "/images/products/singleItems/drinks/31.png",
  },
  {
    title: "Pepsi Max",
    src: "/images/products/singleItems/drinks/33.png",
  },
  {
    title: "Mirinda",
    src: "/images/products/singleItems/drinks/34.png",
  },
  {
    title: "7 up",
    src: "/images/products/singleItems/drinks/32.png",
  },
  {
    title: "Spa Riene",
    src: "/images/products/singleItems/drinks/35.png",
  },
  {
    title: "Spa Intense",
    src: "/images/products/singleItems/drinks/36.png",
  },
];

function Drinks(props) {
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
          <h1 className="text-4xl mb-8">Drinks</h1>
          <div className="grid grid-cols-2 gap-x-7 justify-items-center ">
            {products.map((product, index) => (
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

export default Drinks;
