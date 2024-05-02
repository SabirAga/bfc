"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

import logoImg from "@/assets/logoBFC.jpg";
import { DrawerComp } from "./ui/Drawer";

const links = [
  {
    title: "products",
    src: "#",
  },
  { title: "deals", src: "#" },
  { title: "restaurants", src: "#" },
];

export const MainHeader = () => {
  const [isShrunk, setIsShrunk] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  //   useEffect(() => {
  //     const handleScroll = () => {
  //       if (window.scrollY > 50) {
  //         setShrunk(true);
  //       } else {
  //         setShrunk(false);
  //       }
  //     };

  //     window.addEventListener("scroll", handleScroll);

  //     return () => {
  //       window.removeEventListener("scroll", handleScroll);
  //     };
  //   }, []);

  const mainHeaderClasses =
    "flex justify-between items-center bg-[#ff6307] h-[100px] px-5";

  return (
    <div className={mainHeaderClasses}>
      <header className="flex items-center gap-10">
        <div>
          <Image src={logoImg} alt="logo" height={150} className="pl-5 pt-20" />
        </div>

        <DrawerComp link1={links[1]}/>

        <nav>
          <ul className="flex text-white text-2xl font-bold gap-8 uppercase font-arvo">
            <li>
              <a href="">products</a>
            </li>
            <li>
              <a href="">deals</a>
            </li>
            <li>
              <a href="">restaurants</a>
            </li>
          </ul>
        </nav>
      </header>
      <div className="pr-3">
        <select name="lang" id="lang" className=" bg-white shadow-lg rounded-md mt-1 w-full z-10">
            <option value="en" className="px-4 py-2 hover:bg-gray-100 cursor-pointer">EN</option>
            <option value="fr" className="px-4 py-2 hover:bg-gray-100 cursor-pointer">FR</option>
            <option value="nl" className="px-4 py-2 hover:bg-gray-100 cursor-pointer">NL</option>
        </select>
      </div>
    </div>
  );
};




