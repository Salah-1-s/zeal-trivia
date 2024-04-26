import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { GAME_CONTEXT } from "./core/context/game.context";
import { useState } from "react";
import { ROUTES } from "./core/constants/routes";
import { GameDifficulty } from "./core/interfaces/game.interface";

const router = createBrowserRouter([
  {
    children: Array.from(Object.values(ROUTES)),
  },
]);

function App() {
  const [playerName, setPlayerName] = useState("");
  const [gameDifficulty, setGameDifficulty] = useState<GameDifficulty>();

  return (
    <GAME_CONTEXT.Provider
      value={{ playerName, setPlayerName, gameDifficulty, setGameDifficulty }}
    >
      <RouterProvider router={router} />
    </GAME_CONTEXT.Provider>
  );
}

export default App;
