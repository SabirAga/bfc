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
            {t("story:mainTitle")}
          </h1>
          <div className="font-sans text-lg">
            <h1 className="text-center font-bold text-3xl">
              {t("story:title")}
            </h1>
            <ul className="grid gap-3 pt-4">
              <div>
                <p>{t("story:introduction")}</p>
              </div>
              <div>
                <h2 className="font-bold text-lg">
                  {t("story:dream_becomes_reality:title")}
                </h2>
                <p>{t("story:dream_becomes_reality:content")}</p>
              </div>
              <div>
                <h2 className="font-bold text-lg">
                  {t("story:secret_of_success:title")}
                </h2>
                <p>{t("story:secret_of_success:content")}</p>
              </div>
              <div>
                <h2 className="font-bold text-lg">
                  {t("story:first_years:title")}
                </h2>
                <p>{t("story:first_years:content")}</p>
              </div>
              <div>
                <h2 className="font-bold text-lg">
                  {t("story:expansion_and_recognition:title")}
                </h2>
                <p>{t("story:expansion_and_recognition:content")}</p>
              </div>
              <div>
                <h2 className="font-bold text-lg">
                  {t("story:future_promise:title")}
                </h2>
                <p>{t("story:future_promise:content")}</p>
              </div>
              <div>
                <p>{t("story:visit_invitation")}</p>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TermsOfUse;
