import React, { useState, useEffect } from "react";
import { parseISO } from "date-fns";
import styled from "styled-components";

const ReviewCard = ({ review }) => {
  const [helpfullness, setHelpfullness] = useState(review.helpfulness)

  const formatDate = (date) => {
    date = parseISO(date).toLocaleDateString("en-us", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    return date;
  };

  const formatSummary = (summary) => {
    if (summary.length > 60) {
      summary = summary.slice(0, 61) + '...'
    }
    return summary
  }

  const formatBody = (body) => {
    if (body.length > 250) {
      var showMore = false;
      return (
        <>
          {!showMore && <p>Body: {body.slice(0, 251) + '...'}</p>}
          {!showMore && <p onClick={() => showMore=true}>Show More</p>}
          {showMore && <p>{body}</p>}
        </>
      )
    } else {return <p>Body: {body}</p>}
  }

  const images = review.photos.map((photo) => {
    return photo.url
  })

  const helpful = () => {
    setHelpfullness(helpfullness + 1)
  }

  return (
    <ReviewCardDiv>
      <div>
        <h3>Rating: {review.rating}</h3>
        <p>{review.reviewer_name}, {formatDate(review.date)}</p>
      </div>
      <p>Summary: {formatSummary(review.summary)}</p>
      <div>{formatBody(review.body)}</div>
      <div>{images}</div>
      <p>{review.recommend && "I recommend this product"}</p>
      <p>{review.response !== null && review.response}</p>
      <p>Helpful? <span onClick={helpful}>Yes </span>{helpfullness}</p>
    </ReviewCardDiv>
  );
};

export default ReviewCard;

const ReviewCardDiv = styled.div`
  border: 1px solid black;
`;