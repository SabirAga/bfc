"use client";
import { useTranslation } from "react-i18next";

import { BodyNav } from "./bodyComponents/bodyNav";
import { BodyPhotos } from "./bodyComponents/bodyPhotos";
import { BodyNews } from "./bodyComponents/bodyNews";

export const Body = () => {
  const { t } = useTranslation();

  return (
    <div className="px-[10px] md:px-[50px]">
      <div className=" md:mt-[55px] ">
        <h1 className="text-[52px] text-center px-3 font-bold font-cooperBlack">
          {t("hello")}
        </h1>
        <BodyNav />
        <BodyPhotos />
        <BodyNews />
      </div>
    </div>
  );
};
