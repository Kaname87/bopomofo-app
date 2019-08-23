import React, { useContext } from "react";
import styles from "./Main.module.scss";
import Player from "./Player";
import XiaoLongBao from "./SVG/XiaoLongBao";
import ShiroNeko from "./SVG/ShiroNeko";
import AttackGameContext from "../context/attackGameContext";

type p = {
  playerP: number;
};

const renderBoard = (props: p, left: number) => {
  const rows = [1, 2, 3, 4, 5].map(i =>
    renderColumns(props, left, i === props.playerP)
  );
  return rows;
};

const renderColumns = (props: p, left: number, isTargetRow: boolean) => {
  const columns = [1, 2, 3, 4, 5].map(i => {
    return (
      <div className={styles.boardCell} key={i}>
        {i === props.playerP && isTargetRow
          ? // <ShiroNeko width={30} height={30} />
            // "ㄘ"
            "ㄝ"
          : // : i === props.playerP + 1 && isTargetRow
            // ? "せ"
            // : i === props.playerP - 1 && !isTargetRow
            // ? "ㄝ"
            // : i === props.playerP - 2 && isTargetRow
            // ? "さ"
            // : i === props.playerP - 2 && !isTargetRow
            // ? "ㄜ"
            "せ" //  "ち"

        // <XiaoLongBao width={30} height={30} />
        }
      </div>
    );
  });

  return <div style={{ display: "flex" }}>{columns}</div>;
};

const Board = (props: p) => {
  // console.log(props);

  return <div className={styles.boardWrapper}>{renderBoard(props, 1)}</div>;
};

export default Board;
