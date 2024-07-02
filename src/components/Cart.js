import React, { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import logo from "../assets/images/logo.png";
import wallpaper2 from "../assets/images/wallpaper2.png";
import backIcon from "../assets/images/arrow-left.png";
import trash from "../assets/images/trash.png";
import Footer from "./Footer";

function Cart() {
  const { cart, updateQuantity, removeFromCart, clearCart } = useContext(CartContext);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");
  const [userLocation, setUserLocation] = useState(null);
  const [locationError, setLocationError] = useState(null);

  const handleCheckout = () => {
    // const orderDetails = {
    //   cart,
    //   phoneNumber,
    //   deliveryDate,
    // };
    // Implement email sending functionality here
    clearCart();
    // Implement receipt download functionality here
  };

  const shareLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
          setLocationError(null);
        },
        (error) => {
          console.error("Error getting user location:", error);
          setLocationError("Geolocation error: " + error.message);
        }
      );
    } else {
      setLocationError("Geolocation is not supported by this browser.");
    }
  };

  return (
    <section className="cart-container">
      <img className="wallpaper2" src={wallpaper2} alt="wallpaper" />
      <div className="cart-content">
        <div className="container-top">
          <img src={logo} alt="logo" />
          <button className="lets-talk">Let's Talk</button>
        </div>
        <img className="back-icon" src={backIcon} alt="backIcon" />
        <h2 className="book-header">Cart</h2>
      </div>

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
              <div className="product">
                <img className="cart-image" src={item.img} alt={item.name} />
                <p>{item.name}</p>
              </div>

              <div className="quantity">
                <p onClick={() => updateQuantity(item.name, item.quantity - 1)}>-</p>
                <div className="quantity-box">
                  <p>{item.quantity}</p>
                </div>
                <p onClick={() => updateQuantity(item.name, item.quantity + 1)}>+</p>
              </div>
              <div className="price">
                <p>NGN {item.price}</p>
              </div>
              <div className="total">
                <p>NGN {item.price * item.quantity}</p>
              </div>
              <div className="trash-box">
                <img className="trash" src={trash} alt="trash" onClick={() => removeFromCart(item.name)} />
              </div>
            </div>
          ))}
        </div>

        <div className="total-card">
          <h4>Total</h4>
          <div className="total-details">
            <div className="price-total">
              <p>Subtotal</p>
              <p>NGN {cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}</p>
            </div>

            <div className="delivery-tab">
              <p>Delivery</p>
              <button onClick={shareLocation}>Share Location</button>
              {userLocation && (
                <p>
                  Your location: Latitude {userLocation.lat}, Longitude {userLocation.lng}
                </p>
              )}
              {locationError && <p className="error">{locationError}</p>}
            </div>

            <div>
              <p>Phone number</p>
              <input
                type="text"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>

            <div>
              <p>Date of delivery</p>
              <input
                type="date"
                value={deliveryDate}
                onChange={(e) => setDeliveryDate(e.target.value)}
              />
            </div>

            <button className="checkout" type="button" onClick={handleCheckout}>
              Checkout
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
}

export default Cart;
