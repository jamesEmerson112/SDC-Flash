import React from "react";
import AnswerList from "./AnswerList.jsx";
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
      <div className="qAndA">
        <b>Q:</b>
        <b>{question_body}</b>
        <small>
          Helpful? Yes {"(" + question_helpfulness + ")"} | Add Answer
        </small>
      </div>
      <div className="qAndA">
        <div>
          <b>A:</b>
        </div>
        <AnswerList answers={answers} />
      </div>
    </div>
  );
};

export default Question;
