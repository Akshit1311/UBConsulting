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
      heading: "IT Contracts ",
    },
    {
      id: 2,
      heading: "ERP Assessment",
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
      heading: "Sourcing & Supply Chain",
    },
    {
      id: 7,
      heading: "Information Securtiy Audits",
    },
    {
      id: 8,
      heading: "ITGC",
    },
    {
      id: 9,
      heading: "IT and Cyber Security",
    },

    {
      id: 10,
      heading: "System Integration",
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
    {
      id: 4,
      heading: "Android",
    },
    {
      id: 5,
      heading: "IOS",
    },
    {
      id: 6,
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
      <h1 className="text-center serv-heading">IT Services</h1>
      <br />
      <Container>
        {/* <h2>IT Consultancy</h2> */}
        <br />
        <Row>
          <Col>
            <h3 className="text-center serv-heading">Advisory</h3>
            <br />
            <div className="mx-auto d-block">
              <ServiceWidget service={advisory} />
            </div>
          </Col>
        </Row>
        <br />
        <br />
      </Container>

      <Container>
        {/* <h2>Application Development</h2> */}
        <br />
        <Row>
          <Col>
            <h3 className="text-center serv-heading">
              Web and Mobile Application Development
            </h3>
            <br />
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
      </Container>
      <br />
      <br />

      <Container>
        {/* <h2>Corporate Training</h2> */}
        <br />
        <Row>
          <Col>
            <h3 className="text-center serv-heading">Corporate Training</h3>
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
