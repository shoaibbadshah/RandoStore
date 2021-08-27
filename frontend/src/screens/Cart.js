import CartItem from "../components/CartItem";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { removeFromCart } from "../redux/actions/cartActions";

function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const { cartItems } = cart;

  const removeHandler = (name) => {
    dispatch(removeFromCart(name));
  };

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => parseInt(item.qty) + qty);
  };

  const getTotal = () => {
    let totalPrice = 0;

    cartItems.forEach((cartItem) => {
      totalPrice += parseInt(cartItem.price) * cartItem.qty;
    });

    console.log(totalPrice);
    return totalPrice;
  };
  return (
    <div className="cartscreen">
      <div className="cartscreen__left">
        <h2>Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <div>
            you cart is empty <Link to="/">Go Back</Link>
          </div>
        ) : (
          cartItems.map((item) => (
            <CartItem
              key={item.name}
              item={item}
              removeHandler={removeHandler}
            />
          ))
        )}
      </div>

      {/* right */}
      <div className="cartscreen__right">
        <div className="cartscreen__info">
          <p>
            <pre style={{ fontWeight: "bold", fontSize: 20 }}>
              Total : {"$"}
              {getTotal()}
            </pre>
          </p>
        </div>
        <div>
          <button>Proceed to checkout</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
