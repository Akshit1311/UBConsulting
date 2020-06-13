import React from "react";
import ServiceWidget from "../../ServicePages/ServiceWidget";

import "../../ServicePages/service-item.css";

function Business() {
  const business = [
    {
      id: 1,
      heading: "Organization structure/restructure",
    },
    {
      id: 2,
      heading: "International business ",
    },
    {
      id: 3,
      heading: "Taxation ",
    },
    {
      id: 4,
      heading: "Investor’s presentation",
    },
    {
      id: 5,
      heading: "Business Model",
    },
    {
      id: 6,
      heading: "Funding",
    },
  ];

  return (
    <div className="service-item">
      <h1 className="text-center">Business and Process Outsourcing</h1>
      <br />

      <ServiceWidget service={business} />
    </div>
  );
}

export default Business;
