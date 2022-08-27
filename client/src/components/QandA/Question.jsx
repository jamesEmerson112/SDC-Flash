import React, { useState } from "react";
import axios from "axios";
import AnswerList from "./AnswerList.jsx";
import config from "../../../../env/config.js";
import questList from "./qAndA.js";

const Question = ({ question }) => {
  const {
    answers,
    asker_name,
    question_body,
    question_date,
    question_helpfulness,
    question_id,
    reported,
  } = question;

  // variable
  const ques = questList.find((q) => q.question_id === question_id);

  // state
  const [helpfulness, setHelpfulness] = useState(question_helpfulness);

  const incHelp = () => {
    if (!ques.helpf_click) {
      axios
        .put(`/qa/questions/${question_id}/helpful`, {}, config)
        .then(() => {
          ques.helpf_click = true;
          setHelpfulness(helpfulness + 1);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div>
      <div className="question">
        <div className="qAndA">
          <b>Q:</b>
          <b>{question_body}</b>
        </div>
        <small>
          {" Helpful? "}
          {ques.helpf_click ? " Yes " : <u onClick={incHelp}>Yes</u>}
          {" (" + helpfulness + ") "} | <u>Add Answer</u>
        </small>
      </div>
      <div className="qAndA">
        <div>
          <b>A:</b>
        </div>
        <AnswerList answers={answers} question_id={question_id} />
      </div>
    </div>
  );
};

export default Question;
