import React, { useContext } from "react";
import styles from "../Main2.module.scss";
import FindGameContext from "../../context/FindGameContext";
import { targetType } from "../../types";

type cellType = {
  target: targetType;
  currentRow: number;
  currentCol: number;
};

const Cell = ({ target, currentRow, currentCol }: cellType) => {
  const { selectedCell, setSelectedCell } = useContext(FindGameContext);
  const isAnswer = currentCol === target.col && target.row === currentRow;
  const val = isAnswer ? target.otherVal : target.val;
  const isSelectedCell =
    selectedCell.selected &&
    selectedCell.row === currentRow &&
    selectedCell.col === currentCol;
  let cl = styles.boardCell;
  if (selectedCell.selected) {
    cl = isAnswer
      ? styles.correctBoardCell
      : isSelectedCell
      ? styles.wrongBoardCell
      : styles.boardCell;
  }

  return (
    <div
      className={cl}
      onClick={() => {
        if (!selectedCell.selected) {
          setSelectedCell({
            row: currentRow,
            col: currentCol,
            selected: true,
            isAnswer: isAnswer
          });
        }
      }}
    >
      {val}
    </div>
  );
};

export default Cell;
