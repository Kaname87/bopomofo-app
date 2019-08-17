import React, { useState } from "react";
import styles from "./Main.module.scss";

import StartPage from "./StartPage";
import OnGoingPage from "./OnGoingPage";
import EndPage from "./EndPage";
import QuizContext from "../context/quizContext";
import { HistoryType, GameStatusType, QuizContextType } from "../types";
import { GAME_STATUS_START, GAME_STATUS_ONGOING } from "../constants";

const Main = () => {
  const [gameStatus, setGameStatus] = useState<GameStatusType>(
    GAME_STATUS_START
  );

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
    gameStatus === GAME_STATUS_START ? (
      <StartPage />
    ) : gameStatus === GAME_STATUS_ONGOING ? (
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
