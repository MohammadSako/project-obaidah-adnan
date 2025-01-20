"use client";

import NotFound from "../../UI/product-not-found";
import CategoriesCard from "@/components/helpers/catgories/categoriesCard";
import { CardImagesSkeleton } from "@/components/UI/skeletons";
import { getProductByItemId } from "@/lib/db/products";
import { usePathname } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

export default function CategoriesPage({ data }) {
  const [products, setProducts] = useState([]);
  const [title, setTitle] = useState("");
  const pathname = usePathname();
  console.log(">>>>>>>>>", products);
  
  useEffect(() => {
    const pathMapping = {
      "/en/categories/men/clothing": () => data[0].SubCategory || [],
      "/ar/categories/men/clothing": () => data[0].SubCategory || [],
      "/en/categories/men/clothing/top": () => data[0]?.SubCategory[0]?.items || [],
      "/ar/categories/men/clothing/top": () => data[0]?.SubCategory[0]?.items || [],
      "/en/categories/men/clothing/lower": () => data[0]?.SubCategory[1]?.items || [],
      "/ar/categories/men/clothing/lower": () => data[0]?.SubCategory[1]?.items || [],
      "/en/categories/men/shoes": () => data[2]?.SubCategory[0]?.items || [],
      "/ar/categories/men/shoes": () => data[2]?.SubCategory[0]?.items || [],
      "/en/categories/women/clothing": () => data[1]?.SubCategory || [],
      "/ar/categories/women/clothing": () => data[1]?.SubCategory || [],
      "/en/categories/women/clothing/top": () => data[1]?.SubCategory[0]?.items || [],
      "/ar/categories/women/clothing/top": () => data[1]?.SubCategory[0]?.items || [],
      "/en/categories/women/clothing/lower": () => data[1]?.SubCategory[1]?.items || [],
      "/ar/categories/women/clothing/lower": () => data[1]?.SubCategory[1]?.items || [],
      "/en/categories/women/shoes": () => data[3]?.SubCategory[0]?.items || [],
      "/ar/categories/women/shoes": () => data[3]?.SubCategory[0]?.items || [],
    };
    if (pathMapping[pathname]) {
      setProducts(pathMapping[pathname]());
      setTitle(""); // Reset title for static paths
    } else {
      fetchDynamicProducts();
    }
    async function fetchDynamicProducts() {
      const parts = pathname.split("/");
      const lastPart = parts[parts.length - 1];
      if (lastPart) {
        try {
          const { productByItemId } = await getProductByItemId(lastPart);
          if (productByItemId?.length > 0) {
            setProducts(productByItemId[0]?.item_detail || []);
            setTitle(productByItemId[0]?.title || "");
          }
        } catch (error) {
          console.error("Error fetching products:", error);
        }
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
              {/* {title && <p className="text-3xl text-center my-4 text-gray-600">{title}</p>} */}
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
                <div className="flex flex-col flex-wrap gap-x-4 sm:gap-y-10 gap-y-2 sm:flex-row xl:gap-x-8">
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