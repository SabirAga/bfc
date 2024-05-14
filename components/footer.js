import React from "react";

import Image from "next/image";
import logoImg from "@/public/images/logoBFC.jpg";
import Link from "next/link";
import InstagramIcon from "@mui/icons-material/Instagram";

import tiktok from "@/public/icons/tiktok-icon.svg";
import instagram from "@/public/icons/black-instagram-icon.svg";

export const Footer = () => {
  return (
    <footer className="mt-[75px]  mx-[50px] border-t-2 border-[#cccccc] pt-[50px] ">
      <div className="px-[50px]">
        <div>
          <div id="left">
            <div className="pb-20  ">
              <div className="">
                <h5 className="pb-4 text-xl font-bold">BFC</h5>
                <div className="flex gap-40">
                  <ul>
                    <li className="pb-4">Products</li>
                    <li className="pb-4">Kids</li>
                    <li className="pb-4">Restaurants</li>
                    <li className="pb-4">Deals</li>
                    <li className="pb-4">Delivery</li>
                  </ul>
                  <ul>
                    <li className="pb-4">Our history</li>
                    <li className="pb-4">Franchising</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="socials" className="-mt-[25px]">
          <ul className="flex items-center space-x-6">
            <li>
              <Link href="#">
                <Image src={tiktok} width={22} />
              </Link>
            </li>
            <li>
              <div className="h-6 border-l border-gray-800"></div>
            </li>
            <li>
              <Link href="#">
                <Image src={instagram} width={24} />
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
