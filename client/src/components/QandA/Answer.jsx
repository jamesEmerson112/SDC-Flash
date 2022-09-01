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
  const [modal, setModal] = useState(false);
  const [reportSt, setReportSt] = useState(false);
  const [clickable, setClickable] = useState({ yes: "", report: "" });

  // methods
  const incHelp = () => {
    if (!answ.helpf_click) {
      axios
        .put(`/qa/answers/${id}/helpful`, {}, config)
        .then(() => {
          answ.helpf_click = true;
          setHelpfulness(a_helpf + 1);
        })
        .catch((err) => console.log(err));
    }
  };

  const imgZoom = (event) => {
    setModal(event.target.src);
  };

  const reportAns = () => {
    axios
      .put(`qa/answers/${id}/report`, {}, config)
      .then(setReportSt(true))
      .catch((err) => console.log(err));
  };

  return (
    <div className="qAndAAns">
      {modal ? (
        <div className="modalOverlay">
          <div className="modal">
            <img src={modal} className="modalImg" />
            <div className="modalClose" onClick={imgZoom}>
              X
            </div>
          </div>
        </div>
      ) : null}
      <div>{body}</div>
      {photos.length ? (
        <div>
          {photos.map((photo, i) => (
            <img
              src={photo}
              key={id + i}
              onClick={imgZoom}
              className="ansPhotos"
            />
          ))}
        </div>
      ) : null}
      <small>
        {"by "}
        {answerer_name === "Seller" ? <b>{answerer_name}</b> : answerer_name}
        {", " + hrDt + " | Helpful? "}
        {answ.helpf_click ? (
          " Yes "
        ) : (
          <u
            className={clickable.yes}
            onMouseEnter={() => setClickable({ yes: "clickable" })}
            onMouseLeave={() => setClickable({ yes: "" })}
            onClick={incHelp}
          >
            Yes
          </u>
        )}
        {" (" + a_helpf + ") | "}
        {reportSt ? (
          " Reported "
        ) : (
          <u
            className={clickable.report}
            onMouseEnter={() => setClickable({ report: "clickable" })}
            onMouseLeave={() => setClickable({ report: "" })}
            onClick={reportAns}
          >
            Report
          </u>
        )}
      </small>
    </div>
  );
};

export default Answer;
