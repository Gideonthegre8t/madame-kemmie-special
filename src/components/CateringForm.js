import React, { useState } from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion

const CateringForm = ({ onSubmitSuccess }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    eventLocation: "",
    numberOfGuests: "",
    menuRequirements: "",
    additionalServices: "",
    additionalMessage: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace "YOUR_FORMSPREE_ENDPOINT" with your Formspree form's endpoint
    fetch("https://formspree.io/f/movawyze", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Form submission successful!");
          onSubmitSuccess(); // Call the onSubmitSuccess callback
        } else {
          console.log("Form submission failed...");
        }
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
      });

    // Clear the form after submission
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      eventType: "",
      eventDate: "",
      eventLocation: "",
      numberOfGuests: "",
      menuRequirements: "",
      additionalServices: "",
      additionalMessage: "",
    });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div>
          <p className="formcard-label full-name">Full Name</p>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <p className="formcard-label">Email</p>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <p className="formcard-label">Phone number</p>
          <input
            type="number"
            name="phone"
            value={formData.phone}
            placeholder="Enter number"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <p className="formcard-label">Type of Event</p>
          <input
            type="text"
            name="eventType"
            value={formData.eventType}
            onChange={handleChange}
            required
            placeholder="(Wedding, birthday etc...)"
          />
        </div>
        <div>
          <p className="formcard-label">Date of Event</p>
          <input
            type="date"
            name="eventDate"
            value={formData.eventDate}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <p className="formcard-label">Location of Event</p>
          <input
            type="text"
            name="eventLocation"
            value={formData.eventLocation}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <p className="formcard-label">Number of Guests</p>
          <input
            type="number"
            name="numberOfGuests"
            value={formData.numberOfGuests}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <p className="formcard-label">Menu Requirements</p>
          <input
            name="menuRequirements"
            value={formData.menuRequirements}
            onChange={handleChange}
            required
            placeholder="Starters, main course and dessert etc..."
          />
        </div>
        <div>
          <p className="formcard-label">Additional Services Required</p>
          <input
            name="additionalServices"
            value={formData.additionalServices}
            onChange={handleChange}
            placeholder="Cocktails, waiters, decor etc..."
          />
        </div>
        <div>
          <p className="formcard-label">Additional Message (optional)</p>
          <textarea
            name="additionalMessage"
            value={formData.additionalMessage}
            onChange={handleChange}
          />
        </div>
        <motion.button
          className="book-submit"
          type="submit"
          whileHover={{ scale: 1.05, backgroundColor: "#f0a500" }} // Slightly enlarge and change color on hover
          whileTap={{ scale: 0.95, backgroundColor: "#e07b39" }} // Slightly shrink and darken color on click
          transition={{ type: "spring", stiffness: 300, damping: 10 }} // Smooth spring transition
        >
          Submit Form
        </motion.button>
      </form>
    </div>
  );
};

export default CateringForm;
