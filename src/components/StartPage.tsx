import React, { useContext } from "react";
import styles from "./Main.module.scss";
import QuizContext from "../context/quizContext";

// const START = "START";
const ONGOING = "ONGOING";
// const END = "END";

const StartPage = () => {
  const { setGameStatus } = useContext(QuizContext);
  return (
    <div className={styles.quizContainer}>
      <button
        className={styles.button}
        onClick={() =>
          typeof setGameStatus === "function" && setGameStatus(ONGOING)
        }
      >
        Start
      </button>
    </div>
  );
};
export default StartPage;
