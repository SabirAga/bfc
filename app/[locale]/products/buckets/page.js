"use client";
import React, { useState } from "react";
import ReactModal from "@/components/ui/ReactModal";
import Image from "next/image";

const products = [
  {
    title: "Tenders",
    src: "/images/products/singleItems/buckets/10tenders.png",
  },
  {
    title: "Hotwings",
    src: "/images/products/singleItems/buckets/26hotwings.png",
  },
  {
    title: "Bucket Mix",
    src: "/images/products/singleItems/buckets/bucketMix.png",
  },
  {
    title: "Duo Bucket",
    src: "/images/products/singleItems/buckets/duoBucket.png",
  },
  {
    title: "Family Bucket",
    src: "/images/products/singleItems/buckets/familyBucket.png",
  },
  {
    title: "Maxi Bucket",
    src: "/images/products/singleItems/buckets/maxi.png",
  },
];

function Buckets(props) {
  const [currentProduct, setCurrentProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (product) => {
    setCurrentProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentProduct(null); // Clear the current product when closing the modal
  };

  return (
    <div className="px-[50px] pt-[68px]">
      <div className="mt-24 pl-[100px] ">
        <div className="grid place-items-center px-9 py-5">
          <h1 className="text-4xl mb-8">Buckets</h1>
          <div className="grid grid-cols-2 gap-x-7 justify-items-center ">
            {products.map((product, index) => (
              <div
                key={product.id}
                className="rounded-xl  transition duration-300 grid justify-items-center relative "
                onClick={() => openModal(product)}
              >
                <Image
                  src={product.src}
                  width={450}
                  height={450}
                  className="rounded-xl shadow-2xl"
                  alt={product.title}
                />
                <h2 className="relative bottom-32 text-3xl text-center">
                  {product.title}
                </h2>
                <div className="flex justify-items-center absolute  bottom-12  mt-3 py-4 px-10 mx-auto">
                    <button className="py-4 px-10 bg-gray-300 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl hover:bg-[#ff6307] hover:text-white">
                      See more
                    </button>
                  </div>
              </div>
            ))}
          </div>
          {isModalOpen && currentProduct && (
            <ReactModal
              product={currentProduct}
              modalOpen={isModalOpen}
              modalClose={closeModal}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Buckets;
