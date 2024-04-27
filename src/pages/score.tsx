import { useContext } from "react";
import LineGraph from "../core/components/charts/line";
import { QUESTIONS_CONTEXT } from "../core/providers/questions.context";
import { GAME_CONTEXT } from "../core/providers/game.context";
import { convertSecondsToMinutes } from "../core/utils/common.utils";
import PieChart from "../core/components/charts/pie";

export default function ScorePage() {
  const { playerName } = useContext(GAME_CONTEXT);
  const { questionsSummary, correctAnswers, falseAnswers, skippedQuestions } =
    useContext(QUESTIONS_CONTEXT);

  let totalTimeToComplete = 0;
  questionsSummary?.forEach(
    (q) => (totalTimeToComplete = totalTimeToComplete + q?.time_to_complete)
  );

  return (
    <section className="container">
      <h1>Score</h1>
      <h2>Player Name: {playerName}</h2>
      <h3>
        Total time to complete the game:{" "}
        {convertSecondsToMinutes(totalTimeToComplete)}
      </h3>
      <PieChart
        data={[
          {
            name: "Correct Answers",
            value: correctAnswers || 0,
          },
          {
            name: "False Answers",
            value: falseAnswers || 0,
          },
          {
            name: "Skipped Questions",
            value: skippedQuestions || 0,
          },
        ]}
      />

      <h5>
        The following graph represents how much time you took in each question
      </h5>
      <LineGraph
        xAxisValues={questionsSummary?.map((q) => q?.name) as string[]}
        yAxisValues={
          questionsSummary?.map((q) => q?.time_to_complete) as number[]
        }
      />
    </section>
  );
}
