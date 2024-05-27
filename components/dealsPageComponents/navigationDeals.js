"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

function NavigationDeals(props) {
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
    <div className="px-[50px]">
      <div className="px-[50px]">
        <div>
          <div
            className={
              shrunk
                ? "scale-90 mt-52 bg-gray-100 w-fit rounded-xl  transition-all duration-300 "
                : "mt-52 bg-gray-100 w-fit rounded-xl  transition-all duration-300"
            }
          >
            <ul className="-pt-1 ">
              <li className="pb-4">
                <Link href="/deals">
                  <img
                    src="/icons/deals/meals.png"
                    alt=""
                    className="w-28 hover:scale-110 duration-300"
                    // width={24} height={24}
                  />
                </Link>
              </li>
              <li className="pb-4">
                <Link href="/deals/menus">
                  <img
                    src="/icons/deals/menus.png"
                    alt=""
                    className="w-28 hover:scale-110 duration-300"
                    // width={24} height={24}
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

export default NavigationDeals;
