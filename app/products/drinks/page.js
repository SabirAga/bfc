"use client";

import NavigationProducts from "@/components/productsPageComponents/navigation";
import { SlickCarousel } from "@/components/ui/carouselComponent";
import React from "react";

const drinks = [
  {
    title: "Pepsi",
    src: "/images/placeholders/placeholderNews.jpg",
  },
  {
    title: "Pepsi Max",
    src: "/images/placeholders/placeholderNews.jpg",
  },
  {
    title: "Mirinda",
    src: "/images/placeholders/placeholderNews.jpg",
  },
  {
    title: "7 up",
    src: "/images/placeholders/placeholderNews.jpg",
  },
];

function Drinks(props) {
  return (
    <>
      <div className="px-[50px] pt-[68px]">
        <div className="mt-32 pl-[100px] max-w-screen-xl">
          <h1 className="text-4xl pb-4 text-center ">Drinks</h1>
          <SlickCarousel products={drinks} />
        </div>
      </div>
    </>
  );
}

export default Drinks;
