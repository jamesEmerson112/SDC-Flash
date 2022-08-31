import React, { useState, useEffect } from "react";
import ReviewList from "./Reviews/ReviewList.jsx";
import StarComponent from "../StarComponent.jsx"
import config from "../../../../env/config.js";
import axios from "axios";

const Ratings_Reviews = (props) => {
  const [reviews, setReviews] = useState([]);
  const [meta, setMeta] = useState({})
  const [filter, setFilter] = useState('relavant')
  const [oneStar, setOneStar] = useState(0)
  const [twoStar, setTwoStar] = useState(0)
  const [threeStar, setThreeStar] = useState(0)
  const [fourStar, setFourStar] = useState(0)
  const [fiveStar, setFiveStar] = useState(0)
  const [totalStars, setTotalStars] = useState(0)
  const [starFilter, setStarFilter] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false
  })

  console.log('REVIEWS: ', reviews)
  console.log('META: ', meta)

  const sortReviews = (filter) => {
    setFilter(filter)
  }

  const getReviewData = () => {
    axios.get(`/reviews?product_id=${props.id}&sort=${filter}`, config)
    .then((response) => setReviews(response.data.results))
    .catch((err) => console.log(err));
  }

  const getMetaData = () => {
    axios.get(`/reviews/meta?product_id=${props.id}`, config)
    .then((response) => setMeta(response.data))
    .catch((err) => console.log(err));
  }

  useEffect(() => {
      getReviewData()
      getMetaData()
  }, [props.id, filter]);

  return (
    <>
      <h1>Ratings & Reviews</h1>
      <ReviewList reviews={reviews} meta={meta.characteristics} sort={sortReviews}/>
    </>
  );
};

export default Ratings_Reviews;
