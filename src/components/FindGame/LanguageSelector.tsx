import React from "react";
import styles from "../Main2.module.scss";
import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className={styles.languageSelectorWrapper}>
      <button
        className={styles.languageSelector}
        onClick={() => changeLanguage("en")}
      >
        en
      </button>
      <button
        className={styles.languageSelector}
        onClick={() => changeLanguage("ja")}
      >
        ja
      </button>
      <button
        className={styles.languageSelector}
        onClick={() => changeLanguage("ch")}
      >
        ch
      </button>
    </div>
  );
};
export default LanguageSelector;
