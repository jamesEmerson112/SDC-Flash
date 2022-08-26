import React, { useState, useEffect } from "react";
import axios from "axios";
import config from "../../../../env/config.js";

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
