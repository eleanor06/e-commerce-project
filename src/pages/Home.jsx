import React, { useState } from "react";
import products from "../data/data";
import ItemCard from "../components/ItemCard";
import Navbar from "../components/Navbar";
import "../styles/Home.css";

const Home = ({ addToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState(""); // Search term state

  const categories = ["All", "Hoodies", "T-Shirts", "Dresses"];

  // Filter products based on selected category and search term
  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="home-page">
      {/* Pass setSelectedCategory and setSearchTerm to Navbar */}
      <Navbar setSelectedCategory={setSelectedCategory} setSearchQuery={setSearchTerm} />

      <h1 className="collection-title">Shop Our Collection</h1>

      {/* Product Grid */}
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
