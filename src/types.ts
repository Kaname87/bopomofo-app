export type QuestionType = {
  bopomofo?: string;
  pinin?: string;
};
export type HistoryType = {
  question?: QuestionType;
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
