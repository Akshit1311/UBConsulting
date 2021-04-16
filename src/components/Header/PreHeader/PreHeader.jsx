import React from "react";

// Material UI
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";

// bs
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

import "./preheader-styles.css";

function PreHeader() {
  return (
    <div className="preheader">
      <Container>
        <Row>
          <Col lg={6} className="text-center">
            <PhoneIcon />
            &nbsp;&nbsp;{process.env.REACT_APP_PHONE_NUM}
          </Col>
          <Col lg={6} className="text-center">
            <EmailIcon />
            &nbsp;&nbsp;Contact@ubc.com
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default PreHeader;
