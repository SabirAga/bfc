"use client";

import React, { useState } from "react";
import ReactModal from "@/components/ui/ReactModal";
import {
  CardComponentDouble,
  CardComponentTriple,
} from "@/components/ui/cardComponent";
import NavigationProducts from "@/components/productsPageComponents/navigation";
import { useTranslation } from "react-i18next";

const chickenBurgers = (t) => [
  {
    id: 1,
    title: "Chicken Burger",
    src: "/images/products/singleItems/burgers/chickenBurger.png",
    description: t("products:chicken_burger"),
  },
  {
    id: 2,
    title: "Maxi Chicken Burger",
    src: "/images/products/singleItems/burgers/maxiChicken.png",
    description: t("products:maxi_chicken_burger"),
  },
];

const meatBurgers = (t) => [
  {
    id: 3,
    title: "Meat Burger",
    src: "/images/products/singleItems/burgers/meatBurger.png",
    description: t("products:meat_burger"),
  },
  {
    id: 4,
    title: "Maxi Meat Burger",
    src: "/images/products/singleItems/burgers/maxiMeat.png",
    description: t("products:maxi_meat_burger"),
  },
];

const specials = (t) => [
  {
    id: 5,
    title: "Cruncy Burger",
    src: "/images/products/singleItems/burgers/crunchy.png",
    description: t("products:crunchy"),
  },
  {
    id: 6,
    title: "Wrap",
    src: "/images/products/singleItems/burgers/wrap.png",
    description: t("products:wrap"),
  },
  {
    id: 7,
    title: "Fish Burger",
    src: "/images/products/singleItems/burgers/fishBurger.png",
    description: t("products:fish_burger"),
  },
];

function Burger() {
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

  return (
    <div className="px-[50px] pt-[68px]">
      <div className="mt-24 pl-[100px] ">
        <div className="grid place-items-center px-9 py-5">
          <h1 className="text-4xl mb-8">Chicken Burgers</h1>
          <div className="grid grid-cols-2 gap-x-7 justify-items-center ">
            {chickenBurgers(t).map((product, index) => (
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
            {meatBurgers(t).map((product, index) => (
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
            {specials(t).map((product, index) => (
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
