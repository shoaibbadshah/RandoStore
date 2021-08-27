import * as actionTypes from "../constants/cartConstants";
import axios from "axios";

export const addToCart = (cartItem) => async (dispatch, getState) => {
  // const { data } = await axios.get(`/items/${id}`);
  const data = getState().cart.cartItems.find((C) => C.id === cartItem.id);
  let cartItems = [...getState().cart.cartItems];
  if (data) {
    cartItems = cartItems.map((cItem) =>
      cItem.id === cartItem.id ? { ...cItem, qty: cItem.qty + 1 } : cItem
    );
  } else {
    cartItems = [...cartItems, { ...cartItem, qty: 1 }];
  }

  dispatch({
    type: actionTypes.ADD_TO_CART,
    payload: cartItems,
    //  {
    //   product: data._id,
    //   name: data.name,
    //   price: data.price,
    //   img: data.img,
    // },
  });

  localStorage.setItem("cart", JSON.stringify(cartItems));
};

export const removeFromCart = (name) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.REMOVE_FROM_CART,
    payload: name,
  });

  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};
