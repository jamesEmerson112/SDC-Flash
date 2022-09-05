import React, { useState, useEffect, useContext } from "react";
import Ratings from "./Ratings/RatingsOverview.jsx";
import ReviewList from "./Reviews/ReviewList.jsx";
// import StarComponent from "../StarComponent.jsx";
import { config } from "../../../../env/config.js";
import axios from "axios";
import RatingsOverview from "./Ratings/RatingsOverview.jsx";
import styled from "styled-components";
import { ClickTracker } from "../App.jsx";

const Ratings_Reviews = (props) => {
  const clickTracker = useContext(ClickTracker);
  const [reviews, setReviews] = useState([]);
  const [meta, setMeta] = useState({});
  const [filter, setFilter] = useState("relavant");

  const [starCount, setStarCount] = useState({
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    total: 0,
  });

  const [overallRating, setOverallRating] = useState(0);
  const [recommend, setReccomend] = useState(0);
  const [starFilter, setStarFilter] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
  });

  const toggleStar = (value) => {
    if (value === "5") {
      setStarFilter({ ...starFilter, 5: !starFilter[value] });
    } else if (value === "4") {
      setStarFilter({ ...starFilter, 4: !starFilter[value] });
    } else if (value === "3") {
      setStarFilter({ ...starFilter, 3: !starFilter[value] });
    } else if (value === "2") {
      setStarFilter({ ...starFilter, 2: !starFilter[value] });
    } else if (value === "1") {
      setStarFilter({ ...starFilter, 1: !starFilter[value] });
    }
  };

  const filterReviews = (reviews) => {
    let starArray = [];
    let starSort = false;
    for (var key in starFilter) {
      if (starFilter[key] === true) {
        starArray.push(Number(key));
        starSort = true;
      }
    }

    if (starSort === true) {
      var newData = reviews.filter((review) => {
        return starArray.includes(review.rating);
      });
      setReviews(newData);
    } else {
      setReviews(reviews);
    }
  };

  const countStars = (ratings) => {
    let total = ["1", "2", "3", "4", "5"].reduce((stars, num) => {
      if (ratings[num]) {
        stars += Number(ratings[num]);
      }
      return stars;
    }, 0);

    let overall =
      ["1", "2", "3", "4", "5"].reduce((stars, num) => {
        if (ratings[num]) {
          stars += Number(ratings[num]) * Number(num);
        }
        return stars;
      }, 0) / total;

    setStarCount({
      ...starCount,
      1: Number(ratings["1"]) || 0,
      2: Number(ratings["2"]) || 0,
      3: Number(ratings["3"]) || 0,
      4: Number(ratings["4"]) || 0,
      5: Number(ratings["5"]) || 0,
      total: total,
    });
    setOverallRating(Math.round(overall * 10) / 10);
  };

  const getRecc = (recc) => {
    const yes = Number(recc.true);
    const no = Number(recc.false);
    setReccomend(Math.round((yes / (yes + no)) * 100));
  };

  const getReviewData = () => {
    axios
      .get(`/reviews?product_id=${props.id}&count=${10}&sort=${filter}`, config)
      .then((response) => filterReviews(response.data.results))
      .catch((err) => console.log(err));
  };

  const getMetaData = () => {
    axios
      .get(`/reviews/meta?product_id=${props.id}`, config)
      .then((response) => {
        setMeta(response.data);
        getRecc(response.data.recommended);
        countStars(response.data.ratings);
      })
      .catch((err) => console.log(err));
  };

  const postData = (data) => {
    axios.post("/reviews", data, config).then(() => {
      getReviewData();
    });
  };

  useEffect(() => {
    if (props.id) {
      getReviewData();
      getMetaData();
    }
  }, [props.id, filter, starFilter]);

  return (
    <div id="Ratings_Reviews" onClick={(e) => clickTracker(e, "R&R")}>
      <h1>Ratings & Reviews</h1>
      <Container>
        <RatingsOverview
          stars={starCount}
          average={overallRating}
          recc={recommend}
          meta={meta.characteristics}
          toggleStar={toggleStar}
        />
        <ReviewList
          reviews={reviews}
          meta={meta.characteristics}
          sort={setFilter}
          post={postData}
          id={props.id}
        />
      </Container>
    </div>
  );
};

export default Ratings_Reviews;

const Container = styled.div`
  display: flex;
`;
