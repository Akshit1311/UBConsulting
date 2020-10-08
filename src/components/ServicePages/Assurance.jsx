import React from "react";
import ServiceWidget from "./ServiceWidget";

import "./service-item.css";

function Assurance() {
  const assurance = [
    {
      id: 1,
      heading: "Accounting advisory",
    },
    {
      id: 2,
      heading: "Develop accounting manual",
    },
  ];

  return (
    <div className="service-item">
      <h1 className="text-center serv-heading">Assurance</h1>
      {/* <br /> */}
      <ServiceWidget service={assurance} />
    </div>
  );
}

export default Assurance;
