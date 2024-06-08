import NavigationDeals from "@/components/dealsPageComponents/navigationDeals";
import NavigationDealsMobile from "@/components/dealsPageComponents/navigationDealsMobile";

// components/Layout.js
const Layout = ({ children }) => (
  <div>
    <main className="lg:flex lg:px-5">
      <div className=" lg:hidden mx-auto">
        <NavigationDealsMobile />
      </div>
      <div className=" mx-auto flex-none">{children}</div>
      <div className="z-20 absolute hidden md:block ">
        <NavigationDeals />
      </div>
    </main>
  </div>
);

export default Layout;

{
  /* fixed or ralative position of navigation  */
}
