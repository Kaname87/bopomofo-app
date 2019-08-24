import React, { useState } from "react";
import styles from "./Main.module.scss";

import StartPage from "./FindGame/StartPage";
import OnGoingPage from "./FindGame/OnGoingPage";
import EndPage from "./FindGame/EndPage";

import FindGameContext from "../context/FindGameContext";
import { GameStatusType } from "../types";
import { GAME_STATUS_START, GAME_STATUS_ONGOING } from "../constants";

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
    // selected,
    // setSelected,
    selectedCell,
    setSelectedCell
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
    <FindGameContext.Provider value={findGameContext}>
      <div className={styles.wrapper}>{mainPage}</div>;
    </FindGameContext.Provider>
  );
};

export default Main2;
