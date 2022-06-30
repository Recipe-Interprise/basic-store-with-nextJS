import Product from "../components/product";
import { getLatestItems } from "../services/itemServices";
import Layout from "./../components/layout";
import stylesProduct from "../styles/Product.module.css";
import style from "../styles/Home.module.css";

export default function Home({ items }) {
  return (
    <Layout title="Bienvenido">
      <div className={style.banner}>
        <div className={style.bannerBackground}>
          <div className={style.bannerInfo}>
            <h2>Shop the Summer 2022 Collection</h2>
            <p>
              Level up your comfort this season with our new Winter Collection -
              all new joggers, beanies, drinkware, and for the first time ever,
              Octocookies cutters!
            </p>
          </div>
        </div>
      </div>
      <h3>Latest Products</h3>
      <div className={stylesProduct.items}>
        {items &&
          items.map((item) => (
            <Product key={item.id} item={item} showAs="item" />
          ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await getLatestItems();

  return {
    props: {
      items: res,
    },
  };
}
