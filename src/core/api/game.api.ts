import { API_ROUTES } from "./api-routes";
import { fetch, getApiUrl } from "./network";
import { GameDifficulty } from "../interfaces/game.interface";

export class Game {
  public static getCategories() {
    const url = new URL(getApiUrl(API_ROUTES.getCategories.path));

    return fetch(url, {
      method: API_ROUTES.getCategories.method,
    })
      .then((res) => res)
      .catch(() => {
        throw new Error("Failed to fetch categories");
      });
  }

  public static getQuestions(
    amount: number,
    category: number,
    difficulty: GameDifficulty
  ) {
    const url = new URL(getApiUrl(API_ROUTES.getQuestions.path));

    url.searchParams.append("amount", String(amount));
    url.searchParams.append("category", String(category));
    url.searchParams.append("difficulty", difficulty);

    return fetch(url, {
      method: API_ROUTES.getQuestions.method,
    })
      .then((res) => res)
      .catch(() => {
        throw new Error("Failed to fetch questions");
      });
  }
}
