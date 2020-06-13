import React from "react";
import ServiceWidget from "./ServiceWidget";

import "./service-item.css";
import Container from "react-bootstrap/Container";

function ItServices() {
  const itservices = [
    {
      id: 1,
      heading: "ERP Strategy",
    },
    {
      id: 2,
      heading: "ERP check & assessment",
    },
    {
      id: 3,
      heading: "Process & Control design",
    },
    {
      id: 4,
      heading: "Regulatory & Compliance",
    },
    {
      id: 5,
      heading: "Cost optimisation",
    },
    {
      id: 6,
      heading: "Sourcing & Supply Chain Issues",
    },
  ];
  const itservices1 = [
    {
      id: 1,
      heading: "Information Protection ",
    },
    {
      id: 2,
      heading: "Business Resilience",
    },
    {
      id: 3,
      heading: "IT Internal Audit ",
    },
    {
      id: 4,
      heading: "IT Attestation",
    },
    {
      id: 5,
      heading: "IT Governance",
    },
    {
      id: 6,
      heading: "Controls Integration",
    },
    {
      id: 7,
      heading: "Information Governance Services",
    },
  ];

  return (
    <div className="service-item">
      <h1 className="text-center">It Risk Services</h1>
      <br />
      <Container>
        It risk is creating lot of challenges to the growing businesses, In the
        face of these challenges, managing IT risk and compliance has become
        even more critical, as IT failures can lead to reputational damage,
        customer and market valuation loss, and an increase in privacy issues
        and high-profile legal exposure. In this environment, enhancing IT
        controls is crucial to help ensure businesses are managed and controlled
        appropriately, and functioning reliably. We help our clients in
        providing the right IT UB Consulting by looking into following areas :
      </Container>
      <br />
      <ServiceWidget service={itservices} />
      <br />

      <Container>
        we help organizations assess, manage and optimize information technology
        risk across a range of areas, including :
      </Container>
      <br />
      <ServiceWidget service={itservices1} />
    </div>
  );
}

export default ItServices;
