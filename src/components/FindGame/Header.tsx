import React, { useState } from "react";
import styles from "../Main2.module.scss";
import useInterval from "../../utils/useInterval";

type headerType = {
  isGameEnded: boolean;
};
const Header = ({ isGameEnded }: headerType) => {
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
export default Header;
