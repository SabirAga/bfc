
import { Footer } from "@/components/footer";
import NavigationProducts from "@/components/productsPageComponents/navigation";

// components/Layout.js
const Layout = ({ children }) => (
  <div>
    <main>
      {children}
      <div className="z-20 relative"> 
      <NavigationProducts />
      </div>
    </main>
  </div>
);

export default Layout;
