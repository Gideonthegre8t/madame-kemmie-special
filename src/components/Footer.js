import React from "react";
import { useNavigate } from "react-router-dom";
import logoWhite from "../assets/images/logo-white.png";
import whatsapp from "../assets/images/whatsapp.png";
import instagram from "../assets/images/instagram.png";
import facebook from "../assets/images/facebook.png";
import tiktok from "../assets/images/tiktok.png";

const socialLinks = [
  {
    href: "https://www.facebook.com/your-facebook-profile",
    imgSrc: facebook,
    alt: "facebook-logo",
    text: "Kemi Oluwole",
  },
  {
    href: "https://www.instagram.com/your-instagram-profile",
    imgSrc: instagram,
    alt: "instagram-logo",
    text: "madamekemmiespecial",
  },
  {
    href: "https://www.tiktok.com/@your-tiktok-profile",
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
          {/* Add onClick handler to the "Book us now" button */}
          <button className="book-us-footer" onClick={handleBookNowClick}>Book us now</button>
        
        </div>
        <div className="footer-down">
          {/* Special WhatsApp button */}
          <div className="whatsapp-button">
            <a href="https://wa.me/your-whatsapp-number" target="_blank" rel="noopener noreferrer">
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
