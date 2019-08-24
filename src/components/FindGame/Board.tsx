import React from "react";
import styles from "../Main2.module.scss";
import Cell from "./Cell";
import { targetType } from "../../types";

const numArray = [0, 1, 2, 3, 4];

const renderBoard = (target: targetType) => {
  return numArray.map(currentRow => (
    <div key={currentRow} style={{ display: "flex" }}>
      {renderCols(target, currentRow)}
    </div>
  ));
};
// "ㄜ" "ㄘ" "ㄝ"
const renderCols = (target: targetType, currentRow: number) => {
  return numArray.map(currentCol => (
    <Cell
      key={`${currentCol}_${currentRow}`}
      target={target}
      currentCol={currentRow}
      currentRow={currentCol}
    />
  ));
};

const Board = ({ target }: any) => {
  return <div className={styles.boardWrapper}>{renderBoard(target)}</div>;
};

export default Board;
