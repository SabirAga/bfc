"use client";

import React, { useState } from "react";
import ReactModal from "@/components/ui/ReactModal";
import { CardComponentTriple } from "@/components/ui/cardComponent";
import { useTranslation } from "react-i18next";
import { SlickCarousel } from "@/components/ui/carouselComponent";

const products = (t) => [
  {
    id: 1,
    title: "Chocolate Fudge Brownie",
    src: "/images/products/singleItems/desserts/37.png",
    description: t("products:chocolate_fudge_brownie"),
  },
  {
    id: 2,
    title: "Cookie Dough",
    src: "/images/products/singleItems/desserts/38.png",
    description: t("products:cookie_dough"),
  },
  {
    id: 3,
    title: "Strawberry Cheesecake",
    src: "/images/products/singleItems/desserts/39.png",
    description: t("products:strawberry_cheesecake"),
  },
];

function Desserts() {
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
    <div className="md:mt-24 md:pl-[100px] pl-0 ">
        <div className=" md:px-9 py-5">
          <h1 className="text-4xl font-bold text-center text-black mb-8">
            Desserts
          </h1>
          <div className="md:hidden">
            <SlickCarousel
              products={translatedProducts}
              openModal={openModal}
            />
          </div>
          <div className="hidden md:grid md:grid-cols-2 gap-x-7 justify-items-center ">
            {products(t).map((product, index) => (
              <CardComponentTriple
                key={product.id}
                product={product}
                index={index}
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

export default Desserts;

// import React, { useState } from "react";
// import Image from "next/image";
// import ModalComp from "@/components/ui/Modal";
// import ModalTest from "@/components/ui/ModalTest";
// import ReactModal from "@/components/ui/ReactModal";

// const products = [
//   {
//     id: 1,
//     title: "Chocolate Fudge Brownie",
//     src: "/images/products/singleItems/desserts/37.png",
//   },
//   {
//     id: 2,
//     title: "Cookie Dough",
//     src: "/images/products/singleItems/desserts/38.png",
//   },
//   {
//     id: 3,
//     title: "Strawberry Cheesecake",
//     src: "/images/products/singleItems/desserts/39.png",
//   },
// ];
// function Dessert() {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [currentProduct, setCurrentProduct] = useState(null);
//   // const toggleClick = (productId) => {
//   //   // setProductContent(products.find(({ id }) => id === productId));
//   //   setIsModalOpen(true);
//   // };

//   const openModal = (product) => {
//     setCurrentProduct(product)
//     setIsModalOpen(true);
//   };

//   const closeModal = (e) => {
//     e.stopPropagation();
//     setIsModalOpen(false);
//     setCurrentProduct(null)
//   };

//   return (
//     <div className="px-[50px] pt-[68px]">
//       <div className="mt-24 pl-[100px] ">
//         <div className="grid place-items-center px-9 py-5">
//           <h1 className="text-4xl pb-4">Specials</h1>
//           <ul className="grid gap-7 text-2xl ">
//             <div className="grid gap-7 text-3xl grid-cols-2">
//               <li className="grid place-items-center" onClick={openModal}>
//                 <Image
//                   src={products[0].src}
//                   width={450}
//                   height={450}
//                   className="rounded-xl shadow-2xl"
//                 />
//                 <h2 className="relative bottom-36">{products[0].title}</h2>
//                 {isModalOpen && (
//                   <ReactModal
//                     product={products[0]}
//                     modalOpen={isModalOpen}
//                     modalClose={closeModal}
//                   />
//                 )}
//               </li>
//               <li className="grid place-items-center" onClick={openModal}>
//                 <Image
//                   src={products[1].src}
//                   width={450}
//                   height={450}
//                   className="rounded-xl shadow-2xl"
//                 />
//                 <h2 className="relative bottom-36">{products[1].title}</h2>
//                 {isModalOpen && (
//                   <ReactModal
//                     product={products[1]}
//                     modalOpen={isModalOpen}
//                     modalClose={closeModal}
//                   />
//                 )}
//               </li>
//             </div>
//             <div className="flex justify-self-center gap-7 text-3xl">
//               <li className="grid place-items-center" onClick={openModal}>
//                 <Image
//                   src={products[2].src}
//                   width={450}
//                   height={450}
//                   className="rounded-xl shadow-2xl "
//                 />
//                 <h2 className="relative bottom-36">{products[2].title}</h2>
//                 {isModalOpen && (
//                   <ReactModal
//                     product={products[2]}
//                     modalOpen={isModalOpen}
//                     modalClose={closeModal}
//                   />
//                 )}
//               </li>
//             </div>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Dessert;
