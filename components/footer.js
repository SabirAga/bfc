"use client";
import React from "react";
import { useTranslation } from "react-i18next";

import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer
      id="footer"
      className="mt-[75px] mx-[50px] border-t-2 border-[#cccccc] pt-[50px] "
    >
      <div className="px-[50px] lg:px-[150px] font-bold">
        <div>
          <div id="left">
            <div className="pb-20  ">
              <div className="grid gap-10 md:flex md:gap-32">
                <div className="">
                  <h5 className="pb-4 text-2xl font-bold">BFC</h5>
                  <div className="grid gap-3 md:flex  text-gray-600">
                    <ul className="lg:flex lg:gap-6">
                      <li className="pb-4">
                        <Link href="/products/burgers">{t("products")}</Link>
                      </li>
                      <li className="pb-4">
                        <Link href="/deals">{t("deals")}</Link>
                      </li>
                      <li className="pb-4">
                        <Link href="/restaurants">{t("restaurants")}</Link>
                      </li>
                    </ul>
                    <div className="border-t-2 border-slate-200 pb-2 md:border-none "></div>
                    <ul className="lg:flex lg:gap-6">
                      <li className="pb-4">
                        <Link href="/our-story">{t("our_history")}</Link>
                      </li>
                      <li className="pb-4">
                        <Link href="/franchising">{t("franchising")}</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="lg:absolute lg:right-[140px] lg:-mt-[80px] ">
                <ul>
                  <li className="pb-6">
                    <a
                      target="_blank"
                      href="https://deliveroo.be/en/menu/brussels/bruxelles-centre/bfc-anspach"
                    >
                      <Image
                        src="/icons/delivery/deliveroo.svg"
                        alt=""
                        width={110}
                        height={50}
                      />
                    </a>
                  </li>
                  <li className="pb-6">
                    <a
                      target="_blank"
                      href="https://www.ubereats.com/be-en/store/bfc/nKwZ6BB3SROK0fUOtjTecQ"
                    >
                      <Image
                        src="/icons/delivery/uberEats.svg"
                        alt=""
                        width={110}
                        height={50}
                      />
                    </a>
                  </li>
                  <li className="pb-4">
                    <a
                      target="_blank"
                      href="https://www.takeaway.com/be-en/menu/bfc-1"
                    >
                      <Image
                        src="/icons/delivery/takeaway.svg"
                        alt=""
                        width={140}
                        height={50}
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div id="socials" className="-mt-[25px]  ">
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
              <a target="_blank" href="https://www.instagram.com/bfc_belgium/">
                <Image
                  src="/icons/black-instagram-icon.svg"
                  width={30}
                  height={30}
                  alt="instagram"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div id="bottom" className="mt-[35px] py-10 border-t-2 border-[#cccccc]">
        <ul className="flex px-[50px]  space-x-6 font-sans text-sm ">
          <li>
            <Link href="/privacy-policy">Privacy Policy</Link>
          </li>
          <li>
            <div className="h-6 border-l border-gray-800"></div>
          </li>
          <li>
            <Link href="/terms-of-use">Terms of use</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};
