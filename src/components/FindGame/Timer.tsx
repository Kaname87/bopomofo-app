import React, { useState } from "react";
import styles from "../Main2.module.scss";
import useInterval from "../../utils/useInterval";

type timerPropsType = {
  isGameEnded: boolean;
};
const Timer = ({ isGameEnded }: timerPropsType) => {
  const [timer, setTimer] = useState(0);
  useInterval(() => {
    if (!isGameEnded) {
      setTimer((prevTimer: number) => prevTimer + 1);
    }
  }, 1000);

  return <div className={styles.timer}>{timer}</div>;
};
export default Timer;
