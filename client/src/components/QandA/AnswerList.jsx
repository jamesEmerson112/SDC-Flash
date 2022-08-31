import React, { useState, useEffect } from "react";
import Answer from "./Answer.jsx";

const AnswerList = ({ answers, question_id }) => {
  // State
  const [filtAList, setFiltAList] = useState([]);

  // Sort answer list
  let ansArr = [];
  for (let id in answers) {
    ansArr.push(answers[id]);
  }
  ansArr.sort((a, b) => b.helpfulness - a.helpfulness);
  const sellArr = ansArr.filter((ans) => ans.answerer_name === "Seller");
  ansArr = ansArr.filter((ans) => ans.answerer_name !== "Seller");
  ansArr = sellArr.concat(ansArr);

  // on initial render of product
  useEffect(() => {
    setFiltAList(ansArr.slice(0, 2));
  }, [answers]);

  // methods
  const toggleAns = (event) => {
    let last = filtAList.length;
    if (last === ansArr.length) {
      setFiltAList(ansArr.slice(0, 2));
      return;
    }
    setFiltAList(ansArr.slice(0, last + 2));
  };

  return (
    <div className="ansList">
      {filtAList.map((answer) => (
        <Answer answer={answer} question_id={question_id} key={answer.id} />
      ))}
      {filtAList.length < ansArr.length ? (
        <small onClick={toggleAns}>SEE MORE ANSWERS</small>
      ) : null}
      {filtAList.length === ansArr.length && filtAList.length > 2 ? (
        <small onClick={toggleAns}>COLLAPSE ANSWERS</small>
      ) : null}
    </div>
  );
};

export default AnswerList;
