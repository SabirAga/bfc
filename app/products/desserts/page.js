"use client";

import React, { useState } from "react";
import Image from "next/image";
import ReactModal from "@/components/ui/ReactModal";

const products = [
  {
    id: 1,
    title: "Chocolate Fudge Brownie",
    src: "/images/products/singleItems/desserts/37.png",
  },
  {
    id: 2,
    title: "Cookie Dough",
    src: "/images/products/singleItems/desserts/38.png",
  },
  {
    id: 3,
    title: "Strawberry Cheesecake",
    src: "/images/products/singleItems/desserts/39.png",
  },
];

function Dessert() {
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
        <div className="min-h-screen px-9 py-5">
          <h1 className="text-4xl font-bold text-center text-black mb-8">
            Desserts
          </h1>
          <div className="grid grid-cols-2 gap-x-7 justify-items-center ">
            {products.map((product, index) => (
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
                  className="rounded-xl shadow-2xl"
                  alt={product.title}
                />
                <h2 className="relative bottom-36 text-3xl text-center">
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

export default Dessert;

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
