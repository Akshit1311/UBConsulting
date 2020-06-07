import React from "react";

// BS
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Styles
import "./section-header-styles.css";

function SectionHeader(props) {
  return (
    <div className="section-container">
      <Row>
        <Col sm={12} lg={6}>
          <h1 className="section-heading">
            {props.preheading} <br />
            <span>{props.heading}</span>
          </h1>
        </Col>
        <Col sm={12} lg={6} className="section-desc">
          <span>{props.description}</span>
        </Col>
      </Row>
    </div>
  );
}

export default SectionHeader;
