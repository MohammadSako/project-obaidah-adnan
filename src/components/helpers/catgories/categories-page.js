"use client";

import NotFound from "@/app/not-found";
import CategoriesCard from "@/components/helpers/catgories/categoriesCard";
import { CardImagesSkeleton } from "@/components/UI/skeletons";
import { getProductByItemId } from "@/lib/db/products";
import { usePathname } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { IoMdArrowBack } from "react-icons/io";

export default function CategoriesPage({ data }) {
  const router = useRouter();
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
        break;
    }

    const segments = pathname.split("/").filter(Boolean);

    if (segments[4]) {
      async function getProducts() {
        const { productByItemId } = await getProductByItemId(segments[4]);
        setProducts(productByItemId[0].item_detail);
      }
      getProducts();
    }
  }, [pathname, data]);

  if (products.length === 0) {
    return <NotFound />;
  }

  return (
    <>
      <div
        className="flex flex-row items-center space-x-1 ml-4 cursor-pointer hover:border-blue-400 w-28 border-2 border-gray-400 px-3 py-1 rounded-md"
        onClick={() => router.back()}
      >
        <IoMdArrowBack size={16} color="#6b7280" />
        <h3 className="text-sm text-gray-500 ">Go back</h3>
      </div>
      <Suspense fallback={<CardImagesSkeleton />}>
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
