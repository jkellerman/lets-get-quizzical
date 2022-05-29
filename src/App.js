import "./styles/main.scss";
import { useState } from "react";
import Quiz from "./components/Quiz";
import Settings from "./components/Settings";

const App = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [quizSettings, setQuizSettings] = useState({
    category: "",
    difficulty: "",
    type: "",
  });

  const handleGameStart = () => setGameStarted((prevState) => !prevState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setQuizSettings((prevQuizSettings) => ({
      ...prevQuizSettings,
      [name]: value,
    }));
  };

  return (
    <main>
      {gameStarted ? (
        <Quiz quizSettings={quizSettings} />
      ) : (
        <Settings
          quizSettings={quizSettings}
          handleGameStart={handleGameStart}
          handleChange={handleChange}
        />
      )}
    </main>
  );
};

export default App;
