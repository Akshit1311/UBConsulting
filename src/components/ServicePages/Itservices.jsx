import React from "react";
import ServiceWidget from "./ServiceWidget";

import "./service-item.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ItServices() {
  const advisory = [
    {
      id: 1,
      heading: "IT Contract Reviews",
    },
    {
      id: 2,
      heading: "ERP check & assessment",
    },
    {
      id: 3,
      heading: "IT Strategy Consulting",
    },
    {
      id: 4,
      heading: "Regulatory & Compliance",
    },
    {
      id: 5,
      heading: "Digital Transformation",
    },
    {
      id: 6,
      heading: "Sourcing & Supply Chain Issues",
    },
    {
      id: 7,
      heading: "ISO 27001 Gap Analysis",
    },

    {
      id: 8,
      heading: "System Integration",
    },
  ];

  const audits = [
    {
      id: 1,
      heading: "ITGC",
    },
    {
      id: 2,
      heading: "IT and Cyber Security",
    },
  ];
  const webdev = [
    {
      id: 1,
      heading: "E-commerce Solution",
    },
    {
      id: 2,
      heading: "Web design and development",
    },
    {
      id: 3,
      heading: "Work Flow ",
    },
  ];
  const mobapp = [
    {
      id: 1,
      heading: "Android",
    },
    {
      id: 2,
      heading: "IOS",
    },
    {
      id: 3,
      heading: "Hybrid ",
    },
  ];

  const corptrain = [
    {
      id: 1,
      heading: "HTML 5",
    },
    {
      id: 2,
      heading: "CSS",
    },
    {
      id: 3,
      heading: "Javascript",
    },
    {
      id: 4,
      heading: "ASP.NET",
    },
    {
      id: 5,
      heading: "MySQL",
    },
    {
      id: 6,
      heading: "Wordpress",
    },
    {
      id: 7,
      heading: "Webserver",
    },
  ];

  return (
    <div className="service-item">
      <h1 className="text-center">IT Services</h1>
      <br />
      <Container>
        <h2>IT Consultancy</h2>
        <br />
        <Row>
          <Col>
            <h3 className="text-center">Advisory</h3>
            <br />
            <div className="mx-auto d-block">
              <ServiceWidget service={advisory} />
            </div>
          </Col>
        </Row>
        <br />
        <br />
        <Row>
          <Col>
            <h3 className="text-center">Audits</h3>
            <br />
            <ServiceWidget service={audits} />
          </Col>
        </Row>
      </Container>

      <br />
      <br />
      <br />
      <br />

      <Container>
        <h2>Application Development</h2>
        <br />
        <Row>
          <Col>
            <h3 className="text-center">Web Application Development</h3>
            <br />
            <div className="mx-auto d-block">
              <Row>
                {webdev.map((item) => {
                  return (
                    <Col lg={4} key={item.id}>
                      <p className="service-content">
                        <span className="serial-num">{item.id}</span>
                        <h4>{item.heading}</h4>
                      </p>
                    </Col>
                  );
                })}
              </Row>
            </div>
          </Col>
        </Row>
        <br />
        <br />
        <Row>
          <Col>
            <h3 className="text-center">Mobile Applications</h3>
            <br />
            {/* <ServiceWidget service={mobapp} /> */}
            <Row>
              {mobapp.map((item) => {
                return (
                  <Col lg={4} key={item.id}>
                    <p className="service-content">
                      <span className="serial-num">{item.id}</span>
                      <h4>{item.heading}</h4>
                    </p>
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Row>
      </Container>
      <br />
      <br />
      <br />
      <br />

      <Container>
        <h2>Corporate Training</h2>
        <br />
        <Row>
          <Col>
            <h3 className="text-center">Web Development Courses</h3>
            <br />
            <div className="mx-auto d-block">
              <ServiceWidget service={corptrain} />
            </div>
          </Col>
        </Row>
        <br />
        <br />
      </Container>
    </div>
  );
}

export default ItServices;
