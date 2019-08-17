import React, { useState, useContext, useEffect } from "react";
import styles from "./Main.module.scss";
import OptionList from "./OptionList";
import QuizContext from "../context/quizContext";
import { QuizContextType } from "../types";

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

  useEffect(() => {
    if (selectedOption.length > 0 && setHistories && histories) {
      setSelectedOption("");
      setShowAnswer(false);
      const isCorrect = question.pinyin === selectedOption;
      const newHistories = [
        { question, selectedOption, isCorrect },
        ...histories
      ];
      setHistories(newHistories);
    }
  }, [quizCount]);

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
                typeof setQuizCount == "function"
              ) {
                setQuizCount(quizCount + 1);
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
