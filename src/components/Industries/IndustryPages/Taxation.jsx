import React from "react";
import ServiceWidget from "../../ServicePages/ServiceWidget";

import "../../ServicePages/service-item.css";
import Container from "react-bootstrap/Container";

function Taxation() {
  const taxation = [
    {
      id: 1,
      heading: "Financial Statements",
    },
    {
      id: 2,
      heading: "Bookkeeping ",
    },
    {
      id: 3,
      heading: "Cash flow projections ",
    },
    {
      id: 4,
      heading: "Virtual CFO",
    },
    {
      id: 5,
      heading: "Corporate/commodity tax planning",
    },
    {
      id: 6,
      heading: "Payroll",
    },
    {
      id: 7,
      heading: "Indirect tax",
    },
  ];

  const taxation1 = [
    {
      id: 1,
      heading: "Management charts",
    },
    {
      id: 2,
      heading: "Personalised assistance and support",
    },
    {
      id: 3,
      heading: "Intermediate accounting situations",
    },
    {
      id: 4,
      heading: "Support abroad",
    },
    {
      id: 5,
      heading: "Legal and social",
    },
    {
      id: 6,
      heading: "Advice on public finance ",
    },
    {
      id: 7,
      heading: "Tax arrangements",
    },
    {
      id: 8,
      heading: "Industrial Property Rights",
    },
  ];

  return (
    <div className="service-item">
      <h1 className="text-center">Taxation and Process Outsourcing</h1>
      <br />

      <ServiceWidget service={taxation} />
      <br />
      <Container>
        Your start-up is up and running, and you want to make progress but have
        limited resources. To help you with specific challenges, UBC offers a
        number of individual services. Specific missions and services adapted to
        the challenges you face to support your development strategy during each
        stage of your company’s growth.
      </Container>
      <br />

      <ServiceWidget service={taxation1} />
      <br />

      <Container>
        We also study the legal organisation of your business to identify the
        most advantageous set-up and assess different solutions that lighten the
        tax burden of your start-up, as well as your individual tax
        arrangements.
      </Container>
    </div>
  );
}

export default Taxation;
