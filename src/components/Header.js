import React from "react";
import logo from "../assets/images/logo.png";
import tag from "../assets/images/tag.png";
import headerWallpaper from "../assets/images/wallpaper1.png";
import purpCircle from "../assets/images/purp-circle.png"

function Header() {
  return (
    <header>
      <img className="header-wallpaper" src={headerWallpaper} alt="wallpaper" />
      <div className="header-top">
        <img src={logo} alt="logo" />
        <button className="lets-talk">Let's Talk</button>
      </div>

      <div className="header-bottom">
      <img className="purp-circle" src={purpCircle} alt="purple-circle" />
        <div className="header-content">
          <h2>Have a function?</h2>
          <h2>We've got the catering covered.</h2>
          <h4 className="header-description">
            Deliciously Crafted Catering:{" "}
            <img className="tag" src={tag} alt="tag" />
            Where Every Bite Tells a Story{" "}
          </h4>
          <button className="lets-talk2 ">Let's Talk</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
