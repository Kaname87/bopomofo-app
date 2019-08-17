import React, { useState } from "react";
import styles from "./Main.module.scss";

import StartPage from "./StartPage";
import OnGoingPage from "./OnGoingPage";
import EndPage from "./EndPage";
import QuizContext from "../context/quizContext";

import { HistoryType, GameStatusType, QuizContextType } from "../types";

const START = "START";
const ONGOING = "ONGOING";

const Main = () => {
  const [gameStatus, setGameStatus] = useState<GameStatusType>(START);

  const [quizCount, setQuizCount] = useState<number>(0);

  const [histories, setHistories] = useState<HistoryType[]>([]);

  const quizContext: QuizContextType = {
    quizCount,
    setQuizCount,
    histories,
    setHistories,
    gameStatus,
    setGameStatus
  };

  const mainPage =
    gameStatus === START ? (
      <StartPage />
    ) : gameStatus === ONGOING ? (
      <OnGoingPage />
    ) : (
      <EndPage />
    );
  return (
    <QuizContext.Provider value={quizContext}>
      <div className={styles.wrapper}>{mainPage}</div>
    </QuizContext.Provider>
  );
};

export default Main;
