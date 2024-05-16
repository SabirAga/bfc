import React from "react";
import Link from "next/link";


function NavBarProducts(props) {
  return (
    <div className="px-[50px]">
      <div className="px-[50px]">
        <div>
          <div className="mt-20 bg-gray-300 w-fit rounded-xl px-">
            <ul className="-pt-1 ">
              <li className="pb-5">
                <Link href="/products/burgers">
                  <img
                    src="/icons/products/edited/burger.png"
                    alt=""
                    className="w-32"
                  />
                </Link>
              </li>
              <li className="pb-5">
                <Link href="/products/buckets">
                  <img
                    src="/icons/products/edited/bucket.png"
                    alt=""
                    className="w-32"
                  />
                </Link>
              </li>
              <li className="pb-5">
                <Link href="/products/salads">
                  <img
                    src="/icons/products/edited/Salad.png"
                    alt=""
                    className="w-32"
                  />
                </Link>
              </li>
              <li className="pb-5">
                <Link href="/products/desserts">
                  <img
                    src="/icons/products/edited/dessert.png"
                    alt=""
                    className="w-32"
                  />
                </Link>
              </li>
              <li className="pb-5">
                <Link href="/products/drinks">
                  <img
                    src="/icons/products/edited/drinks.png"
                    alt=""
                    className="w-32"
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

export default NavBarProducts;
