import NavigationProducts from "@/components/productsPageComponents/navigation";
import NavigationMobile from "@/components/productsPageComponents/navigationMobile";

// components/Layout.js
const Layout = ({ children }) => (
  <div>
    <main className="lg:flex lg:px-5">
      <div className=" lg:hidden mx-auto">
        <NavigationMobile />
      </div>

      <div className=" mx-auto flex-none">{children}</div>

      <div className="z-20 absolute hidden lg:block ">
        <NavigationProducts />
      </div>
    </main>
  </div>
);

export default Layout;

{
  /* fixed or ralative position of navigation  */
}
