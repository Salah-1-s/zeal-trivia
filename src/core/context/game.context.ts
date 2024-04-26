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
}> = React.createContext({});
