import React from "react";
import Link from "next/link";
import Image from "next/image";
import style from "../styles/Product.module.css";
import { convertToPath } from "../lib/utils";
import { CardButton } from "./CardButton";

export default function Product({ item, showAs, quantity }) {
  if (showAs === "Page") {
    return (
      <div className={style.page}>
        <div className={style.image}>
          <Image
            src={item.image}
            alt={item.description}
            width={700}
            height={700}
          />
        </div>

        <div className={style.info}>
          <div>
            <h2>{item.title}</h2>
          </div>
          <div className={style.price}>{item.price}</div>
          <div>{item.description}</div>
          <div>
            <CardButton item={item} />
          </div>
        </div>
      </div>
    );
  }

  if (showAs === "ListItem") {
    return (
      <div className={style.listItem}>
        <div>
          <Image
            src={item.image}
            alt={item.description}
            width={100}
            height={100}
          />
        </div>
        <div>
          <div style={{ fontSize: 16 }}>
            <h3>{item.title}</h3>
          </div>
          <div style={{ fontSize: 16 }}>${item.price}</div>
          {quantity === 0 ? (
            ""
          ) : (
            <div style={{ fontSize: 16 }}>{quantity} units</div>
          )}
          {quantity === 0 ? (
            ""
          ) : (
            <div style={{ fontSize: 16 }}>
              Subtotal: {quantity * item.price} units
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={style.item}>
      <div>
        <Link href={`/store/${convertToPath(item.title)}`}>
          <a>
            <Image
              src={item.image}
              alt={item.description}
              width={500}
              height={500}
            />
          </a>
        </Link>
      </div>

      <div>
        <h3>
          <Link href={`/store/${item.id}`}>
            <a>{item.title}</a>
          </Link>
        </h3>
      </div>

      <div>{item.price}</div>
      <div>
        <CardButton item={item} />
      </div>
    </div>
  );
}
