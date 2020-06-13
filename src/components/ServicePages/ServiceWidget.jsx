import React from "react";

// Bootstrap
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import "./service-widget.css";

function ServiceWidget(props) {
  return (
    // <Row>
    <Container>
      <div className="service-heading-container">
        <Row>
          <Col sm={12} lg={6}>
            {props.service.map((item, index) => {
              return (
                index % 2 === 0 && (
                  <p key={item.id} className="service-content">
                    <span className="serial-num">{item.id}</span>
                    <h4>{item.heading}</h4>
                  </p>
                )
              );
            })}
          </Col>
          <Col sm={12} lg={6}>
            {props.service.map((item, index) => {
              return (
                index % 2 !== 0 && (
                  <p key={item.id} className="service-content">
                    <span className="serial-num">{item.id}</span>
                    <h4>{item.heading}</h4>
                  </p>
                )
              );
            })}
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default ServiceWidget;
