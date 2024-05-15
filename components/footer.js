import React from "react";

import Image from "next/image";
import Link from "next/link";

// import tiktok from '@/public/icons/tiktok-icon.svg';
// import instagram from "@/public/icons/black-instagram-icon.svg";

export const Footer = () => {
  return (
    <footer className="mt-[75px]  mx-[50px] border-t-2 border-[#cccccc] pt-[50px] ">
      <div className="px-[50px]  font-bold">
        <div>
          <div id="left">
            <div className="pb-20  ">
              <div className="">
                <h5 className="pb-4 text-xl font-bold">BFC</h5>
                <div className="flex gap-40 text-gray-600">
                  <ul className="">
                    <li className="pb-4">
                      <Link href="#">Products</Link>
                    </li>
                    <li className="pb-4">
                      <Link href="#">Kids</Link>
                    </li>
                    <li className="pb-4">
                      <Link href="#">Restaurants</Link>
                    </li>
                    <li className="pb-4">
                      <Link href="#">Deals</Link>
                    </li>
                    <li className="pb-4">
                      <Link href="#">Delivery</Link>
                    </li>
                  </ul>
                  <ul>
                    <li className="pb-4">
                      <Link href="#">Our history</Link>
                    </li>
                    <li className="pb-4">
                      <Link href="#">Franchising</Link>
                    </li>
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
                <Image src="/icons/tiktok-icon.svg" width={22} height={22} />
              </Link>
            </li>
            <li>
              <div className="h-6 border-l border-gray-800"></div>
            </li>
            <li>
              <Link href="#">
                <Image
                  src="/icons/black-instagram-icon.svg"
                  width={24}
                  height={24}
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
