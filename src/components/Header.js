import React, { useContext } from "react";
import logo from "../assets/images/logo.png";
import tag from "../assets/images/tag.png";
import headerWallpaper from "../assets/images/wallpaper1.png";
import headerWallpaper2 from "../assets/images/wallpaper1emobile.png";
import purpCircle from "../assets/images/purp-circle.png";
import cartIcon from "../assets/images/cartIcon.png"; // Add your cart icon image
import { CartContext } from "./CartContext";

function Header() {
  const { cart } = useContext(CartContext);

  // Calculate the total number of items in the cart
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header>
      <img className="header-wallpaper desktop" src={headerWallpaper} alt="wallpaper" />
      <img className="header-wallpaper mobile" src={headerWallpaper2} alt="wallpaper" />
      <div className="header-top">
        <img className="logo" src={logo} alt="logo" />
        <div className="cart-icon-container">
          <img className="cart-icon" src={cartIcon} alt="cart" />
          {totalItems > 0 && <span className="cart-counter">{totalItems}</span>}
        </div>
        <button className="lets-talk desktop">Let's Talk</button>
      </div>

      <div className="header-bottom">
        <div className="header-content">
        <img className="purp-circle" src={purpCircle} alt="purple-circle" />
          <h2>Have a function?</h2>
          <h2>We've got the catering covered.</h2>
          <h4 className="header-description">
            Deliciously Crafted Catering{" "}
            <img className="tag" src={tag} alt="tag" />
            Where Every Bite Tells a Story{" "}
          </h4>
          <button className="lets-talk2">Let's Talk</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
