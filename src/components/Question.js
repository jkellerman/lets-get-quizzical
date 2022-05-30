import { nanoid } from "nanoid";
import { decode } from "html-entities";

export default function Question(props) {
  const incorrectAnswers = props.incorrectAnswers.map((answer) => {
    const incorrectAnswersClassName = `${
      props.selectedAnswer === answer ? "selected" : "answers"
    } 
    ${
      props.showAnswer &&
      props.selectedAnswer === answer &&
      "show-answer_incorrect"
    }`;
    return (
      <button
        key={nanoid()}
        className={incorrectAnswersClassName}
        onClick={() => props.handleSelectedAnswer(props.id, answer)}
      >
        {decode(answer)}
      </button>
    );
  });

  const correctAnswerClassName = `${
    props.selectedAnswer === props.correctAnswer ? "selected" : "answers"
  } ${props.showAnswer && "show-answer_correct"}`;

  const correctAnswer = (
    <button
      key={nanoid()}
      className={correctAnswerClassName}
      onClick={() => props.handleSelectedAnswer(props.id, props.correctAnswer)}
    >
      {decode(props.correctAnswer)}
    </button>
  );

  incorrectAnswers.push(correctAnswer);
  const sortedAnswerElements = incorrectAnswers.sort((a, b) =>
    a.props.children.localeCompare(b.props.children)
  );

  return (
    <div className="question-container">
      <div className="question">{decode(props.question)}</div>
      {sortedAnswerElements}
    </div>
  );
}
