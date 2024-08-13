import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "./CartContext";
import { useTransaction } from "./TransactionContext";
import logo from "../assets/images/logo.png";
import wallpaper2 from "../assets/images/wallpaper2.png";
import backIcon from "../assets/images/arrow-left.png";
import trash from "../assets/images/trash.png";
import Footer from "./Footer";
import nothingHere from "../assets/images/nothing-here.png";
import questionMark from "../assets/images/question-mark.png";
import successIcon from "../assets/images/success.png";
import { motion } from "framer-motion";

const Cart = () => {
  const navigate = useNavigate();
  const { cart, updateQuantity, removeFromCart, clearCart } = useContext(CartContext);
  const { setHasUnprocessedTransaction } = useTransaction();

  const [formData, setFormData] = useState({
    phoneNumber: "",
    deliveryDate: "",
    address: ""
  });
  const [isCheckoutSuccessful, setIsCheckoutSuccessful] = useState(false);

  useEffect(() => {
    if (cart.length > 0) {
      setHasUnprocessedTransaction(true);
    } else {
      setHasUnprocessedTransaction(false);
    }

    return () => {
      setHasUnprocessedTransaction(false);
    };
  }, [cart, setHasUnprocessedTransaction]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleCheckout = async (e) => {
    e.preventDefault();
    
    const items = cart.map(item => ({
      name: item.name,
      price: item.price,
      quantity: item.quantity
    }));

    try {
      const response = await fetch("https://formspree.io/f/movawyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ...formData,
          totalAmount: cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
          items
        })
      });

      if (response.ok) {
        console.log("Form submission successful!");
        setIsCheckoutSuccessful(true);
        clearCart();
      } else {
        console.log("Form submission failed...");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleBackClick = () => {
    navigate("/");
  };

  const handleOkClick = () => {
    navigate("/");
  };

  return (
    <section id="cart" className="cart-container">
      <img className="wallpaper2" src={wallpaper2} alt="wallpaper" />
      <div className="container-top">
        <img src={logo} alt="logo" />
      </div>
      <img
        className="back-icon"
        src={backIcon}
        alt="backIcon"
        onClick={handleBackClick}
      />
      <h2 className="book-header">Cart</h2>
      {isCheckoutSuccessful ? (
        <div className="success-tab">
          <img className="success-icon" src={successIcon} alt="successIcon" />
          <p className="success-text">Success</p>
          <p className="success-paragraph">
            You have successfully ordered Madame Kemmie specials. We will reach out to you for further questions. You will get your food as soon as possible. Thanks.
          </p>
          <p className="ok" onClick={handleOkClick}>OK</p>
        </div>
      ) : cart.length > 0 ? (
        <form onSubmit={handleCheckout} className="cart-flex">
          <div className="cart-list">
            <div className="cart-card">
              <div className="cart-detail">
                <p>Product</p>
                <p>Quantity</p>
                <p>Price</p>
                <p>Total</p>
              </div>
              {cart.map((item, index) => (
                <div className="product-flex" key={index}>
                  <div className="product-details">
                    <div className="product">
                      <img className="cart-image" src={item.img} alt={item.name} />
                      <p>{item.name}</p>
                    </div>
                    <div className="quantity">
                      <p className="subtract" onClick={() => updateQuantity(item.name, item.quantity - 1)}>-</p>
                      <div className="quantity-box">
                        <p>{item.quantity}</p>
                      </div>
                      <p className="addition" onClick={() => updateQuantity(item.name, item.quantity + 1)}>+</p>
                    </div>
                    <div className="price">
                      <p>N{item.price}</p>
                    </div>
                    <div className="total">
                      <p>N {item.price * item.quantity}</p>
                    </div>
                    <div className="trash-box">
                      <img
                        className="trash"
                        src={trash}
                        alt="trash"
                        onClick={() => removeFromCart(item.name)}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="total-card">
            <h4>Total</h4>
            <div className="total-details">
              <div className="price-total">
                <p>Subtotal</p>
                <p className="total-figure">
                  NGN {cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}
                </p>
              </div>
              <div className="delivery-tab">
                <p>Delivery Address</p>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Enter delivery address"
                  required
                />
              </div>
              <div className="phone-tab">
                <p>Phone number</p>
                <input
                  type="text"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="Enter number"
                  required
                />
              </div>
              <div className="delivery-tab">
                <p>Date of delivery</p>
                <input
                  type="date"
                  name="deliveryDate"
                  value={formData.deliveryDate}
                  onChange={handleChange}
                  required
                />
              </div>
              <motion.button
                className="checkout"
                type="submit"
                whileHover={{ scale: 1.1, backgroundColor: "#e63946", color: "#fff" }}
                whileTap={{ scale: 0.95, backgroundColor: "#d62839" }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                Checkout
              </motion.button>
            </div>
          </div>
        </form>
      ) : (
        <div className="nothing-card">
          <div className="nothing-wrapper">
            <h4>Nothing in here</h4>
            <p>Your cart is currently empty</p>
            <div className="nothing-image">
              <img className="nothing-here" src={nothingHere} alt="nothing-here" />
              <img className="question-mark" src={questionMark} alt="question-mark" />
            </div>
          </div>
        </div>
      )}
      <Footer />
    </section>
  );
};

export default Cart;
