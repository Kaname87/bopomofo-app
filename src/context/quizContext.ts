import React from "react";

import {
  //HistoryType, GameStatusType,
  QuizContextType
} from "../types";

const QuizContext = React.createContext<QuizContextType>({});

export default QuizContext;
