"use client";

import React, { useState } from "react";
import ReactModal from "@/components/ui/ReactModal";
import { CardComponentDouble } from "@/components/ui/cardComponent";
import { useTranslation } from "react-i18next";

const products = (t) => [
  {
    title: "Pepsi",
    src: "/images/products/singleItems/drinks/31.png",
    description: t("products:pepsi"),
  },
  {
    title: "Pepsi Max",
    src: "/images/products/singleItems/drinks/33.png",
    description: t("products:pepsi_zero_sugar"),
  },
  {
    title: "Mirinda",
    src: "/images/products/singleItems/drinks/34.png",
    description: t("products:7up"),
  },
  {
    title: "7 up",
    src: "/images/products/singleItems/drinks/32.png",
    description: t("products:mirinda"),
  },
  {
    title: "Spa Riene",
    src: "/images/products/singleItems/drinks/35.png",
    description: t("products:spa_reine"),
  },
  {
    title: "Spa Intense",
    src: "/images/products/singleItems/drinks/36.png",
    description: t("products:spa_sparkling"),
  },
];

function Drinks(props) {
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
    <div className="md:px-[50px] pt-[68px]">
      <div className="mt-24 md:pl-[100px] pl-0 ">
        <div className="grid place-items-center md:px-9 py-5">
          <h1 className="text-4xl mb-8">Drinks</h1>
          <div className="grid md:grid-cols-2 gap-x-7 justify-items-center ">
            {products(t).map((product, index) => (
              <CardComponentDouble
                product={product}
                openModal={openModal}
                key={product.id}
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

export default Drinks;
