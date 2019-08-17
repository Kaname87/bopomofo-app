import React, { useState, useEffect, useContext } from "react";
import styles from "./Main.module.scss";
import AnswerFields from "./AnswerFields";
import bopomofoListSource from "../data/bopomofoList.json";
import QuizContext from "../context/quizContext";
import { GAME_STATUS_END, END_QUIZ_COUNT } from "../constants";

const createQuizList = (source: any[]) => {
  let quizOptionList: any[] = [];
  for (let i = 1; i <= END_QUIZ_COUNT; i++) {
    while (true) {
      let quizOpt = randomSelect(source);
      if (!quizOptionList.includes(quizOpt)) {
        quizOptionList.push(quizOpt);
        break;
      }
    }
  }

  return quizOptionList;
};

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

const OnGoingPage = () => {
  const { quizCount, setGameStatus } = useContext(QuizContext);
  const [question, setQuestion] = useState<questionStateType>({});
  const [selectedBopomofoList, setSelectedBopomofoList] = useState<any[]>([]);
  const [quizList, setQuizList] = useState<any[]>([]);

  // Update Question when quizCount is updated
  useEffect(() => {
    setQuizList(createQuizList(bopomofoListSource));
  }, []);

  useEffect(() => {
    const updateQuestionAndOption = (quizList: any[], quizCount: number) => {
      const question = quizList[quizCount];

      setQuestion(question);

      setSelectedBopomofoList([
        question,
        ...getRandomOptions(bopomofoListSource, question)
      ]);
    };

    if (quizCount === END_QUIZ_COUNT && typeof setGameStatus === "function") {
      return setGameStatus(GAME_STATUS_END);
    }

    if (quizList.length > 0 && typeof quizCount == "number") {
      updateQuestionAndOption(quizList, quizCount);
    }
  }, [quizList, quizCount, setGameStatus]);

  // Update Question when quizCount is updated
  // useEffect(() => {
  //   // if (quizCount === END_QUIZ_COUNT && typeof setGameStatus === "function") {
  //   //   return setGameStatus(END);
  //   // }
  //   // setQuestion(randomSelect(bopomofoListSource));
  //   if (typeof quizCount === "number" && quizList.length > 0) {
  //     updateQuestionAndOption(quizList, quizCount);
  //   }
  //   // setSelectedBopomofoList([question, ...options]);
  // }, [quizCount]);

  const questionIsReady = question && selectedBopomofoList.length > 0;

  return questionIsReady ? (
    // <div className={styles.wrapper}>
    <div className={styles.quizContainer}>
      <div className={styles.question}>{question.bopomofo}</div>
      <AnswerFields bopomofoList={selectedBopomofoList} question={question} />
    </div>
  ) : (
    // </div>
    <div>Now Loading...</div>
  );
};

export default OnGoingPage;
