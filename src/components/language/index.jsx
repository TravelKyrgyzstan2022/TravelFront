import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';

const App = ({i18n}) => {
  const [currentLang, setCurrentLang] = useState();
  // const { t, i18n } = useTranslation();



  useEffect(() => {
    setCurrentLang(i18n.language);
  }, [i18n]);

  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
    setCurrentLang(e.target.value);
  };

  // const changeLanguage = (language) => {
  //   i18n.changeLanguage(language);

  // };


  return (
    <div className="switch-languages">
      <select value={currentLang} onChange={(e) => changeLanguage(e)}>
      <option value="en">Eng</option>
        <option value="ru">Ru</option>
      </select>
    </div>
  )
}

export default App

// import React, { useState, useEffect } from 'react';

// export default function SwitchLang({ i18n }) {
//   const [currentLang, setCurrentLang] = useState();

//   useEffect(() => {
//     setCurrentLang(i18n.language);
//   }, [i18n]);

//   const changeLanguage = (e) => {
//     i18n.changeLanguage(e.target.value);
//     setCurrentLang(e.target.value);
//   };

//   return (
//     <div className="switch-languages">
//       <select value={currentLang} onChange={(e) => changeLanguage(e)}>
//         <option value="en">Eng</option>
//         <option value="fr">Fr</option>
//       </select>
//     </div>
//   );
// }
