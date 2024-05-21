"use client";

import NavigationProducts from "@/components/productsPageComponents/navigation";
import { SlickCarousel } from "@/components/ui/carouselComponent";
import React from "react";

import Image from "next/image";

const drinks = [
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
  return (
    <div className="px-[50px] pt-[68px]">
      <div className="mt-24 pl-[100px] ">
        <div className="grid place-items-center px-9 py-5">
          <h1 className="text-4xl pb-4">Drinks</h1>

          <ul className="flex items-center gap-7 text-3xl ">
            <li className="grid place-items-center">
              <Image
                src="/images/products/singleItems/drinks/31.png"
                width={450}
                height={450}
                className="rounded-xl shadow-2xl"
              />
              <h2 className="relative bottom-32">Pepsi</h2>
            </li>
            <li className="grid place-items-center">
              <Image
                src="/images/products/singleItems/drinks/33.png"
                width={450}
                height={450}
                className="rounded-xl shadow-2xl"
              />
              <h2 className="relative bottom-32">Pepsi Max</h2>
            </li>
          </ul>
        </div>

        <div className="grid place-items-center px-9 py-5">
          <ul className="flex items-center gap-7 text-3xl ">
            <li className="grid place-items-center">
              <Image
                src="/images/products/singleItems/drinks/32.png"
                width={450}
                height={450}
                className="rounded-xl shadow-2xl"
              />
              <h2 className="relative bottom-32">7 UP</h2>
            </li>
            <li className="grid place-items-center">
              <Image
                src="/images/products/singleItems/drinks/34.png"
                width={450}
                height={450}
                className="rounded-xl shadow-2xl"
              />
              <h2 className="relative bottom-32">Mirinda</h2>
            </li>
          </ul>
        </div>

        <div className="grid place-items-center px-9 py-5">
          <ul className="flex items-center gap-7 text-3xl ">
            <li className="grid place-items-center">
              <Image
                src="/images/products/singleItems/drinks/35.png"
                width={450}
                height={450}
                className="rounded-xl shadow-2xl"
              />
              <h2 className="relative bottom-32">Spa Reine</h2>
            </li>
            <li className="grid place-items-center">
              <Image
                src="/images/products/singleItems/drinks/36.png"
                width={450}
                height={450}
                className="rounded-xl shadow-2xl"
              />
              <h2 className="relative bottom-32">Spa Intense</h2>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Drinks;
