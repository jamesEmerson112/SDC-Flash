import React from "react";
import Answer from "./Answer.jsx";
import _ from "underscore";

const Question = ({ question }) => {
  const {
    answers,
    asker_name,
    question_body,
    question_date,
    question_helpfulness,
    question_id,
    report,
  } = question;

  return (
    <div>
      <br />
      <div className="qAndA">
        <b>Q:</b>
        <b>{question_body}</b>
        <small>Helpful? Yes {"(" + question_helpfulness + ")"}</small>
      </div>
      <br />
      <div className="qAndA">
        <div>
          <b>A:</b>
        </div>
        <div>
          {_.map(answers, (answer) => (
            <Answer answer={answer} key={answer.id} />
          ))}
        </div>
      </div>
      <br />
    </div>
  );
};

export default Question;
