import React, { useContext, useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CartContext } from "./CartContext";
import spicyGrilled from "../assets/images/spicy-grilled-chicken.png";
import star from "../assets/images/star.png";
import fire from "../assets/images/fire.png";
import plus from "../assets/images/plus.png";
import fluffyFruit from "../assets/images/fluffy-fruit.png";
import chocolateWhip from "../assets/images/chocolate-cake.png";
import shrimpBasmati from "../assets/images/shrimp-basmati-rice.png";
import foodTray from "../assets/images/food-tray.png";
import richVegetableSalad from "../assets/images/rich-vegetable-salad.png";
import smallChops from "../assets/images/small-chops.png";
import stirFriedSpag from "../assets/images/stir-fried-spaghetti.png";

const foodItems = [
  { img: spicyGrilled, name: "Spicy Grilled Chicken", rating: 4.9, calories: 150, price: 250 },
  { img: fluffyFruit, name: "Fluffy Fruit Pancake", rating: 4.9, calories: 150, price: 250 },
  { img: chocolateWhip, name: "Chocolate Whipcream Cake", rating: 4.9, calories: 150, price: 250 },
  { img: shrimpBasmati, name: "Shrimp Basmati Fried Rice", rating: 4.9, calories: 150, price: 250 },
  { img: foodTray, name: "Food Tray", rating: 4.9, calories: 150, price: 250 },
  { img: richVegetableSalad, name: "Rich Vegetable Salad", rating: 4.9, calories: 150, price: 250 },
  { img: smallChops, name: "Small Chops", rating: 4.9, calories: 150, price: 250 },
  { img: stirFriedSpag, name: "Stir Fried Spaghetti", rating: 4.9, calories: 150, price: 250 },
];

function Specials() {
  const { addToCart } = useContext(CartContext); // Access addToCart function from CartContext
  const carouselRef = useRef(null); // Ref for carousel container
  const [dragConstraints, setDragConstraints] = useState({ left: 0, right: 0 }); // State for drag constraints

  useEffect(() => {
    const updateDragConstraints = () => {
      if (carouselRef.current) {
        const containerWidth = carouselRef.current.offsetWidth;
        const contentWidth = carouselRef.current.scrollWidth;

        // Calculate right constraint to allow scrolling to the end
        const rightConstraint = contentWidth - containerWidth;
        
        // Set constraints to ensure smooth scrolling to the start and end
        setDragConstraints({
          left: -rightConstraint, // Allow dragging to the start
          right: +rightConstraint // Allow dragging to the end
        });
      }
    };

    updateDragConstraints(); // Initial calculation of drag constraints
    window.addEventListener('resize', updateDragConstraints); // Update constraints on window resize

    return () => window.removeEventListener('resize', updateDragConstraints); // Clean up listener
  }, []);

  return (
    <section id="specials" className="specials-container">
      <div className="specials-header">
        <h3>Our Special Catering</h3>
        <p>
          Spice up your event with our premium catering services! From intimate
          gatherings to grand celebrations, we craft delicious, customized menus
          that delight every palate. Book us today and experience the perfect
          blend of flavor and elegance!
        </p>
      </div>
      <div className="carousel" ref={carouselRef}>
        <motion.div
          className="food-item-container"
          drag="x" // Enable horizontal dragging
          dragConstraints={dragConstraints} // Apply drag constraints
          whileTap={{ cursor: "grabbing" }} // Change cursor on drag
        >
          {foodItems.map((item, index) => (
            <motion.div
              className="food-item-card"
              key={index}
              whileHover={{
                scale: 1.05, // Slightly enlarge the card on hover
                boxShadow: "15px 15px 30px rgba(0,0,0,0.2)", // Add shadow on hover
                y: -10 // Move the card up slightly on hover
              }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }} // Smooth transition for hover effect
            >
              <div className="food-item">
                <img className="item" src={item.img} alt={item.name} />
                <p className="item-name">{item.name}</p>
              </div>

              <div className="food-details">
                <div className="rating-tab">
                  <p>
                    <img className="rating-icon" src={star} alt="star" />
                    {item.rating}
                  </p>
                  <p>
                    <img className="rating-icon" src={fire} alt="fire" />
                    {item.calories}Kcal
                  </p>
                </div>

                <div className="price-cart">
                  <p className="price">
                    <span>NGN </span>{item.price}
                  </p>
                  <motion.div
                    className="add-cart"
                    onClick={() => addToCart(item)} // Add item to cart on click
                    whileHover={{
                      scale: 2, // Slightly enlarge button on hover
                      backgroundColor: "#e63946", // Change background color on hover
                      color: "#fff", // Change text color on hover
                      boxShadow: "0px 5px 15px rgba(0,0,0,0.3)" // Add shadow on hover
                    }}
                    whileTap={{
                      scale: 2, // Slightly shrink button on click
                      backgroundColor: "#f1faee", // Change background color on click
                      color: "#1d3557" // Change text color on click
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }} // Smooth transition for button effects
                  >
                    <p>
                      <img className="plus-icon" src={plus} alt="plus" />
                      Add to cart
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Specials;
