import Link from "next/link";
import React from "react";
import styles from "../styles/Menu.module.css";
import { useAppContext } from "./stateWrapper";

export default function Menu() {
  const cart = useAppContext();

  function handlerOpenCart() {
    cart.openCart();
  }

  return (
    <nav className={styles.menu}>
      <div>
        <Link href="/">
          <a className={styles.link}>Home</a>
        </Link>
        <Link href="/store">
          <a className={styles.link}>Store</a>
        </Link>
        <Link href="/faq">
          <a className={styles.link}>FAQ</a>
        </Link>
      </div>
      <div>
        <a href="#" className={styles.link} onClick={handlerOpenCart}>
          Cart ({cart.getNumberOfItems()})
        </a>
      </div>
    </nav>
  );
}
