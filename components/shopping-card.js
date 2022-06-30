import React from "react";
import { useAppContext } from "./stateWrapper";
import Product from "./product";
import styleShoppingCard from "../styles/ShoppingCart.module.css";

const ShoppingCard = () => {
  const cart = useAppContext();

  function handlerCloseCart() {
    cart.closeCart();
  }

  function getTotal() {
    const total = cart.items.reduce(
      (acc, item) => acc + item.quantity * item.price,
      0
    );
    return total;
  }

  return (
    <div
      className={styleShoppingCard.shoppingCart}
      style={{ display: cart.isOpen ? "block" : "none" }}
    >
      <button className={styleShoppingCard.close} onClick={handlerCloseCart}>
        Close
      </button>

      {cart.items.length === 0 ? (
        <div className={styleShoppingCard.empty}>Cart is empty</div>
      ) : (
        <>
          <h3>Your items</h3>
          <div>
            {cart.items.map((item) => (
              <Product
                key={item.id}
                item={item}
                showAs="ListItem"
                quantity={item.quantity}
              />
            ))}
          </div>
          <div className={styleShoppingCard.total}>Total: {getTotal()}</div>
        </>
      )}
    </div>
  );
};

export default ShoppingCard;
