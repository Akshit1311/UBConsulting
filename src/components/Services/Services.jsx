import React from "react";
import ServicesContent from "./ServicesContent";
import SectionHeader from "./SectionHeader";

// BS
import Container from "react-bootstrap/Container";

function Services() {
  return (
    <Container id="services">
      <SectionHeader
        preheading="WE OFFER"
        heading="DIFFERENT SERVICES"
        description="UBC is truly an Indian Consulting firm with global ambition, having
strong team of 100+ professionals with diverse skills, having proven
capabilities of solving complex challenges of the clients."
      />
      <ServicesContent />
    </Container>
  );
}

export default Services;
