import React, { useState } from "react";
import "../components/css/products.css";
import waffle from "../assets/Public/waffle.jpg";
import cremeBrulee from "../assets/Public/creme-brulee.jpg";
import macaron from "../assets/Public/macaron.jpg";
import tiramisu from "../assets/Public/tiramisu.jpg";
import baklava from "../assets/Public/image-baklava-desktop.jpg";
import pie from "../assets/Public/meringue.jpg";
import cake from "../assets/Public/image-cake-desktop.jpg";
import brownie from "../assets/Public/brownie.jpg";
import cart from "../assets/Public/icon-add-to-cart.svg";
import pannacotta from "../assets/Public/panna-cotta.jpg";
import { LuCircleMinus, LuCirclePlus } from "react-icons/lu";

const Products = ({ addToCart, removeFromCart }) => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [quantities, setQuantities] = useState({});
  const handleCardClick = (index) => {
    setSelectedCard(index === selectedCard ? null : index);
  };

  const handleQuantityChange = (index, quantity) => {
    setQuantities((prev) => ({
      ...prev,
      [index]: Math.max(0, (prev[index] || 0) + quantity),
    }));
  };
  // Array of product objects
  // Each object contains the image, title, description, and price of a product
  // The images are imported from the assets folder
  // The images are in jpg format and are named according to the product they represent
  // The images are stored in the Public folder
  // The images are imported using the import statement

  const products = [
    {
      img: waffle,
      title: "Waffle",
      description: "Waffle with Berries",
      price: 6.5,
    },
    {
      img: cremeBrulee,
      title: "Creme Brulee",
      description: "Vanilla Bean Creme Brulee",
      price: 7.0,
    },
    {
      img: macaron,
      title: "Macaron",
      description: "Macaron Mix of Five",
      price: 8.0,
    },
    {
      img: tiramisu,
      title: "Tiramisu",
      description: "Classic Tiramisu",
      price: 5.5,
    },
    {
      img: baklava,
      title: "Baklava",
      description: "Pistachio Baklava",
      price: 4.0,
    },

    {
      img: pie,
      title: "pie",
      description: "Lemon Meringue Pie",
      price: 5.0,
    },
    {
      img: cake,
      title: "Cake",
      description: "Red Velvet Cake",
      price: 4.5,
    },
    {
      img: brownie,
      title: "Brownie",
      description: "Salted Caramel Brownie",
      price: 5.5,
    },
    {
      img: pannacotta,
      title: "Panna Cotta",
      description: "Vanilla Panna Cotta",
      price: 6.5,
    },
  ];
  return (
    <main className="products-container">
      <section className="products-section">
        <h1 className="products-header">Desserts</h1>
        <div className="products">
          {products.map((product, index) => (
            <div
              className="product-content"
              key={index}
              onClick={() => handleCardClick(index)}
            >
              <div
                className={`card ${selectedCard === index ? "selected" : ""}`}
              >
                <img
                  src={product.img}
                  alt={product.title}
                  className="card-img"
                />
                {selectedCard === index && (
                  <div className="quantity-control">
                    <LuCircleMinus
                      onClick={(e) => {
                        e.stopPropagation(), handleQuantityChange(index, -1);
                        if (quantities[index] > 0) {
                          removeFromCart(product.title);
                        }
                      }}
                      className="control-icon"
                    />
                    <span className="number">{quantities[index] || 0}</span>
                    <LuCirclePlus
                      onClick={(e) => {
                        e.stopPropagation(),
                          handleQuantityChange(index, 1),
                          addToCart(product, quantities[index] || 1);
                      }}
                      className="control-icon"
                    />
                  </div>
                )}
                <button
                  className="card-button"
                  onClick={(e) => {
                    e.stopPropagation(),
                      addToCart(product, quantities[index] || 1);
                  }}
                >
                  <img className="cart" src={cart} alt={cart} />
                  Add to Cart
                </button>
              </div>
              <div className="items">
                <p className="card-title">{product.title}</p>
                <p className="card-description">{product.description}</p>
                <p className="card-price">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Products;
