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
      heading: "Accounts Payable",
    },
    {
      id: 3,
      heading: "Administration ",
    },
    {
      id: 4,
      heading: "Loan Staffing ",
    },
    {
      id: 5,
      heading: "Payroll Processing",
    },
    {
      id: 6,
      heading: "Procure to Pay",
    },

    {
      id: 7,
      heading: "Record to Report",
    },
  ];

  return (
    <div className="service-item">
      <h1 className="text-center serv-heading">Process Outsourcing</h1>
      <br />
      <ServiceWidget service={accounting} />
    </div>
  );
}

export default Accounting;
