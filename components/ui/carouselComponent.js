import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const images = [
  {
    title: "10 Tenders",
    src: "/images/products/singleItems/10tenders.jpeg",
  },
  {
    title: "26 Hotwings",
    src: "/images/products/singleItems/26hotwings.jpeg",
  },
  {
    title: "Bucket Mix",
    src: "/images/products/singleItems/bucketMix.jpeg",
  },
  {
    title: "family Bucket",
    src: "/images/products/singleItems/familyBucket.jpeg",
  },
  {
    title: "duo bucket",
    src: "/images/products/singleItems/duoBucket.jpeg",
  },

  {
    title: "maxi Bucket",
    src: "/images/products/singleItems/maxiBucket.jpeg",
  },
  {
    title: "chicken Burger",
    src: "/images/products/singleItems/chickenBurger.jpeg",
  },
  {
    title: "maxi chicken",
    src: "/images/products/singleItems/maxiChicken.jpeg",
  },
  {
    title: "meat Burger",
    src: "/images/products/singleItems/meatBurger.jpeg",
  },
  {
    title: "maxi Meat",
    src: "/images/products/singleItems/maxiMeat.jpeg",
  },
  {
    title: "crunchy Burger",
    src: "/images/products/singleItems/crunchyBurger.jpeg",
  },
  {
    title: "fish Burger",
    src: "/images/products/singleItems/fishBurger.jpeg",
  },
  {
    title: "wrap",
    src: "/images/products/singleItems/wrap.jpeg",
  },
  {
    title: "sandwich",
    src: "/images/products/singleItems/sandwich.jpeg",
  },
  

];


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

export const SlickCarousel = () => {
  const settings = {
    dots: false,
    // infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SamplePrevArrow />,
    prevArrow: <SamplePrevArrow />,
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
          dots:true
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
        <Slider {...settings} className="h-[300px] items-center">
          {images.map((image) => (
            <div key={image.title} className="flex text-center  justify-center">
              <Image
                src={image.src}
                alt={image.title}
                height={300}
                width={300}
                className="px-2  mx-auto rounded-3xl h-[300px] w-[400px] "
              />
              <p className="pt-2 uppercase text-2xl font-bold  text-white">
                {image.title}
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
