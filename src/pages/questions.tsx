/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { QUESTIONS_CONTEXT } from "../core/context/questions.context";
import { GAME_CONTEXT } from "../core/context/game.context";
import Question from "../core/components/question";
import {
  calculateTimerHandler,
  useGetQuestionsQuery,
} from "../core/utils/game.utils";
import { ROUTES } from "../core/constants/routes";
import {
  GameDifficulty,
  QuestionInterface,
} from "../core/interfaces/game.interface";

export default function QuestionsPage() {
  const { gameDifficulty, prevCategories, setPrevCategories } =
    useContext(GAME_CONTEXT);
  const { setSkippedQuestions, setQuestionsSummary } =
    useContext(QUESTIONS_CONTEXT);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showCompletion, setShowCompletion] = useState(false);
  const [timer, setTimer] = useState(calculateTimerHandler(gameDifficulty));

  const { state } = useLocation();
  const navigate = useNavigate();

  const { data, isFetching } = useGetQuestionsQuery(
    3,
    state.selectedCategory,
    gameDifficulty || GameDifficulty.easy
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (timer === 0 && currentQuestion < 2) {
      setSkippedQuestions && setSkippedQuestions((prev) => prev + 1);
      setCurrentQuestion((prev) => prev + 1);
      setTimer(calculateTimerHandler(gameDifficulty));
    }
  }, [timer, currentQuestion]);

  useEffect(() => {
    if (timer === 0 && currentQuestion === 2) {
      if (setPrevCategories && state.selectedCategory) {
        setPrevCategories((prev) => [state.selectedCategory, ...prev]);
      }

      setShowCompletion(true);
    }
  }, [timer, currentQuestion]);

  useEffect(() => {
    if (showCompletion && prevCategories?.length === 3) {
      navigate(ROUTES.scorePage.path);
      setPrevCategories && setPrevCategories([]);
    }
  }, [showCompletion, prevCategories]);

  const resetTimerHandler = () => {
    if (currentQuestion < 2) {
      setCurrentQuestion((prev) => prev + 1);
      setTimer(calculateTimerHandler(gameDifficulty));
    } else {
      setTimer(0);
    }

    setQuestionsSummary &&
      setQuestionsSummary((prev) => [
        {
          name: `C${(prevCategories?.length || 0) + 1} Q${currentQuestion + 1}`,
          time_to_complete: calculateTimerHandler(gameDifficulty) - timer,
        },
        ...prev,
      ]);
  };

  if (isFetching) {
    return <h1>Loading</h1>;
  }

  return (
    <section>
      {showCompletion && (
        <div>
          <h2>Time for more!</h2>
          Congrats! You have completed all the questions in this category,{" "}
          <Link to={ROUTES.categoriesPage.path}>Click here</Link> to select
          another one.
        </div>
      )}

      {!showCompletion && (
        <>
          <p>Timer: {timer}</p>
          <div>Answer the following question</div>
          <Question
            question={data?.results?.[currentQuestion] as QuestionInterface}
            resetTimer={resetTimerHandler}
          />
        </>
      )}
    </section>
  );
}
