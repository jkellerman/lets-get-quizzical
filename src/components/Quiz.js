import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import getQuestions from "../api/getQuestions";
import Question from "./Question";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    getQuestions().then((questions) => {
      return setQuestions(
        questions.map((question) => ({
          ...question,
          id: nanoid(),
        }))
      );
    });
  }, []);

  const questionElements = questions.map((question) => (
    <Question
      key={question.id}
      id={question.id}
      question={question.question}
      correctAnswer={question.correct_answer}
      incorrectAnswer={question.incorrect_answer}
    />
  ));

  return <>{questionElements}</>;
};

export default Quiz;
