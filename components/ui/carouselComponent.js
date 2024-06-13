
import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

export const Carousel = ({ products, openModal, category }) => {
  const filteredProducts = category
    ? products.filter((product) => product.category === category)
    : products;
  const { t } = useTranslation();

  return (
    <div className=" m-auto">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        slidesPerView={1} // how many slides to show in view
        loop={true} // infinite loop
        // autoplay={{
        //   delay: 1500,
        //   disableOnInteraction: false, // continue autoplay after interaction
        // }}
        pagination={true}
      >
        {filteredProducts.map((product) => (
          <SwiperSlide key={product.id}>
            <div
              key={product.id}
              className="rounded-xl transition duration-300 grid justify-items-center mx-auto relative"
              onClick={() => openModal(product)}
            >
              <Image
                src={product.src}
                width={450}
                height={450}
                className="rounded-xl md:shadow-2xl mx-auto w-[390px] px-1 xl:w-[450px]"
                alt={product.title}
              />
              <h2 className="relative bottom-[120px] text-xl xl:text-2xl text-center">
                {product.title}
              </h2>
              <div className="absolute bottom-9 mt-3 py-4 px-10 justify-center flex left-0 right-0">
                <button className=" py-4 px-10 text-[#422e20] bg-gray-300 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl hover:bg-[#ff6307] hover:text-white">
                  See more
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export const CarouselBuckets = ({ products, openModal }) => {
  const { t } = useTranslation();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="m-auto ">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        slidesPerView={1} // how many slides to show in view
        loop={true} // infinite loop
        // autoplay={{
        //   delay: 1500,
        //   disableOnInteraction: false, // continue autoplay after interaction
        // }}
        pagination={true}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div
              key={product.id}
              className="rounded-xl transition duration-300 grid justify-items-center relative"
              onClick={() => openModal(product)}
            >
              <Image
                src={product.src}
                width={450}
                height={450}
                className="rounded-xl md:shadow-2xl w-[390px] mx-auto px-2 xl:w-[450px]"
                alt={product.title}
              />
              <h2 className="relative bottom-[110px] text-xl  xl:text-2xl text-center">
                {product.title}
              </h2>
              <div className="absolute bottom-8 mt-3 py-4 px-10 justify-center flex left-0 right-0">
                <button className=" py-4 px-10 text-[#422e20] bg-gray-300 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl hover:bg-[#ff6307] hover:text-white">
                  See more
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

// responsive: [
//   {
//     breakpoint: 1024,
//     settings: {
//       slidesToShow: 3,
//       slidesToScroll: 1,
//       infinite: true,
//     },
//   },
//   {
//     breakpoint: 600,
//     settings: {
//       slidesToShow: 2,
//       slidesToScroll: 1,
//       initialSlide: 2,
//       dots: true,
//     },
//   },
//   {
//     breakpoint: 480,
//     settings: {
//       slidesToShow: 1,
//       slidesToScroll: 1,
//     },
//   },
// ],
