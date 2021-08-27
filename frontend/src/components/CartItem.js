import "./CartItem.css";
import { Link } from "react-router-dom";
const CartItem = ({ item, removeHandler }) => {
  return (
    <div className="cartitem">
      <div className="cartitem__image">
        <img src={item.img} alt={item.name} />
      </div>

      <Link to={`/items/${item.id}`} className="cartitem__name">
        <p>{item.name}</p>
      </Link>

      <p className="cartitem__price">${item.price}</p>

      {/* <select
        className="cartitem__select"
        value={item.qty}
        onChange={() => console.log(item)}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select> */}

      <button
        className="cartitem__deletebtn"
        onClick={() => removeHandler(item.name)}
      >
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default CartItem;
