import React from "react";
import Image from "next/image";

function Bucket(props) {
  return (
    <div className="px-[50px] pt-[68px]">
      <div className="mt-24 pl-[100px] ">
        <div className="grid place-items-center px-9 py-5">
        <h1 className="text-4xl pb-4">Buckets</h1>

          <ul className="flex items-center gap-7 text-3xl ">
            <li className="grid place-items-center">
              <Image
                src="/images/products/singleItems/buckets/10tenders.png"
                width={450}
                height={450}
                className="rounded-xl shadow-2xl"
              />
              <h2 className="relative bottom-32">Tenders</h2>
            </li>
            <li className="grid place-items-center">
              <Image
                src="/images/products/singleItems/buckets/26hotwings.png"
                width={450}
                height={450}
                className="rounded-xl shadow-2xl"
              />
              <h2 className="relative bottom-32">Hotwings</h2>
            </li>
          </ul>
        </div>

        <div className="grid place-items-center px-9 py-5">
          <ul className="flex items-center gap-7 text-3xl ">
            <li className="grid place-items-center">
              <Image
                src="/images/products/singleItems/buckets/bucketMix.png"
                width={450}
                height={450}
                className="rounded-xl shadow-2xl"
              />
              <h2 className="relative bottom-32">Bucket Mix</h2>
            </li>
            <li className="grid place-items-center">
              <Image
                src="/images/products/singleItems/buckets/duoBucket.png"
                width={450}
                height={450}
                className="rounded-xl shadow-2xl"
              />
              <h2 className="relative bottom-32">Maxi Meat Burger</h2>
            </li>
          </ul>
        </div>

        <div className="grid place-items-center px-9 py-5">
          <ul className="flex items-center gap-7 text-3xl ">
            <li className="grid place-items-center">
              <Image
                src="/images/products/singleItems/buckets/familyBucket.png"
                width={450}
                height={450}
                className="rounded-xl shadow-2xl"
              />
              <h2 className="relative bottom-32">Family Bucket</h2>
            </li>
            <li className="grid place-items-center">
              <Image
                src="/images/products/singleItems/buckets/maxi.png"
                width={450}
                height={450}
                className="rounded-xl shadow-2xl"
              />
              <h2 className="relative bottom-32">Maxi Bucket</h2>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Bucket;
