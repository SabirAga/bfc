import { MenusCarousel } from "./bodyComponents/menuCarousel";
import { SingleProductCarousel } from "./bodyComponents/singlesCarousel";

import { BodyNav } from "./bodyComponents/bodyNav";
import { BodyPhotos } from "./bodyComponents/bodyPhotos";
import { BodyNews } from "./bodyComponents/bodyNews";
import TestComp from "./test";

export const Body = () => {
  return (
    <div className="px-[50px]">
      <div className="mt-[55px] grid">
        <h1 className="text-[52px] text-center px-3 font-bold font-cooperBlack">
          Hello!
        </h1>
        <BodyNav />
        <BodyPhotos />
        <BodyNews />
      </div>
    </div>
  );
};

{
  /* <SingleProductCarousel /> 
      <MenusCarousel />  */
}
