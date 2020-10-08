import React from "react";
import ServiceWidget from "../../ServicePages/ServiceWidget";

import "../../ServicePages/service-item.css";

function Startup() {
  const startup = [
    {
      id: 1,
      heading: "Accounting ",
    },
    {
      id: 2,
      heading: "Application for PAN/GST",
    },
    {
      id: 3,
      heading: "Bookkeeping ",
    },

    {
      id: 4,
      heading: "Business Model",
    },
    {
      id: 5,
      heading: "Cash Flow Monitoring",
    },
    {
      id: 6,
      heading: "Cash flow projections ",
    },

    {
      id: 7,
      heading: "Company Incorporation",
    },
    {
      id: 8,
      heading: "Corporate/commodity tax planning",
    },
    {
      id: 9,
      heading: "Financial Statements",
    },
    {
      id: 10,
      heading: "Fixed Assets Assurance",
    },
    {
      id: 11,
      heading: "Funding",
    },
    {
      id: 12,
      heading: "Feasibilty Analysis",
    },
    {
      id: 13,
      heading: "HR Consulting",
    },
    {
      id: 14,
      heading: "India Entry Strategy",
    },
    {
      id: 15,
      heading: "Indirect tax",
    },
    {
      id: 16,
      heading: "International business ",
    },
    {
      id: 17,
      heading: "Inventory Assurance",
    },
    {
      id: 18,
      heading: "Investor Management",
    },

    {
      id: 19,
      heading: "Investor’s presentation",
    },

    {
      id: 20,
      heading: "Loan Staffing",
    },

    {
      id: 21,
      heading: "Managing Compliances",
    },
    {
      id: 22,
      heading: "Organization Structure",
    },

    {
      id: 23,
      heading: "Outsourcing Services(Accounting and payroll)",
    },
    {
      id: 24,
      heading: "Payroll",
    },
    {
      id: 25,
      heading: "Project Monitoring",
    },
    {
      id: 26,
      heading: "Taxation ",
    },
  ];

  return (
    <div className="service-item">
      <h1 className="text-center serv-heading">Startup</h1>
      <br />
      <ServiceWidget service={startup} />

      <br />
      <br />
    </div>
  );
}

export default Startup;
