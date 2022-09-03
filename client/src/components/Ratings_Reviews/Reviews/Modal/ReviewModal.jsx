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
  const selectCharacteristic = (id, value) => {
    setCharacteristics({...characteristics, [id]: value})
  };

  const [summary, setSummary] = useState("");
  const [summRemain, setSummRemain] = useState(60);
  const [body, setBody] = useState("");
  const [bodyRemain, setBodyRemain] = useState(50);

  const [photos, setPhotos] = useState([]);

  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");

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
      console.log("MISSING DEETS");
      return setMissingReq(true);
    } else {
      console.log("Rating value: ", rating);
      console.log("Recc check: ", recc);
      console.log("Characteristics values: ", characteristics);
      console.log("Summary value: ", summary);
      console.log("Body value: ", body);
      console.log("Photos urls: ", photos);
      console.log("Nickname value: ", nickname);
      console.log("Email value: ", email);
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
        {missingReq && (
          <Missing>
            Areas marked with * are potentially filled out incorrectly or need
            to be filled out!
          </Missing>
        )}
        <button onClick={close}>X</button>
        <form onSubmit={checkForm}>
          <Ratings
            rating={rating}
            hover={hover}
            setHover={setHover}
            setRating={setRating}
            missing={missingReq}
          />

          <label>
            Recommend: {missingReq && <Missing>* Required</Missing>}
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
          </label>

          <Sizes
            meta={meta}
            setChar={selectCharacteristic}
          />

          <label>
            Summary:
            <input
              type="text"
              placeholder="Example: Best purchase ever!"
              value={summary}
              required
              maxLength={60}
              onChange={summaryText}
            />
            <p>{summRemain} Characters remaining</p>
          </label>

          <label>
            Body:
            <input
              type="text"
              placeholder="Why did you like this product or not?"
              value={body}
              required
              minLength={10}
              maxLength={1000}
              onChange={bodyText}
            />
            {body.length < 50 ? (
              <p>Minimum required characters left: {bodyRemain}</p>
            ) : (
              <p>Minimum reached</p>
            )}
          </label>

          <label>Upload Image: </label>
          <Upload photos={photos} upload={setPhotos} />
          <br />

          <label>
            Set Nickname:
            <input
              type="text"
              placeholder="Example: jackson11!"
              value={nickname}
              required
              maxLength={60}
              onChange={nicknameText}
            />
          </label>
          <p>For authentication reasons you will not be emailed</p>

          <label>
            Set Email:
            <input
              type="email"
              placeholder="jackson11@email.com"
              value={email}
              required
              maxLength={60}
              onChange={emailText}
            />
          </label>
          <br />
          <input type="submit" value="Post Review" />
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
  transform: translate(-50%, -50%);
  background-color: #f4f0db;
  padding: 50px;
`;

const Missing = styled.span`
  color: red;
`;
