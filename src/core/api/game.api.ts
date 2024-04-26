import { API_ROUTES } from "./api-routes";
import { fetch, getApiUrl } from "./network";

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
}
