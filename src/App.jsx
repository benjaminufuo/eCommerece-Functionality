import React, { useState } from "react";
import Products from "./components/Products";
import Cart from "./components/Cart";
import CheckoutPopUp from "./components/CheckoutPopUp";

const App = () => {
  const [cart, setCart] = useState([]);
  const [checkoutPopUp, setCheckoutPopUp] = useState(false);

  const addToCart = (product, quantity) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(
        (item) => item.title === product.title
      );
      if (existingProduct) {
        return prevCart.map((item) =>
          item.title === product.title
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity }];
      }
    });
  };
  const removeFromCart = (productTitle) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.title === productTitle
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };
  return (
    <main className="app">
      <Products addToCart={addToCart} removeFromCart={removeFromCart} />
      <Cart
        cart={cart}
        removeFromCart={removeFromCart}
        setCheckoutPopUp={setCheckoutPopUp}
      />
      {/* {CheckoutPopUp ? (
        <CheckoutPopUp cart={cart} setCheckoutPopUp={setCheckoutPopUp} />
        ) : (
          ""
          )} */}
      {checkoutPopUp && (
        <CheckoutPopUp
          cart={cart}
          setCheckoutPopUp={setCheckoutPopUp}
          setCart={setCart}
        />
      )}
    </main>
  );
};

export default App;
