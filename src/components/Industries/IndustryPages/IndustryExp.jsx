import React from "react";
import ServiceWidget from "../../ServicePages/ServiceWidget";

import "../../ServicePages/service-item.css";

function IndustryExp() {
  const industryexp = [
    {
      id: 1,
      heading: "Airlines",
    },
    {
      id: 2,
      heading: "Automotive",
    },
    {
      id: 3,
      heading: "Consumer Electronics",
    },
    {
      id: 4,
      heading: "FMCG",
    },
    {
      id: 5,
      heading: "Healthcare",
    },
    {
      id: 6,
      heading: "Hospitality",
    },
    {
      id: 7,
      heading: "Infrastructure",
    },
    {
      id: 8,
      heading: "IT & ITES",
    },

    {
      id: 9,
      heading: "Manufacturing",
    },

    {
      id: 10,
      heading: "Pharma",
    },

    {
      id: 11,
      heading: "Real Estate",
    },

    {
      id: 12,
      heading: "Telecom",
    },
  ];

  return (
    <div className="service-item">
      <h1 className="text-center">Industry Experience</h1>
      <br />
      <ServiceWidget service={industryexp} />
    </div>
  );
}

export default IndustryExp;
