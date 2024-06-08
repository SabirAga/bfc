"use client";

import React from "react";
import { VideoComponent } from "./videoComponent";


export const Hero = () => {
  return (
    <div className=" pt-[110px] mb-5 lg:mb-[35px]">
      <div className="mx-auto lg:px-[50px] ml-1 ">
        {/* <Image src={image} className="mx-auto border rounded-3xl" alt="placeholder"/> */}
        <VideoComponent />
      </div>
    </div>
  );
};

// h-[calc(65vh+100px)]
