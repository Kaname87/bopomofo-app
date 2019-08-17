import React, { useContext } from "react";
import styles from "./Main.module.scss";
import QuizContext from "../context/quizContext";
import XiaoLongBao from "./SVG/xiaolongbao";
// const START = "START";
const ONGOING = "ONGOING";
// const END = "END";

const StartPage = () => {
  const { setGameStatus } = useContext(QuizContext);
  return (
    <div className={styles.quizContainer}>
      <div className={styles.title}>注音Quiz</div>

      <button
        className={styles.startButton}
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
