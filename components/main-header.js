"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

import logoImg from "@/public/images/logoBFC.jpg";
import { DrawerComp } from "./ui/Drawer";

export const MainHeader = () => {
  const [shrunk, setShrunk] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShrunk(true);
      } else {
        setShrunk(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const mainHeaderClasses =
    "flex justify-between items-center bg-[#E4E4D1] h-[70px] px-5 top-0 fixed  w-full z-10";

    // {shrunk ? "flex text-black text-2xl font-bold font-arvo gap-4 -translate-x-5 ":"flex text-black text-2xl font-bold font-arvo gap-8 "}
  return (
    <div className={mainHeaderClasses}>
      <header className={shrunk? "flex items-center gap-1 -translate-x-5 transition-all duration-300":"flex items-center gap-8 transition-all duration-300"}>
        <div className="pl-16">
          <Image
            src={logoImg}
            alt="logo"
            height={170}
            className={
              shrunk
                ? "scale-75 pl-5 pt-24  -translate-y-1 transition-all duration-300"
                : "pl-5 pt-24 transition-all duration-300"
            }
          />
        </div>
        <DrawerComp />
        <nav>
          <ul className="flex text-black text-2xl font-bold font-arvo gap-6">
            <li>
              <a href="">Products</a>
            </li>
            <li>
              <a href="">Deals</a>
            </li>
            <li>
              <a href="">Restaurants</a>
            </li>
          </ul>
        </nav>
      </header>
      <div className="pr-3">
        <select
          name="lang"
          id="lang"
          className=" bg-white shadow-lg rounded-md mt-1 w-full z-10"
        >
          <option
            value="en"
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
          >
            EN
          </option>
          <option
            value="fr"
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
          >
            FR
          </option>
          <option
            value="nl"
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
          >
            NL
          </option>
        </select>
      </div>
    </div>
  );
};
