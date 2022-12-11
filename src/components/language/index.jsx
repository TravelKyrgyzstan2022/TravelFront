import React from 'react'
import { useTranslation } from 'react-i18next';
import React from "react";
import { useTranslation } from "react-i18next";
import lang from "./index.module.css";

const Language = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <>
      <div className={lang.form_group}>
        {/* <select onClick={() => changeLanguage()} id="languageSelection" className={lang.form_control}> */}
        <option onClick={() => changeLanguage("en")}>En</option>
        <option onClick={() => changeLanguage("ru")}>Ru</option>
        {/* </select> */}
      </div>
      <div>{t("text")}</div>
      {/* <div>{t("hello")}</div> */}
    </>
  );
};

export default Language;
