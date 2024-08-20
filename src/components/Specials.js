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
  { img: spicyGrilled, name: "Spicy Grilled Chicken", rating: 4.9, calories: 150, price: 12000 },
  { img: fluffyFruit, name: "Fluffy Fruit Pancake", rating: 4.9, calories: 150, price: 7500 },
  { img: chocolateWhip, name: "Chocolate Whipcream Cake", rating: 4.9, calories: 150, price: 45000 },
  { img: shrimpBasmati, name: "Shrimp Basmati Fried Rice", rating: 4.9, calories: 150, price: 6500 },
  { img: foodTray, name: "Food Tray", rating: 4.9, calories: 150, price: 85000 },
  { img: richVegetableSalad, name: "Rich Vegetable Salad", rating: 4.9, calories: 150, price: 8000 },
  { img: smallChops, name: "Small Chops", rating: 4.9, calories: 150, price: 11000 },
  { img: stirFriedSpag, name: "Stir Fried Spaghetti", rating: 4.9, calories: 150, price: 7500 },
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

        // Calculate constraints
        const leftConstraint = 0; // No left constraint (dragging to start)
        const rightConstraint = contentWidth - containerWidth; // Right constraint to prevent dragging beyond end

        setDragConstraints({
          left: leftConstraint-rightConstraint, // Allow dragging to the start
          right: +rightConstraint // Prevent dragging beyond the end
        });
      }
    };

    updateDragConstraints(); // Initial calculation of drag constraints
    const resizeObserver = new ResizeObserver(updateDragConstraints);
    resizeObserver.observe(carouselRef.current); // Observe changes in the carousel container

    return () => resizeObserver.disconnect(); // Clean up observer
  }, []); // No need to include foodItems here

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
          drag="x"
          dragConstraints={dragConstraints}
          whileTap={{ cursor: "grabbing" }}
        >
          {foodItems.length > 0 ? (
            foodItems.map((item, index) => (
              <motion.div
                className="food-item-card"
                key={index}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "15px 15px 30px rgba(0,0,0,0.2)",
                  y: -10
                }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
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
                      onClick={() => addToCart(item)}
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: "#e63946",
                        color: "#fff",
                        boxShadow: "0px 5px 15px rgba(0,0,0,0.3)"
                      }}
                      whileTap={{
                        scale: 0.95,
                        backgroundColor: "#f1faee",
                        color: "#1d3557"
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    >
                      <p>
                        <img className="plus-icon" src={plus} alt="plus" />
                        Add to cart
                      </p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <p>No specials available at the moment.</p>
          )}
        </motion.div>
      </div>
    </section>
  );
}

export default Specials;
