import { MenusCarousel } from "./bodyComponents/menuCarousel";
import { SingleProductCarousel } from "./bodyComponents/singlesCarousel";

import Image from "next/image";

export const Body = () => {
  return (
    <>
      <div className="">
        <div className=" bg-[#da0000]">
          <h1 className="text-4xl py-6  w-[300px] mx-auto font-cooperBlack text-center text-black  font-bold">
            Hello!
          </h1>

          <div className="flex justify-between w-2/3 mx-auto pt-4">
            <Image
              src="/images/photos/feel.jpeg"
              width={400}
              height={400}
              className="rounded-xl"
              alt=""
            />
            <Image
              src="/images/photos/menu.jpeg"
              width={400}
              height={400}
              className="rounded-xl"
              alt=""
            />
            <Image
              src="/images/photos/soHot.jpeg"
              width={400}
              height={400}
              className="rounded-xl"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};
{
  /* <SingleProductCarousel /> 
      <MenusCarousel />  */
}
