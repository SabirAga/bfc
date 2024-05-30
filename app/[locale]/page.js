import { Body } from "@/components/body";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import initTranslations from "../i18n";
import TranslationsProvider from "@/components/ui/translationProvider";

const namespaces = ["common", "main"];

export default async function Home({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, namespaces);

  return (
    <>
      <TranslationsProvider
        resources={resources}
        locale={locale}
        namespaces={namespaces}
      >
        <Hero />
        <Body />
      </TranslationsProvider>
    </>
  );
}
