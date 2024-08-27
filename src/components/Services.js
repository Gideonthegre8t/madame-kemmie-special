import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // Import motion from framer-motion
import { Helmet } from "react-helmet-async"; // Import Helmet from react-helmet-async
import officeEvents from "../assets/images/office-events.png";
import weddingEvents from "../assets/images/wedding-events.png";
import socialEvents from "../assets/images/social-events.png";
import studentEvents from "../assets/images/student-events.png";
import birthdayParty from "../assets/images/birthday-parties.png";

// Array of event images and titles
const events = [
  { src: officeEvents, alt: "Office events", title: "Office events" },
  { src: weddingEvents, alt: "Wedding events", title: "Wedding events" },
  { src: socialEvents, alt: "All social engagements", title: "All social engagements" },
  { src: studentEvents, alt: "Student event parties", title: "Student event parties" },
  { src: birthdayParty, alt: "Birthday parties", title: "Birthday parties" },
];

function Services() {
  const navigate = useNavigate(); // Hook for navigation

  // Handle click event for the "Book us now" button
  const handleBookNowClick = () => {
    navigate("/booking"); // Redirect to the booking page
  };

  return (
    <section id="services" className="services-container">
      <Helmet>
        <title>Our Catering Services - Book Now for Your Event</title>
        <meta name="description" content="Explore our premium catering services for office events, weddings, social engagements, student parties, and birthday celebrations. Book us now for a delightful experience." />
        <meta property="og:title" content="Our Catering Services - Book Now for Your Event" />
        <meta property="og:description" content="Explore our premium catering services for various events and book us now for a delightful experience." />
        <meta property="og:url" content="https://madame-kemmie-special.vercel.app/" />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="services-top">
        <div className="services-description">
          <h2>Our services</h2>
          <p className="services-paragraph">
            Spice up your event with our premium catering services! From intimate gatherings to grand celebrations, we craft delicious, customized menus that delight every palate. Book us today and experience the perfect blend of flavor and elegance!
          </p>
          <motion.button
            className="book-us"
            onClick={handleBookNowClick}
            initial={{ scale: 1, rotate: 0, borderRadius: "0%", boxShadow: "0px 0px 0px rgba(0,0,0,0)" }} // Initial state
            whileHover={{ 
              scale: 1.1, // Scale up slightly on hover
              rotate: 10, // Rotate slightly on hover
              backgroundColor: "#e63946", // Change background color on hover
              color: "#fff", // Change text color on hover
              boxShadow: "0px 0px 10px rgba(0,0,0,0.5)" // Add shadow on hover
            }}
            whileTap={{ 
              scale: 0.9, // Scale down on click
              rotate: -10, // Rotate in the opposite direction on click
              backgroundColor: "#f1faee", // Change background color on click
              color: "#1d3557" // Change text color on click
            }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }} // Smooth spring transition
          >
            Book us now
          </motion.button>
        </div>
        <motion.div
          className="event-card event-image1" // Apply Framer Motion to event-image1
          initial={{ scale: 1, y: 0, boxShadow: "0px 0px 0px rgba(0,0,0,0)" }} // Initial state
          whileHover={{ 
            scale: 1.05, // Scale up slightly on hover
            y: -10, // Move up slightly on hover
            boxShadow: "0px 15px 30px rgba(0,0,0,0.2)" // Add shadow on hover
          }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }} // Smooth transition
        >
          <img className="event-image" src={events[0].src} alt={events[0].alt} />
          <h4 className="event-overlay">{events[0].title}</h4>
        </motion.div>
      </div>

      <div className="services-bottom">
        {events.slice(1).map((event, index) => (
          <motion.div
            className="event-card" // Apply Framer Motion to event cards
            key={index}
            initial={{ scale: 1, y: 0, boxShadow: "0px 0px 0px rgba(0,0,0,0)" }} // Initial state
            whileHover={{ 
              scale: 1.05, // Scale up slightly on hover
              y: -10, // Move up slightly on hover
              boxShadow: "0px 15px 30px rgba(0,0,0,0.2)" // Add shadow on hover
            }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }} // Smooth transition
          >
            <img className="event-image" src={event.src} alt={event.alt} />
            <h4 className="event-overlay">{event.title}</h4>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Services;
