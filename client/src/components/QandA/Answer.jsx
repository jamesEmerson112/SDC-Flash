import React, { useState } from "react";
import axios from "axios";
import { config } from "../../../../env/config.js";
import { parseISO } from "date-fns";
import questList from "./qAndA.js";
import {
  ModalClose,
  ModalImg,
  Modal,
  ModalOverlay,
} from "../../styleComponents.jsx";

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
  const [reportSt, setReportSt] = useState(answ.reported);

  // methods
  const incHelp = () => {
    if (!answ.helpf_click) {
      axios
        .put(`/qa/answers/${id}/helpful`, {}, config)
        .then(() => {
          answ.helpf_click = true;
          answ.helpfulness += 1;
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
      .then(() => {
        answ.reported = true;
        setReportSt(answ.reported);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="qAndAAns">
      {modal ? (
        <ModalOverlay>
          <Modal>
            <ModalImg src={modal} />
            <ModalClose onClick={imgZoom}>X</ModalClose>
          </Modal>
        </ModalOverlay>
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
          <u className="clickable" onClick={incHelp}>
            Yes
          </u>
        )}
        {" (" + a_helpf + ") | "}
        {reportSt ? (
          " Reported "
        ) : (
          <u className="clickable" onClick={reportAns}>
            Report
          </u>
        )}
      </small>
    </div>
  );
};

export default Answer;
