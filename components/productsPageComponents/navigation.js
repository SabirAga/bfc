"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";


function NavigationProducts(props) {
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
  // className = "mt-52 bg-gray-100 w-fit rounded-xl px-";
  return (
    <div className="px-[50px] ">
      <div className="px-[50px]">
        <div>
          <div
            className={
              shrunk
                ? "scale-90 mt-44 bg-gray-100 w-fit rounded-xl  transition-all duration-300 fixed"
                : "mt-44 bg-gray-100 w-fit rounded-xl  transition-all duration-300 fixed"
            }
          >
            <ul className="-pt-1 ">
              <li className="pb-4">
                <Link href="/products/burgers">
                  <img
                    src="/icons/products/edited/burger.png"
                    alt=""
                    className="w-24 hover:scale-110 duration-300"
                    // width={24} height={24}
                  />
                </Link>
              </li>
              <li className="pb-4">
                <Link href="/products/buckets">
                  <img
                    src="/icons/products/edited/bucket.png"
                    alt=""
                    className="w-24 hover:scale-110 duration-300"
                    // width={24} height={24}
                  />
                </Link>
              </li>
              <li className="pb-4">
                <Link href="/products/desserts">
                  <img
                    src="/icons/products/edited/dessert.png"
                    alt=""
                    className="w-24 hover:scale-110 duration-300"
                    // width={24} height={24}
                  />
                </Link>
              </li>
              <li className="pb-4">
                <Link href="/products/drinks">
                  <img
                    src="/icons/products/edited/drinks.png"
                    alt=""
                    className="w-24 hover:scale-110 duration-300"
                    // width={24} height={24} quality={100}
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavigationProducts;
