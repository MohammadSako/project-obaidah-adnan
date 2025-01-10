"use client";

import NotFound from "@/app/not-found";
import CategoriesCard from "@/components/helpers/catgories/categoriesCard";
import { CardImagesSkeleton } from "@/components/UI/skeletons";
import { getProductByItemId } from "@/lib/db/products";
import { usePathname } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

export default function CategoriesPage({ data }) {
  const [products, setProducts] = useState([]);
  const [title, setTitle] = useState("");
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
        getProducts();
        break;
    }

    function getProducts() {
      const parts = pathname.split("/");
      const lastPart = parts[parts.length - 1];

      if (lastPart) {
        async function getProducts() {
          const { productByItemId } = await getProductByItemId(lastPart);
          setProducts(productByItemId[0].item_detail);
          setTitle(productByItemId[0].title);
        }
        getProducts();
      }
    }
  }, [pathname, data]);

  if (products.length === 0) {
    return <NotFound />;
  }

  return (
    <>
      <Suspense fallback={<CardImagesSkeleton />}>
        <main className="sm:flex min-h-screen flex-col items-center sm:mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="bg-white">
            <div className="mx-auto px-4 sm:py-4 lg:max-w-7xl">
            <p className="text-3xl text-center my-4 text-gray-600">{title}</p>
              {products[0]?.price ? (
                <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-5">
                  {products.map((product) => (
                    <CategoriesCard
                      key={product.id}
                      id={product.id}
                      category={product.category}
                      title={product.title}
                      description={product.description}
                      details={product.details}
                      image={product.image}
                      price={product.price}
                      color={product.color}
                      url={product.url}
                      alt={product.alt}
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
                      alt={product.alt}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </main>
      </Suspense>
    </>
  );
}
