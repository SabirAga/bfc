import { MenusCarousel } from "./bodyComponents/menuCarousel";

import { SingleProductCarousel } from "./bodyComponents/singlesCarousel";

export const Body = () => {
  return (
    <div className="mt-12 h-[900px] bg-orange-300">
      <h1 className="text-4xl py-8  font-arvo text-center text-white uppercase font-bold">
        Products
      </h1>
      <SingleProductCarousel />
      <MenusCarousel />
    </div>
  );
};
