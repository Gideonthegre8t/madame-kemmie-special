import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import resturantService from "../assets/images/resturant-services.png";
import bulkOrder from "../assets/images/bulk-order.png";
import mealBowl from "../assets/images/meal-in-bowl.png";
import dailyCatering from "../assets/images/daily-office-catering.png";

const services2Items = [
  {
    img: resturantService,
    name: "Resturant services",
  },
  {
    img: bulkOrder,
    name: "Bulk order",
  },
  {
    img: mealBowl,
    name: "Meals in bowl",
  },
  {
    img: dailyCatering,
    name: "Daily office catering",
  },
];

function Services2() {
  const carouselRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 700); // Check if the screen width is less than 700px
  const [dragConstraints, setDragConstraints] = useState({ left: 0, right: 0 });

  useEffect(() => {
    const updateDragConstraints = () => {
      if (carouselRef.current && isMobile) {
        const containerWidth = carouselRef.current.offsetWidth;
        const contentWidth = carouselRef.current.scrollWidth;

        // Calculate drag constraints to ensure smooth dragging
        const rightConstraint = Math.max(contentWidth - containerWidth, 0);
        const leftConstraint = Math.max(contentWidth - containerWidth, 0);

        setDragConstraints({
          left: -rightConstraint,
          right: leftConstraint,
        });
      }
    };

    updateDragConstraints(); // Initial calculation of drag constraints
    window.addEventListener("resize", () => {
      setIsMobile(window.innerWidth < 700); // Update screen size
      updateDragConstraints();
    });

    return () => {
      window.removeEventListener("resize", () => {
        setIsMobile(window.innerWidth < 700); // Clean up listener
        updateDragConstraints();
      });
    };
  }, [isMobile]);

  return (
    <section id="services2" className="services2-container">
      <h3>Other Services</h3>
      <div className="services2-wrapper services2-carousel" ref={carouselRef}>
        {isMobile ? (
          <motion.div
            className="inner-carousel"
            drag="x"
            dragConstraints={dragConstraints}
            whileTap={{ cursor: "grabbing" }}
            dragElastic={0.1}
          >
            {services2Items.map((item, index) => (
              <motion.div
                className="services2-card"
                key={index}
                whileHover={{
                  scale: 1, // Enlarge the card slightly on hover
                  rotate: 3, // Rotate the card slightly on hover
                  boxShadow: "0px 15px 30px rgba(0,0,0,0.3)", // Add shadow on hover
                  y: -10 // Move the card up slightly on hover
                }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }} // Smooth transition for hover effects
              >
                <img className="service2-image" src={item.img} alt={item.name} />
                <p className="service2-name">{item.name}</p>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="inner-carousel">
            {services2Items.map((item, index) => (
              <motion.div
                className="services2-card"
                key={index}
                whileHover={{
                  scale: 1, // Enlarge the card slightly on hover
                  rotate: 3, // Rotate the card slightly on hover
                  boxShadow: "0px 15px 30px rgba(0,0,0,0.3)", // Add shadow on hover
                  y: -10 // Move the card up slightly on hover
                }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }} // Smooth transition for hover effects
              >
                <img className="service2-image" src={item.img} alt={item.name} />
                <p className="service2-name">{item.name}</p>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Services2;
