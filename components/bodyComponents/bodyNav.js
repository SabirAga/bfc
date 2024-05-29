
import React from "react";

import Link from "next/link";

import LunchDiningIcon from "@mui/icons-material/LunchDining";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useTranslation } from "react-i18next";


export const BodyNav = () => {
  const {t} = useTranslation()

  return (
    <div id="container" className="grid justify-items-center">
      <div className="bg-[#f2f2f2] mt-12 flex justify-center gap-8 items-center border-0 rounded-2xl px-[50px] py-[40px] shadow-lg">
        <Link
          href="/products/burgers"
          className="border flex items-center justify-between rounded-2xl bg-white w-[300px] px-[40px] py-[25px] text-xl shadow-md hover:shadow-2xl hover:scale-105"
        >
          <div  className="flex items-center">
            <LunchDiningIcon sx={{ fontSize: 35 }} />
            <p className="ml-[30px]">
            {t("main:explore")} <span className="font-bold">{t("main:products")}</span>
            </p>
          </div>
          <ArrowForwardIosIcon className="relative -right-5" />
        </Link>
        <Link
          href="/restaurants"
          className="border flex items-center justify-between rounded-2xl bg-white w-[300px] px-[40px] py-[25px] text-xl shadow-md hover:shadow-2xl hover:scale-105"
        >
          <div  className="flex items-center">
            <RestaurantIcon sx={{ fontSize: 35 }} />
            <p className="ml-[30px] max-w-[200px] ">
            {t("main:our")} <span className="font-bold">{t("main:restaurants")}</span>
            </p>
          </div>
          <ArrowForwardIosIcon className="relative -right-5" />
        </Link>
      </div>
    </div>
  );
};
