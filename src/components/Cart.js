import React from "react";
import logo from "../assets/images/logo.png";
import wallpaper2 from "../assets/images/wallpaper2.png";
import backIcon from "../assets/images/arrow-left.png";
import cake from "../assets/images/chocolate-cake.png";
import trash from "../assets/images/trash.png";
import Footer from "./Footer";
// import subtract from "../assets/images/subtract.png";
// import add from "../assets/images/add.png";

function Cart() {
  return (
    <section className="cart-container">
      <img className="wallpaper2" src={wallpaper2} alt="wallpaper" />
      <div className="cart-content">
        {" "}
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

          <div className="product-flex">
            <div className="product">
              <img className=" cart-image" src={cake} alt="cake" />
              <p>Product name</p>
            </div>

            <div className="quantity">
              <p>-</p>
              <div className="quantity-box">
                <p>01</p>
              </div>
              <p>+</p>
            </div>
            <div className="price">
              <p>N 30000</p>
            </div>
            <div className="total">
              <p>N 30000</p>
            </div>
            <div className="trash-box">
              {" "}
              <img className="trash" src={trash} alt="trash" />
            </div>
          </div>
        </div>

        <div className="total-card">
          <h4>Total</h4>
          <div className="total-details">
            <div className="price-total">
              <p>Subtotal</p>
              <p>N 30000</p>
            </div>

            <div  className="delivery-tab">
              <p>Delivery</p>
              <p>Share Location</p>
            </div>

            <div>
              <p>Phone number</p>
              {/* <input>phoneInput </input> */}
            </div>

            <div>
              <p>Date of delivery</p>
              {/* <input>DateInput </input> */}
            </div>

            <button className="checkout" type="submit">
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
