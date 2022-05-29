import "./styles/main.scss";
import Quiz from "./components/Quiz";
import Settings from "./components/Settings";
import { useState } from "react";

const App = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const handleGameStart = () => setGameStarted((prevState) => !prevState);
  return (
    <main>
      {gameStarted ? (
        <Quiz handleGameStart={handleGameStart} />
      ) : (
        <Settings handleGameStart={handleGameStart} />
      )}
    </main>
  );
};

export default App;
