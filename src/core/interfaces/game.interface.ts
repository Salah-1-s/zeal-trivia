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
