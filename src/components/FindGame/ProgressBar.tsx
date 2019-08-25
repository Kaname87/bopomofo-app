import React, { useContext } from "react";
import styles from "../Main2.module.scss";
import useInterval from "../../utils/useInterval";
import FindGameContext from "../../context/FindGameContext";

import { FIND_GAME_END_IDX } from "../../constants";

type headerType = {
  isGameEnded: boolean;
  isGameOvered: boolean;
};
const ProgressBar = ({ isGameEnded, isGameOvered }: headerType) => {
  const { quizCount } = useContext(FindGameContext);

  console.log(quizCount + 1);
  const progressWidth =
    isGameEnded && !isGameOvered
      ? 100
      : Math.round((quizCount / (FIND_GAME_END_IDX + 1)) * 100);
  // console.log("qC", quizCount + 1, "f", FIND_GAME_END_IDX + 1);
  // console.log(quizCount + 1 / (FIND_GAME_END_IDX + 1);
  // style={{ width: `${getPercentage(now, min, max)}%`}};
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
