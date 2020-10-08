import React from "react";
// import ServiceWidget from "../../ServicePages/ServiceWidget";

import "../../ServicePages/service-item.css";
import Container from "react-bootstrap/Container";

function Loan() {
  return (
    <div className="service-item">
      <h1 className="text-center serv-heading">Loan Staffing</h1>
      <br />

      <Container
        style={{
          fontSize: "1.10rem",
          textAlign: "justify",
          padding: "0rem 2rem",
        }}
      >
        To meet the spike of temporary work in department or if there is a skill
        gap, loan staffing act as apt solution for meeting your requirement
        without adding headcount. <br />
        <br />
        Our team can provide you relevant profiles within defined timelines to
        address your needs w.r.t specific project like Finance/Audit support,
        Project Management Office (PMO) services, Internal Audit support, Admin
        staff etc. These are flexi-arrangements without hassle of managing
        compliances of permanent employee.
      </Container>
      <br />
    </div>
  );
}

export default Loan;
