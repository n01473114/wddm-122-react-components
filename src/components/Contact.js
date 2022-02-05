import React from "react";
import logo from "../img/logo.svg";

class Contact extends React.Component {
  render() {
    return (
      <section id="contact">
        <a href="https://www.twitter.com">
          <figure>
            <img
              className="logo"
              src={logo}
              title="Twitter"
              alt="Twitter Logo"
            />
          </figure>
        </a>

        <a href="https://www.instagram.com">
          <figure>
            <img
              className="logo"
              src={logo}
              title="Instagram"
              alt="Instagram Logo"
            />
          </figure>
        </a>

        <a href="mailto:myemailadress@domain.com">
          <figure>
            <img
              className="logo"
              src={logo}
              title="myemailadress@domain.com"
              alt="Email"
            />
          </figure>
        </a>

        <a href="tel:123-456-7890">
          <figure>
            <img
              className="logo"
              src={logo}
              title="123-456-7890"
              alt="Telephone"
            />
          </figure>
        </a>
      </section>
    );
  }
}

export default Contact;
