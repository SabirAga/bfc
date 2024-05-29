import Image from "next/image";
import React from "react";

import placeholder from "@/public/images/restaurants/placeholders/placeholder.png";

const restaurants = [
  {
    id: 1,
    title: "BFC Anspach",
    address: "Boulevard Anspach 50, 1000 Brussels",
    image: placeholder,
  },
  {
    id: 2,
    title: "BFC Anderlecht",
    address: "Rue Wayez 109, 1070 Anderlecht",
    image: placeholder,
  },
  {
    id: 3,
    title: "BFC La Louvière",
    address: "Rue Albert 1 84, 7100 La Louvière",
    image: placeholder,
  },
  {
    id: 4,
    title: "BFC Zaventem",
    address: "Sint stefaanstraat 17, 1932 Sint Stevens Woluwe",
    image: placeholder,
  },
  {
    id: 5,
    title: "BFC Saint-Gilles",
    address: "Parvis de Saint Gilles 10, 1060 Saint Gilles",
    image: placeholder,
  },
  {
    id: 6,
    title: "BFC Schaerbeek (SOON)",
    address: "Schaerbeek",
    image: placeholder,
  },
];

function Restaurants(props) {
  return (
    <>
      <div className="px-[50px] pt-[68px]">
        <div className="mt-36 pl-[100px] ">
          <div id="cards">
            <h1 className="text-4xl mb-8 text-center">Restaurants</h1>
            <div className="grid grid-cols-2 gap-y-10 justify-items-center">
              {restaurants.map((restaurant) => (
                <figure key={restaurant.id} className="group relative">
                  <Image src={restaurant.image} />
                  <div className="absolute px-4 py-6 w-full bottom-0 h-full flex flex-col justify-between z-10 ">
                    <div className=" group-hover:opacity-100 opacity-0">
                      <h1 className="text-white text-xl">
                        {restaurant.address}
                      </h1>
                    </div>
                    <h1 className="text-2xl">{restaurant.title}</h1>
                  </div>
                  <div className="bg-gradient-to-t bg-black w-full h-full absolute top-0 left-0 opacity-50 md:opacity-0 md:group-hover:opacity-50 transition-all"></div>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Restaurants;
