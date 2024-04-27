import { QueryOptions, UseQueryResult, useQuery } from "@tanstack/react-query";
import { Game as GameAPI } from "../api/game.api";
import {
  GameCategoryResponse,
  GameDifficulty,
  QuestionsResponse,
} from "../interfaces/game.interface";

export function useGetCategoriesQuery(
  options?: QueryOptions
): UseQueryResult<GameCategoryResponse> {
  return useQuery({
    queryKey: ["categories"],
    queryFn: () => {
      return GameAPI.getCategories()
        .then((res) => res)
        .catch((err) => {
          console.error(err.message);
        });
    },
    ...options,
  });
}

export function useGetQuestionsQuery(
  amount: number,
  category: number,
  difficulty: GameDifficulty,
  options?: QueryOptions
): UseQueryResult<QuestionsResponse> {
  return useQuery({
    queryKey: ["questions", amount, category, difficulty],
    queryFn: () => {
      return GameAPI.getQuestions(amount, category, difficulty)
        .then((res) => res)
        .catch((err) => {
          console.error(err.message);
        });
    },
    ...options,
  });
}

export const calculateTimerHandler = (level?: GameDifficulty) => {
  if (level === GameDifficulty.hard) {
    return 30;
  }
  if (level === GameDifficulty.medium) {
    return 60;
  }
  return 90;
};
