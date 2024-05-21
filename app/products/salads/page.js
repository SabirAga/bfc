"use client";
import { SlickCarousel } from "@/components/ui/carouselComponent";
import React from "react";
import Image from "next/image";

function Salad(props) {
  return (
    <div className="px-[50px] pt-[68px]">
      <div className="mt-24 pl-[100px] ">
        <div className="grid place-items-center px-9 py-5">
          <h1 className="text-4xl pb-4">Salads</h1>

          <ul className="flex items-center gap-7 text-3xl ">
            <li className="grid place-items-center">
              <Image
                src="/images/placeholders/placeholderNews.jpg"
                width={450}
                height={450}
                className="rounded-xl shadow-2xl"
              />
              <h2 className="relative bottom-32">Chicken Salad</h2>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Salad;
