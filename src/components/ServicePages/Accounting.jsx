import React from "react";
import ServiceWidget from "./ServiceWidget";

import "./service-item.css";

function Accounting() {
  const accounting = [
    {
      id: 1,
      heading: "Accounting",
    },
    {
      id: 2,
      heading: "Procure to Pay",
    },
    {
      id: 3,
      heading: "Record to Report",
    },
    {
      id: 4,
      heading: "Accounts Payable",
    },
    {
      id: 5,
      heading: "Payroll Processing",
    },
    {
      id: 6,
      heading: "Administration ",
    },
    {
      id: 7,
      heading: "Loan Staffing ",
    },
  ];

  return (
    <div className="service-item">
      <h1 className="text-center">Accounting and Process Outsourcing</h1>
      <br />
      <ServiceWidget service={accounting} />
    </div>
  );
}

export default Accounting;
