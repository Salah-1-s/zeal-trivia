import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GAME_CONTEXT } from "../core/context/game.context";
import { ROUTES } from "../core/constants/routes";
import { GameDifficulty } from "../core/interfaces/game.interface";

export default function WelcomePage() {
  const { playerName, setPlayerName, gameDifficulty, setGameDifficulty } =
    useContext(GAME_CONTEXT);

  const navigate = useNavigate();

  return (
    <section>
      <fieldset>
        <legend>Please enter your name</legend>
        <input
          type="text"
          name="playerName"
          value={playerName || ""}
          onChange={(e) => setPlayerName && setPlayerName(e.target.value)}
        />
      </fieldset>

      <fieldset>
        <legend>Select game difficulty level:</legend>

        <div>
          <input
            type="radio"
            id="easy"
            name="gameDifficulty"
            onChange={() =>
              setGameDifficulty && setGameDifficulty(GameDifficulty.easy)
            }
          />
          <label htmlFor="easy">Easy</label>
        </div>

        <div>
          <input
            type="radio"
            id="medium"
            name="gameDifficulty"
            onChange={() =>
              setGameDifficulty && setGameDifficulty(GameDifficulty.medium)
            }
          />
          <label htmlFor="medium">Medium</label>
        </div>

        <div>
          <input
            type="radio"
            id="hard"
            name="gameDifficulty"
            onChange={() =>
              setGameDifficulty && setGameDifficulty(GameDifficulty.hard)
            }
          />
          <label htmlFor="hard">Hard</label>
        </div>
      </fieldset>

      <div>
        <button
          onClick={() => navigate(ROUTES.categoriesPage.path)}
          disabled={!(playerName || "").replaceAll(" ", "") || !gameDifficulty}
        >
          Play
        </button>
      </div>
    </section>
  );
}
