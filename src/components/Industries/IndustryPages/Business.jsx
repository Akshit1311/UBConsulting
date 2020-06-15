import React from "react";
import ServiceWidget from "../../ServicePages/ServiceWidget";

import "../../ServicePages/service-item.css";

function Business() {
  const business = [];

  return (
    <div className="service-item">
      <h1 className="text-center">Business</h1>
      <br />

      <ServiceWidget service={business} />
    </div>
  );
}

export default Business;
