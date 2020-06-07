import React from "react";

// Image
// import AboutImg from "../../images/about/about.jpg";

// bS

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

// Styles
import "./about-styles.css";

function About() {
  return (
    <div id="about">
      <Container fluid>
        <Row>
          <Col sm={12} lg={6}>
            <div className="about-content">
              <h3>WHO WE ARE</h3>
              <br />
              <p>
                Our team includes Management Consultants, Chartered Accountants,
                Company Secretaries, MBA, IT professionals etc. We have been
                successfully advising Indian promoters, MNCs, Investors, Boards
                of Directors, Indian Government, CFOs, CAEs on various matters
                like growth, scalability, business strategy, IT strategy, risk
                assurance, corporate financing etc.
                <br />
                <br />
                At UBC, we believe in exceeding client’s expectations by
                understanding their requirements in humble manner and continuous
                engagement to align deliverables. We believe in delivering
                seamless services with astute knowledge with high-end expertise
                of our senior professionals.
                <br />
                <br />
                We have delivery capabilities in all metropolitan cities like
                Delhi NCR, Mumbai, Bengaluru, Kolkata, Chennai.
              </p>
            </div>
          </Col>
          <Col sm={12} lg={6}>
            <div className="about-img"></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
