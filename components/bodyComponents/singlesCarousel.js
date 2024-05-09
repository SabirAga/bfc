'use client'

import {SlickCarousel} from "../ui/carouselComponent";

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
    }
  ];

  export const SingleProductCarousel =()=>{
    return(
        <SlickCarousel images={images}/>
    )
  }