import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

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
        }}
      />
    );
  }

  export const SlickCarousel =({images})=> {
    const settings = {
      dots: false,
      // infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <SamplePrevArrow />,
      prevArrow: <SamplePrevArrow />,
    };
  
    return (
      <div className="w-4/5 m-auto ">
        <div className="">
          <Slider {...settings} className="h-[300px]">
            {images.map((image) => (
              <div className="flex text-center">
                <Image
                  src={image.src}
                  alt={image.name}
                  height={300}
                  width={300}
                  className="px-2 rounded-3xl h-[300px] w-[400px]"
                />
                <p className="pt-2 uppercase text-2xl font-bold text-white">
                  {image.name}
                </p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
  }
  