// src/pages/ProductDetail.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import products from "../data/data";
import "../styles/ProductDetail.css";

const ProductDetail = ({ addToCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const item = products.find((p) => p.id === parseInt(id));
    if (item) {
      item.views += 1;
      setProduct({ ...item });
    }
  }, [id]);

  if (!product) return <p>Product not found.</p>;

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} className="detail-img" />
      <div className="detail-info">
        <h2>{product.name}</h2>
        <p>Price: {product.price} DZD</p>
        <p>Views: {product.views}</p>
        <p>Sold: {product.sold}</p>

        <h4>Reviews:</h4>
        <ul>
          {product.reviews.map((r, i) => (
            <li key={i}>
              {"⭐".repeat(r.rating)} – {r.comment}
            </li>
          ))}
        </ul>

        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetail;
