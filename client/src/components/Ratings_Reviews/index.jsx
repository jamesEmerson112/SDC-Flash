import React, { useState, useEffect } from "react";
import ReviewList from "./Reviews/ReviewList.jsx";
import config from "../../../../env/config.js";
import axios from "axios";

const Ratings_Reviews = (props) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (props.id) {
      axios.get(`/reviews?product_id=${props.id}`, config).then((response) => {
        setReviews(response.data.results);
      });
    }
  }, [props.id]);

  return (
    <>
      <h1>Ratings & Reviews</h1>
      <ReviewList reviews={reviews} />
    </>
  );
};

export default Ratings_Reviews;
