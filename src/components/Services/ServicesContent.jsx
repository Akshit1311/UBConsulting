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

function ServicesContent() {
  return (
    <div>
      <Row>
        <Col sm={12} lg={4}>
          <Card link={Advisory} heading="Advisory" />
        </Col>
        <Col sm={12} lg={4}>
          <Card
            link={Accounting}
            heading="Accounting and process outsourcing"
          />
        </Col>
        <Col sm={12} lg={4}>
          <Card link={Risk} heading="Governance, Risk and Compliance" />
        </Col>
      </Row>
      <br />
      <Row>
        <Col sm={12} lg={4}>
          <Card link={Tax} heading="Tax" />
        </Col>
        <Col sm={12} lg={4}>
          <Card link={Assurance} heading="Assurance" />
        </Col>
        <Col sm={12} lg={4}>
          <Card link={It} heading="IT Risk Services" />
        </Col>
      </Row>
    </div>
  );
}

export default ServicesContent;
