import React from "react";

import Image from "next/image";
import logoImg from "@/public/images/logoBFC.jpg";

export const Footer = () => {
  return (
    <>
      <div className="bg-blue-200 h-[300px] flex justify-between">
        <div>
          <div>PAGES OF THE SITE</div>
          <div>CONTACT</div>
          <div>OTHER</div>
        </div>
        <div className="px-8 pt-4">
          <Image src={logoImg} alt="logo" height={150} className="" />
        </div>
      </div>
    </>
  );
};
