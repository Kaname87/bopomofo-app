import React, { useState, useContext, useEffect } from "react";
import styles from "./Main.module.scss";
import OptionList from "./OptionList";
import QuizContext from "../context/quizContext";

interface questionInfo {
  bopomofoList: any;
  question: any;
  gameState?: any;
  setQuizCount?: any;
}

const AnswerFields: React.FC<questionInfo> = ({
  bopomofoList,
  question
  //   gameState
}) => {
  //   const [answerSubmitted, setAnswerSubmitted] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const { quizCount, setQuizCount, histories, setHistories } = useContext(
    QuizContext
  );

  useEffect(() => {
    if (selectedOption.length > 0) {
      setSelectedOption("");
      setShowAnswer(false);
      setHistories([{ question, selectedOption }, ...histories]);
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
        <button
          onClick={() => {
            setShowAnswer(!showAnswer);
          }}
          className={styles.button}
          disabled={showAnswer || selectedOption.length === 0}
        >
          Check
        </button>

        <button
          onClick={() => setQuizCount(quizCount + 1)}
          className={styles.button}
          disabled={!showAnswer}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AnswerFields;
