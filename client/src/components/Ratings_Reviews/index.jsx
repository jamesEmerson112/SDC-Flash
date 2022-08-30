import React, { useState, useEffect } from "react";
import ReviewList from "./Reviews/ReviewList.jsx";
import StarComponent from "../StarComponent.jsx"
import config from "../../../../env/config.js";
import axios from "axios";

const Ratings_Reviews = (props) => {
  const [reviews, setReviews] = useState([]);
  const [meta, setMeta] = useState({})

  const getReviewData = () => {
    axios.get(`/reviews?product_id=${props.id}`, config)
    .then((response) => setReviews(response.data.results))
    .catch((err) => console.log(err));
  }

  const getMetaData = () => {
    axios.get(`/reviews/meta?product_id=${props.id}`, config)
    .then((response) => setMeta(response.data))
    .catch((err) => console.log(err));
  }

  useEffect(() => {
    if (props.id) {
      getReviewData()
      getMetaData()
    }
  }, [props.id]);

  return (
    <>
      <h1>Ratings & Reviews</h1>
      <ReviewList reviews={reviews} meta={meta.characteristics}/>
    </>
  );
};

export default Ratings_Reviews;
