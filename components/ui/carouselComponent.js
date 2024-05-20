import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import React, { useRef } from "react";

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
      style={{
        ...style,
        display: "block",
        transform: "scale(1.7)",
        marginLeft: "-20px",
        marginRight: "-20px",
        backgroundColor: "black",
      }}
    />
  );
}

export const SlickCarousel = ({ products }) => {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  const settings = {
    dots: false,
    // infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-4/5 m-auto ">
      <div className="">
        <Slider
          ref={(slider) => {
            sliderRef = slider;
          }}
          {...settings}
          className="h-[300px] items-center"
        >
          {products.map((product) => (
            <div
              key={product.title}
              className="flex text-center  justify-center"
            >
              <Image
                src={product.src}
                alt={product.title}
                height={300}
                width={300}
                className="px-2  mx-auto rounded-3xl h-[300px] w-[400px] "
              />
              <p className="pt-2 uppercase text-2xl font-bold  text-black">
                {product.title}
              </p>
            </div>
          ))}
        </Slider>
        <div className="pt-20 flex gap-6 justify-center ">
          <button
            onClick={previous}
            className="border-1 bg-gray-300 py-4 px-5 w-32 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl hover:bg-[#ff6307] hover:text-white"
          >
            Previous
          </button>
          <button
            onClick={next}
            className="border-1 bg-gray-300 py-4 px-5 w-32 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl hover:bg-[#ff6307] hover:text-white"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
