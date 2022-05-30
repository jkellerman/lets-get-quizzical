import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import getQuestions from "../api/getQuestions";
import Question from "./Question";

const Quiz = ({ quizSettings, handleGameStart, handleError }) => {
  const [questions, setQuestions] = useState([]);
  const [count, setCount] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [checkAllQuestionsAnswered, setCheckAllQuestionsAnswered] =
    useState(false);

  const allQuestionsAnswered = questions.every(
    (question) =>
      question.selectedAnswer !== "" && question.selectedAnswer.length > 0
  );

  useEffect(() => {
    getQuestions(quizSettings).then((questions) => {
      if (questions.length === 0) {
        handleGameStart();
        handleError(true);
        return;
      } else {
        handleError(false);
      }
      return setQuestions(
        questions.map((question) => ({
          ...question,
          id: nanoid(),
          selectedAnswer: "",
          showAnswer: false,
        }))
      );
    });
  }, [quizSettings, handleGameStart, handleError]);

  useEffect(() => {
    if (questions.length !== 0 && allQuestionsAnswered) {
      setCheckAllQuestionsAnswered(true);
      let count = 0;
      questions.forEach((question) => {
        if (question.correct_answer === question.selectedAnswer) {
          count++;
        }
        setCount(count);
      });
    }
  }, [questions, allQuestionsAnswered]);

  const handleSelectedAnswer = (questionId, answer) => {
    if (!isGameOver) {
      setQuestions((prevQuestions) =>
        prevQuestions.map((question) =>
          question.id === questionId
            ? { ...question, selectedAnswer: answer }
            : question
        )
      );
    }
  };

  const checkAnswers = () => {
    if (allQuestionsAnswered) {
      setIsGameOver(true);
      setQuestions((prevQuestions) =>
        prevQuestions.map((question) => ({ ...question, showAnswer: true }))
      );
    }
  };

  const playAgain = () => {
    setIsGameOver(false);
    handleGameStart();
  };

  const questionElements = questions.map((question) => (
    <Question
      key={question.id}
      id={question.id}
      question={question.question}
      correctAnswer={question.correct_answer}
      incorrectAnswers={question.incorrect_answers}
      selectedAnswer={question.selectedAnswer}
      showAnswer={question.showAnswer}
      handleSelectedAnswer={handleSelectedAnswer}
    />
  ));

  return (
    <>
      <>{questionElements}</>
      <div className="check-answers__container">
        {isGameOver && (
          <div className="score">You scored {count}/5 correct answers</div>
        )}

        {checkAllQuestionsAnswered && (
          <button
            className="check-btn"
            onClick={isGameOver ? playAgain : checkAnswers}
          >
            {isGameOver ? "Play again" : "Check Answers"}
          </button>
        )}
      </div>
    </>
  );
};

export default Quiz;
