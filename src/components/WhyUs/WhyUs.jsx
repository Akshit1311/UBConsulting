import React from "react";

// bs/
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/row";
import Col from "react-bootstrap/col";
import ReasonBox from "./ReasonBox/ReasonBox";

// Styles
import "./whyus-styles.css";

// Data
import reasons from "./whyInfo";

function WhyUs(props) {
  return (
    <div>
      <Container>
        <div className="section-container">
          <Row>
            <Col sm={12} lg={3}>
              <h1 className="pl-4 ml-2 section-heading text-center">
                WHY &nbsp;
                <span>US</span>
              </h1>
            </Col>
            <Col sm={12} lg={9} className="section-desc">
              <h1>5 reasons to pick UB Consulting?</h1>
            </Col>
          </Row>

          <div className="reasons">
            <Row>
              {reasons.map((reason) => {
                return (
                  reason.id < 3 && (
                    <Col sm={12} lg={4}>
                      <ReasonBox
                        heading={reason.heading}
                        content={reason.content}
                      />
                    </Col>
                  )
                );
              })}
            </Row>
            <Row>
              <Col lg={2}></Col>
              {reasons.map((reason) => {
                return (
                  reason.id > 2 && (
                    <Col sm={12} lg={4}>
                      <ReasonBox
                        heading={reason.heading}
                        content={reason.content}
                      />
                    </Col>
                  )
                );
              })}
              <Col lg={2}></Col>
            </Row>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default WhyUs;
