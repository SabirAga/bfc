"use client";
import React from "react";
import { useTranslation } from "react-i18next";

function TermsOfUse(props) {
  const { t } = useTranslation();
  return (
    <div className="lg:px-[50px] md:pt-[68px] pt-[180px] px-10">
      <div className="md:mt-24 mx-auto ">
        <div className=" md:px-9 py-5">
          <h1 className="text-4xl font-bold text-center text-black mb-8">
            {t("franchising:Title")}
          </h1>
          <div className="font-sans">
            <p>{t("franchising:Content")}
              <a target="_blank" className="underline text-blue-600" href="mailto:Contact@bfcbelgium.com">
              {t("franchising:ContactUs")}
              </a>
              <span>{t("franchising:ContentRest")}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TermsOfUse;
