import "./globals.css";
import { MainHeader } from "@/components/main-header";

export const metadata = {
  title: "BFC",
  description: "Belgium Fried Chicken",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/iep4nms.css" />
      </head>
      <body className="font-cooper">
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
