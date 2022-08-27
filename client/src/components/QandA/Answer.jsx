import React from "react";
import { parseISO } from "date-fns";
import questList from "./qAndA.js";

const Answer = ({ answer }) => {
  const { answerer_name, body, date, helpfulness, id, photos } = answer;

  // variables
  const answ = questList.find((q) => q.question_id === id);
  console.log(answ);

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
        <u>Yes</u>
        {" (" + helpfulness + ") | "}
        <u>Report</u>
      </small>
    </div>
  );
};

export default Answer;
