import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import products from "../data/data";
import "../styles/ProductDetail.css";
import Navbar from "../components/Navbar";


const ProductDetail = ({ addToCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const foundProduct = products.find((p) => p.id === parseInt(id));
    if (foundProduct) {
      // Avoid mutating the original product directly
      setProduct({ ...foundProduct, views: foundProduct.views + 1 });
    }
  }, [id]);

  const handleAddToCart = () => {
    addToCart(product);
    
  };

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <>
      <Navbar />
      
      <div className="product-detail">
        <div className="product-images">
          {Array.isArray(product.image) ? (
            product.image.map((imgSrc, index) => (
              <img
                key={index}
                src={`/images/${imgSrc}`}
                alt={`View ${index + 1}`}
                className="detail-img"
              />
            ))
          ) : (
            <img
              src={`/images/${product.image}`}
              alt={product.name}
              className="detail-img"
            />
          )}
        </div>

        <div className="detail-info">
          <h2>{product.name}</h2>
          <p>
            <strong>Price:</strong> {product.price} DZD
          </p>
          <p>
            <strong>Views:</strong> {product.views}
          </p>
          <p>
            <strong>Sold:</strong> {product.sold}
          </p>

          <h4>Reviews:</h4>
          {product.reviews?.length > 0 ? (
            <ul>
              {product.reviews.map((review, index) => (
                <li key={index}>
                  {"⭐️".repeat(review.rating)} — {review.comment}
                </li>
              ))}
            </ul>
          ) : (
            <p>No reviews yet.</p>
          )}

          <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
