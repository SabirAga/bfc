"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

// import logoImg from "@/public/images/logoBFC.jpg";
import logo from "@/public/images/logo.jpeg";

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

  return (
    <div className="flex justify-between fixed  py-[9px] px-[50px] w-full z-10 bg-white">
      <header className="flex items-center h-[50px]">
        <div className="">
          <Image
            // src={logoImg}
            src={logo}
            alt="logo"
            height={220}
            className={
              shrunk
                ? "scale-75 pl-[50px] mt-20 -translate-y-1 -translate-x-1 transition-all duration-300 border-0 rounded-3xl"
                : "pl-[50px] mt-28 transition-all duration-300 border-0 rounded-3xl"
            }
          />
        </div>
        <div
          className={
            shrunk
              ? "-translate-x-7 flex items-center transition-all duration-300"
              : "flex items-center transition-all duration-300"
          }
        >
          <div className="ml-[14px] p-[10px] pt-[20px] mr-[2px] ">
            <DrawerComp />
          </div>
          <nav>
            <ul className="flex text-black text-xl leading-5 font-bold gap-5 pt-4 pb-[6px]  font-cooperBlack">
              <li>
                <a href="#">Products</a>
              </li>
              <li>
                <a href="#">Deals</a>
              </li>
              <li>
                <a href="#">Restaurants</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <select
        name="lang"
        id="lang"
        className=" rounded-md mt-1 top-5 bg-transparent text-xl leading-5 font-bold h"
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
  );
};
