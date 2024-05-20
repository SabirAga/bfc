import { Footer } from "@/components/footer";
import NavigationProducts from "@/components/productsPageComponents/navigation";

// components/Layout.js
const Layout = ({ children }) => (
  <div>
    <main className="flex">
      <div className=" mx-auto flex-none">{children}</div>
      {/* fixed or ralative position of navigation  */}
      <div className="z-20 absolute">
        <NavigationProducts />
      </div>
    </main>
  </div>
); 

export default Layout;
