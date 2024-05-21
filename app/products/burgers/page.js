"use client";

import React from "react";
import Image from "next/image";

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
        <div className="grid gap-y-8">
          <div className="grid place-items-center px-9 py-5">
            <h1 className="text-4xl pb-4">Chicken Burgers</h1>
            <ul className="flex items-center gap-7 text-3xl ">
              <li className="grid place-items-center">
                <Image
                  src="/images/products/singleItems/burgers/chickenBurger.png"
                  width={450}
                  height={450}
                  className="rounded-xl shadow-2xl"
                />
                <h2 className="relative bottom-36">Chicken Burger</h2>
              </li>
              <li className="grid place-items-center">
                <Image
                  src="/images/products/singleItems/burgers/maxiChicken.png"
                  width={450}
                  height={450}
                  className="rounded-xl shadow-2xl"
                />
                <h2 className="relative bottom-36">Maxi Chicken Burger</h2>
              </li>
            </ul>
          </div>

          <div className="grid place-items-center px-9 py-5">
            <h1 className="text-4xl pb-4">Meat Burgers</h1>
            <ul className="flex items-center gap-7 text-3xl ">
              <li className="grid place-items-center">
                <Image
                  src="/images/products/singleItems/burgers/meatBurger.png"
                  width={450}
                  height={450}
                  className="rounded-xl shadow-2xl"
                />
                <h2 className="relative bottom-36">Meat Burger</h2>
              </li>
              <li className="grid place-items-center">
                <Image
                  src="/images/products/singleItems/burgers/maxiMeat.png"
                  width={450}
                  height={450}
                  className="rounded-xl shadow-2xl"
                />
                <h2 className="relative bottom-36">Maxi Meat Burger</h2>
              </li>
            </ul>
          </div>

          <div className="grid place-items-center px-9 py-5">
            <h1 className="text-4xl pb-4">Specials</h1>
            <ul className="grid gap-7 text-2xl ">
              <div className="grid gap-7 text-3xl grid-cols-2">
                <li className="grid place-items-center">
                  <Image
                    src="/images/products/singleItems/burgers/crunchy.png"
                    width={450}
                    height={450}
                    className="rounded-xl shadow-2xl"
                  />
                  <h2 className="relative bottom-36">Crunchy Burger</h2>
                </li>
                <li className="grid place-items-center">
                  <Image
                    src="/images/products/singleItems/burgers/wrap.png"
                    width={450}
                    height={450}
                    className="rounded-xl shadow-2xl"
                  />
                  <h2 className="relative bottom-36">Wrap</h2>
                </li>
              </div>
              <div className="flex justify-self-center gap-7 text-3xl">
                <li className="grid place-items-center">
                  <Image
                    src="/images/products/singleItems/burgers/fishBurger.png"
                    width={450}
                    height={450}
                    className="rounded-xl shadow-2xl"
                  />
                  <h2 className="relative bottom-36">Fish Burger</h2>
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
