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
export type HistoriesType = HistoryType[];

export type GameStatusType =
  | "GAME_STATUS_START"
  | "GAME_STATUS_ONGOING"
  | "GAME_STATUS_END";
// export type GameStatusType = string;

export type SetQuizType = (quizCount: number) => void;
export type SetHistoriesType = (histories: HistoriesType) => void;

export type QuizContextType = {
  quizCount?: number;
  setQuizCount?: (quizCount: number) => void;
  histories?: HistoriesType;
  setHistories?: SetHistoriesType;
  gameStatus?: GameStatusType;
  setGameStatus?: (gameStatus: GameStatusType) => void;
};
