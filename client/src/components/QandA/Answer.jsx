import React from "react";
import { parseISO } from "date-fns";

const Answer = ({ answer }) => {
  const { answerer_name, body, date, helpfulness, id, photos } = answer;

  const hrDt = parseISO(date).toLocaleDateString("en-us", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div>
      <div>{body}</div>
      <small>
        by {answerer_name}, {hrDt} | Helpful? <a>Yes</a>{" "}
        {"(" + helpfulness + ")"} | <a>Report</a>
      </small>
    </div>
  );
};

export default Answer;
