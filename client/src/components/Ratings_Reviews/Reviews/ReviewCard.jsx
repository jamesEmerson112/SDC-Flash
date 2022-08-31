import React, { useState, useEffect } from "react";
import Stars from './Stars.jsx'
import { parseISO } from "date-fns";
import { FaStar, FaCheck } from 'react-icons/fa';
import styled from "styled-components";

const ReviewCard = ({ review }) => {
  const [helpfullness, setHelpfullness] = useState(review.helpfulness)
  const [seeMore, setSeeMore] = useState(true)
  const [modal, setModal] = useState(false)

  const formatDate = (date) => {
    date = parseISO(date).toLocaleDateString("en-us", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    return date;
  };

  const formatBody = (body) => {
    if (seeMore === true) {
      if (body.length > 251) {
        return body.slice(0, 251) + '...'
      }
    } else return body
    return body
  }

  const images = review.photos.map((photo) => {
    return (
      <img src={photo.url} key={photo.id} onClick={(e) => setModal(e.target.src)} className="ansPhotos"/>
    )
  })

  const helpful = () => {
    setHelpfullness(helpfullness + 1)
  }

  return (
    <ReviewCardDiv>
      {modal ? (
        <div className="modalOverlay">
          <div className="modal">
            <img src={modal} className="modalImg" />
            <div className="modalClose" onClick={() => setModal(false)}>X</div>
          </div>
        </div>
      ) : null}
      <div>
        <Stars rating={review.rating}/>
        <p>{review.reviewer_name}, {formatDate(review.date)}</p>
      </div>
      <p>Summary: {review.summary}</p>
      <p>Body: {formatBody(review.body)}</p>
      {review.body.length > 251 && seeMore && <p onClick={() => setSeeMore(false)}>See More</p>}
      <div>{images}</div>
      {review.recommend && <p><FaCheck /> I recommend this product</p>}
      <p>{review.response !== null && review.response}</p>
      <p>Helpful? <span onClick={helpful}>Yes </span>{`(${helpfullness}) | `}<span>Report</span></p>
    </ReviewCardDiv>
  );
};

export default ReviewCard;

const ReviewCardDiv = styled.div`
  border: 1px solid black;
`;