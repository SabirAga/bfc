import Image from "next/image";
import React from "react";

function ModalComp(props) {
  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden border-gray-50 py-6">
      <div>
        <label
          htmlFor="tw-modal"
          className="cursor-pointer rounded  px-8 py-4 text-white active:bg-slate-400"
        >
          <li className="grid place-items-center">
            <Image
              src="/images/products/singleItems/burgers/chickenBurger.png"
              width={450}
              height={450}
              className="rounded-xl shadow-2xl"
            />
            <h2 className="relative bottom-36">Chicken Burger</h2>
          </li>
        </label>
      </div>

      <input
        type="checkbox"
        id="tw-modal"
        className="peer fixed appearance-none opacity-0"
      />

      {/* modal */}
      <label
        htmlFor="tw-modal"
        className="pointer-events-none invisible fixed inset-0 flex cursor-pointer items-center justify-center overflow-hidden overscroll-contain bg-slate-700/30 opacity-0 transition-all duration-200 ease-in-out peer-checked:pointer-events-auto peer-checked:visible peer-checked:opacity-100 peer-checked:[&>*]:translate-y-0 peer-checked:[&>*]:scale-100 peer-checked:[&>*]:overflow-visible"
      >
        <label
          className="max-h-[calc(100vh-5em)] overflow-y-auto overscroll-contain rounded-xl bg-white  text-black shadow-2xl transition"
          htmlFor=""
        >
          <label
            htmlFor="tw-modal"
            className="absolute -top-4 -right-4 w-10 h-10 bg-red-600 text-white flex items-center justify-center rounded-full text-2xl font-semibold cursor-pointer hover:bg-red-700 z-50"
          >
            ×
          </label>

          <div className="flex ">
            <li className="grid place-items-center">
              <Image
                src="/images/products/singleItems/burgers/chickenBurger.png"
                width={450}
                height={450}
                className="rounded-l-xl "
              />
              <h2 className="absolute bottom-32 text-3xl">Chicken Burger</h2>
            </li>
            <div className="w-1/2 flex items-center justify-center p-4 text-center bg-slate-100 rounded-xl">
              <p>Some text with some information</p>
            </div>
          </div>
        </label>
      </label>
    </div>
  );
}

export default ModalComp;
