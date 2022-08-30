import React from 'react';
import { FaStar } from 'react-icons/fa';
import styled from "styled-components";

const StarComponent = (props) => {
  const average = props.reviews.reduce((agv, rating) => {
    return agv + rating.rating
  }, 0) / props.reviews.length

  const width = 100 - Math.round(average / 5 * 100)
  const starRating = [...Array(5)].map((_, index) => {
    return <FaStar key={index} className='star'/>
  })

  return (
    <StarContainer>
      {starRating}
      <OverlayStar style={{width : `${width}%`}}></OverlayStar>
    </StarContainer>
  );
}

export default StarComponent;

const StarContainer = styled.div`
display: inline-flex;
align-items: center;
position: relative;
`;

const OverlayStar = styled.div`
position: absolute;
top: 0;
right: 0;
bottom: 0;
z-index: 1;
background-color: rgb(254, 254, 254);
opacity: 0.7
`;