import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/images/logo.png";
import tag from "../assets/images/tag.png";
import headerWallpaper from "../assets/images/wallpaper1.png";
import headerWallpaper2 from "../assets/images/wallpaper1emobile.png";
import purpCircle from "../assets/images/purp-circle.png";
import cartIcon from "../assets/images/cartIcon.png";
import activeDot from "../assets/images/active-dot.png";
import Navbar from "./Navbar";
import { CartContext } from "./CartContext";
import BackToTopText from "./BackToTopText";
import Ring from "../assets/images/ring.png";
import { Helmet } from "react-helmet-async"; // Import from react-helmet-async

const socialMediaLinks = {
  whatsapp: "https://api.whatsapp.com/message/443CZADXNZFSK1?autoload=1&app_absent=0",
  instagram: "https://www.instagram.com/madamekemmiespecial?igshid=MTBwNGZpbnJkNXJ3cw==",
  facebook: "https://www.facebook.com/100065239971038/posts/1207313149682268/",
};

const Header = () => {
  const { cart } = useContext(CartContext);
  const [showTalkContainer, setShowTalkContainer] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const navigate = useNavigate();

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
    setTimeout(() => {
      if (menu === "book-us") {
        navigate("/booking");
      } else {
        window.open(socialMediaLinks[menu], "_blank");
      }
    }, 1000);
  };

  const handleCartClick = () => {
    navigate("/cart");
  };

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header id="header">
      <Helmet>
        <title>Madame Kemmie Special | Our Delicious Offers</title>
        <meta name="description" content="Professional catering services for events, offering a variety of delicious dishes for any occasion." />
        <meta property="og:title" content="Madame Kemmie Special | Our Delicious Offers" />
        <meta property="og:description" content="Explore our special catering offers including spicy grilled chicken, fluffy fruit pancakes, and more. Perfect for any event!" />
        <meta property="og:url" content="https://madame-kemmie-special.vercel.app/" /> {/* Corrected canonical URL */}
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://madame-kemmie-special.vercel.app/" /> {/* Corrected canonical URL */}
      </Helmet>

      {/* Your existing header content */}
      <img className="header-wallpaper desktop" src={headerWallpaper} alt="wallpaper" />
      <img className="header-wallpaper mobile" src={headerWallpaper2} alt="wallpaper" />
      <div className="header-top">
        <motion.img
          className="logo"
          src={logo}
          alt="logo"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 1 }}
        />
        <Navbar />
        <motion.div
          className="cart-icon-container"
          onClick={handleCartClick}
          whileHover={{ scale: 1.1, rotate: 15 }}
          whileTap={{ scale: 0.9, rotate: -15 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img className="cart-icon" src={cartIcon} alt="cart" />
          {totalItems > 0 && <span className="cart-counter">{totalItems}</span>}
        </motion.div>
        <div>
          <motion.button
            className="lets-talk desktop"
            onClick={() => setShowTalkContainer(!showTalkContainer)}
            whileHover={{ scale: 1.1, color: "#fff" }}
            whileTap={{ scale: 0.9, backgroundColor: "#f1faee", color: "#1d3557" }}
            transition={{ duration: 0.3 }}
          >
            Let's Talk
          </motion.button>
          {showTalkContainer && (
            <div className="lets-talk-container">
              <div className="talk-option-menu" onClick={() => handleMenuClick("book-us")}>
                <div className="talk-dot-container">
                  {activeMenu === "book-us" && <img className="talk-option-dot-active" src={activeDot} alt="/" />}
                </div>
                <p>Book us</p>
              </div>
              <div className="talk-option-menu" onClick={() => handleMenuClick("whatsapp")}>
                <div className="talk-dot-container">
                  {activeMenu === "whatsapp" && <img className="talk-option-dot-active" src={activeDot} alt="/" />}
                </div>
                <p>Whatsapp</p>
              </div>
              <div className="talk-option-menu" onClick={() => handleMenuClick("instagram")}>
                <div className="talk-dot-container">
                  {activeMenu === "instagram" && <img className="talk-option-dot-active" src={activeDot} alt="/" />}
                </div>
                <p>Instagram</p>
              </div>
              <div className="talk-option-menu" onClick={() => handleMenuClick("facebook")}>
                <div className="talk-dot-container">
                  {activeMenu === "facebook" && <img className="talk-option-dot-active" src={activeDot} alt="/" />}
                </div>
                <p>Facebook</p>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="header-bottom">
        <div className="header-content">
          <img className="purp-circle" src={purpCircle} alt="purple-circle" />
          <h1>Have a function?We've got the catering covered.</h1>
      
          <p className="header-description">
            Deliciously Crafted Catering <img className="tag" src={tag} alt="tag" />
            Where Every Bite Tells a Story
          </p>
          <motion.button
            className="lets-talk2"
            onClick={() => setShowTalkContainer(!showTalkContainer)}
            whileHover={{ scale: 1.1, backgroundColor: "#F7A134", color: "#fff" }}
            whileTap={{ scale: 0.9, backgroundColor: "#f1faee", color: "#1d3557" }}
            transition={{ duration: 0.3 }}
          >
            Let's Talk
          </motion.button>
          <div className="ring-container">
            <img className="ring" src={Ring} alt="/" />
          </div>
        </div>
      </div>
      <div><BackToTopText /></div>
    </header>
  );
};

export default Header;
