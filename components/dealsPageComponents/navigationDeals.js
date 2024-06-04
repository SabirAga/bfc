// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import Image from "next/image";

// function NavigationDeals(props) {
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
//   // className = "mt-52 bg-gray-100 w-fit rounded-xl px-";
//   return (
//     <div className="px-[50px]">
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
//                 <Link href="/deals">
//                   <img
//                     src="/icons/deals/meals.png"
//                     alt=""
//                     className="w-28 hover:scale-110 duration-300"
//                     // width={24} height={24}
//                   />
//                 </Link>
//               </li>
//               <li className="pb-4">
//                 <Link href="/deals/menus">
//                   <img
//                     src="/icons/deals/menus.png"
//                     alt=""
//                     className="w-28 hover:scale-110 duration-300"
//                     // width={24} height={24}
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

// export default NavigationDeals;

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import mealsIcon from "@/public/icons/deals/png/meals.png";
import menusIcon from "@/public/icons/deals/png/menus.png";

function NavigationDeals(props) {
  const [shrunk, setShrunk] = useState(false);
  const [isNearFooter, setIsNearFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const footerTop = document.getElementById("footer").offsetTop;
      const scrollPosition = scrollY + window.innerHeight;

      // Update the shrunk state based on scroll position
      if (scrollY > 50) {
        setShrunk(true);
      } else {
        setShrunk(false);
      }

      // Update isNearFooter state based on proximity to the footer
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

  // Construct the class name based on shrunk and isNearFooter states
  const navbarClasses = [
    "px-[20px]",
    "bg-gray-100",
    "w-fit",
    "rounded-xl",
    "transition-all",
    "duration-300",
    shrunk ? "scale-90" : "",
    isNearFooter ? "relative mt-44" : "fixed mt-48",
  ].join(" ");

  return (
    <div className="px-[100px] ">
      <div className={navbarClasses}>
        <ul className="pt-4">
          <li className="pb-4">
            <Link href="/deals">
              <Image
                src={mealsIcon}
                alt=""
                className="w-20 hover:scale-110 duration-300"
              />
              <h1 className="text-center text-xl ">Meals</h1>
            </Link>
          </li>
          <li className="pb-4">
            <Link href="/deals/menus">
              <Image
                src={menusIcon}
                alt=""
                className="w-20 hover:scale-110 duration-300"
              />
              <h1 className="text-center text-xl ">Menus</h1>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavigationDeals;
