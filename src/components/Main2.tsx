import React, { useState, Suspense } from "react";
import styles from "./Main2.module.scss";

import StartPage from "./FindGame/StartPage";
import OnGoingPage from "./FindGame/OnGoingPage";

import FindGameContext from "../context/FindGameContext";
import { GameStatusType } from "../types";
import { GAME_STATUS_START } from "../constants";

const Main2 = () => {
  const [gameStatus, setGameStatus] = useState<GameStatusType>(
    GAME_STATUS_START
  );

  const [quizCount, setQuizCount] = useState<number>(0);

  const [selectedCell, setSelectedCell] = useState<any>({
    row: 0,
    col: 0,
    selected: false
  });

  const findGameContext: any = {
    quizCount,
    setQuizCount,
    gameStatus,
    setGameStatus,
    selectedCell,
    setSelectedCell
  };

  const mainPage =
    gameStatus === GAME_STATUS_START ? <StartPage /> : <OnGoingPage />;

  return (
    <FindGameContext.Provider value={findGameContext}>
      <Suspense fallback={<div>Loading...</div>}>
        <div className={styles.gameWrapper}>{mainPage}</div>
      </Suspense>
    </FindGameContext.Provider>
  );
};

export default Main2;
