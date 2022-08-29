import React, { useState, useEffect } from "react";
import ReviewCard from "./ReviewCard.jsx";
import ReviewModal from "./ReviewModal.jsx";

const ReviewList = (props) => {
  const [reviews, setReviews] = useState();
  const [count, setCount] = useState(2);
  const [openModal, setOpenModal] = useState(false);
  const addMore = () => {
    setCount(count + 2);
  };
  var map;

  console.log("this is reviews: ", reviews);
  useEffect(() => {
    if (props.reviews) {
      setReviews(props.reviews);
    }
  }, [props.reviews]);

  if (reviews) {
    map = reviews.slice(0, count).map((review, index) => {
      return <ReviewCard key={index} review={review} />;
    });
  }

  return (
    <>
      <div>{map}</div>
      <div>
        {map && reviews.length > 2 && count < reviews.length && (<button onClick={addMore}>More Reviews</button>)}
        {map && <button onClick={() => setOpenModal(true)}>Add Review</button>}
      </div>
      <ReviewModal open={openModal} close={() => setOpenModal(false)}/>
    </>
  );
};

export default ReviewList;
