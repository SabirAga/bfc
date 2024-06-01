"use client";

import React, { useState } from "react";
import ReactModal from "@/components/ui/ReactModal";
import { CardComponentDouble } from "@/components/ui/cardComponent";
import { useTranslation } from "react-i18next";


const menus=(t) => [
  {
    id: 1,
    title: "Menu Tenders",
    src: "/images/products/menus/menuTenders.png",
    description:t("deals:menu_tenders")
  },
  {
    id: 2,
    title: "Solo Bucket",
    src: "/images/products/menus/soloBucket.png",
    description:t("deals:solo_bucket")
  },
  {
    id: 3,
    title: "Menu Hotwings",
    src: "/images/products/menus/menuHotwings.png",
    description:t("deals:menu_hotwings")
  },
  {
    id: 4,
    title: "Maxi Bucket",
    src: "/images/products/menus/maxiBucket.png",
    description:t("deals:maxi_bucket")
  },
  {
    id: 5,
    title: "Family Bucket",
    src: "/images/products/menus/familyBucket.png",
    description:t("deals:family_bucket")
  },
  {
    id: 6,
    title: "Friends Menu",
    src: "/images/products/menus/friendsMenu.png",
    description:t("deals:friends_menu")
  },
  {
    id: 7,
    title: "Chicken Burger Menu",
    src: "/images/products/menus/chickenBurgerMenu.png",
    description:t("deals:chicken_burger_menu")
  },
  {
    id: 8,
    title: "Maxi Chicken Menu",
    src: "/images/products/menus/maxiChickenMenu.png",
    description:t("deals:maxi_chicken_menu")
  },
  {
    id: 9,
    title: "Crunchy Menu",
    src: "/images/products/menus/crunchyMenu.png",
    description:t("deals:crunchy_menu")
  },
  {
    id: 10,
    title: "Fish Burger Menu",
    src: "/images/products/menus/fishBurgerMenu.png",
    description:t("deals:fish_burger_menu")
  },
];

function Menus() {
  const {t} = useTranslation()
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
          <h1 className="text-4xl mb-8">Menus</h1>
          <div className="grid grid-cols-2 gap-x-7 justify-items-center ">
            {menus(t).map((product, index) => (
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
