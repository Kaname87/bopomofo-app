import React, { useContext } from "react";
import styles from "../Main2.module.scss";

import FindGameContext from "../../context/FindGameContext";
import { GAME_STATUS_ONGOING } from "../../constants";

const StartPage = () => {
  const { setGameStatus } = useContext(FindGameContext);
  return (
    <div className={styles.quizContainer}>
      <div className={styles.titleWrapper}>
        <div className={styles.title}>
          注音
          <br />
          探し
        </div>
        <div className={styles.subTitle}>
          ひらがなの中から
          <br />
          注音符号（ㄜ、ㄘ、ㄝ）
          <br />
          を見つけてください
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
          Start
        </button>
      </div>
    </div>
  );
};
export default StartPage;
