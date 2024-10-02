import { Landing } from "../components/homescreen/landing";
import { Categories } from "../components/homescreen/categories";
import { getProducts } from "../lib/mongo/products";
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from "react";

async function fetchProducts() {
  const { products } = await getProducts();
  if (!products) throw new Error("Failed to fetch products");
  return products;
}

export default async function Home() {
  const products = await fetchProducts();

  return (
    <main className="flex min-h-screen flex-col items-center font-display">
      <Landing />
      <Categories />

      <ul>
        {products.map((product: { _id: Key | null | undefined; title: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; }) => (
          <li key={product._id}>
            {product.title}
          </li>
        ))}
      </ul>
    </main>
  );
}
