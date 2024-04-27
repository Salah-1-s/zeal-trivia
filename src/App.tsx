import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { GAME_CONTEXT } from "./core/context/game.context";
import { useState } from "react";
import { ROUTES } from "./core/constants/routes";
import {
  GameDifficulty,
  QuestionSummaryInterface,
} from "./core/interfaces/game.interface";
import { QUESTIONS_CONTEXT } from "./core/context/questions.context";

const router = createBrowserRouter([
  {
    children: Array.from(Object.values(ROUTES)),
  },
]);

function App() {
  const [playerName, setPlayerName] = useState("");
  const [gameDifficulty, setGameDifficulty] = useState<GameDifficulty>();
  const [prevCategories, setPrevCategories] = useState<number[]>([]);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [falseAnswers, setFalseAnswers] = useState(0);
  const [skippedQuestions, setSkippedQuestions] = useState(0);
  const [questionsSummary, setQuestionsSummary] = useState<
    QuestionSummaryInterface[]
  >([]);

  return (
    <GAME_CONTEXT.Provider
      value={{
        playerName,
        setPlayerName,
        gameDifficulty,
        setGameDifficulty,
        prevCategories,
        setPrevCategories,
      }}
    >
      <QUESTIONS_CONTEXT.Provider
        value={{
          correctAnswers,
          setCorrectAnswers,
          falseAnswers,
          setFalseAnswers,
          skippedQuestions,
          setSkippedQuestions,
          questionsSummary,
          setQuestionsSummary,
        }}
      >
        <RouterProvider router={router} />
      </QUESTIONS_CONTEXT.Provider>
    </GAME_CONTEXT.Provider>
  );
}

export default App;
