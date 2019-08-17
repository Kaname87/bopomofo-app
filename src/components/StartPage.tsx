import React, { useContext } from "react";
import styles from "./Main.module.scss";
import QuizContext from "../context/quizContext";

const ONGOING = "ONGOING";

const StartPage = () => {
  const { setGameStatus } = useContext(QuizContext);
  return (
    <div className={styles.quizContainer}>
      <div className={styles.title}>注音Quiz</div>
      <div className={styles.buttonContainer}>
        <button
          className={styles.startButton}
          onClick={() =>
            typeof setGameStatus === "function" && setGameStatus(ONGOING)
          }
        >
          Start
        </button>
      </div>
    </div>
  );
};
export default StartPage;
