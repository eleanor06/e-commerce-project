// src/pages/Home.jsx
import React, { useState } from "react";
import products from "../data/data";
import ItemCard from "../components/ItemCard";
import "../styles/Home.css";

const Home = ({ addToCart }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home-page">
      <h1>Shop Our Collection</h1>

      <input
        type="text"
        placeholder="Search products..."
        className="search-input"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="products">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ItemCard key={product.id} product={product} addToCart={addToCart} />
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
