export enum GameDifficulty {
  easy = "easy",
  medium = "medium",
  hard = "hard",
}

export interface GameCategoryInterface {
  id: number;
  name: string;
}

export interface GameCategoryResponse {
  trivia_categories: GameCategoryInterface[];
}

export interface QuestionInterface {
  category: string;
  correct_answer: string;
  difficulty: GameDifficulty;
  incorrect_answers: string[];
  question: string;
  type: string;
}

export interface QuestionsResponse {
  response_code: 0 | 1 | 2 | 3 | 4;
  results: QuestionInterface[];
}

export interface QuestionSummaryInterface {
  name: string;
  time_to_complete: number;
}
