import Image from "next/image";
import React from "react";

import placeholder from "@/public/images/restaurants/placeholders/placeholder.png";

import rest1 from "@/public/images/restaurants/1.jpeg"
import rest2 from "@/public/images/restaurants/2.jpeg"
import rest3 from "@/public/images/restaurants/3.jpeg"
import rest4 from "@/public/images/restaurants/4.jpeg"

const restaurants = [
  {
    id: 1,
    title: "BFC Anspach",
    address: "Boulevard Anspach 50, 1000 Brussels",
    image: rest1,
  },
  {
    id: 2,
    title: "BFC Anderlecht",
    address: "Rue Wayez 109, 1070 Anderlecht",
    image: rest2,
  },
  {
    id: 3,
    title: "BFC La Louvière",
    address: "Rue Albert 1 84, 7100 La Louvière",
    image: rest3,
  },
  {
    id: 4,
    title: "BFC Zaventem",
    address: "Sint stefaanstraat 17, 1932 Sint Stevens Woluwe",
    image: rest4,
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
      <div className="md:px-[50px] md:pt-[68px] px-5 ">
        <div className="md:mt-24 md:pl-[100px] pl-0 ">
          <div id="cards" className="pt-44 md:pt-0">
            <h1 className="text-4xl mb-8 text-center">Restaurants</h1>
            <div className="grid md:grid-cols-2 gap-10 justify-items-center">
              {restaurants.map((restaurant) => (
                <figure key={restaurant.id} className="group relative ">
                  <Image src={restaurant.image} alt="" className="w-[450px] rounded-xl"/>
                  <div className="absolute px-4 py-6 w-full bottom-0 h-full flex flex-col justify-between z-10 rounded-xl">
                    <div className=" group-hover:opacity-100 opacity-0 rounded-xl">
                      <h1 className="text-white text-xl">
                        {restaurant.address}
                      </h1>
                    </div>
                    <h1 className="text-2xl">{restaurant.title}</h1>
                  </div>
                  <div className="bg-gradient-to-t bg-black w-full h-full absolute top-0 left-0 opacity-50 md:opacity-0 md:group-hover:opacity-50 transition-all rounded-xl"></div>
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
