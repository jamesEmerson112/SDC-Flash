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

  let ansArr = [];
  for (let id in answers) {
    ansArr.push(answers[id]);
  }
  ansArr.sort((a, b) => b.helpfulness - a.helpfulness);
  const sellArr = ansArr.filter((ans) => ans.answerer_name === "Seller");
  ansArr = ansArr.filter((ans) => ans.answerer_name !== "Seller");
  ansArr = sellArr.concat(ansArr);

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
        <div>
          {ansArr.map((answer) => (
            <Answer answer={answer} key={answer.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Question;
