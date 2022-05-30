import "./styles/main.scss";
import { useState } from "react";
import Quiz from "./components/Quiz";
import Settings from "./components/Settings";

const App = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [questionsError, setQuestionsError] = useState(false);
  const [quizSettings, setQuizSettings] = useState({
    category: "",
    difficulty: "",
    type: "",
  });

  const handleGameStart = () => setGameStarted((prevState) => !prevState);

  const handleError = (boolean) => setQuestionsError(boolean);

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
        <Quiz
          quizSettings={quizSettings}
          handleGameStart={handleGameStart}
          handleError={handleError}
        />
      ) : (
        <Settings
          quizSettings={quizSettings}
          handleGameStart={handleGameStart}
          handleChange={handleChange}
          questionsError={questionsError}
        />
      )}
    </main>
  );
};

export default App;
