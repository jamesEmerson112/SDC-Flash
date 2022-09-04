import React, { useState, useEffect } from "react";
import ReviewCard from "./ReviewCard.jsx";
import ReviewModal from "./Modal/ReviewModal.jsx";
import styled from "styled-components";

const ReviewList = (props) => {
  const [reviews, setReviews] = useState([]);
  const [filterReviews, setFilterReviews] = useState([])
  const [meta, setMeta] = useState({});
  const [helpfullClicks, setHelpfullClicks] = useState({})

  const [count, setCount] = useState(2);
  const [openModal, setOpenModal] = useState(false);

  const addMore = () => {
    setCount(reviews.length);
  };

  const search = (e) => {
    var query = (e.target.value.toLowerCase())
    if (query.length > 2) {
      filter(query)
    } else {
      setFilterReviews(reviews)
    }
  }

  const filter = (query) => {
    const newData = reviews.filter((review) => {
      if (review.summary.toLowerCase().includes(query) || review.body.toLowerCase().includes(query)) {
        return review
      }
    })
    setFilterReviews(newData)
  }


  var map = filterReviews?.slice(0, count).map((review, index) => {
    return <ReviewCard key={index} review={review}
    helpfullClicks={helpfullClicks} setHelpfullClicks={setHelpfullClicks}/>;
  });


  useEffect(() => {
    setReviews(props.reviews);
    setFilterReviews(props.reviews)
    setMeta(props.meta);
    setCount(2)
  }, [props.id, props.reviews, props.meta, helpfullClicks]);

  return (
    <div>
      <div>
        <p>{filterReviews.length} reviews, sorted by
        <select onChange={(e) => props.sort(e.target.value)}>
          <option value='relevant'>Relevant</option>
          <option value='helpful'>Helpful</option>
          <option value='newest'>Newest</option>
        </select></p>
        <input type='text' placeholder='Search...' onChange={search}/>
      </div>
      <Reviews>
        <div>{map}</div>
        {reviews.length > 2 && count < reviews.length && (
        <button onClick={addMore}>More Reviews &#9660;</button>)}
        <button onClick={() => setOpenModal(true)}>Add Review +</button>
      </Reviews>
      <ReviewModal
        id={props.id}
        meta={meta}
        open={openModal}
        close={() => setOpenModal(false)}
        post={props.post}
      />
    </div>
  );
}

export default ReviewList;

const Reviews = styled.div`
max-height: 800px;
width: 800px;
overflow-y: auto;
`;