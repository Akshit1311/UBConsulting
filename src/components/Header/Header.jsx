import React, { useState } from "react";

// Routing
import { Link, BrowserRouter as Router } from "react-router-dom";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

// Styles
import "./header-styles.css";

// Icons
import MenuIcon from "@material-ui/icons/Menu";

// Components
// import Contact from "../Contact";

function Header() {
  const [showNav, setShowNav] = useState(true);

  function toggleNav() {
    setShowNav(!showNav);
  }

  return (
    <header>
      <Container className="header-container">
        <Row>
          <Col sm={12} lg={6} className="menu-icons">
            <h3 className="text-center logo">UBC</h3>

            <span className="hamburger ">
              <MenuIcon fontSize="large" onClick={toggleNav}>
                Toggle
              </MenuIcon>
            </span>
          </Col>

          <Col
            id="header-links"
            className={showNav ? "" : "d-none"}
            sm={12}
            lg={6}
          >
            {/* <a href="#" className="active">
              HOME
            </a> */}
            <Router forceRefresh>
              <Link to="/">HOME</Link>
              {/* <a href="#about">ABOUT</a> */}

              <Link to="/about">ABOUT</Link>
              <Link to="/services">SERVICES</Link>

              <Link to="/contact">CONTACT</Link>
            </Router>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
