import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header.js";
import Intro from "./components/Intro.js";
import Software from "./components/Software.js";
import Experience from "./components/Experience.js";
import Contact from "./components/Contact.js";
import Footer from "./components/Footer.js";

import "./css/style.css";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Intro />
    <Software />
    <Experience />
    <Contact />
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);
