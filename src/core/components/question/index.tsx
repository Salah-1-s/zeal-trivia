import { useContext, useState } from "react";
import { QUESTIONS_CONTEXT } from "../../context/questions.context";
import { QuestionInterface } from "../../interfaces/game.interface";

interface QuestionProps {
  question: QuestionInterface;
  resetTimer: () => void;
}

export default function Question({ question, resetTimer }: QuestionProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<string>();

  const questionsContext = useContext(QUESTIONS_CONTEXT);

  const answersArray = [question.correct_answer, ...question.incorrect_answers];

  const skipHandler = () => {
    questionsContext?.setSkippedQuestions &&
      questionsContext?.setSkippedQuestions((prev) => prev + 1);

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

    resetTimer();
  };

  return (
    <div>
      <h4>{question.question}</h4>
      {answersArray?.map((a, i) => (
        <button key={i} onClick={() => setSelectedAnswer(a)}>
          {a}
        </button>
      ))}

      <div>
        <button onClick={skipHandler}>Skip</button>
        <button disabled={!selectedAnswer} onClick={submitHandler}>
          Next
        </button>
      </div>
    </div>
  );
}
