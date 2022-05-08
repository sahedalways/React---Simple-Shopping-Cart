import React, { createContext, useReducer, useEffect } from "react";
import "./Cart.css";
import { Products } from "../Products/Products";
import { reducer } from "../Reducer";
import ContextCart from "../ContextCart";


export const CartContext = createContext();


const initialState = {
  items: Products,
  totalAmount: 0,
  totalItem: 0,
};

const Cart = () => {
  // const [item, setItem] = useState(products);
  const [state, dispatch] = useReducer(reducer, initialState);

  // to delete the indv. elements from an Item Cart
  const removeItem = (id) => {
    return dispatch({
      type: "REMOVE",
      payload: id,
    });
  };

  // clear the cart
  const clearCart = () => {
    return dispatch({ type: "CLEAR" });
  };

  // increment the item
  const increment = (id) => {
    return dispatch({
      type: "INCREMENT",
      payload: id,
    });
  };

  // decrement the item
  const decrement = (id) => {
    return dispatch({
      type: "DECREMENT",
      payload: id,
    });
  };

  // we will use the useEffect to update the data
  useEffect(() => {
    dispatch({ type: "GET_TOTAL" });
    console.log("Awesome");
  }, [state.items]);

  return (
    <CartContext.Provider
      value={{ ...state, removeItem, clearCart, increment, decrement }}
    >
      <ContextCart />
    </CartContext.Provider>
  );
};

export default Cart;
