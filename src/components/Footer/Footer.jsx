import React from "react";

// Styles
import "./footer-styles.css";

// BS
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Icons
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailIcon from "@material-ui/icons/Mail";
import PhoneIcon from "@material-ui/icons/Phone";

import "bootstrap/dist/css/bootstrap.min.css";

function Footer() {
  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <footer>
      <Container>
        <Row>
          <Col sm={12} lg={4}>
            <div className="footer-icons">
              <FacebookIcon className="footer-icon" fontSize="large" />
              <TwitterIcon className="footer-icon" fontSize="large" />
              <LinkedInIcon className="footer-icon" fontSize="large" />
            </div>
          </Col>

          <Col
            sm={{ span: 12, order: "first" }}
            lg={{ span: 4, order: "last" }}
          >
            <div className="footer-icons">
              <Col>
                <h5>Contact US:</h5>
                <br />
                <MailIcon />
                &nbsp; Contact@ubc.com
                <br />
                <br />
                <PhoneIcon />
                &nbsp; 9313489918
              </Col>
            </div>
          </Col>

          <Col sm={{ span: 12 }} lg={4}>
            <div className="footer-icons">© Copyright UBC {currentYear}</div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
