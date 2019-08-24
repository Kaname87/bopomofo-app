import React from "react";
import styles from "../Main2.module.scss";
import { useTranslation } from "react-i18next";
const langList = [
  { code: "ja", label: "日本語" },
  { code: "zh-hant", label: "中文(繁體)" },
  { code: "zh-hans", label: "中文(简体)" },
  { code: "en", label: "English" }
];
const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const renderLangButtons = () => {
    const selectedLang = i18n.language === undefined ? "ja" : i18n.language;
    return langList.map(lang => (
      <button
        key={lang.code}
        className={
          selectedLang === lang.code
            ? styles.selectedLanguageSelector
            : styles.languageSelector
        }
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
