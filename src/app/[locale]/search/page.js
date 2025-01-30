"use client";

import React, { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { searchedProducts } from "@/lib/db/products";
import { CardImagesSkeleton } from "@/components/UI/skeletons";
import CategoriesCard from "@/components/helpers/catgories/categoriesCard";
import NotFound from "../../not-found";

export default function SearchResult() {
  const searchParams = useSearchParams();
  const [products, setProducts] = useState([]);
  const query = searchParams.get("q");
  const output = query?.replace("&", "").trim();

  useEffect(() => {
    async function Search() {
      const response = await searchedProducts([output]);
      if (response.error) {
        console.error("Error fetching results:", response.error);
        setProducts([]);
      } else {
        setProducts(response.combinedResults || []);
      }
    }
    Search();
  }, [output]);

  return (
    <>
      <Suspense fallback={<CardImagesSkeleton />}>
        <main className="flex min-h-screen flex-col items-center mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="bg-white">
            <div className="mx-auto px-4 py-16 sm:py-24 lg:max-w-7xl">
              {products.length > 0 ? (
                <>
                  <h3 className="text-3xl font-bold my-2">
                    &quot;{query}&quot;
                  </h3>
                  <div className="flex flex-row items-center text-sm text-gray-700 space-x-1 cursor-pointer border-gray-700 w-fit border px-3 py-1 rounded-2xl">
                    {products.length} products
                  </div>

                  {/* gray line */}
                  <div className="flex-grow border-t border-gray-200 mt-10" />

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
                        alt={product.alt}
                        size={product.size}
                      />
                    ))}
                  </div>
                </>
              ) : (
                <NotFound />
              )}
            </div>
          </div>
        </main>
      </Suspense>
    </>
  );
}
