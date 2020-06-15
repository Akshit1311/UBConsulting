import React, { useState } from "react";

// Routing
import { Link, BrowserRouter as Router } from "react-router-dom";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
// import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

// Styles
import "./header-styles.css";

// Icons
import MenuIcon from "@material-ui/icons/Menu";

// Components
// import Contact from "../Contact";

import Logo from "../../images/logos/logo.png";

function Header() {
  const [showNav, setShowNav] = useState(true);

  function toggleNav() {
    setShowNav(!showNav);
  }

  return (
    <header>
      <Container className="header-container">
        <Row>
          <Col sm={12} lg={3} className="menu-icons">
            <img className="logo" alt="UBC_logo" src={Logo} />

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
            lg={9}
          >
            {/* <a href="#" className="active">
              HOME
            </a> */}
            <Router forceRefresh>
              <Link className="h-link" to="/">
                HOME
              </Link>
              {/* <a href="#about">ABOUT</a> */}

              <Link className="h-link" to="/about">
                ABOUT UBC
              </Link>
              {/* <Link className="h-link" to="/services">
                SERVICES
              </Link> */}

              <Dropdown>
                <Dropdown.Toggle variant="" id="dropdown-basic">
                  {/* Dropdown Button */}
                  <span className="h-link" to="/services">
                    SERVICES
                  </span>
                </Dropdown.Toggle>

                <Dropdown.Menu className="dropdown-con">
                  <Dropdown.Item href="#">
                    <Link
                      className="text-white drop-text"
                      to="/services/accounting"
                    >
                      Outsourcing
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item href="#">
                    <Link
                      className="text-white drop-text"
                      to="/services/assurance"
                    >
                      Assurance
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item href="#">
                    <Link
                      className="text-white drop-text"
                      to="/services/governance"
                    >
                      GRC
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item href="#">
                    <Link className="text-white drop-text" to="/services/tax">
                      Tax
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item href="#">
                    <Link
                      className="text-white drop-text"
                      to="/services/itservices"
                    >
                      IT Services
                    </Link>
                  </Dropdown.Item>

                  {/* <Dropdown.Item href="#">
                    <Link
                      className="text-white drop-text"
                      to="/services/finance"
                    >
                      Finance
                    </Link>
                  </Dropdown.Item> */}
                  {/* <Dropdown.Item href="#">
                    <Link
                      className="text-white drop-text"
                      to="/services/accounting"
                    >
                      Accounting
                    </Link>
                  </Dropdown.Item> */}
                  <Dropdown.Item href="#">
                    <Link className="text-white drop-text" to="/services/loan">
                      Loan Staffing
                    </Link>
                  </Dropdown.Item>
                  {/* <Dropdown.Item href="#">
                    <Link
                      className="text-white drop-text"
                      to="/services/outsourcing"
                    >
                      Outsourcing
                    </Link>
                  </Dropdown.Item> */}
                  <Dropdown.Item href="#">
                    <Link
                      className="text-white drop-text"
                      to="/services/startup"
                    >
                      Startup
                    </Link>
                  </Dropdown.Item>
                  {/* s */}
                  {/* <Dropdown.Item href="#">
                    <Link
                      className="text-white drop-text"
                      to="/services/advisory"
                    >
                      Other Services
                    </Link>
                  </Dropdown.Item> */}
                </Dropdown.Menu>
              </Dropdown>

              <Link className="h-link" to="/industries">
                INDUSTRIES
              </Link>
              <Link className="h-link" to="/career">
                CAREER
              </Link>
              <Link className="h-link" to="/contact">
                CONTACT US
              </Link>
            </Router>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
