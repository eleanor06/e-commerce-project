import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">DZStyle</Link>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/cart" className="cart-link">
          🛒 Cart
          <Link to="/profile">👤 Profile</Link>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
