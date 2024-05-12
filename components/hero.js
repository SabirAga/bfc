"use client";

import React from "react";
import { VideoComponent } from "./videoComponent";
import image from "/Users/sabiraga/Desktop/projects/BFC/bfc/public/images/placeholders/hero.jpg";
import Image from "next/image";

export const Hero = () => {
  return (
    <div className=" pt-[65px] mb-[35px]">
      <div className="px-[50px]">
        <Image src={image} className="mx-auto border rounded-3xl" />
        {/* <VideoComponent /> */}
      </div>
    </div>
  );
};

// h-[calc(65vh+100px)]
