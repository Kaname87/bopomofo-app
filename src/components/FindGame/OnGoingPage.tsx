import React, { useState, useEffect, useContext } from "react";
import styles from "../Main.module.scss";
import useInterval from "../../utils/useInterval";

import Board from "./Board";

import FindGameContext from "../../context/FindGameContext";
// import FindGame from "../FindGame";
import {
  GAME_STATUS_START,
  GAME_STATUS_END,
  END_QUIZ_COUNT
} from "../../constants";
type targetType = {
  col: number;
  row: number;
  val: string;
  otherVal: string;
};

const rand = (max: number): number => Math.floor(Math.random() * max);
const maxLength = 5;
const createTargetList = (targetSourceList: targetType[]): targetType[] => {
  return targetSourceList.map(source => ({
    ...source,
    row: rand(maxLength),
    col: rand(maxLength)
  }));
};

type targetStateType = {
  title?: string;
  bopomofo?: string;
};

const targetSourceList = [
  { col: 1, row: 1, val: "さ", otherVal: "ㄜ" },
  { col: 1, row: 1, val: "ち", otherVal: "ㄘ" },
  { col: 1, row: 1, val: "せ", otherVal: "ㄝ" }
];

type headerType = {
  isGameEnded: boolean;
};
const GameHeader = ({ isGameEnded }: headerType) => {
  const [timer, setTimer] = useState(0);
  useInterval(() => {
    if (!isGameEnded) {
      setTimer((prevTimer: number) => prevTimer + 1);
    }
  }, 1000);

  return (
    <div className={styles.gameHeader}>
      <div className={styles.timer}>{timer}</div>
    </div>
  );
};

const OnGoingPage = () => {
  const {
    quizCount,
    setQuizCount,
    setGameStatus,
    // selected,
    // setSelected,
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
    if (quizCount === END_QUIZ_COUNT && typeof setGameStatus === "function") {
      return setGameStatus(GAME_STATUS_END);
    }
    console.log(targetList);
    console.log(quizCount);
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
      <GameHeader isGameEnded={isGameEnded} />
      {/* // "ㄜ" "ㄘ" "ㄝ" */}
      {console.log(target)}
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
