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
          description="Our team at UBC has experience in serving diverse sectors below and leverage learnings across sectors. We update our sector knowledge-base on a periodic basis to provide expert solutions which are 'tried and tested' "
        />

        {/* <br /> */}
      </Container>
      <IndustryExp />
    </div>
  );
}

export default Industries;
