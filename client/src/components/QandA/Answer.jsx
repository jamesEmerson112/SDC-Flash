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
    <div className="qAndAAns">
      <div>{body}</div>
      {photos.length ? (
        <div>
          {photos.map((photo, i) => (
            <img src={photo} key={id + i} className="ansPhotos" />
          ))}
        </div>
      ) : null}
      <small>
        {"by "}
        {answerer_name === "Seller" ? <b>{answerer_name}</b> : answerer_name}
        {", " + hrDt + " | Helpful? "}
        <a>Yes</a>
        {" (" + helpfulness + ") | "}
        <a>Report</a>
      </small>
    </div>
  );
};

export default Answer;
