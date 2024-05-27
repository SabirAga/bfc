import NavigationDeals from "@/components/dealsPageComponents/navigationDeals";
import { Footer } from "@/components/footer";

// components/Layout.js
const Layout = ({ children }) => (
  <div>
    <main className="flex">
      <div className=" mx-auto flex-none">{children}</div>
      <div className="z-20 absolute">
        <NavigationDeals />
      </div>
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
);

export default Layout;

{
  /* fixed or ralative position of navigation  */
}
