import React from "react";

import Banner from "./Banner/Banner";
import Services from "./Services/Services";
import Quote from "./Quote/Quote";
import WhyUs from "./WhyUs/WhyUs";
import About from "./About/About";
function IndexPage() {
  return (
    <div>
      <Banner />
      <Services />
      <Quote />
      <WhyUs />
      <About />
    </div>
  );
}

export default IndexPage;
