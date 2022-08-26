import React, { useState, useEffect } from "react";
import axios from "axios";
import config from "../../../../env/config.js";
import Question from "./Question.jsx";
import SearchQandA from "./SearchQandA.jsx";

const QuestionList = ({ product }) => {
  const { id } = product;

  const [qList, setQList] = useState([]);

  useEffect(() => {
    axios
      .get(`/qa/questions?product_id=${id}`, config)
      .then((response) => setQList(response.data.results))
      .catch((err) => console.log(err));
  }, [product]);

  return (
    <div>
      <SearchQandA qList={qList} />
      {!qList.length ? <button>Submit a new question</button> : null}
      {qList.map((question) => (
        <Question question={question} key={question.question_id} />
      ))}
    </div>
  );
};

export default QuestionList;
