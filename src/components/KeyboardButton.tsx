import React, { useContext } from "react";

import AttackGameContext from "../context/attackGameContext";
import styles from "./Main.module.scss";

import useInterval from "../utils/useInterval";

type buttonType = {
  word: string;
  color: string;
};
type attackType = {
  top: number;
  left: number;
};

const KeyboardButton = ({ word, color }: buttonType) => {
  const { doAttack } = useContext<any>(AttackGameContext);
  return (
    <button
      style={{ backgroundColor: color }}
      className={styles.kbButton}
      onClick={() =>
        setInterval(() => {
          doAttack((prevAttack: attackType) => ({
            top: prevAttack.top - 60,
            left: prevAttack.left, // + 10
            color: color
          }));
        }, 100)
      }
    >
      {word}
    </button>
  );
};

export default KeyboardButton;
