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

  const resultTable = (histories: HistoryType[] | undefined) => {
    if (typeof histories === "undefined") {
      return;
    }
    return (
      <table>
        <thead>
          <tr>
            <th className={styles.resultWideCol}>注音</th>
            <th className={styles.resultWideCol}>Pinyin</th>
            <th className={styles.resultWideCol}>あなたの回答</th>
            <th className={styles.resultNarrowCol}>結果</th>
          </tr>
        </thead>
        <tbody>{resultTableBody(histories)}</tbody>
      </table>
    );
  };

  const resultTableBody = (histories: HistoryType[]) => {
    return histories.reverse().map(history => {
      if (history.question === undefined) {
        return;
      }
      return (
        <tr key={history.question.pinyin} className={styles.resultTBody}>
          <td className={styles.resultBopomofo}>{history.question.bopomofo}</td>
          <td>{history.question.pinyin}</td>
          <td>{history.selectedOption}</td>
          <td
            className={
              history.isCorrect
                ? styles.resultMarkCorrect
                : styles.resultMarkWrong
            }
          >
            {history.isCorrect ? "○" : "×"}
          </td>
        </tr>
      );
    });
  };

  const resultList = (histories: HistoryType[]) => {
    return histories.map(history => {
      if (typeof history.question === "undefined") {
        return;
      }
      return (
        <li key={history.question.pinyin} className={styles.resultList}>
          {history.question.bopomofo} {history.question.pinyin}
          {history.question.pinyin === history.selectedOption
            ? " Correct"
            : " Wrong"}
        </li>
      );
    });
  };

  const resultUl = (histories: HistoryType[] | undefined) => {
    if (typeof histories !== "undefined") {
      return <ul>{resultList(histories)}</ul>;
    }
  };

  return (
    <div className={styles.quizContainer}>
      {resultTable(histories)}
      <button className={styles.button} onClick={() => reStart()}>
        Re-Start
      </button>
    </div>
  );
};
export default EndPage;
