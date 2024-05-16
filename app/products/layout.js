import NavBarProducts from "@/components/productsPageComponents/navBar";

// components/Layout.js
const Layout = ({ children }) => (
  <div>
    <main>
      {children}
      <NavBarProducts />
    </main>
  </div>
);

export default Layout;
