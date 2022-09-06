import React, { useState, useEffect } from "react";
import ReviewCard from "./ReviewCard.jsx";
import ReviewModal from "./Modal/ReviewModal.jsx";
import { FaSearch } from "react-icons/fa";
import ClipLoader from "react-spinners/ClipLoader";
import styled from "styled-components";


const ReviewList = (props) => {
  const [reviews, setReviews] = useState([]);
  const [filterReviews, setFilterReviews] = useState([]);
  const [meta, setMeta] = useState({});
  const [helpfullClicks, setHelpfullClicks] = useState({});

  const [openModal, setOpenModal] = useState(false);

  const [count, setCount] = useState(2);
  const [scrollAdd, setScrollAdd] = useState(false);
  const [spinner, setSpinner] = useState(false);

  const addMore = () => {
    setCount(count + 5);
    setScrollAdd(true);
  };

  const scroll = (e) => {
    if (
      e.target.scrollTop + 1 >= e.target.scrollHeight - e.target.offsetHeight &&
      scrollAdd === true
    ) {
      setSpinner(true);
      setTimeout(() => {
        setSpinner(false);
        setCount(count + 3);
      }, 1500);
    }
  };

  const hideReviews = () => {
    setCount(2);
    setScrollAdd(false);
  };

  const search = (e) => {
    var query = e.target.value.toLowerCase();
    if (query.length > 2) {
      filter(query);
    } else {
      setFilterReviews(reviews);
    }
  };

  const filter = (query) => {
    const newData = reviews.filter((review) => {
      if (
        review.summary.toLowerCase().includes(query) ||
        review.body.toLowerCase().includes(query)
      ) {
        return review;
      }
    });
    setFilterReviews(newData);
  };

  const map = filterReviews?.slice(0, count).map((review, index) => {
    return (
      <ReviewCard
        key={index}
        review={review}
        helpfullClicks={helpfullClicks}
        setHelpfullClicks={setHelpfullClicks}
      />
    );
  });

  useEffect(() => {
    setReviews(props.reviews);
    setFilterReviews(props.reviews);
    setMeta(props.meta);
    setCount(2);
    setScrollAdd(false);
  }, [props.id, props.reviews, props.meta]);

  return (
    <RnRContainer>
      <Bold>
        {filterReviews.length + "  reviews, sorted by  "}
        <Select onChange={(e) => props.sort(e.target.value)}>
          <option value="relevant">Relevant</option>
          <option value="helpful">Helpful</option>
          <option value="newest">Newest</option>
        </Select>
      </Bold>
      <SearchContainer>
        <Search type="text" placeholder="Search..." onChange={search} />
        <FaSearch className="searchIcon"/>
      </SearchContainer>

      <Container onScroll={scroll}>
        {map}
        {spinner ? (
          <SpinnerContainer>
            <ClipLoader color={"#dc143c"} loading={spinner} size={70} />
          </SpinnerContainer>
        ) : null}
      </Container>

      <ButtonContainer>
        {reviews.length > 2 && count < reviews.length && !scrollAdd && (
          <button onClick={addMore} className="reviewbtn">
            MORE REVIEWS &#9660;
          </button>
        )}
        {count >= reviews.length && (
          <button onClick={hideReviews} className="reviewbtn">
            HIDE REVIEWS &#9650;
          </button>
        )}
        <button onClick={() => setOpenModal(true)} className="reviewbtn">
          ADD REVIEW +
        </button>
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
};

export default ReviewList;

const RnRContainer = styled.div`
  margin-bottom: 80px;
`;

const Bold = styled.p`
  font-size: 18px;
  font-weight: bold;
`;

const Select = styled.select`
  padding: 8px;
  padding-right: 0px;
  border: 0;
  font-size: 18px;
  font-weight: bold;
  text-decoration: underline;
  text-shadow: 0px 0px 20px #a0a0a0;
  cursor: pointer;
`;

const SearchContainer = styled.div`

`

const Search = styled.input`
width: 775px;
padding: 0px;
margin-bottom: 8px;
`;

const Container = styled.div`
max-height: 800px;
max-width: 800px;
overflow-y: auto;
`;

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  margin-top: 30px;
  & button:last-child {
    margin-left: 25px;
  }
  & button: first-child {
    margin-left: 0px;
  }
`;
