import React from "react";

import styles from "./Main.module.scss";

import KeyboardButton from "./KeyboardButton";
import { COLOR_GREEN, COLOR_BLUE, COLOR_RED, COLOR_YELLOW } from "../constants";

type kb = {
  left: number;
};

const KeyboardN = ({ left }: kb) => {
  return (
    <div className={styles.kbWrapper} style={{ left: left }}>
      <div className={styles.kbColumn}>
        <div className={styles.kbRow}>
          <KeyboardButton word="b" color={COLOR_GREEN} />
          <KeyboardButton word="p" color={COLOR_BLUE} />
        </div>
        <div className={styles.kbRow}>
          <KeyboardButton word="m" color={COLOR_YELLOW} />
          <KeyboardButton word="f" color={COLOR_RED} />
        </div>
      </div>
    </div>
  );
};

export default KeyboardN;
