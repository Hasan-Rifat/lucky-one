import React, { useEffect, useState } from "react";
import Cards from "../Cards/Cards";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const [cart, setCart] = useState([]);

  const addTOCard = (product) => {
    const allProducts = [...cart, product];
    setCart(allProducts);
  };

  return (
    <div className="container">
      <div className="shop">
        <div className="products">
          {products.map((product) => (
            <Product
              product={product}
              key={product.id}
              addTOCard={addTOCard}
            ></Product>
          ))}
        </div>
        <div className="carts">
          <Cards cart={cart}></Cards>
        </div>
      </div>
    </div>
  );
};

export default Shop;
