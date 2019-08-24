import React, { useContext } from "react";
import styles from "./../Main.module.scss";
import FindGameContext from "../../context/FindGameContext";

type targetType = {
  col: number;
  row: number;
  val: string;
  otherVal: string;
};
const numArray = [0, 1, 2, 3, 4];

type cellType = {
  target: targetType;
  currentRow: number;
  currentCol: number;
};

const Cell = ({ target, currentRow, currentCol }: cellType) => {
  // const { selected, setSelected } = useContext(FindGameContext);
  const { selectedCell, setSelectedCell } = useContext(FindGameContext);
  // console.log(selectedCell);
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
