import React from "react";
import Image from "next/image";
import Link from "next/link";

import burgerIcon from "@/public/icons/products/edited/burger.png";
import bucketIcon from "@/public/icons/products/edited/bucket.png";
import drinksIcon from "@/public/icons/products/edited/drinks.png";
import dessertIcon from "@/public/icons/products/edited/dessert.png";

function NavigationMobile() {
  return (
    <div className="pt-[180px] md:pt-20 mx-auto md:w-[490px]">
      <ul className="flex md:justify-center items-end bg-gray-100 rounded-xl p-[10px]  mx-4">
        <li className="pb-[3px]">
          <Link href="/products/burgers">
            <Image
              src={burgerIcon}
              alt=""
              className="w-28 hover:scale-110 duration-300 self-end flex "
              // width={24} height={24}
            />
          </Link>
        </li>
        <li className="pb-[15px]">
          <Link href="/products/buckets">
            <Image
              src={bucketIcon}
              alt=""
              className="w-24 hover:scale-110 duration-300"
              // width={24} height={24}
            />
          </Link>
        </li>
        <li className="pb-2">
          <Link href="/products/desserts">
            <Image
              src={dessertIcon}
              alt=""
              className="w-24 hover:scale-110 duration-300"
              // width={24} height={24}
            />
          </Link>
        </li>
        <li className="pb-[14px]">
          <Link href="/products/drinks">
            <Image
              src={drinksIcon}
              alt=""
              className="w-24 hover:scale-110 duration-300"
              // width={24} height={24} quality={100}
            />
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavigationMobile;
