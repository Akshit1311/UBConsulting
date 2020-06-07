import React from "react";

import "./reason-box-styles.css";

function ReasonBox(props) {
  return (
    <div className="reason-box">
      <h3>{props.heading}</h3>
      <br />
      <p>{props.content}</p>
    </div>
  );
}

export default ReasonBox;
