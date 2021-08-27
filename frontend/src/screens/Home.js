import Product from "../components/Product";
import "./Home.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// actions
import { getProducts as listProducts } from "../redux/actions/productActions";

function Home() {
  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.getProducts);

  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div className="home__screen">
      <h2 className="homescreen__title">Latest Items</h2>
      <div className="homescreen__products">
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          products.map((product) => (
            <Product
              key={product.id}
              productId={product.id}
              name={product.name}
              price={product.price}
              img={product.img}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Home;
