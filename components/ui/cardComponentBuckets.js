"use client";
import Image from "next/image";

export const CardComponentBuckets = ({ product, openModal }) => {
  return (
    <div
      key={product.id}
      className="rounded-xl transition duration-300 grid justify-items-center relative"
      onClick={() => openModal(product)}
    >
      <Image
        src={product.src}
        width={450}
        height={450}
        className="rounded-xl shadow-2xl w-[370px] xl:w-[450px]  "
        alt={product.title}
      />
      <h2 className="relative bottom-[115px] md:bottom-[140px] text-2xl xl:text-2xl text-center">
        {product.title}
      </h2>
      <div className="flex justify-items-center absolute bottom-8 md:bottom-12  mt-3 py-4 px-10 mx-auto">
        <button className="py-4 px-10 text-[#422e20] bg-gray-300 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl hover:bg-[#ff6307] hover:text-white">
          See more
        </button>
      </div>
    </div>
  );
};