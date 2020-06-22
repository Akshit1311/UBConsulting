import React from "react";

// Styles
import "./notfound.css";
import Button from "react-bootstrap/Button";
import { Link, BrowserRouter as Router } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="not-found-container ">
      <div className="not-found-outer">
        <div className="not-found-box">
          <h1>404</h1>
          <h4>Page Not Found. . .</h4>
          <br />
        </div>
      </div>
      <br />
      <Router forceRefresh>
        <Link to="/">
          <Button className="home-btn" variant="dark" size="lg">
            Back to Home Page
          </Button>
        </Link>
      </Router>
    </div>
  );
}

export default PageNotFound;
