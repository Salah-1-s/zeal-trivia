import { useContext } from "react";
import LineGraph from "../core/components/charts/line";
import { QUESTIONS_CONTEXT } from "../core/context/questions.context";
import { GAME_CONTEXT } from "../core/context/game.context";
import { convertSecondsToMinutes } from "../core/utils/common.utils";
import BarChart from "../core/components/charts/bar";

export default function ScorePage() {
  const { playerName } = useContext(GAME_CONTEXT);
  const { questionsSummary } = useContext(QUESTIONS_CONTEXT);

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
      <BarChart />

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