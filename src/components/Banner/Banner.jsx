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
          Suitable for <span>ANY BUSINESS</span>
        </h1>
        <br />
        <Button className="question" variant="outline-light" size="lg">
          <Router forceRefresh>
            <Link to="/contact">have a question?</Link>
          </Router>
        </Button>
      </Container>
    </div>
  );
}

export default Banner;
