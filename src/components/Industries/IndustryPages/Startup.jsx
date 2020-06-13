import React from "react";
import ServiceWidget from "../../ServicePages/ServiceWidget";

import "../../ServicePages/service-item.css";

function Startup() {
  const startup = [
    {
      id: 1,
      heading: "Company Incorporation",
    },
    {
      id: 2,
      heading: "Application for PAN/GST",
    },
    {
      id: 3,
      heading: "Managing Compliances",
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
    {
      id: 7,
      heading: "Accounting ",
    },
    {
      id: 8,
      heading: "Virtual CFO",
    },
    {
      id: 9,
      heading: "Outsourcing Services(Accounting and payroll)",
    },
    {
      id: 10,
      heading: "Loan Staffing",
    },
    {
      id: 11,
      heading: "Organization Structure",
    },
    {
      id: 12,
      heading: "India Entry Stratefy",
    },
    {
      id: 13,
      heading: "Feasibilty Analysis",
    },
  ];

  return (
    <div className="service-item">
      <h1 className="text-center">Startup and Process Outsourcing</h1>
      <br />
      <img
        className="mx-auto d-block my-4"
        src={require("../../../images/industries/startuprocess.jpg")}
      />
      <ServiceWidget service={startup} />
    </div>
  );
}

export default Startup;
