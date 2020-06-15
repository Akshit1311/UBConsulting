import React from "react";
// import ServiceWidget from "../../ServicePages/ServiceWidget";

import "../../ServicePages/service-item.css";
import Container from "react-bootstrap/Container";

function Outsourcing() {
  return (
    <div className="service-item">
      <h1 className="text-center">Outsourcing(including Payroll)</h1>
      <br />

      <br />
      <Container>
        Our outsourcing services enables you to quickly and efficiently fill
        staff shortages, temporary or otherwise, with highly qualified employees
        of UBC. By entirely or partially outsourcing the financial
        administration, expertise can also be acquired and the company can
        concentrate more on its core activities like payroll, accounting,
        assurance to name a few.
      </Container>
      <br />
    </div>
  );
}

export default Outsourcing;
