import React from "react";
import Image from "next/image";

import placeholderHero from "@/assets/placeholderHero.jpg";

export const Hero = () => {
  return (
    <div className="h-[500px] mt-16  ">
      <div className="justify-center flex h-[500px]">
        <Image src={placeholderHero} width={1300} alt="placeholder"/>
      </div>
    </div>
  );
};
