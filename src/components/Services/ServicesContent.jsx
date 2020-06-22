import React from "react";
// import Services from "./Services";

import Card from "./Card/Card";

// BS
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// images
import Advisory from "../../images/services/advisory.jpg";
import Accounting from "../../images/services/accounting.jpg";
import Risk from "../../images/services/risk.jpg";
import Tax from "../../images/services/tax.jpg";
import Assurance from "../../images/services/assurance.jpg";
import It from "../../images/services/it.jpg";
// import Industry from "../../images/industries/industry.jpg";
import Startup from "../../images/industries/startup.jpg";
import Business from "../../images/industries/business.jpg";
import Loan from "../../images/industries/loan.jpg";
import Outsourcing from "../../images/industries/outsourcing.jpg";

// linking
import { Link } from "react-router-dom";

function ServicesContent() {
  return (
    <div>
      <Row>
        <Col sm={12} lg={4}>
          <Link className="text-dark" to="/services/accounting">
            <Card
              link={Accounting}
              heading="Accounting and process outsourcing"
            />
          </Link>
        </Col>
        <Col sm={12} lg={4}>
          <Link className="text-dark" to="/services/assurance">
            <Card link={Assurance} heading="Assurance" />
          </Link>
        </Col>

        <Col sm={12} lg={4}>
          <Link className="text-dark" to="/services/governance">
            <Card link={Risk} heading="Governance, Risk and Compliance" />
          </Link>
        </Col>
      </Row>
      <br />
      <Row>
        <Col sm={12} lg={4}>
          <Link className="text-dark" to="/services/tax">
            <Card link={Tax} heading="Tax" />
          </Link>
        </Col>

        <Col sm={12} lg={4}>
          <Link className="text-dark" to="/services/itservices">
            <Card link={It} heading="IT Risk Services" />
          </Link>
        </Col>
        <Col sm={12} lg={4}>
          <Link className="text-dark" to="/services/advisory">
            <Card link={Advisory} heading="Advisory" />
          </Link>
        </Col>
      </Row>
      <Row>
        <Col sm={12} lg={4}>
          <Link className="text-dark" to="/services/taxation">
            <Card link={Tax} heading="Finance/tax/accounting " />
          </Link>
        </Col>
        <Col sm={12} lg={4}>
          <Link className="text-dark" to="/services/loan">
            <Card link={Business} heading="Loan Staffing" />
          </Link>
        </Col>
        <Col sm={12} lg={4}>
          <Link className="text-dark" to="/services/outsourcing">
            <Card
              link={Outsourcing}
              heading="Outsourcing (including Payroll)"
            />
          </Link>
        </Col>
      </Row>
      <Row>
        <Col sm={12} lg={4}>
          <Link className="text-dark" to="/services/startup">
            <Card link={Startup} heading="Startup Services" />
          </Link>
        </Col>

        {/* <Col sm={12} lg={4}>
          <Link className="text-dark" to="/services/business">
            <Card link={Business} heading="Business Planning" />
          </Link>
        </Col> */}
      </Row>
    </div>
  );
}

export default ServicesContent;
