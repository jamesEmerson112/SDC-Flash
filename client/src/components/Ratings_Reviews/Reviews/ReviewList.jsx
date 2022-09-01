import React, { useState, useEffect } from "react";
import ReviewCard from "./ReviewCard.jsx";
import ReviewModal from "./Modal/ReviewModal.jsx";

const ReviewList = (props) => {
  const [reviews, setReviews] = useState([]);
  const [meta, setMeta] = useState({});

  const [count, setCount] = useState(2);
  const [openModal, setOpenModal] = useState(false);

  const addMore = () => {
    setCount(count + 2);
  };

  const map =  reviews?.slice(0, count).map((review, index) => {
    return <ReviewCard key={index} review={review}/>;
  });

  useEffect(() => {
    setReviews(props.reviews);
    setMeta(props.meta);
  }, [props.reviews, props.meta]);

  return (
    <div>
      {reviews.length && <p>{reviews.length} reviews, sorted by
      <select onChange={(e) => props.sort(e.target.value)}>
        <option value='relevant'>Relevant</option>
        <option value='helpful'>Helpful</option>
        <option value='newest'>Newest</option>
      </select></p>}
      <div>{map}</div>
      <div>
        {reviews.length > 2 && count < reviews.length && (
          <button onClick={addMore}>More Reviews &#9660;</button>
        )}
        <button onClick={() => setOpenModal(true)}>Add Review +</button>
      </div>
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
