import React, { useContext } from "react";
import styles from "../Main2.module.scss";

import FindGameContext from "../../context/FindGameContext";
import { useTranslation } from "react-i18next";
import { GAME_STATUS_ONGOING } from "../../constants";
import LanguageSelector from "./LanguageSelector";

const StartPage = () => {
  const { setGameStatus } = useContext(FindGameContext);
  const { t, i18n } = useTranslation();

  return (
    <div className={styles.gameInnerWrapper}>
      <div className={styles.gameMainArea}>
        <div className={styles.titleWrapper}>
          <div className={styles.title}>
            {t("title.part1")}
            <br />
            {t("title.part2")}
          </div>
          <div className={styles.subTitle}>
            {t("subtitle.part1")}
            <br />
            {t("subtitle.part2")}
            <br />
            {t("subtitle.part3")}
          </div>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <button
          className={styles.startButton}
          onClick={() =>
            typeof setGameStatus === "function" &&
            setGameStatus(GAME_STATUS_ONGOING)
          }
        >
          {t("button.start")}
        </button>
        <LanguageSelector />
      </div>
    </div>
  );
};
export default StartPage;
