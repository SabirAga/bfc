import { Products } from "./bodyComponents/products";
import CarouselSlick from "./ui/carousel";
import CarouselComp from "./ui/carousel";

export const Body = () => {
  return (
    <div className="mt-4 h-[800px] bg-orange-300">
      <Products />
      <CarouselComp />
    </div>
  );
};
