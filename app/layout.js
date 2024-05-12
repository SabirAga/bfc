
import "./globals.css";
import { MainHeader } from "@/components/main-header";


export const metadata = {
  title: "BFC",
  description: "Belgium Fried Chicken",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
