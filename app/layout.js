
import "./globals.css";
import { MainHeader } from "@/components/main-header";
<link rel="stylesheet" href="https://use.typekit.net/iep4nms.css"></link>

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
