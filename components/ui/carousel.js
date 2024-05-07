"use client";

import React from "react";
import { Carousel, Typography, Button } from "@material-tailwind/react";
import Image from "next/image";

import tenders from "@/assets/products/10tenders.jpg";
import hotwings from "@/assets/products/26Hotwings.jpg";
import bucket from "@/assets/products/BucketMiet10.jpg";
import chicken from "@/assets/products/ChickenBurger.jpg";
import crunch from "@/assets/products/CrunchyBurger.jpg";

// const images = [
//   {
//     name: tenders,
//     src: "assets/products/10tenders.JPG",
//   },
//   {
//     name: hotwings,
//     src: { hotwings },
//   },
//   {
//     name: bucket,
//     src: { bucket },
//   },
//   {
//     name: chicken,
//     src: { chicken },
//   },
//   {
//     name: crunch,
//     src: { crunch },
//   },
// ];

function CarouselComp() {
  return (
    <div className="flex items-center justify-center h-[600px] pb-4">
      <Carousel className="rounded-xl  w-4/5 ">
          <Image src={tenders} className="h-full w-full object-cover" />
          <Image src={hotwings} className="h-full w-full object-cover" />
          <Image src={bucket} className="h-full w-full object-cover" />
          <Image src={chicken} className="h-full w-full object-cover" />
          <Image src={crunch} className="h-full w-full object-cover" />
      </Carousel>
    </div>
  );
}

export default CarouselComp;
