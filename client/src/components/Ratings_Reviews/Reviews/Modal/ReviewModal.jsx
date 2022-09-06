import React, { useState } from "react";
import Ratings from "./Ratings.jsx";
import Sizes from "./Sizes.jsx";
import Upload from "./Upload.jsx";
import styled from "styled-components";

const ReviewModal = ({ id, meta, open, close, post }) => {
  const [missingReq, setMissingReq] = useState(false);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);

  const [recc, setRecc] = useState(null);

  const [characteristics, setCharacteristics] = useState({});

  const [summary, setSummary] = useState("");
  const [summRemain, setSummRemain] = useState(60);
  const [body, setBody] = useState("");
  const [bodyRemain, setBodyRemain] = useState(50);

  const [photos, setPhotos] = useState([]);

  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");

  const selectCharacteristic = (id, value) => {
    setCharacteristics({...characteristics, [id]: value})
  };

  const summaryText = (e) => {
    setSummary(e.target.value);
    setSummRemain(60 - e.target.value.length);
  };

  const bodyText = (e) => {
    setBody(e.target.value);
    setBodyRemain(50 - e.target.value.length);
  };

  const nicknameText = (e) => {
    setNickname(e.target.value);
  };

  const emailText = (e) => {
    setEmail(e.target.value);
  };

  const checkForm = (e) => {
    e.preventDefault();
    if (rating === 0 || recc === null || email.indexOf(".com") < 0 ) {
      return setMissingReq(true);
    } else {
      postData();
    }
  };

  const postData = () => {
    const data = {
      product_id: id,
      rating: rating,
      summary: summary,
      body: body,
      recommend: recc,
      name: nickname,
      email: email,
      photos: photos,
      characteristics: characteristics
    };
    post(data)
    setMissingReq(false);
    setRating(0);
    setRecc(null);
    setCharacteristics({});
    setSummary("");
    setBody("");
    setPhotos([]);
    setNickname("");
    setEmail("");
    close();
  };

  if (!open) return null;

  return (
    <Overlay>
      <ModalForm>
        {missingReq && <Missing>* Areas are required</Missing>}
        <Close onClick={close}>X</Close>
        <form onSubmit={checkForm}>
          <Ratings
            rating={rating}
            hover={hover}
            setHover={setHover}
            setRating={setRating}
            missing={missingReq}
          />

          <label>
            Recommend:
            <label>
              <input
                type="radio"
                name="recc"
                value="Yes"
                onChange={() => setRecc(true)}
              />
              Yes:
            </label>
            <label>
              <input
                type="radio"
                name="recc"
                value="No"
                onChange={() => setRecc(false)}
              />
              No:
            </label>
            {missingReq && <Missing>* Required</Missing>}
          </label>

          <Sizes
            meta={meta}
            setChar={selectCharacteristic}
          />

          <br />
          <label>
            Summary:
            <br />
            <textarea
            style={{ width: "70%" }}
            placeholder="Example: Best purchase ever!"
            value={summary}
            required
            rows="3"
            cols="50"
            maxLength="60"
            onChange={summaryText}
            />
            <Remain>{summRemain} Characters remaining</Remain>
          </label>

          <label>
            Body:
            <br />
            <textarea
            style={{ width: "70%" }}
            placeholder="Why did you like this product or not?"
            value={body}
            required
            rows="5"
            cols="50"
            maxLength="60"
            minLength="50"
            maxLength="1000"
            onChange={bodyText}
            />
            {body.length < 50 ? <Remain>Minimum required characters left: {bodyRemain}</Remain>
            : <Remain>Minimum reached</Remain> }
          </label>

          <label>Upload Photos:</label>
          <Upload photos={photos} upload={setPhotos} />

          <label>
            Set Nickname:
            <Input
              type="text"
              placeholder="Example: jackson11!"
              value={nickname}
              required
              maxLength={60}
              onChange={nicknameText}
            />
          </label>
          <Remain>For authentication reasons you will not be emailed</Remain>

          <label>
            Set Email:
            <Input
              type="email"
              placeholder="jackson11@email.com"
              value={email}
              required
              maxLength={60}
              onChange={emailText}
            />
          </label>
          <br />

          <Submit type="submit" value="Post Review" />
        </form>
      </ModalForm>
    </Overlay>
  );
};

export default ReviewModal;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(128, 128, 128, 0.7);
  z-index: 1000;
`;

const ModalForm = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 800px;
  transform: translate(-50%, -50%);
  background-color: #f4f0db;
  color: black;
  padding: 50px;
  overflow-y: auto;
`;

const Missing = styled.span`
  color: red;
  margin-left: 7px;
`;

const Close = styled.button`
position: absolute;
right: 0;
top: 0;
border-radius: 5px;
border: 1px solid black;
cursor: pointer;
color: white;
text-shadow: 1px 0 black, 0 1px black, -1px 0 black, 0 -1px black;
`

const Remain = styled.p`
margin-top: 0px;
font-style: italic;
`

const Input = styled.input`
margin-left: 8px;
`

const Submit = styled.input`
background: #f0f0f0;
padding: 5px;
max-width: fit-content;
font-weight: bold;
cursor: pointer;
margin-top: 8px;
border-radius: 5px;
border: 1px solid black;
cursor: pointer;
`