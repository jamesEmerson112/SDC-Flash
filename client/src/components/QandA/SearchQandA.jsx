import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

const SearchQandA = ({ search }) => {
  return (
    <SearchContainer>
      <Search
        className="qAndASearchBar"
        type="text"
        placeholder="Have a question? Search for answers..."
        onChange={search}
      />
      <IconContainer>
        <FaSearch style={{ color: "white" }} />
      </IconContainer>
    </SearchContainer>
  );
};

export default SearchQandA;

const SearchContainer = styled.div`
  width: 75vw;
  height: 40px;
  display: flex;
  margin-bottom: 20px;
`;

const Search = styled.input`
  flex: 1;
  border: none;
  outline: none;
  padding-left: 10px;
  background: #f0f0f0;
  font-size: 16px;
  transition: 0.3s;
  &:focus {
    transition: 0.3s;
    background-color: #505050;
    color: white;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;

const IconContainer = styled.div`
  background: #505050;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
