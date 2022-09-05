import React from "react";
import styled from "styled-components";

const StarSort = ({ starCount, toggle }) => {
  const width5 = 100 - Math.round((starCount["5"] / starCount.total) * 100);
  const width4 = 100 - Math.round((starCount["4"] / starCount.total) * 100);
  const width3 = 100 - Math.round((starCount["3"] / starCount.total) * 100);
  const width2 = 100 - Math.round((starCount["2"] / starCount.total) * 100);
  const width1 = 100 - Math.round((starCount["1"] / starCount.total) * 100);
  const count = {
    5: width5,
    4: width4,
    3: width3,
    2: width2,
    1: width1,
  };

  const map = ["5", "4", "3", "2", "1"].map((star) => {
    return (
      <Container key={star}>
        <span onClick={() => toggle(star)}>{star} stars </span>
        <BarContainer>
          <Overlay style={{ width: `${count[star]}%` }}></Overlay>
        </BarContainer>
      </Container>
    );
  });

  return <div>{map}</div>;
};

export default StarSort;

const Container = styled.div`
  display: flex;
`;

const BarContainer = styled.div`
  background-color: black;
  height: 18px;
  width: 75%;
  position: relative;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  background-color: rgb(254, 254, 254);
  opacity: 0.7;
`;
