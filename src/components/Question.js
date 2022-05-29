import { decode } from "html-entities";

const Question = (props) => {
  return (
    <div className="question-container">
      <div className="question">{decode(props.question)}</div>
    </div>
  );
};

export default Question;
