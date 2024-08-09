import React from "react";
import { useNavigate } from "react-router-dom";
import officeEvents from "../assets/images/office-events.png";
import weddingEvents from "../assets/images/wedding-events.png";
import socialEvents from "../assets/images/social-events.png";
import studentEvents from "../assets/images/student-events.png";
import birthdayParty from "../assets/images/birthday-parties.png";

const events = [
  { src: officeEvents, alt: "Office events", title: "Office events" },
  { src: weddingEvents, alt: "Wedding events", title: "Wedding events" },
  { src: socialEvents, alt: "All social engagements", title: "All social engagements" },
  { src: studentEvents, alt: "Student event parties", title: "Student event parties" },
  { src: birthdayParty, alt: "Birthday parties", title: "Birthday parties" },
];

function Services() {
  const navigate = useNavigate(); // Navigation hook for routing

  // Handle click event for the "Book us now" button
  const handleBookNowClick = () => {
    navigate("/booking"); // Redirect to the booking page immediately
  };

  return (
    <section id="services" className="services-container">
      <div className="services-top">
        <div className="services-description">
          <h3>Our services</h3>
          <p className="services-paragraph">
            Spice up your event with our premium catering services! From intimate gatherings to grand celebrations, we craft delicious, customized menus that delight every palate. Book us today and experience the perfect blend of flavor and elegance!
          </p>
          <button className="book-us" onClick={handleBookNowClick}>Book us now</button>
        </div>
        <div className="event-card event-image1">
          <img className="event-image" src={events[0].src} alt={events[0].alt} />
          <h4 className="event-overlay">{events[0].title}</h4>
        </div>
      </div>

      <div className="services-bottom">
        {events.slice(1).map((event, index) => (
          <div className="event-card" key={index}>
            <img className="event-image" src={event.src} alt={event.alt} />
            <h4 className="event-overlay">{event.title}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
