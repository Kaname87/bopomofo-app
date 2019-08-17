export type SVGType = {
  width: number;
  height: number;
  fill?: string;
};

export type QuestionType = {
  bopomofo?: string;
  pinyin?: string;
};
export type HistoryType = {
  question?: QuestionType;
  selectedOption?: string;
  isCorrect?: boolean;
};
export type GameStatusType = "START" | "ONGOING" | "END";
// export type GameStatusType = string;

export type QuizContextType = {
  quizCount?: number;
  setQuizCount?: (quizCount: number) => void;
  histories?: HistoryType[];
  setHistories?: (histories: HistoryType[]) => void;
  gameStatus?: GameStatusType;
  setGameStatus?: (gameStatus: GameStatusType) => void;
};
