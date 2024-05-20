"use client";

import React from "react";
import Image from "next/image";
import { Footer } from "@/components/footer";
import { SlickCarousel } from "@/components/ui/carouselComponent";

const Specials = [
  {
    title: "Cruncy Burger",
    src: "/images/products/singleItems/crunchyBurger.jpeg",
  },
  {
    title: "Wrap",
    src: "/images/products/singleItems/wrap.jpeg",
  },
  {
    title: "Fish Burger",
    src: "/images/products/singleItems/fishBurger.jpeg",
  },
];

function Burger() {
  return (
    <div className="px-[50px] pt-[68px]">
      <div className="mt-24 pl-[100px] ">
        <div className=" grid gap-y-8">

          <div className="grid place-items-center px-9 py-5">
            <h1 className="text-4xl pb-4">Chicken Burgers</h1>
            <ul className="flex items-center gap-7 text-2xl ">
              <li className="grid place-items-center rounded-xl shadow-2xl">
                <Image
                  src="/images/products/singleItems/chickenBurger.jpeg"
                  width={400}
                  height={400}
                  className="pb-6 rounded-t-lg"
                />
                <h2 className="pb-6">Chicken Burger</h2>
              </li>
              <li className="grid place-items-center rounded-xl shadow-2xl">
                <Image
                  src="/images/products/singleItems/maxiChicken.jpeg"
                  width={400}
                  height={400}
                  className="pb-6"
                />
                <h2 className="pb-6 rounded-t-lg">Maxi Chicken Burger</h2>
              </li>
            </ul>
          </div>

          <div className="grid place-items-center px-9 py-5">
            <h1 className="text-4xl pb-4">Meat Burgers</h1>
            <ul className="flex items-center gap-7 text-2xl ">
              <li className="grid place-items-center rounded-xl shadow-2xl">
                <Image
                  src="/images/products/singleItems/meatBurger.jpeg"
                  width={400}
                  height={400}
                  className="pb-6 rounded-t-lg"
                />
                <h2 className="pb-6">Meat Burger</h2>
              </li>
              <li className="grid place-items-center rounded-xl shadow-2xl">
                <Image
                  src="/images/products/singleItems/maxiMeat.jpeg"
                  width={400}
                  height={400}
                  className="pb-6"
                />
                <h2 className="pb-6 rounded-t-lg">Maxi Meat Burger</h2>
              </li>
            </ul>
          </div>

          <div className="grid place-items-center px-9 py-5">
            <h1 className="text-4xl pb-4">Specials</h1>
            <ul className="grid gap-7 text-2xl ">
              <div className="grid gap-7 text-2xl grid-cols-2">
                <li className="grid place-items-center rounded-xl shadow-2xl">
                  <Image
                    src="/images/products/singleItems/crunchyBurger.jpeg"
                    width={400}
                    height={400}
                    className="pb-6 rounded-t-lg"
                  />
                  <h2 className="pb-6">Crunchy Burger</h2>
                </li>
                <li className="grid place-items-center rounded-xl shadow-2xl">
                  <Image
                    src="/images/products/singleItems/wrap.jpeg"
                    width={400}
                    height={400}
                    className="pb-6 rounded-t-lg"
                  />
                  <h2 className="pb-6 rounded-t-lg">Wrap</h2>
                </li>
              </div>
              <div className="flex justify-self-center gap-7 text-2xl">
                <li className="grid place-items-center rounded-xl shadow-2xl">
                  <Image
                    src="/images/products/singleItems/fishBurger.jpeg"
                    width={400}
                    height={400}
                    className="pb-6 rounded-t-xl"
                  />
                  <h2 className="pb-6 rounded-t-lg">Fish Burger</h2>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Burger;
