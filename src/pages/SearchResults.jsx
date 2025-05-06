import React from "react";
import { useLocation } from "react-router-dom";
import products from "../data/data"; // تأكد من مسار البيانات
import ItemCard from "../components/ItemCard"; // تأكد من المسار

const SearchResults = ({ addToCart }) => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query")?.toLowerCase();

  const filtered = products.filter(product =>
    product.name.toLowerCase().includes(query)
  );

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Search Results for: "{query}"</h2>
      <div className="products">
        {filtered.length > 0 ? (
          filtered.map(product => (
            <ItemCard key={product.id} product={product} addToCart={addToCart} />
          ))
        ) : (
          <p>No matching products found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
