"use client";

import React from "react";
import { VideoComponent } from "./videoComponent";

export const Hero = () => {
  return (
    <div className="h-[500px] mt-24  mx-auto ">
      <div className=" h-full ">
       <VideoComponent />
        

        {/* <video width="750" height="500" autoPlay>
          <source src="/images/heroVideo.mp4" type="video/mp4"/>
        </video> */}
      </div>
    </div>
  );
};


// h-[calc(65vh+100px)]