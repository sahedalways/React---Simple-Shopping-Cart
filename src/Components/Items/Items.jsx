import React, { useContext } from "react";
import { BsPlusLg } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";
import { FaRegTrashAlt } from "react-icons/fa";
import { CartContext } from "../Cart/Cart";

export const Items = ({ id, title, description, img, price, quantity }) => {
  const { removeItem, increment, decrement } = useContext(CartContext);

  return (
    <>
      <div className="items-info">
        <div className="product-img">
          <img src={img} alt="" />
        </div>
        <div className="title">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        <div className="add-minus-quantity">
          <BsPlusLg
            className="add"
            onClick={() => {
              increment(id);
            }}
          />
          <input type="number" placeholder={quantity} />
          <BiMinus
            className="minus"
            onClick={() => {
              decrement(id);
            }}
          />
        </div>

        <div className="price">
          <h3>{price}</h3>
        </div>

        <div className="remove-item">
          <FaRegTrashAlt className="remove" onClick={() => removeItem(id)} />
        </div>
      </div>
      <hr />
    </>
  );
};
