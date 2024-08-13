import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import logoWhite from "../assets/images/logo-white.png";
import whatsapp from "../assets/images/whatsapp.png";
import instagram from "../assets/images/instagram.png";
import facebook from "../assets/images/facebook.png";
import tiktok from "../assets/images/tiktok.png";

// Social media links data
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
  const [isInView, setIsInView] = useState(false);
  const footerRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Create an IntersectionObserver instance
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.1 }
    );

    const footerElement = footerRef.current; // Copy ref to local variable

    // Observe the footer element
    if (footerElement) {
      observer.observe(footerElement);
    }

    // Cleanup observer on component unmount
    return () => {
      if (footerElement) {
        observer.unobserve(footerElement);
      }
    };
  }, []);

  // Handle click event for the "Book us now" button
  const handleBookNowClick = () => navigate("/booking");

  return (
    <section id="footer" className="footer-container" ref={footerRef}>
      <div className="footer-top">
        <img className="logo-pad" src={logoWhite} alt="logo" />
        <h2 className={isInView ? "animate-h2" : ""}>Ready to spice up your event?</h2>
      </div>
      <div className="footer-flex">
        <div className="footer-middle">
          {/* Animated "Book us now" button */}
          <motion.button
            className="book-us-footer"
            onClick={handleBookNowClick}
            initial={{ scale: 1, boxShadow: "0px 0px 0px rgba(0,0,0,0)" }}
            whileHover={{ 
              scale: 1.1,
              boxShadow: "0px 8px 16px rgba(0,0,0,0.3)",
              backgroundColor: "#e63946",
              color: "#fff",
            }}
            whileTap={{ 
              scale: 0.95,
              backgroundColor: "#f1faee",
              color: "#1d3557"
            }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            Book us now
          </motion.button>
        </div>
        <div className="footer-down">
          {/* Animated WhatsApp button */}
          <motion.div
            className="whatsapp-button"
            whileHover={{ 
              scale: 1.1,
              rotate: 10,
              boxShadow: "0px 8px 16px rgba(0,0,0,0.3)"
            }}
            whileTap={{ 
              scale: 0.95,
              rotate: -5
            }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <a href="https://api.whatsapp.com/message/443CZADXNZFSK1?autoload=1&app_absent=0" target="_blank" rel="noopener noreferrer">
              <p>
                <img className="whatsapp-icon" src={whatsapp} alt="whatsapp-logo" />
                Reach us on WhatsApp
              </p>
            </a>
          </motion.div>
          {/* Social media links */}
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
