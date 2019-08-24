import React from "react";
import styles from "../Main2.module.scss";
import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const changeLanguage = (lng: string) => {
    console.log(lng);
    i18n.changeLanguage(lng);
  };
  const langList = [
    { code: "ja", label: "日本語" },
    { code: "zh-hant", label: "中文(繁體)" },
    { code: "zh-hans", label: "中文(简体)" },
    { code: "en", label: "English" }
  ];

  const renderLangButtons = () => {
    return langList.map(lang => (
      <button
        key={lang.code}
        className={styles.languageSelector}
        onClick={() => changeLanguage(lang.code)}
      >
        {lang.label}
      </button>
    ));
  };

  return (
    <div className={styles.languageSelectorWrapper}>{renderLangButtons()}</div>
  );
};
export default LanguageSelector;
