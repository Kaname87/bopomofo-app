import React, { useState } from "react";
import styles from "./Main.module.scss";
import useInterval from "../utils/useInterval";

import Board from "./FindGame/Board";

const FindGame = () => {
  // const [count, setCount] = useState(0);
  // useInterval(() => {
  //   // Your custom logic here
  //   setCount(count + 1);
  // }, 1000);
  // return (
  //   <div className={styles.gameContainer}>
  //     <div className={styles.gameHeader}>
  //       <div className={styles.timer}>{count}</div>
  //     </div>
  //     {/* // "ㄜ" "ㄘ" "ㄝ" */}
  //     <Board column={1} row={4} val={"さ"} otherVal={"ㄜ"} />
  //     <Board column={1} row={4} val={"ち"} otherVal={"ㄘ"} />
  //     <Board column={1} row={4} val={"せ"} otherVal={"ㄝ"} />
  //   </div>
  // );
};

export default FindGame;
