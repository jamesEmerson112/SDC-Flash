import React, { useState, useEffect } from "react";
import Stars from '../Stars.jsx'
import StarSort from './StarSort.jsx'
import Characteristics from "./Characteristics.jsx";
import styled from "styled-components";

const RatingsOverview = (props) => {

  return (
    <Container>
      <div>{Boolean(props.average % 1) ? props.average : props.average + '.0'} <Stars rating={props.average}/></div>
      <p>{props.recc}% of reviews commend this product</p>
      <StarSort starCount={props.stars} toggle={props.toggleStar}/>
      <Characteristics meta={props.meta}/>
    </Container>
  );

}

export default RatingsOverview;

const Container = styled.div`
display: flex;
flex-direction: column;
padding: 20px;
width: 400px;
`;

