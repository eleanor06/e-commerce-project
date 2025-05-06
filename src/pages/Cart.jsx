// src/pages/Cart.jsx
import React from "react";
import "../styles/Cart.css";
import Navbar from "../components/Navbar";
import products from "../data/data";
const Cart = ({ cartItems, setCartItems }) => {
  const increase = (product) => {
    const updated = cartItems.map((item) =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updated);
  };

  const decrease = (product) => {
    const updated = cartItems.map((item) =>
        item.id === product.id? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }: item
      );
    setCartItems(updated);
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,0);

  return (
    <div className="cart-page">
      
         <Navbar />
      <h1 className="your-cart">Your Cart</h1>
      {cartItems.length === 0 ? ( <p>Your cart is empty.</p>) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={`/images/${item.image}`} alt={item.name} />

              <div>
                <h3>{item.name}</h3>
                <p>{item.price} DZD</p>
                <div className="qty">
                  <button onClick={() => decrease(item)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increase(item)}>+</button>
                </div>
                <button onClick={() => removeItem(item.id)}>Remove</button>
              </div>
            </div>
          ))}
          <h2>Total: {total} DZD</h2>
        </div>
      )}
    </div>
  );
};

export default Cart;
