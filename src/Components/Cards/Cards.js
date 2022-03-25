import "./Cards.css";

let img;
let name;
const Cards = ({ cart }) => {
  for (const product of cart) {
    console.log(product);
    img = product.image;
    name = product.name;
  }

  return (
    <div className="Carts-box">
      <div className="cart-box-info">
        <img className="cart-img" src={img} alt="" />
        <span className="cart-name">{name}</span>
        <button id="btn" onClick={() => deleteBtn()}>
          a
        </button>
      </div>
    </div>
  );
};

export default Cards;
