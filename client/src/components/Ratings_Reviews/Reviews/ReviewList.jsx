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
  const [hide, setHide] = useState(false)
  const [openModal, setOpenModal] = useState(false);

  const addMore = () => {
    setCount(reviews.length)
    setHide(true)
  };

  const hideReviews = () => {
    setCount(2)
    setHide(false)
  }

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
    setHide(false)
  }, [props.id, props.reviews, props.meta, helpfullClicks]);

  return (
    <RnRContainer>
      <Bold>{filterReviews.length + '  reviews, sorted by  '}
        <Select onChange={(e) => props.sort(e.target.value)}>
            <option value='relevant'>Relevant</option>
            <option value='helpful'>Helpful</option>
            <option value='newest'>Newest</option>
        </Select></Bold>
        <Search type='text' placeholder='Search...' onChange={search}/>
      <Container>
        {map}
      </Container>
      <ButtonContainer>
        {reviews.length > 2 && count < reviews.length &&
        <button onClick={addMore} className='reviewbtn'>MORE REVIEWS &#9660;</button>}
        {hide && <button onClick={hideReviews} className='reviewbtn'>HIDE REVIEWS &#9650;</button>}
        <button onClick={() => setOpenModal(true)} className='reviewbtn'>ADD REVIEW +</button>
      </ButtonContainer>
      <ReviewModal
        id={props.id}
        meta={meta}
        open={openModal}
        close={() => setOpenModal(false)}
        post={props.post}
      />
    </RnRContainer>
  );
}

export default ReviewList;

const RnRContainer = styled.div`
margin-bottom: 80px;
`

const Bold = styled.p`
font-size: 18px;
font-weight: bold;
`

const Select = styled.select`
padding: 8px;
padding-right: 0px;
border: 0;
font-size: 18px;
font-weight: bold;
text-decoration: underline;
text-shadow: 0px 0px 20px #a0a0a0;
cursor: pointer;
`

const Search = styled.input`
width: 798px;
padding: 0px;
margin-bottom: 8px;
`

const Container = styled.div`
max-height: 800px;
width: 800px;
overflow-y: auto;
`

const ButtonContainer = styled.div`
display: flex;
margin-top: 20px;
& button:last-child {
  margin-left: 25px;
}
`





