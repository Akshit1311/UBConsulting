import React from "react";
import ServiceWidget from "./ServiceWidget";

import "./service-item.css";

function Governance() {
  const governance = [
    {
      id: 3,
      heading: "Compliance Management ",
    },
    {
      id: 4,
      heading: "Enterprise Risk Management",
    },
    {
      id: 2,
      heading: "Forensics",
    },
    {
      id: 1,
      heading: "Internal Audit (Co-source/Outsource)",
    },
    {
      id: 6,
      heading: "Internal Financial Controls ",
    },
    {
      id: 5,
      heading: "Standard Operating Procedures (SOPs)",
    },
    {
      id: 7,
      heading: "SOX compliance ",
    },
    {
      id: 8,
      heading: "Staff Augmentation",
    },
    {
      id: 9,
      heading: "Support to Insolvency Resolution professionals",
    },
  ];

  return (
    <div className="service-item">
      <h1 className="text-center">Governance, Risk And Compliance</h1>
      <br />
      <ServiceWidget service={governance} />
    </div>
  );
}

export default Governance;
