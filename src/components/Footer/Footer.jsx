import React from "react";

// Styles
import "./footer-styles.css";

// BS
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Icons
// import FacebookIcon from "@material-ui/icons/Facebook";
// import TwitterIcon from "@material-ui/icons/Twitter";
// import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailIcon from "@material-ui/icons/Mail";
import PhoneIcon from "@material-ui/icons/Phone";

import "bootstrap/dist/css/bootstrap.min.css";

function Footer() {
  const date = new Date();
  const currentYear = date.getFullYear();

  const email = "info@ubconsulting.in";
  const phone = "+91 9313489918";

  return (
    <footer>
      <Container>
        <Row>
          <Col
            sm={{ span: 12, order: "first" }}
            lg={{ span: 8, order: "last" }}
          >
            {/* <div className="footer-icons"> */}
            <Row className="footer-icons">
              <Col className="text-center">
                <a className="f-link-1" href={"mailto:" + email}>
                  <MailIcon />
                  &nbsp; {email}
                  {/* &nbsp; Contact@ubc.com */}
                </a>
              </Col>
              <Col className="text-center">
                <a className="f-link-1" href={"tel:" + phone}>
                  <PhoneIcon />
                  &nbsp;{process.env.REACT_APP_PHONE_NUM}
                </a>
              </Col>
            </Row>
            {/* </div> */}
          </Col>

          <Col sm={{ span: 12 }} lg={4}>
            <div className="footer-sec">
              © Copyright {currentYear} <br />
              <span>
                Designed by &nbsp;
                <a
                  className="f-link"
                  href="https://www.webquanta.in"
                  target="_blank"
                >
                  WebQuanta
                </a>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
