"use client";
import React, { useState } from "react";
import ReactModal from "@/components/ui/ReactModal";

import { useTranslation } from "react-i18next";
import { CardComponentBuckets } from "@/components/ui/cardComponentBuckets";
import { SlickCarouselBuckets } from "@/components/ui/carouselComponent";

const products = (t) => [
  {
    title: "Tenders",
    src: "/images/products/singleItems/buckets/10tenders.png",
    description: t("products:10_tenders"),
  },
  {
    title: "Hotwings",
    src: "/images/products/singleItems/buckets/26hotwings.png",
    description: t("products:26_hotwings"),
  },
  {
    title: "Bucket Mix",
    src: "/images/products/singleItems/buckets/bucketMix.png",
    description: t("products:bucket_mix"),
  },
  {
    title: "Duo Bucket",
    src: "/images/products/singleItems/buckets/duoBucket.png",
    description: t("products:duo_bucket"),
  },
  {
    title: "Family Bucket",
    src: "/images/products/singleItems/buckets/familyBucket.png",
    description: t("products:family_bucket"),
  },
  {
    title: "Maxi Bucket",
    src: "/images/products/singleItems/buckets/maxi.png",
    description: t("products:maxi_bucket"),
  },
];

function Buckets(props) {
  const { t } = useTranslation();

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

  const translatedProducts = products(t);

  return (
    <div className="md:px-[50px] md:pt-[68px]">
      <div className="md:mt-24 md:pl-[100px] pl-0">
        <div className=" md:px-9 py-5">
          <h1 className="text-4xl font-bold text-center text-black mb-8">
            Buckets
          </h1>
          <div className="md:hidden">
            <SlickCarouselBuckets
              products={translatedProducts}
              openModal={openModal}
            />
          </div>
          <div className="hidden md:grid md:grid-cols-2 gap-x-7 justify-items-center">
            {products(t).map((product, index) => (
              <CardComponentBuckets
                product={product}
                key={product.id}
                openModal={openModal}
              />
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
