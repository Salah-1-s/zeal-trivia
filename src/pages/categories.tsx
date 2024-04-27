import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "../core/components/button";
import { GAME_CONTEXT } from "../core/providers/game.context";
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
      <h1>Select A Question Category</h1>
      <div>
        {data?.trivia_categories?.map((c) => (
          <button
            key={c?.id}
            disabled={prevCategories?.includes(c?.id)}
            onClick={() => setSelectedCategory(c?.id)}
            className={selectedCategory === c?.id ? "tab--active" : ""}
          >
            {c?.name}
          </button>
        ))}
      </div>
      <PrimaryButton
        disabled={!selectedCategory}
        className="mt-16"
        onClick={() =>
          navigate(ROUTES.questionsPage.path, { state: { selectedCategory } })
        }
      >
        Play
      </PrimaryButton>
    </section>
  );
}
