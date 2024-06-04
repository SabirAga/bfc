import NavigationProducts from "@/components/productsPageComponents/navigation";
import NavigationMobile from "@/components/productsPageComponents/navigationMobile";

// components/Layout.js
const Layout = ({ children }) => (
  <div>
    <main className=" md:flex">
      <div className=" md:hidden mx-auto">
        <NavigationMobile />
      </div>
      <div className=" mx-auto flex-none">{children}</div>

      <div className="z-20 absolute hidden md:block ">
        <NavigationProducts />
      </div>
    </main>
  </div>
);

export default Layout;

{
  /* fixed or ralative position of navigation  */
}
