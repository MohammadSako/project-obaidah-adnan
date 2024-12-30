"use client";

import CategoriesCard from "@/components/helpers/catgories/categoriesCard";
import { getProductByItemId } from "@/lib/db/products";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function CategoriesPage({ data }) {
  const [products, setProducts] = useState([]);
  const pathname = usePathname();

  useEffect(() => {
    switch (pathname) {
      case "/categories/men/clothing":
        setProducts(data[0].SubCategory);
        break;
      case "/categories/men/clothing/top":
        setProducts(data[0].SubCategory[0].items);
        break;
      case "/categories/men/clothing/lower":
        setProducts(data[0].SubCategory[1].items);
        break;
      case "/categories/men/shoes":
        setProducts(data[2].SubCategory[0].items);
        break;
      case "/categories/women/clothing":
        setProducts(data[1].SubCategory);
        break;
      case "/categories/women/clothing/top":
        setProducts(data[1].SubCategory[0].items);
        break;
      case "/categories/women/clothing/lower":
        setProducts(data[1].SubCategory[1].items);
        break;
      case "/categories/women/shoes":
        setProducts(data[3].SubCategory[0].items);
        break;
      case "/categories/women/shoes":
        setProducts(data[3].SubCategory[0].items);
        break;
      default:
        // console.warn("Unknown path:", pathname);
        break;
    }

    const segments = pathname.split("/").filter(Boolean);

    if (segments[4]) {
      async function getProducts() {
        const { productByItemId } = await getProductByItemId(segments[4]);
        setProducts(productByItemId[0].item_detail);
        console.log("data from server =>", productByItemId[0].item_detail);
      }
      getProducts();
    }
  }, [pathname, data]);

  return (
    <>
      <main className="flex min-h-screen flex-col items-center mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="bg-white">
          <div className="mx-auto px-4 py-16 sm:py-24 lg:max-w-7xl">
            {products[0]?.price ? (
              <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-5">
                {products.map((product) => (
                  <CategoriesCard
                    key={product.id}
                    id={product.id}
                    category={product.category}
                    title={product.title}
                    description={product.description}
                    image={product.image}
                    price={product.price}
                    color={product.color}
                    url={product.url}
                    name={product.name}
                  />
                ))}
              </div>
            ) : (
              <div className="flex flex-col flex-wrap gap-x-4 gap-y-10 sm:flex-row xl:gap-x-8">
                {products.map((product) => (
                  <CategoriesCard
                    key={product.id}
                    id={product.id}
                    category={product.category}
                    title={product.title}
                    description={product.description}
                    image={product.image}
                    color={product.color}
                    url={product.url}
                    name={product.name}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
