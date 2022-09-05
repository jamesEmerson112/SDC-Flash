import React, { useState, useEffect } from "react";
import Stars from '../Stars.jsx'
import StarSort from './StarSort.jsx'
import Characteristics from "./Characteristics.jsx";
import styled from "styled-components";

const RatingsOverview = (props) => {

  return (
    <Container>
      <StarRating>
        <StarScore>{Boolean(props.average % 1) ? props.average : props.average + '.0'}</StarScore>
        <Stars rating={props.average}/>
      </StarRating>
      <p>{props.recc}% of reviews commend this product</p>
      <StarSort starCount={props.stars} toggle={props.toggleStar} starFilter={props.starFilter} reset={props.reset}/>
      <Characteristics meta={props.meta}/>
    </Container>
  );

}

export default RatingsOverview;

const Container = styled.div`
display: flex;
flex-direction: column;
padding: 10px 20px 0px 0px;
width: 350px;
`;

const StarRating = styled.div`
display: flex;
`;

const StarScore = styled.h2`
margin: 0px 20px 0px 0px;
font-size: 36px
`
