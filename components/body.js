import { MenusCarousel } from "./bodyComponents/menuCarousel";
import { Products } from "./bodyComponents/products";

import { SingleProductCarousel } from "./bodyComponents/singlesCarousel";

export const Body = () => {
  return (
    <div className="mt-4 h-[1000px] bg-orange-300">
      <Products />
      <SingleProductCarousel />
      <MenusCarousel />
    </div>
  );
};
