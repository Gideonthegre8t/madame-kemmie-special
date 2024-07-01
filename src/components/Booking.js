import React from "react";
import logo from "../assets/images/logo.png";
import wallpaper2 from "../assets/images/wallpaper2.png";
import backIcon from "../assets/images/arrow-left.png";
import CateringForm from "./CateringForm";
import Footer from "./Footer";


function Booking() {
  return (
    <section className="booking-container">
      <img className="wallpaper2" src={wallpaper2} alt="wallpaper" />
      <div className="booking-content">
        {" "}
        <div className="container-top">
          <img src={logo} alt="logo" />
          <button className="lets-talk">Let's Talk</button>
        </div>
        <img className="back-icon" src={backIcon} alt="backIcon" />
        <h2 className="book-header">Book us</h2>
      </div>
<div className="book-us-form"><CateringForm /> </div>

    <Footer />
    </section>
  );
}

export default Booking;
