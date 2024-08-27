import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async"; // Import Helmet from react-helmet-async
import logo from "../assets/images/logo.png";
import wallpaper2 from "../assets/images/wallpaper2.png";
import wallpaper2mobile from "../assets/images/wallpaper2mobile.png";
import backIcon from "../assets/images/arrow-left.png";
import CateringForm from "./CateringForm";
import successIcon from "../assets/images/success.png";
import Footer from "./Footer";

function Booking() {
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleBackClick = () => {
    navigate("/");
  };

  const handleLogoClick = () => {
    navigate("/");
  };

  const handleFormSubmitSuccess = () => {
    setIsSubmitted(true);
  };

  const handleOkClick = () => {
    navigate("/");
  };

  return (
    <section id="booking" className="booking-container">
      <Helmet>
        <title>Booking - Madame Kemmie Special</title>
        <meta name="description" content="Book Madame Kemmie’s catering services. Fill out the form to schedule your event and get in touch with us for further details and pricing." />
        <meta name="keywords" content="catering booking, Madame Kemmie, event catering, book catering services" />
        <meta property="og:title" content="Booking - Madame Kemmie Special" />
        <meta property="og:description" content="Book Madame Kemmie’s catering services. Fill out the form to schedule your event and get in touch with us for further details and pricing." />
        <meta property="og:image" content="URL_TO_AN_IMAGE_REPRESENTING_THE_BOOKING_PAGE" />
        <meta property="og:url" content="URL_TO_THE_BOOKING_PAGE" />
        <meta property="og:type" content="website" />
      </Helmet>
      <img className="wallpaper2 desktop" src={wallpaper2} alt="wallpaper" />
      <img className="wallpaper2 mobile" src={wallpaper2mobile} alt="wallpaper" />
      <div className="booking-content">
        <div className="container-top">
          <img src={logo} alt="logo" onClick={handleLogoClick} />
        </div>
        <img className="back-icon" src={backIcon} alt="backIcon" onClick={handleBackClick} />
        <h2 className="book-header">Book us</h2>
      </div>
      {!isSubmitted ? (
        <div className="book-us-form">
          <CateringForm onSubmitSuccess={handleFormSubmitSuccess} />
        </div>
      ) : (
        <div className="success-tab">
          <img className="success-icon" src={successIcon} alt="successIcon" />
          <p className="success-text">Success</p>
          <p className="success-paragraph">
            You have successfully booked Madame Kemmie specials, we will reach out to you for further questions and also to let you know the total price. Thanks
          </p>
          <p className="ok" onClick={handleOkClick}>OK</p>
        </div>
      )}
      <Footer />
    </section>
  );
}

export default Booking;
