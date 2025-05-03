import React from "react";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import "../components/css/checkoutpopup.css";

const CheckoutPopUp = ({ cart, setCheckoutPopUp, setCart }) => {
  return (
    <div className="checkout-main">
      <div className="checkout-container">
        <div className="checkout-top">
          <IoCheckmarkCircleOutline className="checkout-icon" />
          <h1 className="checkout-header">Oder Confirmed</h1>
          <p className="checkout-text">We hope you enjoy your food!</p>
        </div>
        <div className="checkoutitemContainer">
          {cart.map((item, index) => (
            <div className="checkout-item" key={index}>
              <img src={item.img} alt={item.title} className="checkout-img" />
              <div className="checkout-details">
                <span className="item-description">{item.description}</span>
                <p className="checkout-quantity">
                  {item.quantity}x{" "}
                  <span className="checkout-price">@ ${item.price}</span>
                </p>
              </div>

              <p className="checkout-price1">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
          ))}
        </div>

        <div className="checkout-total">
          <p className="checkout-total-text">Order Total</p>
          <h2 className="checkout-total-price">
            $
            {cart
              .reduce((acc, item) => acc + item.price * item.quantity, 0)
              .toFixed(2)}
          </h2>
        </div>
        <div className="checkout-bottom">
          <button
            className="checkout-button"
            onClick={() => {
              setCheckoutPopUp(false);
              setCart([]);
            }}
          >
            Start New Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPopUp;
