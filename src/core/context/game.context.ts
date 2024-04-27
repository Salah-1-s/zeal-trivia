import React from "react";
import { GameDifficulty } from "../interfaces/game.interface";

export const GAME_CONTEXT: React.Context<{
  /**
   * Current player name
   */
  playerName?: string;

  /**
   * Sets player name
   */
  setPlayerName?: (user: string) => void;

  /**
   * Game difficulty level
   */
  gameDifficulty?: GameDifficulty;

  /**
   * Sets game difficulty level
   */
  setGameDifficulty?: (level: GameDifficulty) => void;

  /**
   * All the previous categories the user selected
   */
  prevCategories?: number[];

  /**
   * Set the previous categories the user selected
   */
  setPrevCategories?: React.Dispatch<React.SetStateAction<number[]>>;
}> = React.createContext({});
