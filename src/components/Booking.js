import React from "react";
import logo from "../assets/images/logo.png";
import wallpaper2 from "../assets/images/wallpaper2.png";
import wallpaper2mobile from "../assets/images/wallpaper2mobile.png";
import backIcon from "../assets/images/arrow-left.png";
import CateringForm from "./CateringForm";
import successIcon from "../assets/images/success.png";
import Footer from "./Footer";


function Booking() {
  return (
    <section className="booking-container">
      <img className="wallpaper2 desktop" src={wallpaper2} alt="wallpaper" />
      <img className="wallpaper2 mobile" src={wallpaper2mobile} alt="wallpaper" />
      <div className="booking-content">
        {" "}
        <div className="container-top">
          <img src={logo} alt="logo" />
          <button className="lets-talk">Let's Talk</button>
        </div>
        <img className="back-icon" src={backIcon} alt="backIcon" />
        <h2 className="book-header">Book us</h2>
      </div>
<div className="book-us-form "><CateringForm /> </div>
<div className="success-tab">
<img className="success-icon" src={successIcon} alt="successIcon" />
<p className="success-text">Success</p>
<p className="success-paragraph">You have successfully Booked Madame Kemmie specials, we will reaach out to you for further questions and also to let you know the total price. Thanks </p>
<p className="ok">OK</p>

</div>
    <Footer />
    </section>
  );
}

export default Booking;
