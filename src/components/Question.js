import { decode } from "html-entities";
import { nanoid } from "nanoid";

const Question = (props) => {
  const incorrectAnswers = props.incorrectAnswers.map((answer) => {
    const incorrectAnswersClassName = `${
      props.selectedAnswer === answer ? "selected" : "answers"
    } ${
      props.showAnser &&
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
  } ${props.showAnser && "show-answer_correct"}`;

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
  const sortedAnswers = incorrectAnswers.sort((a, b) =>
    a.props.children.localeCompare(b.props.children)
  );

  return (
    <div className="question-container">
      <div className="question">{decode(props.question)}</div>
      {sortedAnswers}
    </div>
  );
};

export default Question;
