import React from "react"; 
import { Link } from "react-router-dom";  
import "../styles/ItemCard.css"; 


const ItemCard = ({ product, addToCart }) => {
  return (
    <div className="item-card">  
   
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.name} className="product-img" />
      </Link>
      
      <h3>{product.name}</h3>  
      <p>{product.price} DZD</p> 

     
      <button onClick={() => addToCart(product)}>Add to Cart</button>  
    </div>
  );
};

export default ItemCard;
