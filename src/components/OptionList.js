import React from "react";
import styles from "./Main.module.scss";

const OptionList = ({
  bopomofoList,
  question,
  selectedOption,
  setSelectedOption,
  showAnswer
}) => {
  const isAnswer = pinyin => pinyin === question.pinyin;
  const isSelected = pinyin => pinyin === selectedOption;

  const renderAnswerList = bopomofoList => {
    return (
      bopomofoList &&
      bopomofoList
        .sort((a, b) => (a.pinyin > b.pinyin ? 1 : -1))
        .map(v => renderAnswer(v))
    );
  };

  const renderAnswer = ({ bopomofo, pinyin }) => {
    // console.log(bopomofo, pinyin);
    return (
      <li
        key={bopomofo}
        className={
          showAnswer && isAnswer(pinyin)
            ? styles.correctAnswer
            : showAnswer && !isAnswer(pinyin) && isSelected(pinyin)
            ? styles.wrongAnswer
            : isSelected(pinyin)
            ? styles.selectedAnswer
            : styles.singleAnswer
        }
        onClick={() => !showAnswer && setSelectedOption(pinyin)}
      >
        {pinyin}
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
