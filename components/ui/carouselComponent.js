import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import React, { useRef } from "react";
import { useTranslation } from "react-i18next";

// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       onClick={onClick}
//       style={{
//         ...style,
//         display: "block",
//         transform: "scale(1.7)",
//         marginLeft: "-20px",
//         marginRight: "-20px",
//         backgroundColor: "black",
//       }}
//     />
//   );
// }

export const SlickCarousel = ({ products, openModal, category }) => {
  const filteredProducts = category
    ? products.filter((product) => product.category === category)
    : products;
  const { t } = useTranslation();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className=" m-auto ">
      <Slider {...settings}>
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="rounded-xl transition duration-300 grid justify-items-center mx-auto relative"
            onClick={() => openModal(product)}
          >
            <Image
              src={product.src}
              width={450}
              height={450}
              className="rounded-xl md:shadow-2xl mx-auto w-[390px] px-2 xl:w-[450px]"
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
        ))}
      </Slider>
    </div>
  );
};

export const SlickCarouselBuckets = ({ products, openModal }) => {
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
      <Slider {...settings}>
        {products.map((product) => (
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
        ))}
      </Slider>
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
