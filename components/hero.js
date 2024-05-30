"use client";

import React from "react";
import { VideoComponent } from "./videoComponent";


export const Hero = () => {
  return (
    <div className=" pt-[80px] mb-5 md:mb-[35px]">
      <div className="mx-auto md:px-[50px] px-[10px] ">
        {/* <Image src={image} className="mx-auto border rounded-3xl" alt="placeholder"/> */}
        <VideoComponent />
      </div>
    </div>
  );
};

// h-[calc(65vh+100px)]
