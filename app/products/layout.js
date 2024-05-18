
import { Footer } from "@/components/footer";
import NavigationProducts from "@/components/productsPageComponents/navigation";

// components/Layout.js
const Layout = ({ children }) => (
  <div>
    <main>
      {children}
      {/* fixed or ralative position of navigation  */}
      <div className="z-20 fixed"> 
      <NavigationProducts />
      </div>
    </main>
  </div>
);

export default Layout;

