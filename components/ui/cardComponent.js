"use client";
import Image from "next/image";

export const CardComponentDouble = ({
  product,
  openModal,
}) => {
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
        className="rounded-xl shadow-2xl w-[400px] xl:w-[450px]  "
        alt={product.title}
      />
      <h2 className="relative bottom-[135px]  text-2xl xl:text-2xl text-center">
        {product.title}
      </h2>
      <div className="flex justify-items-center absolute  bottom-12  mt-3 py-4 px-10 mx-auto">
        <button className="py-4 px-10 text-[#422e20] bg-gray-300 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl hover:bg-[#ff6307] hover:text-white">
          See more
        </button>
      </div>
    </div>
  );
};

export const CardComponentTriple = ({
  product,
  index,
  openModal,
}) => {
  return (
    <div
      key={product.id}
      className={`rounded-xl transition duration-30 relative justify-items-center grid  ${
        index === 2
          ? "col-start-1 col-span-2 justify-self-center relative justify-items-center grid"
          : ""
      }`}
      onClick={() => openModal(product)}
    >
      <Image
        src={product.src}
        width={450}
        height={450}
        className="rounded-xl shadow-2xl w-[400px] xl:w-[450px]"
        alt={product.title}
      />
      <h2 className="relative bottom-36 text-2xl xl:text-3xl text-center">
        {product.title}
      </h2>
      <div className="flex justify-items-center absolute  bottom-12  mt-3 py-4 px-10 mx-auto">
        <button className="py-4 px-10 bg-gray-300 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl hover:bg-[#ff6307] hover:text-white">
          See more
        </button>
      </div>
    </div>
  );
};

// {/* <CardComponent product={product} index={index} src={chickenBurgers.src} title={chickenBurgers.title} id={chickenBurgers.id} /> */}
