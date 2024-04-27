import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GAME_CONTEXT } from "../core/context/game.context";
import { useGetCategoriesQuery } from "../core/utils/game.utils";
import { ROUTES } from "../core/constants/routes";

export default function CategoriesPage() {
  const [selectedCategory, setSelectedCategory] = useState<number>();

  const { prevCategories } = useContext(GAME_CONTEXT);
  const navigate = useNavigate();

  const { data, isFetching } = useGetCategoriesQuery();

  if (isFetching) {
    return <h1>Loading</h1>;
  }

  return (
    <section>
      <h1>Question Category</h1>
      <div>
        {data?.trivia_categories?.map((c) => (
          <button
            key={c?.id}
            disabled={prevCategories?.includes(c?.id)}
            onClick={() => setSelectedCategory(c?.id)}
          >
            {c?.name}
          </button>
        ))}
      </div>
      <button
        disabled={!selectedCategory}
        onClick={() =>
          navigate(ROUTES.questionsPage.path, { state: { selectedCategory } })
        }
      >
        Play
      </button>
    </section>
  );
}
