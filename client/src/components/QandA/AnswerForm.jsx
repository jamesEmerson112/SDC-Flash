import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import config from "../../../../env/config.js";
import questList from "./qAndA.js";

const AnswerForm = ({ question, product, setShowAForm, setAnsState }) => {
  // variable
  const { question_id, question_body } = question;
  let emailValid = false;

  // state
  const [emailWarn, setEmailWarn] = useState(false);

  // methods
  const chkEmailFormat = (event) => {
    emailValid = /\S+@\S+\.\S+/.test(event.target.value);
    console.log(emailValid);
  };

  const postAnswer = (event) => {
    event.preventDefault();
    setEmailWarn(!emailValid);
    if (emailValid) {
      const data = {
        body: event.target.elements.answer.value,
        name: event.target.elements.nickname.value,
        email: event.target.elements.email.value,
        photos: [],
      };
      axios
        .post(`/qa/questions/${question_id}/answers`, data, config)
        .then(() => {
          setShowAForm(false);
          return axios.get(`qa/questions/${question_id}/answers`, config);
        })
        .then((response) => {
          const ques = questList.find((q) => q.question_id === question_id);
          for (const ans of response.data.results) {
            if (!(ans.answer_id in ques.answers)) {
              ans.helpf_click = false;
              question.answers[ans.answer_id] = ans;
            }
          }
          console.log(questList);

          setAnsState(ques.answers);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="modalOverlay">
      <div className="modal">
        <form className="modalForm" onSubmit={postAnswer}>
          <QFHeader>Submit your Answer</QFHeader>
          <small>
            {product.name}: {question_body}
          </small>
          <br />
          <label>Your Answer*</label>
          <br />
          <textarea
            name="answer"
            maxLength="1000"
            rows="4"
            cols="50"
            required
          />
          <br />
          <label>What is your nickname*</label>
          <br />
          <QFInput
            type="text"
            name="nickname"
            placeholder="Example: jackson543!"
            maxLength="60"
            required
          />
          <br />
          <small>
            For privacy reasons, do not use your full name or email address
          </small>
          <br />
          <label>Your email* </label>
          {emailWarn ? <EmailWarn>{" email address invalid"}</EmailWarn> : null}
          <br />
          <QFInput
            type="email"
            name="email"
            placeholder="Example: jack@email.com"
            maxLength="60"
            onChange={chkEmailFormat}
            required
          />
          <br />
          <small>For authentication reasons, you will not be emailed</small>
          <br />
          <button>Upload your photos</button>
          <br />
          <input type="submit" value="Submit Answer" />
        </form>
        <div className="modalFormClose" onClick={() => setShowAForm(false)}>
          X
        </div>
      </div>
    </div>
  );
};

export default AnswerForm;

const QFHeader = styled.h3`
  margin-top: 0px;
  margin-bottom: 0px;
`;

const QFInput = styled.input`
  width: 400px;
`;

const EmailWarn = styled.small`
  color: red;
`;
