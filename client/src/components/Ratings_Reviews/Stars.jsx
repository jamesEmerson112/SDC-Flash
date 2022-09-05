import React, {useContext} from "react";
import { FaStar } from "react-icons/fa";
import styled from "styled-components";
import { DarkMode } from "../App.jsx";

const Stars = ({ rating }) => {
  //takes a number between 1-5 and does magic to create stars
  const width = 100 - Math.round((rating / 5) * 100);
  const starRating = [...Array(5)].map((_, index) => {
    return <FaStar key={index} className="star" />;
  });

  const darkMode = useContext(DarkMode);

  return (

    <Container>
      <StarContainer>{starRating}</StarContainer>
      <OverlayStar style={{ width: `${width}%`, backgroundColor: darkMode === 'Light Mode' ? 'rgb(254, 254, 254)' : 'grey'}}></OverlayStar>
    </Container>
  );
};

export default Stars;

const Container = styled.div`
  display: inline-flex;
  align-items: center;
  position: relative;
`;

const StarContainer = styled.div`
display: flex;
`;

const OverlayStar = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  opacity: 0.7;
`;
