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

  var map;

  if (reviews) {
    map = reviews.slice(0, count).map((review, index) => {
      return <ReviewCard key={index} review={review} />;
    });
  }

  useEffect(() => {
    if (props.reviews && props.meta) {
      setReviews(props.reviews);
      setMeta(props.meta);
    }
  }, [props.reviews, props.meta]);

  return (
    <>
      <div>{map}</div>
      <div>
        {reviews.length > 2 && count < reviews.length && (
          <button onClick={addMore}>More Reviews</button>
        )}
        <button onClick={() => setOpenModal(true)}>Add Review +</button>
      </div>
      <ReviewModal
        meta={meta}
        open={openModal}
        close={() => setOpenModal(false)}
      />
    </>
  );
};

export default ReviewList;
