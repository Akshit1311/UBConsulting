import React from "react";
// import Services from "./Services";

import Card from "./Card/Card";

// BS
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// images
// import Advisory from "../../images/services/advisory.jpg";
// import Accounting from "../../images/services/accounting.jpg";
// import Risk from "../../images/services/risk.jpg";
import Governance from "../../images/services/governance.jpg";
import Tax from "../../images/services/tax.jpg";
import Assurance from "../../images/services/assurance.jpg";
import It from "../../images/services/it.jpg";
// import Industry from "../../images/industries/industry.jpg";
import Startup from "../../images/industries/startup.jpg";
import Business from "../../images/industries/business.jpg";
// import Loan from "../../images/industries/loan.jpg";
import Outsourcing from "../../images/industries/outsourcing.jpg";

// linking
import { Link } from "react-router-dom";

function ServicesContent() {
  return (
    <div>
      <Row>
        <Col sm={12} lg={4}>
          <Link className="text-dark" to="/services/governance">
            <Card link={Governance} heading="Governance, Risk and Compliance" />
          </Link>
        </Col>
        <Col sm={12} lg={4}>
          <Link className="text-dark" to="/services/startup">
            <Card link={Startup} heading="Startup" />
          </Link>
        </Col>

        <Col sm={12} lg={4}>
          <Link className="text-dark" to="/services/accounting">
            <Card link={Outsourcing} heading="Outsourcing" />
          </Link>
        </Col>
      </Row>
      <br />
      <Row>
        <Col sm={12} lg={4}>
          <Link className="text-dark" to="/services/assurance">
            <Card link={Assurance} heading="Assurance" />
          </Link>
        </Col>
        <Col sm={12} lg={4}>
          <Link className="text-dark" to="/services/tax">
            <Card link={Tax} heading="Tax" />
          </Link>
        </Col>

        <Col sm={12} lg={4}>
          <Link className="text-dark" to="/services/itservices">
            <Card link={It} heading="IT Services" />
          </Link>
        </Col>
      </Row>
      <Row>
        <Col sm={12} lg={4}>
          <Link className="text-dark" to="/services/loan">
            <Card link={Business} heading="Loan Staffing" />
          </Link>
        </Col>
      </Row>

      <br />
    </div>
  );
}

export default ServicesContent;
