import React, { useContext } from "react";
import styles from "./Main.module.scss";
import QuizContext from "../context/quizContext";
import { GAME_STATUS_ONGOING } from "../constants";

const StartPage = () => {
  const { setGameStatus } = useContext(QuizContext);
  return (
    <div className={styles.quizContainer}>
      <div className={styles.title}>注音Quiz</div>
      <div className={styles.buttonWrapper}>
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
