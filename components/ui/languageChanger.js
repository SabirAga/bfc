"use client";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import i18nConfig from "@/i18nConfig";

export default function LanguageChanger() {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();

  const handleChange = (e) => {
    const newLocale = e.target.value;

    // set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    // redirect to the new locale path
    if (
      currentLocale === i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {
      router.push("/" + newLocale + currentPathname);
    } else {
      router.push(
        currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
      );
    }

    router.refresh();
  };

  return (
    <select
      name="lang"
      id="lang"
      onChange={handleChange}
      value={currentLocale}
      className=" rounded-md mt-1 top-5 bg-transparent text-xl leading-5 font-bold border-0 "
    >
      <option value="en" className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
        EN
      </option>
      <option value="fr" className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
        FR
      </option>
      <option value="nl" className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
        NL
      </option>
    </select>
  );
}
