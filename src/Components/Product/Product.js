import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./Product.css";

const Product = ({ product, addTOCard }) => {
  const { name, price, image } = product;
  return (
    <div>
      <div className="card">
        <img src={image} alt="" />
        <div className="card-info">
          <h2>{name}</h2>
          <p>{price}</p>
        </div>
        <button className="btn" onClick={()=> addTOCard(product)}>
          <p>ADD TO CART</p>
          <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
        </button>
      </div>
    </div>
  );
};

export default Product;
