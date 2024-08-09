import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";
import tag from "../assets/images/tag.png";
import headerWallpaper from "../assets/images/wallpaper1.png";
import headerWallpaper2 from "../assets/images/wallpaper1emobile.png";
import purpCircle from "../assets/images/purp-circle.png";
import cartIcon from "../assets/images/cartIcon.png";
import activeDot from "../assets/images/active-dot.png";
import Navbar from "./Navbar";
import { CartContext } from "./CartContext";

// Define social media links
const socialMediaLinks = {
  whatsapp: "https://wa.me/yourwhatsappnumber",
  instagram: "https://www.instagram.com/yourprofile",
  facebook: "https://www.facebook.com/yourprofile",
  phone: "tel:+yourphonenumber"
};

function Header() {
  const { cart } = useContext(CartContext); // Get cart context
  const [showTalkContainer, setShowTalkContainer] = useState(false); // State for showing/hiding the Let's Talk container
  const [activeMenu, setActiveMenu] = useState(null); // State for the active menu option
  const navigate = useNavigate(); // Navigation hook for routing

  // Handle menu click with delay
  const handleMenuClick = (menu) => {
    setActiveMenu(menu); // Set the clicked menu as active
    setTimeout(() => { // Delay the action by 1 second
      if (menu === "book-us") {
        navigate("/booking"); // Navigate to booking page if "Book us" is clicked
      } else {
        window.open(socialMediaLinks[menu], "_blank"); // Open social media link in a new tab
      }
    }, 1000); // 1000 milliseconds = 1 second
  };

  // Navigate to the cart page
  const handleCartClick = () => {
    navigate("/cart"); // Redirect to the cart page
  };

  // Calculate total items in the cart
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header id="header">
      <img className="header-wallpaper desktop" src={headerWallpaper} alt="wallpaper" />
      <img className="header-wallpaper mobile" src={headerWallpaper2} alt="wallpaper" />
      <div className="header-top">
        <img className="logo" src={logo} alt="logo" />
        <Navbar />
        <div className="cart-icon-container" onClick={handleCartClick} >
          <img
            className="cart-icon"
            src={cartIcon}
            alt="cart"
          
          />
          {totalItems > 0 && <span className="cart-counter">{totalItems}</span>} {/* Show cart counter if items are present */}
        </div>
        <div>
          <button className="lets-talk desktop" onClick={() => setShowTalkContainer(!showTalkContainer)}>
            Let's Talk {/* Toggle Let's Talk container */}
          </button>
          {showTalkContainer && (
            <div className="lets-talk-container">
              {/* Menu options */}
              <div className="talk-option-menu" onClick={() => handleMenuClick("book-us")}>
                <div className="talk-dot-container">
                  {activeMenu === "book-us" && <img className="talk-option-dot-active" src={activeDot} alt="/" />}
                  {/* Show active dot if "Book us" is active */}
                </div>
                <p>Book us</p>
              </div>
              <div className="talk-option-menu" onClick={() => handleMenuClick("whatsapp")}>
                <div className="talk-dot-container">
                  {activeMenu === "whatsapp" && <img className="talk-option-dot-active" src={activeDot} alt="/" />}
                  {/* Show active dot if "Whatsapp" is active */}
                </div>
                <p>Whatsapp</p>
              </div>
              <div className="talk-option-menu" onClick={() => handleMenuClick("instagram")}>
                <div className="talk-dot-container">
                  {activeMenu === "instagram" && <img className="talk-option-dot-active" src={activeDot} alt="/" />}
                  {/* Show active dot if "Instagram" is active */}
                </div>
                <p>Instagram</p>
              </div>
              <div className="talk-option-menu" onClick={() => handleMenuClick("facebook")}>
                <div className="talk-dot-container">
                  {activeMenu === "facebook" && <img className="talk-option-dot-active" src={activeDot} alt="/" />}
                  {/* Show active dot if "Facebook" is active */}
                </div>
                <p>Facebook</p>
              </div>
              <div className="talk-option-menu" onClick={() => handleMenuClick("phone")}>
                <div className="talk-dot-container">
                  {activeMenu === "phone" && <img className="talk-option-dot-active" src={activeDot} alt="/" />}
                  {/* Show active dot if "Phone Call" is active */}
                </div>
                <p>Phone Call</p>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="header-bottom">
        <div className="header-content">
          <img className="purp-circle" src={purpCircle} alt="purple-circle" />
          <h2>Have a function?</h2>
          <h2>We've got the catering covered.</h2>
          <h4 className="header-description">
            Deliciously Crafted Catering <img className="tag" src={tag} alt="tag" />
            Where Every Bite Tells a Story
          </h4>
          <button className="lets-talk2" onClick={() => setShowTalkContainer(!showTalkContainer)}>Let's Talk</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
