import React, { useState, useEffect } from "react";

const SearchQandA = ({ search }) => {
  return (
    <input
      className="qAndASearchBar"
      type="text"
      placeholder="Have a question? Search for answers..."
      onChange={search}
    />
  );
};

export default SearchQandA;
