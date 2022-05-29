import { decode } from "html-entities";
import { nanoid } from "nanoid";

const Question = (props) => {
  const incorrectAnswers = props.incorrectAnswers.map((answer) => {
    return (
      <button className="answers" key={nanoid()}>
        {decode(answer)}
      </button>
    );
  });

  const correctAnswer = (
    <button className="answers" key={nanoid()}>
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
