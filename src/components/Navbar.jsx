import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo2-removebg-preview.png";
import "../styles/Navbar.css";

const Navbar = ({ setSearchQuery, setSelectedCategory }) => {
  const [searchInput, setSearchInput] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const categories = [
    "All",
    "Hoodies",
    "T-Shirts",
    "Dresses",
    "Jeans",
    "Accessories",
    "Cardigans",
    "Bags",
    "Electronics",
    "Shoes",
  ];

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchInput(value);
    if (setSearchQuery) setSearchQuery(value);
  };

  const handleCategorySelect = (category) => {
    if (setSelectedCategory) setSelectedCategory(category);
    setDropdownOpen(false);
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <Link to="/" className="logo">
        <img
          src={logo}
          alt="DZStyle Logo"
          className="logo-img"
          style={{ height: '110px', width: '150px', borderRadius: '50%' }}
        />
      </Link>

      {/* Search & Category */}
      <div className="search-container">
        {/* Category Dropdown */}
        <div className="dropdown">
        <button
  className="dropdown-btn"
  aria-expanded={dropdownOpen}
  aria-controls="category-menu"
  onClick={() => setDropdownOpen(!dropdownOpen)}
>
  Categories
</button>
          
          {dropdownOpen && (
            <div className="dropdown-content">
              {categories.map((category) => (
                <div
                  key={category}
                  className="dropdown-item"
                  onClick={() => handleCategorySelect(category)}
                >
                  {category}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Search Input */}
        <input
          type="text"
          placeholder="🔍 Search product..."
          value={searchInput}
          onChange={handleSearchChange}
          className="search-input"
        />
      </div>

      {/* Navigation Links */}
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/cart" className="cart-link">🛒 Cart</Link>
        <Link to="/profile">👤 Profile</Link>
      </div>
    </nav>
  );
};

export default Navbar;