import React, { useContext } from "react";
import styles from "./Main.module.scss";
import QuizContext from "../context/quizContext";
import { HistoryType } from "../types";
const START = "START";

const EndPage = () => {
  const { setQuizCount, setGameStatus, histories, setHistories } = useContext(
    QuizContext
  );

  // const END = "END";
  const reStart = () => {
    if (typeof setQuizCount == "function") {
      setQuizCount(0);
    }
    if (typeof setHistories == "function") {
      setHistories([]);
    }
    if (typeof setGameStatus == "function") {
      setGameStatus(START);
    }
  };

  const resultList = (histories: HistoryType[]) => {
    return histories.map(history => {
      if (history.question === undefined) {
        return <div></div>;
      }
      return (
        <li key={history.question.pinin} className={styles.resultList}>
          {history.question.bopomofo} {history.question.pinin}
        </li>
      );
    });
  };

  const resultL = (histories: HistoryType[] | undefined) => {
    if (typeof histories !== "undefined") {
      return <ul>{resultList(histories)}</ul>;
    }
  };

  return (
    <div className={styles.quizContainer}>
      {resultL(histories)}
      <button className={styles.button} onClick={() => reStart()}>
        Re-Start
      </button>
    </div>
  );
};
export default EndPage;
