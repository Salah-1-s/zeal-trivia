import { useGetCategoriesQuery } from "../core/utils/game.utils";

export default function CategoriesPage() {
  const { data, isFetching } = useGetCategoriesQuery();
  console.log(data);

  if (isFetching) {
    return <h1>Loading</h1>;
  }

  return (
    <section>
      <h1>Question Category</h1>
      <div>
        {data?.trivia_categories?.map((c) => (
          <button key={c?.id}>{c?.name}</button>
        ))}
      </div>
      <button>Play</button>
    </section>
  );
}
