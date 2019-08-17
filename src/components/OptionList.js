import React from "react";
import styles from "./Main.module.scss";

const OptionList = ({
  bopomofoList,
  question,
  selectedOption,
  setSelectedOption,
  showAnswer
}) => {
  const isAnswer = pinin => pinin === question.pinin;
  const isSelected = pinin => pinin === selectedOption;

  const renderAnswerList = bopomofoList => {
    return (
      bopomofoList &&
      bopomofoList
        .sort((a, b) => (a.pinin > b.pinin ? 1 : -1))
        .map(v => renderAnswer(v))
    );
  };

  const renderAnswer = ({ bopomofo, pinin }) => {
    // console.log(bopomofo, pinin);
    return (
      <li
        key={bopomofo}
        className={
          showAnswer && isAnswer(pinin)
            ? styles.correctAnswer
            : showAnswer && !isAnswer(pinin) && isSelected(pinin)
            ? styles.wrongAnswer
            : isSelected(pinin)
            ? styles.selectedAnswer
            : styles.singleAnswer
        }
        onClick={() => !showAnswer && setSelectedOption(pinin)}
      >
        {pinin}
      </li>
    );
  };

  return (
    <div className={styles.answersContainer}>
      <ul className={styles.answerUl}>{renderAnswerList(bopomofoList)}</ul>
    </div>
  );
};

export default OptionList;
