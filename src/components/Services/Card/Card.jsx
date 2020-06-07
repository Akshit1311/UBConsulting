import React from "react";

// Styles

import "./card-styles.css";

function Card(props) {
  return (
    <div className="service-card">
      <img alt={props.heading} className="card-img" src={props.link} />
      <br />
      <br />
      <h4>{props.heading}</h4>
      <p>{props.desc}</p>
    </div>
  );
}

export default Card;
