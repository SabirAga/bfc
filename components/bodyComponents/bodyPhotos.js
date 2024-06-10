import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// Install Swiper modules

const photos = [
  {
    id: 1,
    title: "soHot",
    src: "/images/photos/soHot.png",
  },
  {
    id: 2,
    title: "crunchy",
    src: "/images/photos/crunchy.png",
  },
  {
    id: 3,
    title: "menu",
    src: "/images/photos/menu.png",
  },
];
export const BodyPhotos = () => {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   autoplay: true,
  //   autoplaySpeed: 1400,
  //   speed: 1000,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   cssEase: "linear",
  //   pauseOnFocus: false,
  //   pauseOnHover: true,
  // };

  return (
    <div className="mt-9 mb-20 md:mb-[65px]">
      <div className="lg:hidden ">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          // adjust space between slides
          slidesPerView={1} // how many slides to show in view
          loop={true} // infinite loop
          // autoplay={{
          //   delay: 1500,
          //   disableOnInteraction: false, // continue autoplay after interaction
          // }}
          centeredSlides={true}
          pagination={true}
        >
          {photos.map((photo) => (
            <SwiperSlide key={photo.id}>
              <img
                src={photo.src}
                width={440}
                height={440}
                className="rounded-xl  xl:w-[450px] px-1"
                alt={photo.title}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* <div className="lg:hidden mx-auto">
        <Slider {...settings}>
          {photos.map((photo) => (
            <Image
              key={photo.id}
              src={photo.src}
              width={440}
              height={440}
              className="rounded-xl w-[350px] xl:w-[450px] px-1"
              alt={photo.title}
            />
          ))}
        </Slider>
      </div> */}
      <div className="hidden lg:flex  mx-auto md:justify-between md:gap-[18px]">
        {photos.map((photo) => (
          <Image
            key={photo.id}
            src={photo.src}
            width={440}
            height={550}
            className="rounded-xl w-[350px] xl:w-[450px]"
            alt={photo.title}
          />
        ))}
      </div>
    </div>
  );
};
