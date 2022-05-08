import React, { useContext } from "react";

import { Scrollbars } from "react-custom-scrollbars-2";
import { Items } from "../Components/Items/Items";

import { CartContext } from "./Cart/Cart";

const ContextCart = () => {
  const { items, clearCart, totalItem } = useContext(CartContext);

  if (items.length === 0) {
    return (
      <>
        <header>
          <div className="continue-shopping">
            <img
              src="https://github.com/thapatechnical/addtocartreact/blob/main/public/images/arrow.png?raw=true"
              alt="arrow"
              className="arrow-icon"
            />
            <h3>Continue Shopping</h3>
          </div>

          <div className="cart-icon">
            <img
              src="https://github.com/thapatechnical/addtocartreact/blob/main/public/images/cart.png?raw=true"
              alt="cart"
            />

            <p>{totalItem}</p>
          </div>
        </header>

        <section className="main-cart-section">
          <h1>Shopping Cart</h1>
          <p className="total-items">
            You have <span className="total-items-count">{totalItem}</span>{" "}
            items into your shopping cart!
          </p>

          <div className="cart-items">
            <div className="cart-items-container">
              <Scrollbars>
                {items.map((Data) => (
                  <Items {...Data} key={Data.id} />
                ))}
              </Scrollbars>
              <div className="card-total">
                <h3>
                  Card Total : <span>BDT 26,999</span>
                </h3>
                <button>CHECKOUT</button>

                <button className="clear-cart" onClick={clearCart}>
                  Clear Cart
                </button>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <header>
        <div className="continue-shopping">
          <img
            src="https://github.com/thapatechnical/addtocartreact/blob/main/public/images/arrow.png?raw=true"
            alt="arrow"
            className="arrow-icon"
          />
          <h3>Continue Shopping</h3>
        </div>

        <div className="cart-icon">
          <img
            src="https://github.com/thapatechnical/addtocartreact/blob/main/public/images/cart.png?raw=true"
            alt="cart"
          />

          <p>{totalItem}</p>
        </div>
      </header>

      <section className="main-cart-section">
        <h1>Shopping Cart</h1>
        <p className="total-items">
          You have <span className="total-items-count">{totalItem}</span> items
          into your shopping cart!
        </p>

        <div className="cart-items">
          <div className="cart-items-container">
            <Scrollbars>
              {items.map((Data) => (
                <Items {...Data} key={Data.id} />
              ))}
            </Scrollbars>
            <div className="card-total">
              <h3>
                Card Total : <span>BDT 26,999</span>
              </h3>
              <button>CHECKOUT</button>

              <button className="clear-cart" onClick={clearCart}>
                Clear Cart
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContextCart;
