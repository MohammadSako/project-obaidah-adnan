"use client";

import CategoriesCard from "@/components/helpers/catgories/categoriesCard";
import { getProductByUrl } from "@/lib/db/products";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function CategoriesPage({ data }) {
  const [products, setProducts] = useState([]);
  const pathname = usePathname();
  // console.log("products", products[0]?.SubCategory);
  console.log("products", products);
  console.log("products length", products.length);

  useEffect(() => {
    // const pathParts = pathname.split("/");
    // const category = pathParts[pathParts.length - 1];
    // console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&", category);
    // async function getProducts() {
    //   const { productByUrl } = await getProductByUrl(pathname);
    //   setProducts(productByUrl);
    //   console.log("$$$$$$$$$$$$$$$$$", productByUrl);
    // }
    // getProducts();

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
      default:
        // Handle unknown paths or provide a fallback
        console.warn("Unknown path:", pathname);
        break;
    }
  }, [pathname, data]);

  return (
    <>
      <main className="flex min-h-screen flex-col items-center mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="bg-white">
          <div className="mx-auto px-4 py-16 sm:py-24 lg:max-w-7xl">
            {products.length <= 2 ? (
              <div className="flex flex-col flex-wrap gap-x-4 gap-y-10 sm:flex-row xl:gap-x-8">
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
            )}
          </div>
        </div>
      </main>
    </>
  );
}
