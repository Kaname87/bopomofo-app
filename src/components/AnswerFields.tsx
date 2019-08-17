import React, { useState, useContext } from "react";
import styles from "./Main.module.scss";
import OptionList from "./OptionList";
import QuizContext from "../context/quizContext";
import {
  QuizContextType,
  HistoryType,
  SetHistoriesType,
  SetQuizType
} from "../types";

interface questionInfo {
  bopomofoList: any;
  question: any;
}

const AnswerFields: React.FC<questionInfo> = ({ bopomofoList, question }) => {
  const [showAnswer, setShowAnswer] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const { quizCount, setQuizCount, histories, setHistories } = useContext<
    QuizContextType
  >(QuizContext);

  const submitAnswer = (
    quizCount: number,
    selectedOption: string,
    histories: HistoryType[],
    setHistories: SetHistoriesType,
    setQuizCount: SetQuizType
  ) => {
    if (selectedOption.length > 0 && histories && setHistories) {
      setSelectedOption("");
      setShowAnswer(false);
      const isCorrect = question.pinyin === selectedOption;
      const newHistories = [
        { question, selectedOption, isCorrect },
        ...histories
      ];
      setHistories(newHistories);
      setQuizCount(quizCount + 1);
    }
  };

  return (
    <div className={styles.quizContainer}>
      <OptionList
        bopomofoList={bopomofoList}
        question={question}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
        showAnswer={showAnswer}
      />
      <div className={styles.buttonContainer}>
        {showAnswer ? (
          <button
            onClick={() => {
              if (
                typeof quizCount === "number" &&
                typeof setQuizCount === "function" &&
                typeof histories !== "undefined" &&
                typeof setHistories === "function"
              ) {
                submitAnswer(
                  quizCount,
                  selectedOption,
                  histories,
                  setHistories,
                  setQuizCount
                );
              }
            }}
            className={styles.button}
            disabled={!showAnswer}
          >
            Next
          </button>
        ) : (
          <button
            onClick={() => {
              setShowAnswer(!showAnswer);
            }}
            className={styles.button}
            disabled={showAnswer || selectedOption.length === 0}
          >
            Check
          </button>
        )}
      </div>
    </div>
  );
};

export default AnswerFields;
