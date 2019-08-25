import React, { useContext } from "react";
import styles from "../Main2.module.scss";
import FindGameContext from "../../context/FindGameContext";

import { FIND_GAME_END_IDX } from "../../constants";

type headerType = {
  isGameEnded: boolean;
  isGameOvered: boolean;
};
const ProgressBar = ({ isGameEnded, isGameOvered }: headerType) => {
  const { quizCount } = useContext(FindGameContext);

  const progressWidth =
    isGameEnded && !isGameOvered
      ? 100
      : Math.round((quizCount / (FIND_GAME_END_IDX + 1)) * 100);
  return (
    <div className={styles.progressContainer}>
      <div className={styles.progress2}>
        <div
          style={{ width: `${progressWidth}%` }}
          className={styles.progressBar2}
        ></div>
      </div>
    </div>
  );
};
export default ProgressBar;
