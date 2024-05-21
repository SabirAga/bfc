import React from "react";
import Image from "next/image";

function Dessert(props) {
  return (
    <div className="px-[50px] pt-[68px]">
      <div className="mt-24 pl-[100px] ">
        <div className="grid gap-y-8">
          <div className="grid place-items-center px-9 py-5">
            <h1 className="text-4xl pb-4">Specials</h1>
            <ul className="grid gap-7 text-2xl ">
              <div className="grid gap-7 text-3xl grid-cols-2">
                <li className="grid place-items-center">
                  <Image
                    src="/images/products/singleItems/desserts/37.png"
                    width={450}
                    height={450}
                    className="rounded-xl shadow-2xl"
                  />
                  <h2 className="relative bottom-36">Chocolate Fudge Brownie</h2>
                </li>
                <li className="grid place-items-center">
                  <Image
                    src="/images/products/singleItems/desserts/38.png"
                    width={450}
                    height={450}
                    className="rounded-xl shadow-2xl"
                  />
                  <h2 className="relative bottom-36">Cookie Dough</h2>
                </li>
              </div>
              <div className="flex justify-self-center gap-7 text-3xl">
                <li className="grid place-items-center">
                  <Image
                    src="/images/products/singleItems/desserts/39.png"
                    width={450}
                    height={450}
                    className="rounded-xl shadow-2xl "
                  />
                  <h2 className="relative bottom-36">Strawberry Cheesecake</h2>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dessert;
