import { QueryOptions, UseQueryResult, useQuery } from "@tanstack/react-query";
import { GameCategoryResponse } from "../interfaces/game.interface";
import { Game as GameAPI } from "../api/game.api";

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
