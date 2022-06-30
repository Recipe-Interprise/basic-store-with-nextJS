import Layout from "../../components/layout";
import { getItems } from "../../services/itemServices";
import Product from "../../components/product";
import StylesProducts from "../../styles/Product.module.css";

export default function Index({ products }) {
  return (
    <Layout title="Store">
      <h1>Store</h1>
      <div className={StylesProducts.items}>
        {products &&
          products.map((item) => (
            <Product key={item.id} item={item} showAs="Default" />
          ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await getItems();

  return {
    props: {
      products: res,
    },
  };
}
