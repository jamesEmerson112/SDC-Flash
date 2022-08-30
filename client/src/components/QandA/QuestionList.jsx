import React, { useState, useEffect } from "react";
import axios from "axios";
import config from "../../../../env/config.js";
import QuestionForm from "./QuestionForm.jsx";
import Question from "./Question.jsx";
import SearchQandA from "./SearchQandA.jsx";
import questList from "./qAndA.js";

const QuestionList = ({ product }) => {
  // variables
  const { id } = product;

  // state
  const [qList, setQList] = useState([]);
  const [filtList, setFiltList] = useState([]);
  const [showQForm, setShowQForm] = useState(false);

  // on load
  useEffect(() => {
    axios
      .get(`/qa/questions?product_id=${id}`, config)
      .then((response) => {
        response.data.results.sort(
          (a, b) => b.question_helpfulness - a.question_helpfulness
        );
        // tracker
        response.data.results.forEach((q) => {
          let exists = questList.find(
            (quest) => quest.question_id === q.question_id
          );
          if (!exists) {
            q.helpf_click = false;
            for (const id in q.answers) {
              q.answers[id].helpf_click = false;
            }
            questList.push(q);
          }
        });
        setQList(response.data.results.slice(0, 2));
        setFiltList(response.data.results.slice(0, 2));
      })
      .catch((err) => console.log(err));
  }, [product]);

  // methods
  const search = (event) => {
    let query = event.target.value;
    if (query.length > 2) {
      let filtQ = questList.filter((ques) => {
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
      setFiltList(qList);
    }
  };

  const expandQs = (event) => {
    let last = filtList.length;
    setQList(questList.slice(0, last + 2));
    setFiltList(questList.slice(0, last + 2));
  };

  return (
    <div className="qList">
      <h3>{"QUESTIONS & ANSWERS"}</h3>
      <SearchQandA search={search} />
      {filtList.map((question) => (
        <Question question={question} key={question.question_id} />
      ))}
      <div>
        {filtList.length < questList.length ? (
          <button onClick={expandQs}>More Answered Questions</button>
        ) : null}
        <button onClick={() => setShowQForm(!showQForm)}>
          Add a Question +
        </button>
      </div>
      {showQForm ? (
        <QuestionForm product={product} setShowQForm={setShowQForm} />
      ) : null}
    </div>
  );
};

export default QuestionList;
