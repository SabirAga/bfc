"use client";
import React from "react";
import { useTranslation } from "react-i18next";

import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="mt-[75px]  mx-[50px] border-t-2 border-[#cccccc] pt-[50px] ">
      <div className="px-[50px]  font-bold">
        <div>
          <div id="left">
            <div className="pb-20  ">
              <div className="flex gap-32">
                <div className="">
                  <h5 className="pb-4 text-2xl font-bold">BFC</h5>
                  <div className="flex gap-40 text-gray-600">
                    <ul className="">
                      <li className="pb-4">
                        <Link href="/products/burgers">{t("products")}</Link>
                      </li>
                      <li className="pb-4">
                        <Link href="/deals">{t("deals")}</Link>
                      </li>
                      <li className="pb-4">
                        <Link href="#">{t("kids")}</Link>
                      </li>
                    </ul>
                    <ul>
                      <li className="pb-4">
                        <Link href="/restaurants">{t("restaurants")}</Link>
                      </li>
                      <li className="pb-4">
                        <Link href="#">{t("our_history")}</Link>
                      </li>
                      <li className="pb-4">
                        <Link href="#">{t("franchising")}</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="">
                  <h5 className="pb-4 text-2xl font-bold">{t("delivery")}</h5>
                  <div className="flex gap-40 text-gray-600">
                    <ul className=" items-center gap-6">
                      <li className="pb-4">
                        <Link href="#">
                          <Image
                            src="/icons/delivery/deliveroo.svg"
                            alt=""
                            width={110}
                            height={50}
                          />
                        </Link>
                      </li>
                      <li className="pb-4">
                        <Link href="#">
                          <Image
                            src="/icons/delivery/uberEats.svg"
                            alt=""
                            width={110}
                            height={50}
                          />
                        </Link>
                      </li>
                      <li className="pb-4">
                        <Link href="#">
                          <Image
                            src="/icons/delivery/takeaway.svg"
                            alt=""
                            width={140}
                            height={50}
                          />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="socials" className="-mt-[25px]">
          <ul className="flex items-center space-x-6">
            <li>
              <Link href="#">
                <Image
                  src="/icons/tiktok-icon.svg"
                  width={28}
                  height={28}
                  alt="tiktok"
                />
              </Link>
            </li>
            <li>
              <div className="h-8 border-l border-gray-800"></div>
            </li>
            <li>
              <Link href="#">
                <Image
                  src="/icons/black-instagram-icon.svg"
                  width={30}
                  height={30}
                  alt="instagram"
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div id="bottom" className="mt-[35px] py-10 border-t-2 border-[#cccccc]">
        <ul className="flex px-[50px] space-x-6">
          <li>
            <Link href="#">Privacy Policy</Link>
          </li>
          <li>
            <div className="h-6 border-l border-gray-800"></div>
          </li>
          <li>
            <Link href="#">Terms of use</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};
