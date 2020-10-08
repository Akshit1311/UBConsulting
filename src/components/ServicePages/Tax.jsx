import React from "react";
import ServiceWidget from "./ServiceWidget";

import "./service-item.css";

function Tax() {
  const tax = [
    {
      id: 1,
      heading: "Application of GST",
    },
    {
      id: 2,
      heading: "Advisory on GST",
    },
    {
      id: 3,
      heading: "Filling GST returns",
    },
    {
      id: 4,
      heading: "Personal income tax advisory",
    },
  ];

  return (
    <div className="service-item">
      <h1 className="text-center serv-heading">Tax</h1>
      {/* <br /> */}
      <ServiceWidget service={tax} />
    </div>
  );
}

export default Tax;
