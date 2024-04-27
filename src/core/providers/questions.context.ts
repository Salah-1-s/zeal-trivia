import React from "react";
import { QuestionSummaryInterface } from "../interfaces/game.interface";

export const QUESTIONS_CONTEXT: React.Context<{
  /**
   * Number of correct answers
   */
  correctAnswers?: number;

  /**
   * Sets number of correct answers
   */
  setCorrectAnswers?: React.Dispatch<React.SetStateAction<number>>;

  /**
   * Number of false answers
   */
  falseAnswers?: number;

  /**
   * Sets number of false answers
   */
  setFalseAnswers?: React.Dispatch<React.SetStateAction<number>>;

  /**
   * Number of skipped questions
   */
  skippedQuestions?: number;

  /**
   * Sets number of skipped questions
   */
  setSkippedQuestions?: React.Dispatch<React.SetStateAction<number>>;

  /**
   * Questions summary
   */
  questionsSummary?: QuestionSummaryInterface[];

  /**
   * Set questions summary
   */
  setQuestionsSummary?: React.Dispatch<
    React.SetStateAction<QuestionSummaryInterface[]>
  >;
}> = React.createContext({});
