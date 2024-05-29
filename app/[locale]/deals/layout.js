import NavigationDeals from "@/components/dealsPageComponents/navigationDeals";

// components/Layout.js
const Layout = ({ children }) => (
  <div>
    <main className="flex">
      <div className=" mx-auto flex-none">{children}</div>
      <div className="z-20 absolute">
        <NavigationDeals />
      </div>
    </main>

  </div>
);

export default Layout;

{
  /* fixed or ralative position of navigation  */
}
