import React, { useState } from "react";
import axios from "axios";
import config from "../../../../env/config.js";
import { parseISO } from "date-fns";
import questList from "./qAndA.js";

const Answer = ({ answer, question_id }) => {
  const { answerer_name, body, date, helpfulness, id, photos } = answer;

  // variables
  const ques = questList.find((q) => q.question_id === question_id);
  const answ = ques.answers[id];
  const hrDt = parseISO(date).toLocaleDateString("en-us", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // state
  const [a_helpf, setHelpfulness] = useState(helpfulness);

  // methods
  const incHelp = () => {
    console.log(answ.helpf_click);
    if (!answ.helpf_click) {
      axios
        .put(`/qa/answers/${id}/helpful`, {}, config)
        .then(() => {
          answ.helpf_click = true;
          console.log(answ.helpf_click);
          setHelpfulness(a_helpf + 1);
        })
        .catch((err) => console.log(err));
    }
    console.log(a_helpf);
  };

  return (
    <div className="qAndAAns">
      <div>{body}</div>
      {photos.length ? (
        <div>
          {photos.map((photo, i) => (
            <img src={photo} key={id + i} className="ansPhotos" />
          ))}
        </div>
      ) : null}
      <small>
        {"by "}
        {answerer_name === "Seller" ? <b>{answerer_name}</b> : answerer_name}
        {", " + hrDt + " | Helpful? "}
        {answ.helpf_click ? " Yes " : <u onClick={incHelp}>Yes</u>}
        {" (" + a_helpf + ") | "}
        <u>Report</u>
      </small>
    </div>
  );
};

export default Answer;
