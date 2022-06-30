import React from "react";
import StylesButton from "../styles/CardButton.module.css";
import { useAppContext } from "./stateWrapper";
export const CardButton = ({ item }) => {
  const cart = useAppContext();

  function handlerCLick() {
    cart.addItemToCart(item);
    cart.openCart();
  }
  return (
    <button className={StylesButton.button} onClick={handlerCLick}>
      Add to cart
    </button>
  );
};
