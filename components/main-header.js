"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

import logo from "@/public/images/logoNew.png";
import { DrawerComp } from "./ui/Drawer";
import LanguageChanger from "./ui/languageChanger";

export const MainHeader = () => {
  const [shrunk, setShrunk] = useState(false);
  const { t } = useTranslation();

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

  const classesShrunkLg =
    "-translate-x-7 flex items-center transition-all duration-300";
  const classesLg = "flex items-center transition-all duration-300";

  return (
    <div className="flex justify-between fixed z-50 py-[9px] px-[10px] md:px-[50px] w-full  bg-white max-w-[540px] md:max-w-[1280px] xl:max-w-[1830px]">
      <header className="flex items-center h-[50px]">
        <div className="">
          <Link href="/">
            <Image
              // src={logoImg}
              src={logo}
              alt="logo"
              height={230}
              className={
                shrunk
                  ? "scale-60 pl-[10px] md:scale-75 md:pl-[50px] mt-20 -translate-y-1 -translate-x-2 transition-all duration-300 border-0 rounded-3xl bg-transparent"
                  : "scale-75 pl-[10px] md:scale-100 md:pl-[50px] mt-28 transition-all duration-300 border-0 rounded-3xl bg-transparent"
              }
            />
          </Link>
        </div>
        <div
          className={`flex items-center transition-all duration-300 ${
            shrunk ? "md:-translate-x-7" : ""
          }`}
        >
          <div className="lg:ml-[14px] lg:p-[10px] lg:pt-[20px] lg:mr-[2px] lg:static absolute md:right-10 right-5 top-10">
            <DrawerComp />
          </div>
          <nav>
            <ul className="hidden lg:flex text-black text-xl leading-5 font-bold gap-5 pt-4 pb-[6px] font-CustomFont ">
              <li>
                <Link href="/products/burgers">{t("products")}</Link>
              </li>
              <li>
                <Link href="/deals">{t("deals")}</Link>
              </li>
              <li>
                <Link href="/restaurants">{t("restaurants")}</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="hidden lg:block">
        <LanguageChanger />
      </div>
    </div>
  );
};
