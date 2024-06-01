import { Footer } from "@/components/footer";
import "./globals.css";
import { MainHeader } from "@/components/main-header";
import initTranslations from "../i18n";
import TranslationsProvider from "@/components/ui/translationProvider";

const namespaces = ["common", "main", "products", "deals"];

export const metadata = {
  title: "BFC",
  description: "Belgium Fried Chicken",
};

export default async function RootLayout({ children, params: { locale } }) {
  const { t, resources } = await initTranslations(locale, namespaces);

  return (
    <>
      <TranslationsProvider
        resources={resources}
        locale={locale}
        namespaces={namespaces}
      >
        <html lang="en">
          <head>
            <link rel="stylesheet" href="https://use.typekit.net/iep4nms.css" />
          </head>
          <body className="font-cooper max-w-[540px] md:max-w-[1280px] xl:max-w-[1830px] mx-auto ">
            <MainHeader />
            {children}
            <footer>
              <Footer />
            </footer>
          </body>
        </html>
      </TranslationsProvider>
    </>
  );
}
