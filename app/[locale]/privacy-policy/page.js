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
            {t("privacyPolicy:Title")}
          </h1>
          <div>
            <ol className="list-decimal grid gap-2 font-sans">
              <li>
                <h3 className="text-lg font-bold">
                  {t("privacyPolicy:IntroductionTitle")}
                </h3>
                <p>
                  {t("privacyPolicy:ContactUs")}
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
                  {t("privacyPolicy:InformationWeCollectTitle")}
                </h3>
                <p>{t("privacyPolicy:InformationWeCollect")}</p>
                <br />
                <ul className="pl-10 list-disc">
                  <li><span className="font-bold">{t("privacyPolicy:PersonalIdentifiersBold")}</span>{t("privacyPolicy:PersonalIdentifiers")}</li>
                  <li><span className="font-bold">{t("privacyPolicy:PaymentDataBold")}</span>{t("privacyPolicy:PaymentData")}</li>
                  <li><span className="font-bold">{t("privacyPolicy:UsageDataBold")}</span>{t("privacyPolicy:UsageData")}</li>
                </ul>
              </li>
              <li>
                <h3 className="text-lg font-bold">
                  {t("privacyPolicy:HowWeUseYourInformationTitle")}
                </h3>
                <p>{t("privacyPolicy:HowWeUseYourInformation")}</p>
                <br />
                <ul className="pl-10 list-disc">
                  <li>{t("privacyPolicy:OrderManagement")}</li>
                  <li>{t("privacyPolicy:Marketing")}</li>
                  <li>{t("privacyPolicy:ServiceImprovement")}</li>
                  <li>{t("privacyPolicy:UsageAnalysis")}</li>
                </ul>
              </li>
              <li>
                <h3 className="text-lg font-bold">
                  {t("privacyPolicy:HowWeShareYourInformationTitle")}
                </h3>
                <p>{t("privacyPolicy:HowWeShareYourInformation")}</p>
                <br />
                <ul className="pl-10 list-disc">
                  <li>{t("privacyPolicy:ServiceProviders")}</li>
                  <li>{t("privacyPolicy:BusinessTransfers")}</li>
                </ul>
              </li>
              <li>
                <h3 className="text-lg font-bold">
                  {t("privacyPolicy:CookiesAndSimilarTechnologiesTitle")}
                </h3>
                <p>{t("privacyPolicy:Cookies")}</p>
              </li>
              <li>
                <h3 className="text-lg font-bold">
                  {t("privacyPolicy:SecurityOfYourInformationTitle")}
                </h3>
                <p>{t("privacyPolicy:SecurityOfYourInformation")}</p>
              </li>
              <li>
                <h3 className="text-lg font-bold">
                  {t("privacyPolicy:YourPrivacyRightsTitle")}
                </h3>
                <p>{t("privacyPolicy:YourPrivacyRights")}</p>
              </li>
              <li>
                <h3 className="text-lg font-bold">
                  {t("privacyPolicy:UpdatesToThisPolicyTitle")}
                </h3>
                <p>{t("privacyPolicy:UpdatesToThisPolicy")}</p>
              </li>
              <li>
                <h3 className="text-lg font-bold">
                  {t("privacyPolicy:ContactUsTitle")}
                </h3>{" "}
                <p>
                  {t("privacyPolicy:ContactUs")}
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
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TermsOfUse;
