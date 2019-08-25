import React, { useState, useEffect, useContext } from "react";
import styles from "../Main2.module.scss";
import { useTranslation } from "react-i18next";
import Board from "./Board";
import Header from "./Header";
import LanguageSelector from "./LanguageSelector";
import FindGameContext from "../../context/FindGameContext";

import {
  GAME_STATUS_START,
  FIND_GAME_END_IDX,
  FIND_GAME_ROW_COL_NUM
} from "../../constants";

import { targetType } from "../../types";

const rand = (max: number): number => Math.floor(Math.random() * max);

const createTargetList = (targetSourceList: targetType[]): targetType[] => {
  return targetSourceList.map(source => ({
    ...source,
    row: rand(FIND_GAME_ROW_COL_NUM),
    col: rand(FIND_GAME_ROW_COL_NUM)
  }));
};

const targetSourceList = [
  { col: 1, row: 1, val: "さ", otherVal: "ㄜ" },
  { col: 1, row: 1, val: "ち", otherVal: "ㄘ" },
  { col: 1, row: 1, val: "せ", otherVal: "ㄝ" }
];

const OnGoingPage = () => {
  const {
    quizCount,
    setQuizCount,
    setGameStatus,
    selectedCell,
    setSelectedCell
  } = useContext(FindGameContext);
  const [target, setTarget] = useState<targetType>({
    col: 1,
    row: 1,
    val: "",
    otherVal: ""
  });

  const [targetList, setTargetList] = useState<any[]>([]);

  // Update target when quizCount is updated
  useEffect(() => {
    setTargetList(createTargetList(targetSourceList));
  }, []);

  useEffect(() => {
    if (targetList.length > 0 && typeof quizCount == "number") {
      setTarget(targetList[quizCount]);
    }
  }, [targetList, quizCount, setGameStatus]);

  const showNext = () => {
    setQuizCount((prevCount: number) => prevCount + 1);
    setSelectedCell(() => ({
      row: 0,
      col: 0,
      selected: false,
      isAnswer: false
    }));
  };
  const reStart = () => {
    setQuizCount(0);
    setGameStatus(GAME_STATUS_START);
    setSelectedCell({
      row: 0,
      col: 0,
      selected: false,
      isAnswer: false
    });
  };
  const { t } = useTranslation();
  const targetIsReady = !!target.val;
  const isGameOvered = selectedCell.selected && !selectedCell.isAnswer;

  const isGameEnded =
    isGameOvered || (selectedCell.selected && quizCount === FIND_GAME_END_IDX);

  const renderProgress = () => {
    const isDone = (count: number) => count < quizCount;

    const progress = ["ㄜ", "ㄘ", "ㄝ"].map((v, k) => (
      <div key={v} className={isDone(k) ? styles.pgDone : styles.pgNotYet}>
        {v}
      </div>
    ));
    return <div className={styles.progressBar}>{progress}</div>;
  };

  const message = !isGameEnded
    ? ""
    : isGameOvered
    ? t("message.challenge-failed")
    : t("message.challenge-completed");

  return targetIsReady ? (
    <div className={styles.gameInnerWrapper}>
      <div className={styles.gameMainArea}>
        <Header isGameEnded={isGameEnded} isGameOvered={isGameOvered} />
        <Board target={target} />
        <div className={styles.message}>{message}</div>
      </div>
      <div className={styles.buttonWrapper}>
        {isGameEnded ? (
          <button className={styles.button} onClick={() => reStart()}>
            {t("button.back")}
          </button>
        ) : (
          <button
            className={styles.button}
            disabled={!selectedCell.selected}
            onClick={showNext}
          >
            {t("button.next")}
          </button>
        )}
        <LanguageSelector />
      </div>
    </div>
  ) : (
    <div>Now Loading...</div>
  );
};

export default OnGoingPage;
