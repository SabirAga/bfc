"use client";
import React, { useState } from "react";
import ReactModal from "@/components/ui/ReactModal";
import { CardComponentDouble } from "@/components/ui/cardComponent";
import { useTranslation } from "react-i18next";

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

  return (
    <div className="px-[50px] pt-[68px]">
      <div className="mt-24 pl-[100px] ">
        <div className="grid place-items-center px-9 py-5">
          <h1 className="text-4xl mb-8">Buckets</h1>
          <div className="grid grid-cols-2 gap-x-7 justify-items-center ">
            {products(t).map((product, index) => (
              <CardComponentDouble product={product} openModal={openModal} />
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
