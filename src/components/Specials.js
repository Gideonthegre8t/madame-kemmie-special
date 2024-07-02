import React, { useContext } from "react";
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
  {
    img: spicyGrilled,
    name: "Spicy Grilled Chicken",
    rating: 4.9,
    calories: 150,
    price: 250,
  },
  {
    img: fluffyFruit,
    name: "Fluffy Fruit Pancake",
    rating: 4.9,
    calories: 150,
    price: 250,
  },
  {
    img: chocolateWhip,
    name: "Chocolate Whipcream Cake",
    rating: 4.9,
    calories: 150,
    price: 250,
  },
  {
    img: shrimpBasmati,
    name: "Shrimp Basmati Fried Rice",
    rating: 4.9,
    calories: 150,
    price: 250,
  },
  {
    img: foodTray,
    name: "Food Tray",
    rating: 4.9,
    calories: 150,
    price: 250,
  },
  {
    img: richVegetableSalad,
    name: "Rich Vegetable Salad",
    rating: 4.9,
    calories: 150,
    price: 250,
  },
  {
    img: smallChops,
    name: "Small Chops",
    rating: 4.9,
    calories: 150,
    price: 250,
  },
  {
    img: stirFriedSpag ,
    name: "Stir Fried Spaghetti",
    rating: 4.9,
    calories: 150,
    price: 250,
  },
  // Add more items as needed
];


function Specials() {
  const { addToCart } = useContext(CartContext);

  return (
    <section className="specials-container">
      <div className="specials-header">
        <h3>Our Special Catering</h3>
        <p>
          Spice up your event with our premium catering services! From intimate
          gatherings to grand celebrations, we craft delicious, customized menus
          that delight every palate. Book us today and experience the perfect
          blend of flavor and elegance!
        </p>
      </div>

      <div className="food-item-container">
        {foodItems.map((item, index) => (
          <div className="food-item-card" key={index}>
            <div className="food-item">
              <img className="item" src={item.img} alt={item.name} />
              <p className="item-name">{item.name}</p>
            </div>

            <div className="food-details">
              <div className="rating-tab">
                <p>
                  <img className="icon" src={star} alt="star" />
                  {item.rating}
                </p>
                <p>
                  <img className="icon" src={fire} alt="fire" />
                  {item.calories}Kcal
                </p>
              </div>

              <div className="price-cart">
                <p className="price">
                  <span>NGN </span>{item.price}
                </p>
                <div className="add-cart" onClick={() => addToCart(item)}>
                  <p>
                    <img className="plus-icon" src={plus} alt="plus" />
                    Add to cart
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Specials;

