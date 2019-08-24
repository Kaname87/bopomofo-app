import React, { useState, useEffect, useContext } from "react";
import styles from "../Main2.module.scss";

import Board from "./Board";
import Header from "./Header";
import FindGameContext from "../../context/FindGameContext";

import { GAME_STATUS_START } from "../../constants";

import { targetType } from "../../types";

const maxLength = 5;
const rand = (max: number): number => Math.floor(Math.random() * max);

const createTargetList = (targetSourceList: targetType[]): targetType[] => {
  return targetSourceList.map(source => ({
    ...source,
    row: rand(maxLength),
    col: rand(maxLength)
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
  const targetIsReady = !!target.val;
  const isGameOvered = selectedCell.selected && !selectedCell.isAnswer;

  const isGameEnded =
    isGameOvered || (selectedCell.selected && quizCount === 2);

  const message = !isGameEnded ? "" : isGameOvered ? "残念！" : "お見事！";

  return targetIsReady ? (
    <div className={styles.gameContainer}>
      <Header isGameEnded={isGameEnded} />
      {/* // "ㄜ" "ㄘ" "ㄝ" */}
      {/* {console.log(target)} */}
      <Board target={target} />
      <div className={styles.message}>{message}</div>
      <div className={styles.buttonWrapper}>
        {isGameEnded ? (
          <button className={styles.button} onClick={() => reStart()}>
            戻る
          </button>
        ) : (
          <button
            className={styles.button}
            disabled={!selectedCell.selected}
            onClick={showNext}
          >
            次へ
          </button>
        )}
      </div>
    </div>
  ) : (
    <div>Now Loading...</div>
  );
};

export default OnGoingPage;
