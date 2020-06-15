import React from "react";
// import Services from "./Services";

// import Card from "./Card/Card";
// import Card from "../Services/Card/Card";

// BS
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

// images

// import Tax from "../../images/services/tax.jpg";

// linking
// import { BrowserRouter as Router, Link } from "react-router-dom";
import SectionHeader from "../Services/SectionHeader";
import IndustryExp from "./IndustryPages/IndustryExp";

function Industries() {
  return (
    <div>
      <Container>
        <SectionHeader
          preheading=""
          heading="INDUSTRIES"
          description="UBC is truly an Indian Consulting firm with global ambition, having
strong team of 100+ professionals with diverse skills, having proven
capabilities of solving complex challenges of the clients."
        />

        <br />
      </Container>
      <IndustryExp />
    </div>
  );
}

export default Industries;
