'use client'

import {SlickCarousel} from "../ui/carouselComponent";

const images = [
    {
      name: "10 tenders",
      src: "/images/products/singleItems/10tenders.jpeg",
    },
    {
      name: "26 hotwings",
      src: "/images/products/singleItems/26Hotwings.jpeg",
    },
    {
      name: "bucket",
      src: "/images/products/singleItems/BucketMiet10.jpeg",
    },
    {
      name: "chicken burger",
      src: "/images/products/singleItems/ChickenBurger.jpeg",
    },
    {
      name: "crunchy burger",
      src: "/images/products/singleItems/CrunchyBurger.jpeg",
    },
    {
      name: "duo bucket",
      src: "/images/products/singleItems/DuoBucket.jpeg",
    },
    {
      name: "family bucket",
      src: "/images/products/singleItems/FamilyBucket.jpeg",
    },
    {
      name: "fish burger",
      src: "/images/products/singleItems/FishBurger.jpeg",
    },
    {
      name: "maxi bucket",
      src: "/images/products/singleItems/MaxiBucket.jpeg",
    },
    {
      name: "maxi chicken",
      src: "/images/products/singleItems/MaxiChicken.jpeg",
    },
    {
      name: "maximeat",
      src: "/images/products/singleItems/MaxiMeat.jpeg",
    },
    {
      name: "meat burger",
      src: "/images/products/singleItems/MeatBurger.jpeg",
    },
    {
      name: "wrap",
      src: "/images/products/singleItems/Wrap.jpeg",
    },
    {
      name: "frites",
      src: "/images/products/singleItems/frites.jpeg",
    },
  ];

  export const SingleProductCarousel =()=>{
    return(
        <SlickCarousel images={images}/>
    )
  }