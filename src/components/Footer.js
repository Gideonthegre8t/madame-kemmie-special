import React from "react";
import { useNavigate } from "react-router-dom";
import logoWhite from "../assets/images/logo-white.png";
import whatsapp from "../assets/images/whatsapp.png";
import instagram from "../assets/images/instagram.png";
import facebook from "../assets/images/facebook.png";
import tiktok from "../assets/images/tiktok.png";

const socialLinks = [
  {
    href: "https://www.facebook.com/100065239971038/posts/1207313149682268/",
    imgSrc: facebook,
    alt: "facebook-logo",
    text: "Kemi Oluwole",
  },
  {
    href: "https://www.instagram.com/madamekemmiespecial?igsh=MTBwNGZpbnJkNXJ3cw==",
    imgSrc: instagram,
    alt: "instagram-logo",
    text: "madamekemmiespecial",
  },
  {
    href: "https://www.tiktok.com/@madamkemmiespecial?_t=8ooBdXNfiOz&_r=1",
    imgSrc: tiktok,
    alt: "tiktok-logo",
    text: "madamekemmiespecial",
  }
];

function Footer() {
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Handle click event for the "Book us now" button
  const handleBookNowClick = () => {
    navigate("/booking"); // Redirect to the booking page
  };

  return (
    <section id="footer" className="footer-container">
      <div className="footer-top">
        <img className="logo-pad" src={logoWhite} alt="logo" />
        <h2>Ready to spice up your event? </h2>
      </div>
      <div className="footer-flex">
        <div className="footer-middle">

          <button className="book-us-footer" onClick={handleBookNowClick}>Book us now</button>
        
        </div>
        <div className="footer-down">
          {/* Special WhatsApp button */}
          <div className="whatsapp-button">
            <a href="https://api.whatsapp.com/message/443CZADXNZFSK1?autoload=1&app_absent=0" target="_blank" rel="noopener noreferrer">
              <p>
                <img className="whatsapp-icon" src={whatsapp} alt="whatsapp-logo" />
                Reach us on WhatsApp
              </p>
            </a>
          </div>
          {/* Map through the rest of the social links */}
          {socialLinks.map((link, index) => (
            <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" className="social-link">
              <p>
                <img className="handle-icon" src={link.imgSrc} alt={link.alt} />
                {link.text}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Footer;
