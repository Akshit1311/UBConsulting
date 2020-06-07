import React from "react";
import Header from "./Header/Header";
import PreHeader from "./Header/PreHeader/PreHeader";
import IndexPage from "./Index";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Contact from "./Contact/Contact";
import About from "./About/About";
import Services from "./Services/Services";
import Footer from "./Footer/Footer";

import "./styles.css";

function App() {
  return (
    <body>
      <div className="fixed-top">
        <PreHeader />
        <Header />
      </div>

      <div className="offset"></div>

      <Router forceRefresh>
        <Route exact path="/" component={IndexPage} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/about" component={About} />
        <Route exact path="/services" component={Services} />
      </Router>

      <Footer />
    </body>
  );
}

export default App;
