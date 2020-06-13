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
        <Col sm={12} lg={4}>
          <h1 className="section-heading">
            {props.preheading} &nbsp;
            <span>{props.heading}</span>
          </h1>
        </Col>
        <Col sm={12} lg={8} className="section-desc">
          <span>{props.description}</span>
        </Col>
      </Row>
    </div>
  );
}

export default SectionHeader;
