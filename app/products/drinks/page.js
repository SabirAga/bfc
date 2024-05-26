"use client";

import NavigationProducts from "@/components/productsPageComponents/navigation";
import { SlickCarousel } from "@/components/ui/carouselComponent";
import React, { useState } from "react";
import ReactModal from "@/components/ui/ReactModal";

import Image from "next/image";

const products = [
  {
    title: "Pepsi",
    src: "/images/products/singleItems/drinks/31.png",
  },
  {
    title: "Pepsi Max",
    src: "/images/products/singleItems/drinks/32.png",
  },
  {
    title: "Mirinda",
    src: "/images/products/singleItems/drinks/33.png",
  },
  {
    title: "7 up",
    src: "/images/products/singleItems/drinks/34.png",
  },
  {
    title: "7 up",
    src: "/images/products/singleItems/drinks/35.png",
  },
  {
    title: "7 up",
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
          <h1 className="text-4xl pb-4">Drinks</h1>
          <div className="grid grid-cols-2 gap-7 justify-items-center ">
            {products.map((product, index) => (
              <div
                key={product.id}
                className={`rounded-xl transition duration-300 `}
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

export default Drinks;
