import "./Items.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

//////////////////////////////// Actions
import { getProductDetails } from "../redux/actions/productActions";
import { addToCart } from "../redux/actions/cartActions";

function Items({ match, history }) {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.getProductDetails);
  const { loading, error, product } = productDetails;
  console.log(product);

  useEffect(() => {
    dispatch(getProductDetails(match.params.id));
  }, []);

  const addToCartHandler = () => {
    dispatch(addToCart(product));
    history.push("/cart");
  };

  const createImageLink = (img = "") => {
    return "http://localhost:4000" + img.replace(".", "");
  };

  return (
    <div className="productscreen">
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <>
          <div className="productscreen__left">
            <div className="left__image">
              <img
                src={createImageLink(product.img)}
                // "http://localhost:4000" +
                // product?.img?.split("").replace(".", "").join("")

                alt={product.name}
              />
            </div>
            <div className="left__info">
              <p className="left__name">{product.name}</p>
              <p>Price: ${product.price}</p>
              <p>
                lorem Ips Cha lorem lorem ipsum d lorem Ips Cha lorem lorem
                ipsum d lorem Ips Cha lorem lorem ipsum d
              </p>
            </div>
          </div>
          <div className="productscreen__right">
            <div className="right__info">
              <p>
                Price: <span>${product.price}</span>
              </p>
              <p>
                Status: <span>In Stock</span>
              </p>
              {/* <p>
                Quantity{" "}
                <select>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </p> */}
              <p>
                <button type="button" onClick={addToCartHandler}>
                  Add to Cart
                </button>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Items;
