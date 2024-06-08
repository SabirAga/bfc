// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import Image from "next/image";

// function NavigationProducts(props) {
//   const [shrunk, setShrunk] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setShrunk(true);
//       } else {
//         setShrunk(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <div className="px-[50px] ">
//       <div className="px-[50px]">
//         <div>
//           <div
//             className={
//               shrunk
//                 ? "scale-90 mt-44 bg-gray-100 w-fit rounded-xl  transition-all duration-300 fixed"
//                 : "mt-44 bg-gray-100 w-fit rounded-xl  transition-all duration-300 fixed"
//             }
//           >

//             <ul className="-pt-1 ">
//               <li className="pb-4">
//                 <Link href="/products/burgers">
//                   <img
//                     src="/icons/products/edited/burger.png"
//                     alt=""
//                     className="w-24 hover:scale-110 duration-300"
//                     // width={24} height={24}
//                   />
//                 </Link>
//               </li>
//               <li className="pb-4">
//                 <Link href="/products/buckets">
//                   <img
//                     src="/icons/products/edited/bucket.png"
//                     alt=""
//                     className="w-24 hover:scale-110 duration-300"
//                     // width={24} height={24}
//                   />
//                 </Link>
//               </li>
//               <li className="pb-4">
//                 <Link href="/products/desserts">
//                   <img
//                     src="/icons/products/edited/dessert.png"
//                     alt=""
//                     className="w-24 hover:scale-110 duration-300"
//                     // width={24} height={24}
//                   />
//                 </Link>
//               </li>
//               <li className="pb-4">
//                 <Link href="/products/drinks">
//                   <img
//                     src="/icons/products/edited/drinks.png"
//                     alt=""
//                     className="w-24 hover:scale-110 duration-300"
//                     // width={24} height={24} quality={100}
//                   />
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default NavigationProducts;

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import burgerIcon from "@/public/icons/products/edited/burger.png"
import bucketIcon from "@/public/icons/products/edited/bucket.png"
import drinksIcon from "@/public/icons/products/edited/drinks.png"
import dessertIcon from "@/public/icons/products/edited/dessert.png"

function NavigationProducts(props) {
  const [shrunk, setShrunk] = useState(false);
  const [isNearFooter, setIsNearFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const footerTop = document.getElementById("footer").offsetTop;
      const scrollPosition = scrollY + window.innerHeight;

      // Set shrunk state based on scroll position
      setShrunk(scrollY > 50);

      // Check if the navbar is near the footer
      if (scrollPosition > footerTop) {
        setIsNearFooter(true);
      } else {
        setIsNearFooter(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarClasses = [
    "px-[10px]",
    "bg-gray-100",
    "w-fit",
    "rounded-xl",
    "transition-all",
    "duration-300",
    shrunk ? "scale-90" : "",
    isNearFooter ? "relative mt-44" : "fixed mt-48",
  ].join(" ");

  return (
    <div className="lg:px-[50px]">
      <div className="px-[50px]">
        <div>
          <div className={navbarClasses}>
            <ul className="-pt-1 ">
              <li className="pb-4">
                <Link href="/products/burgers">
                  <Image
                    src={burgerIcon}
                    alt=""
                    className="w-28 hover:scale-110 duration-300"
                    // width={24} height={24}
                  />
                </Link>
              </li>
              <li className="pb-4">
                <Link href="/products/buckets">
                  <Image
                    src={bucketIcon}
                    alt=""
                    className="w-28 hover:scale-110 duration-300"
                    // width={24} height={24}
                  />
                </Link>
              </li>
              <li className="pb-4">
                <Link href="/products/desserts">
                  <Image
                    src={dessertIcon}
                    alt=""
                    className="w-28 hover:scale-110 duration-300"
                    // width={24} height={24}
                  />
                </Link>
              </li>
              <li className="pb-4">
                <Link href="/products/drinks">
                  <Image
                    src={drinksIcon}
                    alt=""
                    className="w-28 hover:scale-110 duration-300"
                    // width={24} height={24} quality={100}
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavigationProducts;
