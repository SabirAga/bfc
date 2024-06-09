import React from "react";
import Image from "next/image";
import Link from "next/link";

import mealsIcon from "@/public/icons/deals/png/meals.png";
import menusIcon from "@/public/icons/deals/png/menus.png";

function NavigationDealsMobile() {
  return (
    <div className="pt-[180px] md:pt-20 mx-auto md:mr-9 md:w-[350px]">
      <ul className="flex justify-center gap-7 items-end bg-gray-100 rounded-xl p-[10px]  mx-4">
        <li>
          <Link href="/deals">
            <Image
              src={mealsIcon}
              alt=""
              className="w-20 hover:scale-110 duration-300"
              // width={24} height={24}
            />
            <h1 className="text-center text-xl ">Meals</h1>
          </Link>
        </li>
        <li>
          <Link href="/deals/menus">
            <Image
              src={menusIcon}
              alt=""
              className="w-20 hover:scale-110 duration-300"
              // width={24} height={24}
            />
            <h1 className="text-center text-xl ">Menus</h1>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavigationDealsMobile;
