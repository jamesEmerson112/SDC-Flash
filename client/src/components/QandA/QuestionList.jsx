import React, { useState, useEffect } from "react";
import axios from "axios";
import config from "../../../../env/config.js";
import Question from "./Question.jsx";
import SearchQandA from "./SearchQandA.jsx";

const QuestionList = ({ product }) => {
  const { id } = product;

  // state
  const [qList, setQList] = useState([]);
  const [filtList, setFiltList] = useState([]);

  // on load
  useEffect(() => {
    axios
      .get(`/qa/questions?product_id=${id}`, config)
      .then((response) => {
        response.data.results.sort(
          (a, b) => b.question_helpfulness - a.question_helpfulness
        );
        setQList(response.data.results);
        setFiltList(response.data.results.slice(0, 2));
      })
      .catch((err) => console.log(err));
  }, [product]);

  // methods
  const search = (event) => {
    let query = event.target.value;
    if (query.length > 2) {
      let filtQ = qList.filter((ques) => {
        let ans = ques.answers;
        for (let id in ans) {
          if (ans[id].body.toLowerCase().includes(query.toLowerCase()))
            return true;
        }
        return ques.question_body.toLowerCase().includes(query.toLowerCase());
      });
      filtQ.sort((a, b) => b.question_helpfulness - a.question_helpfulness);
      setFiltList(filtQ);
    } else {
      setFiltList(qList.slice(0, 2));
    }
  };

  const expandQs = (event) => {
    let last = filtList.length;
    setFiltList(qList.slice(0, last + 2));
  };

  return (
    <div>
      <h3>{"QUESTIONS & ANSWERS"}</h3>
      <SearchQandA search={search} />
      {!qList.length ? <button>Submit a new question</button> : null}
      {filtList.map((question) => (
        <Question question={question} key={question.question_id} />
      ))}
      <div>
        {filtList.length < qList.length ? (
          <button onClick={expandQs}>More Answered Questions</button>
        ) : null}
        <button>Add a Question +</button>
      </div>
    </div>
  );
};

export default QuestionList;
