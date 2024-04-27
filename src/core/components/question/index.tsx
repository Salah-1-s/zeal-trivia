import { useContext, useEffect, useState } from "react";
import PrimaryButton from "../button";
import { QUESTIONS_CONTEXT } from "../../providers/questions.context";
import { QuestionInterface } from "../../interfaces/game.interface";

interface QuestionProps {
  question: QuestionInterface;
  resetTimer: () => void;
}

export default function Question({ question, resetTimer }: QuestionProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<string>();
  const [answersArray, setAnswersArray] = useState<string[]>([]);

  const questionsContext = useContext(QUESTIONS_CONTEXT);

  const skipHandler = () => {
    questionsContext?.setSkippedQuestions &&
      questionsContext?.setSkippedQuestions((prev) => prev + 1);

    setSelectedAnswer(undefined);
    resetTimer();
  };

  const submitHandler = () => {
    if (selectedAnswer === question.correct_answer) {
      questionsContext?.setCorrectAnswers &&
        questionsContext?.setCorrectAnswers((prev) => prev + 1);
    } else {
      questionsContext?.setFalseAnswers &&
        questionsContext?.setFalseAnswers((prev) => prev + 1);
    }

    setSelectedAnswer(undefined);
    resetTimer();
  };

  useEffect(() => {
    setAnswersArray(
      [question.correct_answer, ...question.incorrect_answers].sort(
        () => 0.5 - Math.random()
      )
    );
  }, [question]);

  return (
    <div>
      <h4>{question.question}</h4>
      {answersArray?.map((a, i) => (
        <button
          key={i}
          onClick={() => setSelectedAnswer(a)}
          className={selectedAnswer === a ? "tab--active" : ""}
        >
          {a}
        </button>
      ))}

      <div className="mt-16">
        <button onClick={skipHandler}>Skip</button>
        <PrimaryButton disabled={!selectedAnswer} onClick={submitHandler}>
          Next
        </PrimaryButton>
      </div>
    </div>
  );
}
