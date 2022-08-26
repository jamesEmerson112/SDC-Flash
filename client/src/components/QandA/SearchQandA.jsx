import React, { useState, useEffect } from "react";
import axios from "axios";
import config from "../../../../env/config.js";

const SearchQandA = ({ search }) => {
  // const [query, setQuery] = useState("");

  // useEffect(() => {
  //   axios
  //     .get(`/qa/questions?product_id=${id}`, config)
  //     .then((response) => setQList(response.data.results))
  //     .catch((err) => console.log(err));
  // }, [product]);

  return (
    <input
      type="text"
      placeholder="Have a question? Search for answers..."
      onChange={search}
    />
  );
};

export default SearchQandA;
