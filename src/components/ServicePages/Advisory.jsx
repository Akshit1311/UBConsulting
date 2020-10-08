import React from "react";
import ServiceWidget from "./ServiceWidget";

import "./service-item.css";

function Advisory() {
  const advisory = [
    {
      id: 1,
      heading: "Company Incorporation",
    },
    {
      id: 2,
      heading: "Investor Management",
    },
    {
      id: 3,
      heading: "Project Monitoring",
    },
    {
      id: 4,
      heading: "Cash Flow Monitoring",
    },
    {
      id: 5,
      heading: "HR Consulting",
    },
    {
      id: 6,
      heading: "Loan Staffing",
    },
    {
      id: 7,
      heading: "Inventory Assurance",
    },
    {
      id: 8,
      heading: "Fixed Assets Assurance",
    },
    {
      id: 9,
      heading: "Virtual CFO",
    },
  ];

  return (
    <div className="service-item">
      <h1 className="text-center serv-heading">Other Advisory Services</h1>
      <br />
      <ServiceWidget service={advisory} />
    </div>
  );
}

export default Advisory;
