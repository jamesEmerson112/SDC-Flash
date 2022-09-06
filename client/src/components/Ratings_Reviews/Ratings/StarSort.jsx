import React from "react";
import styled from "styled-components";

const StarSort = ({ starCount, toggle, starFilter, reset }) => {

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
        <Span onClick={() => toggle(star)}>{star} stars </Span>
        <BarContainer>
          <Overlay style={{ width: `${count[star]}%` }}></Overlay>
        </BarContainer>
      </Container>
    );
  });

  const sort = ["1", "2", "3", "4", "5"].reduce((output, sort) => {
    if (starFilter[sort] === true) {
      output += sort + ", ";
    }
    return output;
  }, "");

  return (
    <div>
      {map}
      {sort && (
        <SortDisplay>
          Sorting by {sort.slice(0, sort.length - 2)} star reviews
        </SortDisplay>
      )}
      {(starFilter["1"] ||
        starFilter["2"] ||
        starFilter["3"] ||
        starFilter["4"] ||
        starFilter["5"]) && <Reset onClick={reset}>Reset Sort</Reset>}
    </div>
  );
};

export default StarSort;

const Container = styled.div`
  display: flex;
  margin-bottom: 5px;
  min-width: 350px;
`;

const Span = styled.span`
  margin-right: 10px;
  cursor: pointer;
  display: inline-block;
  position: relative;
  &:: before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 2px;
    background-color: black;
    transition: width 0.25s ease-out;
  }
  &:hover {
    font-weight: bold;
    &::before {
      width: 100%;
    }
  }
`;

const BarContainer = styled.div`
  background-color: #505050;
  height: 18px;
  width: 65%;
  position: relative;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  background-color: #ddd;
  opacity: 0.7;
`;

const SortDisplay = styled.p`
  margin: 8px 0px 3px 0px;
  font-style: italic;
`;

const Reset = styled.button`
  border-radius: 5px;
  border: 1px solid black;
  cursor: pointer;
  padding: 5px 5px;
  background: #f0f0f0;
  &:hover {
    box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
  }
`;
