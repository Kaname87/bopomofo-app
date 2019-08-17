import React, { useState, useEffect, useContext } from "react";
import styles from "./Main.module.scss";
import AnswerFields from "./AnswerFields";
// import StartPage from "./StartPage";
import bopomofoListSource from "../data/bopomofoList.json";
import QuizContext from "../context/quizContext";
// import { endianness } from "os";

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

// const START = "START";
// const ONGOING = "ONGOING";
const END_QUIZ_COUNT = 3;
const END = "END";

const OnGoingPage = () => {
  const { quizCount, setGameStatus } = useContext(QuizContext);

  const [question, setQuestion] = useState<questionStateType>({});
  const [selectedBopomofoList, setSelectedBopomofoList] = useState<any[]>([]);

  // Update Question when quizCount is updated
  useEffect(() => {
    if (quizCount === END_QUIZ_COUNT && typeof setGameStatus === "function") {
      return setGameStatus(END);
    }
    setQuestion(randomSelect(bopomofoListSource));
  }, [quizCount]);

  // Update
  useEffect(() => {
    if (question.bopomofo) {
      const options = getRandomOptions(bopomofoListSource, question);
      setSelectedBopomofoList([question, ...options]);
    }
  }, [question]);

  const questionIsReady = question && selectedBopomofoList.length > 0;

  return questionIsReady ? (
    // <div className={styles.wrapper}>
    <div className={styles.quizContainer}>
      <div className={styles.question}>{question.bopomofo}</div>
      <AnswerFields bopomofoList={selectedBopomofoList} question={question} />
    </div>
  ) : (
    // </div>
    <div>Now Loading</div>
  );
};

export default OnGoingPage;
