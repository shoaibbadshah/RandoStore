import React, { useState } from "react";
import "./AddItem.css";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/actions/productActions";
import { useHistory } from "react-router-dom";

function AddItem() {
  const [state, setState] = useState({
    id: "",
    name: "",
    price: "",
    img: "",
  });
  const [error, setError] = useState("");

  const { id, name, price, img } = state;
  let history = useHistory();
  let dispatch = useDispatch();

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !price || !img || !id) {
      setError("Please Enter all Feild");
    } else {
      dispatch(addItem(state));
      history.push("/");
      setError("");
    }
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          margin: 50,
        }}
      >
        <h2 style={{ margin: 8, padding: 8 }}>Add a new Item</h2>

        {error && <h3 style={{ color: "red" }}>{error}</h3>}

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="id"
            name="id"
            value={id}
            style={{ padding: 8, margin: 8 }}
            onChange={handleInputChange}
          />
          <br />

          <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            style={{ padding: 8, margin: 8 }}
            onChange={handleInputChange}
          />
          <br />

          <input
            type="text"
            placeholder="price"
            name="price"
            value={price}
            style={{ padding: 8, margin: 8 }}
            onChange={handleInputChange}
          />
          <br />

          <input
            type="text"
            placeholder="image"
            name="img"
            value={img}
            style={{ padding: 8, margin: 8 }}
            onChange={handleInputChange}
          />
          <br />

          <button type="submit" style={{ margin: 8, padding: 8 }}>
            Add Item
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddItem;
