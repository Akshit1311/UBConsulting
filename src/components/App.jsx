import React from "react";
import Header from "./Header/Header";
// import PreHeader from "./Header/PreHeader/PreHeader";
import IndexPage from "./Index";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Contact from "./Contact/Contact";
import About from "./About/About";
import Industries from "./Industries/Industries";
import Services from "./Services/Services";
import Footer from "./Footer/Footer";

import "./styles.css";

// Services
import Advisory from "./ServicePages/Advisory";
import Accounting from "./ServicePages/Accounting";
import Governance from "./ServicePages/Governance";
import Tax from "./ServicePages/Tax";
import Assurance from "./ServicePages/Assurance";
import ItServices from "./ServicePages/Itservices";
import IndustryExp from "./Industries/IndustryPages/IndustryExp";
import Startup from "./Industries/IndustryPages/Startup";
import Business from "./Industries/IndustryPages/Business";
import Taxation from "./Industries/IndustryPages/Taxation";
import Loan from "./Industries/IndustryPages/Loan";
import Outsourcing from "./Industries/IndustryPages/Outsourcing";
import Career from "./Career/Carreer";

function App() {
  return (
    <div>
      <div className="fixed-top">
        {/* <PreHeader /> */}
        <Header />
      </div>
      <div className="offset"></div>

      <Router forceRefresh>
        <Route exact path="/" component={IndexPage} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/career" component={Career} />
        <Route exact path="/about" component={About} />
        <Route exact path="/industries" component={Industries} />
        <Route exact path="/services/industry-exp" component={IndustryExp} />
        <Route exact path="/services/startup" component={Startup} />
        <Route exact path="/services/business" component={Business} />
        <Route exact path="/services/finance" component={Taxation} />
        <Route exact path="/services/loan" component={Loan} />
        <Route exact path="/services/outsourcing" component={Outsourcing} />

        <Route exact path="/services" component={Services} />
        <Route exact path="/services/advisory" component={Advisory} />
        <Route exact path="/services/accounting" component={Accounting} />
        <Route exact path="/services/governance" component={Governance} />
        <Route exact path="/services/tax" component={Tax} />
        <Route exact path="/services/assurance" component={Assurance} />
        <Route exact path="/services/itservices" component={ItServices} />
      </Router>

      <Footer />
    </div>
    // <Advisory />
  );
}

export default App;
