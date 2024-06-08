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
            {t("termsOfUse:TermsOfUse")}
          </h1>
          <div>
            <ol className="list-decimal grid gap-2 font-sans">
              <li>
                <h3 className="text-lg font-bold">
                  {t("termsOfUse:AcceptanceOfTermsTitle")}
                </h3>
                <p>{t("termsOfUse:AcceptanceOfTerms")}</p>
              </li>
              <li>
                <h3 className="text-lg font-bold">
                  {t("termsOfUse:DescriptionOfServiceTitle")}
                </h3>
                <p>{t("termsOfUse:DescriptionOfService")}</p>
              </li>
              <li>
                <h3 className="text-lg font-bold">
                  {t("termsOfUse:PrivacyPolicyTitle")}
                </h3>
                <p>{t("termsOfUse:PrivacyPolicy")}</p>
              </li>
              <li>
                <h3 className="text-lg font-bold">
                  {t("termsOfUse:UserConductTitle")}
                </h3>
                <p>{t("termsOfUse:UserConduct")}</p>
              </li>
              <li>
                <h3 className="text-lg font-bold">
                  {t("termsOfUse:IntellectualPropertyTitle")}
                </h3>
                <p>{t("termsOfUse:IntellectualProperty")}</p>
              </li>
              <li>
                <h3 className="text-lg font-bold">
                  {t("termsOfUse:DisclaimersAndLimitationOfLiabilityTitle")}
                </h3>
                <p>{t("termsOfUse:DisclaimersAndLimitationOfLiability")}</p>
              </li>
              <li>
                <h3 className="text-lg font-bold">
                  {t("termsOfUse:ModificationsToTermsTitle")}
                </h3>
                <p>{t("termsOfUse:ModificationsToTerms")}</p>
              </li>
              <li>
                <h3 className="text-lg font-bold">
                  {t("termsOfUse:GoverningLawTitle")}
                </h3>
                <p>{t("termsOfUse:GoverningLaw")}</p>
              </li>
              <li>
                <h3 className="text-lg font-bold">
                  {t("termsOfUse:ContactInformationTitle")}
                </h3>{" "}
                <p>
                  {t("termsOfUse:ContactInformation")}
                  <a
                    target="_blank"
                    href="mailto:Contact@bfcbelgium.com"
                    className="underline text-blue-600"
                  >
                    e-mail
                  </a>
                  .
                </p>
              </li>
              <li>
                <h3 className="text-lg font-bold">
                  {t("termsOfUse:AcknowledgmentTitle")}
                </h3>
                <p>{t("termsOfUse:Acknowledgment")}</p>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TermsOfUse;
