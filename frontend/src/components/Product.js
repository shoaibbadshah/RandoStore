import "./Product.css";
import { Link } from "react-router-dom";

function Product({ productId, name, price, img }) {
  return (
    <div className="product">
      <img src={img} alt={name} />

      <div className="product__info">
        <p className="info__name">{name}</p>

        <p className="info__price">${price}</p>
        <Link to={`/items/${productId}`} className="info__button">
          View
        </Link>
      </div>
    </div>
  );
}

export default Product;
