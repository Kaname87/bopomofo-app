import React, { useContext, Fragment } from "react";
import styles from "../Main.module.scss";
import FindGameContext from "../../context/FindGameContext";
import XiaoLongBao from "../SVG/XiaoLongBao";
import { HistoryType } from "../../types";
import { GAME_STATUS_START } from "../../constants";

const EndPage = () => {
  const { setQuizCount, setGameStatus, histories, setHistories } = useContext(
    FindGameContext
  );

  const reStart = () => {
    if (typeof setQuizCount == "function") {
      setQuizCount(0);
    }
    if (typeof setHistories == "function") {
      setHistories([]);
    }
    if (typeof setGameStatus == "function") {
      setGameStatus(GAME_STATUS_START);
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
        return <Fragment></Fragment>;
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
            {history.isCorrect ? (
              <XiaoLongBao width={30} height={30} fill={"#1ecd97"} />
            ) : (
              "×"
            )}
          </td>
        </tr>
      );
    });
  };

  return (
    <div className={styles.quizContainer}>
      {resultTable(histories)}
      <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={() => reStart()}>
          Re-Start
        </button>
      </div>
    </div>
  );
};
export default EndPage;
