import React, { useState } from "react";
// import styles from "./Main.module.scss";

import StartPage from "./StartPage";
import OnGoingPage from "./OnGoingPage";
import EndPage from "./EndPage";

import QuizContext from "../context/quizContext";
import { HistoryType, GameStatusType, QuizContextType } from "../types";
import { GAME_STATUS_START, GAME_STATUS_ONGOING } from "../constants";

// import AttackGame from "./AttackGame";
import FindGame from "./FindGame";

const Main2 = () => {
  const [gameStatus, setGameStatus] = useState<GameStatusType>(
    GAME_STATUS_START
  );

  const [quizCount, setQuizCount] = useState<number>(0);

  const [histories, setHistories] = useState<HistoryType[]>([]);

  return <FindGame />;

  // (
  //   <QuizContext.Provider value={quizContext}>
  //     <div className={styles.wrapper}>{mainPage}</div>
  //   </QuizContext.Provider>
  // );
};

export default Main2;
