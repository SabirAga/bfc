import React from "react";
import Image from "next/image";
import Link from "next/link";

import bodyImgNews from "@/public/images/placeholders/placeholderNews.jpg";
import newsBlack from "@/public//images/news/black.png";
import newsYellow from "@/public/images/news/yellow.png";
import newsRed from "@/public/images/news/red.png";
import { useTranslation } from "react-i18next";

const news = [
  {
    id: 1,
    src: "/images/news/black.png",
  },
  {
    id: 2,
    src: "/images/news/yellow.png",
  },
  {
    id: 3,
    src: "/images/news/red.png",
  },
];

export const BodyNews = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1 className="md:text-[54px] text-5xl text-center px-3 font-bold font-cooperBlack mb-5 ">
        {t("main:whats_new")}
      </h1>
      <div className="">
        <div className="md:p-[50px] p-10 bg-[#f8f4f4] rounded-lg">
          <div className="pb-7 ">
            <div id="swiper" className=" grid md:flex gap-8 ">
              <div className="rounded-2xl bg-white shadow-2xl">
                <Image
                  src={newsBlack}
                  alt="placeholder"
                  className="rounded-2xl"
                />
              </div>
              <div className="rounded-2xl bg-white shadow-2xl">
                <Image
                  src={newsYellow}
                  alt="placeholder"
                  className=" rounded-2xl"
                />
              </div>
              <div className="rounded-2xl bg-white shadow-2xl">
                <Image
                  src={newsRed}
                  alt="placeholder"
                  className="rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

{
  /* <div className="px-[50px] py-10">
                  <h3 className="font-bold text-[25px] mb-[15px]">Some text</h3>
                  <p className="text-center mb-10">Some more text</p>
                  <div className="flex ">
                    <Link
                      href="#"
                      className="mt-3 py-4 px-10 mx-auto bg-gray-300 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl hover:bg-[#ff6307] hover:text-white"
                    >
                      See more
                    </Link>
                  </div>
                </div> */
}
