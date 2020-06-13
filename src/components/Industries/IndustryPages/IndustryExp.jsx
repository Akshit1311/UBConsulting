import React from "react";
import ServiceWidget from "../../ServicePages/ServiceWidget";

import "../../ServicePages/service-item.css";

function IndustryExp() {
  const industryexp = [
    {
      id: 1,
      heading: "FMCG",
    },
    {
      id: 2,
      heading: "Consumer Electronics",
    },
    {
      id: 3,
      heading: "Healthcare",
    },
    {
      id: 4,
      heading: "Pharma",
    },
    {
      id: 5,
      heading: "Automotive",
    },
    {
      id: 6,
      heading: "Real Estate",
    },
    {
      id: 7,
      heading: "Hospitality",
    },
    {
      id: 8,
      heading: "Infrastructure",
    },
    {
      id: 9,
      heading: "IT & ITES",
    },
    {
      id: 10,
      heading: "Telecom",
    },
  ];

  return (
    <div className="service-item">
      <h1 className="text-center">IndustryExp and Process Outsourcing</h1>
      <br />
      <ServiceWidget service={industryexp} />
    </div>
  );
}

export default IndustryExp;
