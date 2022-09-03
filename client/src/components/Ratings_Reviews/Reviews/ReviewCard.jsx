import React, { useState, useEffect } from "react";
import Stars from '../Stars.jsx'
import { parseISO } from "date-fns";
import { FaStar, FaCheck } from 'react-icons/fa';
import axios from "axios";
import {config} from "../../../../../env/config.js";
import styled from "styled-components";
import {
  ModalClose,
  ModalImg,
  Modal,
  ModalOverlay,
} from "../../../styleComponents.jsx";

const ReviewCard = ({ review, helpfullClicks, setHelpfullClicks}) => {
  const [helpfullness, setHelpfullness] = useState(review.helpfulness)
  const [reportClicked, setReportClicked] = useState(false)
  const [seeMore, setSeeMore] = useState(true)
  const [modal, setModal] = useState(false)

  useEffect(() => {
    setHelpfullness(review.helpfulness)
  }, [review.helpfulness])

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
    if (helpfullClicks[review.review_id] === undefined) {
      axios.put(`/reviews/${review.review_id}/helpful`, {}, config)
        .then(() => {
          setHelpfullness(helpfullness + 1)
          setHelpfullClicks({...helpfullClicks, [review.review_id] : true})
        })
        .catch((err) => console.log(err))
    }
  }

  const report = () => {
    if (!reportClicked) {
      axios.put(`/reviews/${review.review_id}/report`, {}, config)
      .then(() => setReportClicked(true))
      .catch((err) => console.log(err))
    }
  }

  return (
    <ReviewCardDiv>
      {modal ? (
        <ModalOverlay>
          <Modal>
            <ModalImg src={modal} className="modalImg" />
            <ModalClose className="modalClose" onClick={() => setModal(false)}>X</ModalClose>
          </Modal>
        </ModalOverlay>
      ) : null}
      <div>
        <Stars rating={review.rating}/>
        <p>{review.reviewer_name}, {formatDate(review.date)}</p>
      </div>

      <p className='hi'>Summary: {review.summary}</p>
      <p className='hi'>Body: {formatBody(review.body)}</p>
      {review.body.length > 251 && seeMore && <p className='hi' onClick={() => setSeeMore(false)}>See More</p>}

      <div>{images}</div>
      {review.recommend && <p><FaCheck /> I recommend this product</p>}
      <p>{review.response !== null && review.response}</p>
      <p>Helpful? <span onClick={helpful}>Yes </span>{`(${helpfullness}) | `}<span onClick={report}>Report</span></p>
    </ReviewCardDiv>
  );
};

export default ReviewCard;

const ReviewCardDiv = styled.div`
  border: 1px solid black;
`;