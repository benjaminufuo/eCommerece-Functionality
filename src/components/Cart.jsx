import React from "react";
import "../components/css/cart.css";
import empty from "../assets/Public/illustration-empty-cart.svg";
import { MdOutlineCancel } from "react-icons/md";

const Cart = ({ cart, removeFromCart, setCheckoutPopUp }) => {
  const TotalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <div className="cart-container">
      <div className="cart-content">
        <h1>Your Cart is ({TotalItems})</h1>
        {cart.length === 0 ? (
          <div className="emptycart">
            <img src={empty} />
            <p>Your added items will appear here</p>
          </div>
        ) : (
          <div className="cart-products">
            {cart.map((item, index) => (
              <div className="cart-item" key={index}>
                <div className="cart-details">
                  <span className="item-description">{item.description}</span>
                  <MdOutlineCancel
                    className="cartremove-icon"
                    onClick={() => removeFromCart(item.title)}
                  />
                  <div className="bottomitem">
                    <p className="cart-quantity">{item.quantity}x</p>
                    <p className="cart-price">
                      @ ${item.price} ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            <div className="cart-total">
              <p>Order Total</p>
              <h2 className="total-price">
                $
                {cart
                  .reduce((acc, item) => acc + item.price * item.quantity, 0)
                  .toFixed(2)}
              </h2>
            </div>

            <div className="carbon-neutral">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="none"
                viewBox="0 0 21 20"
              >
                <path
                  fill="#1EA575"
                  d="M8 18.75H6.125V17.5H8V9.729L5.803 8.41l.644-1.072 2.196 1.318a1.256 1.256 0 0 1 .607 1.072V17.5A1.25 1.25 0 0 1 8 18.75Z"
                />
                <path
                  fill="#1EA575"
                  d="M14.25 18.75h-1.875a1.25 1.25 0 0 1-1.25-1.25v-6.875h3.75a2.498 2.498 0 0 0 2.488-2.747 2.594 2.594 0 0 0-2.622-2.253h-.99l-.11-.487C13.283 3.56 11.769 2.5 9.875 2.5a3.762 3.762 0 0 0-3.4 2.179l-.194.417-.54-.072A1.876 1.876 0 0 0 5.5 5a2.5 2.5 0 1 0 0 5v1.25a3.75 3.75 0 0 1 0-7.5h.05a5.019 5.019 0 0 1 4.325-2.5c2.3 0 4.182 1.236 4.845 3.125h.02a3.852 3.852 0 0 1 3.868 3.384 3.75 3.75 0 0 1-3.733 4.116h-2.5V17.5h1.875v1.25Z"
                />
              </svg>
              <p className="carbontext">
                This is a{" "}
                <span className="weighted-neutral-text">carbon-neutral</span>{" "}
                delivery
              </p>
            </div>
            <div className="butndiv">
              <button
                className="checkoutbtn"
                onClick={() => {
                  console.log("Opening Checkout Popup"), setCheckoutPopUp(true);
                }}
              >
                Confirm Order
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
