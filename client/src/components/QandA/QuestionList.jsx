import React, { useState, useEffect } from "react";
import axios from "axios";
import config from "../../../../env/config.js";
import Question from "./Question.jsx";
import SearchQandA from "./SearchQandA.jsx";
import _ from "underscore";

const QuestionList = ({ product }) => {
  const { id } = product;

  const [qList, setQList] = useState([]);
  const [filtList, setFiltList] = useState([]);

  useEffect(() => {
    axios
      .get(`/qa/questions?product_id=${id}`, config)
      .then((response) => {
        console.log(response.data.results);
        response.data.results.sort(
          (a, b) => b.question_helpfulness - a.question_helpfulness
        );
        console.log(response.data.results);
        setQList(response.data.results);
        setFiltList(response.data.results);
      })
      .catch((err) => console.log(err));
  }, [product]);

  const search = (event) => {
    let query = event.target.value;
    let filtQ = qList;
    if (query.length > 2) {
      filtQ = _.filter(filtQ, (ques) => {
        let ans = ques.answers;
        for (let id in ans) {
          if (ans[id].body.toLowerCase().includes(query.toLowerCase()))
            return true;
        }
        return ques.question_body.toLowerCase().includes(query.toLowerCase());
      });
    }
    setFiltList(filtQ);
  };

  return (
    <div>
      <div>{"QUESTIONS & ANSWERS"}</div>
      <SearchQandA search={search} />
      {!qList.length ? <button>Submit a new question</button> : null}
      {filtList.map((question) => (
        <Question question={question} key={question.question_id} />
      ))}
    </div>
  );
};

export default QuestionList;
