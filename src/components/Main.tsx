import React, { useState, useEffect, createContext } from "react";
import styles from "./Main.module.scss";
import AnswerFields from "./AnswerFields";
import bopomofoListSource from "../data/bopomofoList.json";
import QuizContext from "../context/quizContext";

const randomSelect = (array: any[]) => {
  return array[Math.floor(Math.random() * array.length)];
};

const getRandomOptions = (array: any[], question: any) => {
  const copy = array.slice().filter(v => v !== question);
  return [...Array(3)].map(
    () => copy.splice(Math.floor(Math.random() * copy.length), 1)[0]
  );
};

type questionStateType = {
  title?: string;
  bopomofo?: string;
};

const Main = () => {
  const [quizCount, setQuizCount] = useState(0);
  const [histories, setHistories] = useState([]);

  const [question, setQuestion] = useState<questionStateType>({});
  const [selectedBopomofoList, setSelectedBopomofoList] = useState<any[]>([]);

  // Update Question when quizCount is updated
  useEffect(() => {
    setQuestion(randomSelect(bopomofoListSource));
  }, [quizCount]);

  // Update
  useEffect(() => {
    const options = getRandomOptions(bopomofoListSource, question);
    if (question) {
      setSelectedBopomofoList([question, ...options]);
    }
  }, [question]);

  return question && selectedBopomofoList.length > 0 ? (
    <QuizContext.Provider
      value={{ quizCount, setQuizCount, histories, setHistories }}
    >
      <div className={styles.wrapper}>
        <div className={styles.quizContainer}>
          <div className={styles.question}>{question.bopomofo}</div>
          <AnswerFields
            bopomofoList={selectedBopomofoList}
            question={question}
          />
        </div>
      </div>
    </QuizContext.Provider>
  ) : (
    <div>Now Loading</div>
  );
};

export default Main;
