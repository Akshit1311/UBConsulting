import React from "react";

// BS
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Styles
import "./quote-styles.css";

function Quote() {
  return (
    <div className="quote">
      <Container>
        <Row>
          <Col lg={9} className="quote-content">
            <h3>Looking For a High-Class Financial Service ?</h3>
          </Col>
          <Col lg={3}>
            <Button className="quote-btn" size="md" variant="dark">
              GET A FREE QUOTE
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Quote;
