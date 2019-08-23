import React, { useState } from "react";
import styles from "./Main.module.scss";
import useInterval from "../utils/useInterval";

import Board from "./Board";

import FindGameContext from "../context/FindGameContext";

const FindGame = () => {
  const [count, setCount] = useState(0);

  useInterval(() => {
    // Your custom logic here
    setCount(count + 1);
  }, 1000);

  const FindGameContext: any = {
    // attack,
    // posi
    // handleKeyDown
  };

  // <FindGameContext.Provider value={FindGameContext}>
  return (
    <div className={styles.gameContainer}>
      <div className={styles.gameHeader}>
        <div className={styles.gameTitle}>Find 注音</div>
        <div className={styles.timer}>{count}</div>
      </div>
      <Board playerP={5} />
    </div>
  );
  // </FindGameContext.Provider>
};

export default FindGame;
