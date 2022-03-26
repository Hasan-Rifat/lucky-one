import { useState } from "react";
import ItemsCart from "../ItemsCart/ItemsCart";
import "./Cards.css";

const Cards = ({ carts, removeBtn }) => {
  const [getOne, setGetOne] = useState([]);

  const sigleProduct = (carts) => {
    let luckyOne = carts[Math.floor(Math.random() * carts.length)];
    setGetOne(luckyOne);
  };

  return (
    <div className="item">
      {carts.map((cart) => (
        <ItemsCart cart={cart} key={cart.id}></ItemsCart>
      ))}
      <div className="itemss">
        <button className="cart-btn" onClick={() => sigleProduct(carts)}>
          choose 1 for me
        </button>
        <div className="lucky">
          <img className="img" src={getOne.image} alt="" />
          <span>{getOne.name}</span>
        </div>
        <button className="cart-btn" onClick={removeBtn}>
          Choose again
        </button>
      </div>
    </div>
  );
};

export default Cards;
