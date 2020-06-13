import React from "react";

// BS
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

// Styles
import "./banner-styles.css";

import { Link, BrowserRouter as Router } from "react-router-dom";

function Banner() {
  return (
    <div className="banner">
      <Container>
        <h1 className="banner-heading">
          UNLOCK BUSINESS <br /> <span>CONSULTING (UBC)</span>
        </h1>
        <br />
        <p className="tagline">
          "Unlock your growth potential with our solutions"
        </p>
        <Button className="question" variant="outline-light" size="lg">
          <Router forceRefresh>
            <Link className="h-link" to="/contact">
              have an enquiry ?
            </Link>
          </Router>
        </Button>
      </Container>
    </div>
  );
}

export default Banner;
