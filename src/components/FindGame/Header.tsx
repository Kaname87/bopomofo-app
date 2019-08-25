import React from "react";
import styles from "../Main2.module.scss";
import ProgressBar from "./ProgressBar";
import Timer from "./Timer";

type headerType = {
  isGameEnded: boolean;
  isGameOvered: boolean;
};
const Header = ({ isGameEnded, isGameOvered }: headerType) => {
  return (
    <div className={styles.gameHeader}>
      <div className={styles.headerInnerHeader}>
        <ProgressBar isGameEnded={isGameEnded} isGameOvered={isGameOvered} />
        <Timer isGameEnded={isGameEnded} />
      </div>
    </div>
  );
};
export default Header;
