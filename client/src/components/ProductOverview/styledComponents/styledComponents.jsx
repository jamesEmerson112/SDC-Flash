import styled from "styled-components";

const Box = styled.div`
  border: 1px solid black;
  border-radius: 4px;
  padding: 5px;
  width: 150px;
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

export { Box };
