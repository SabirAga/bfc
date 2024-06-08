"use client";
import Image from "next/image";

export const CardComponentDouble = ({ product, openModal }) => {
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
      <h2 className="relative bottom-[140px] md:bottom-[130px] lg:bottom-[150px] md:text-xl lg:text-2xl  text-center">
        {product.title}
      </h2>
      <div className="flex absolute  bottom-12  mt-3 py-4 px-10 mx-auto md:flex md:justify-center md:left-0 md:right-0">
        <button className=" mx-auto py-4 px-10 text-[#422e20] bg-gray-300 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl hover:bg-[#ff6307] hover:text-white">
          See more
        </button>
      </div>
    </div>
  );
};

export const CardComponentTriple = ({ product, index, openModal }) => {
  return (
    <div
      key={product.id}
      className={`rounded-xl transition duration-30 relative justify-items-center grid  ${
        index === 2
          ? "md:col-start-1 md:col-span-2 md:justify-self-center relative justify-items-center grid"
          : ""
      }`}
      onClick={() => openModal(product)}
    >
      <Image
        src={product.src}
        width={450}
        height={450}
        className="rounded-xl shadow-2xl w-[370px] xl:w-[450px]  "
        alt={product.title}
      />
      <h2 className="relative bottom-[130px] md:bottom-[120px] lg:bottom-[150px] md:text-xl lg:text-2xl  text-center">
        {product.title}
      </h2>
      <div className="flex justify-items-center absolute  bottom-10  mt-3 py-4 px-10 mx-auto md:flex md:justify-center md:left-0 md:right-0">
        <button className="py-4 px-10 bg-gray-300 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl hover:bg-[#ff6307] hover:text-white">
          See more
        </button>
      </div>
    </div>
  );
};

// {/* <CardComponent product={product} index={index} src={chickenBurgers.src} title={chickenBurgers.title} id={chickenBurgers.id} /> */}

// {`rounded-xl transition duration-30 relative justify-items-center grid  ${
//   index === 2
//     ? "col-start-1 col-span-2 justify-self-center relative justify-items-center grid"
//     : ""
// }`}
