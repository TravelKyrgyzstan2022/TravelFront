import React from 'react'
import { useTranslation } from 'react-i18next';
// import lang from './index.module.css'

const Language = () => {

  const { t, i18n } = useTranslation();


  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <>
    {/* <div className="form_group"> */}
          {/* <select onClick={() => changeLanguage()} id="languageSelection" className={lang.form_control}> */}
            <button onClick={() => changeLanguage("en")}>En</button>
            <button onClick={() => changeLanguage("ru")}>Ru</button>
          {/* </select> */}
        {/* </div> */}
          <div>{t("text")}</div>
          {/* <div>{t("hello")}</div> */}
    </>
  )
}

export default Language;