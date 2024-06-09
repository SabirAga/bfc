import bodyImg from "@/public/images/placeholders/bodyImg.jpg";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import soHot from "@/public/images/photos/soHot.png";
import crunchy from "@/public/images/photos/crunchy.png";
import menu from "@/public/images/photos/menu.png";

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
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="mt-9 md:mb-[65px]">
      <div className="lg:hidden mx-auto">
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
      </div>
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
