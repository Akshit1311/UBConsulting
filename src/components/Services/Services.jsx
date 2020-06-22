import React from "react";
import ServicesContent from "./ServicesContent";
import SectionHeader from "./SectionHeader";

// BS
import Container from "react-bootstrap/Container";

function Services() {
  return (
    <Container id="services">
      <SectionHeader
        preheading="OUR"
        heading="SERVICES"
        description="Our experts are passionate in servicing global and domestic clients and truly believe in developing tailor-made solutions for unique challenges. Blueprint of our services is mentioned below: "
      />
      <ServicesContent />
    </Container>
  );
}

export default Services;
