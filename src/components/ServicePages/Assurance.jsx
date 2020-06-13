import React from "react";
import ServiceWidget from "./ServiceWidget";

import "./service-item.css";

function Assurance() {
  const assurance = [
    {
      id: 1,
      heading: "Develop accounting manual",
    },
    {
      id: 2,
      heading: "Accounting advisory",
    },
  ];

  return (
    <div className="service-item">
      <h1 className="text-center">Assurance</h1>
      <br />
      <ServiceWidget service={assurance} />
    </div>
  );
}

export default Assurance;
