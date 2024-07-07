import React, { useState } from "react";
import emailjs from "emailjs-com";

const CateringForm = () => {
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

    emailjs
      .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData, "YOUR_USER_ID")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });

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
          <p className="formcard-label">Full Name</p>
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
                type="text"
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
            placeholder="Starters, main course and desert etc..."
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
        <button className="book-submit"type="submit">Submit Form</button>
      </form>
    </div>
  );
};

export default CateringForm;
