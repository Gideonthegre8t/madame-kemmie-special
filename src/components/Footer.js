import React from "react";
import logoWhite from "../assets/images/logo-white.png";
import whatsapp from "../assets/images/whatsapp.png";
import instagram from "../assets/images/instagram.png";
import facebook from "../assets/images/facebook.png";

import tiktok from "../assets/images/tiktok.png";

function Footer() {
  return (
    <section className="footer-container">
      <div className="footer-top">
        <img className="logo-pad" src={logoWhite} alt="logo" />
        <h2>Ready to spice up your event? </h2>
      </div>
      <div className="footer-flex">
        {" "}
        <div className="footer-middle">
          <button className="book-us">Book us now</button>
          <p>About us</p>
        </div>
        <div className="footer-down">
          <div className="whatsapp-button">
            <p>
              <img
                className="whatsapp-icon"
                src={whatsapp}
                alt="whatsapp-logo"
              />
              Reach us on whatsapp
            </p>
          </div>
          <p>
            <img className="handle-icon" src={facebook} alt="whatsapp-logo" />
            Kemi Oluwole
          </p>
          <p>
            <img className="handle-icon" src={instagram} alt="whatsapp-logo" />
            madamekemmiespecial
          </p>
          <p>
            <img className="handle-icon" src={tiktok} alt="whatsapp-logo" />
            madamekemmiespecial
          </p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
