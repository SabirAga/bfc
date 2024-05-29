"use client";

import React from "react";
import { VideoComponent } from "./videoComponent";


export const Hero = () => {
  return (
    <div className=" pt-[80px] mb-[35px]">
      <div className="mx-auto px-[50px] ">
        {/* <Image src={image} className="mx-auto border rounded-3xl" alt="placeholder"/> */}
        <VideoComponent />
      </div>
    </div>
  );
};

// h-[calc(65vh+100px)]
