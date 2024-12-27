"use client";

import CategoriesCard from "@/components/helpers/catgories/categoriesCard";
import { getProductByCategory, getProductByUrl } from "@/lib/db/products";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function CategoriesPage() {
  const [products, setProducts] = useState([]);
  const [categoryTitle, setCategoryTitle] = useState([]);
  const pathname = usePathname();
  console.log("products", products);
  console.log("categoryTitle", categoryTitle);

  useEffect(() => {
    const pathParts = pathname.split("/");
    const category = pathParts[pathParts.length - 1];
    // console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&", pathname);

    async function getProducts() {
      const { productByUrl } = await getProductByUrl(pathname);
      // const { productByCategory } = await getProductByCategory(category);
      setProducts(productByUrl);
      // setCategoryTitle(productByCategory);
      console.log("$$$$$$$$$$$$$$$$$", productByUrl);
    }
    getProducts();
  }, [pathname]);

  // useEffect(() => {
  //   if (pathname === "/categories/men/clothing") {
  //     const product = [
  //       {
  //         category: "Top Clothing",
  //         title: "",
  //         url: "/categories/men/clothing/top",
  //         id: "mc1",
  //         description: "",
  //         image: "/c3.jpg",
  //         price: "",
  //         color: "",
  //       },
  //       {
  //         category: "Lower Clothing",
  //         title: "",
  //         url: "/categories/men/clothing/lower",
  //         id: "mc2",
  //         description: "",
  //         image: "/c2.jpg",
  //         price: "",
  //         color: "",
  //       },
  //     ];
  //     setProducts(product);
  //   }
  //   if (pathname === "/categories/men/clothing/top") {
  //     const product = [
  //       {
  //         category: "T-Shirts",
  //         title: "",
  //         url: "/categories/men/clothing/top/tshirts",
  //         id: "mct1",
  //         description: "",
  //         image: "/c3.jpg",
  //         price: "",
  //         color: "",
  //       },
  //       {
  //         category: "Shirts",
  //         title: "",
  //         url: "/categories/men/clothing/top/shirts",
  //         id: "mct2",
  //         description: "",
  //         image: "/c2.jpg",
  //         price: "",
  //         color: "",
  //       },
  //       {
  //         category: "Wool blouse",
  //         title: "",
  //         url: "/categories/men/clothing/top/woolblouse",
  //         id: "mct3",
  //         description: "",
  //         image: "/c3.jpg",
  //         price: "",
  //         color: "",
  //       },
  //       {
  //         category: "Hats",
  //         title: "",
  //         url: "/categories/men/clothing/top/hats",
  //         id: "mct4",
  //         description: "",
  //         image: "/c2.jpg",
  //         price: "",
  //         color: "",
  //       },
  //       {
  //         category: "Watches",
  //         title: "",
  //         url: "/categories/men/clothing/top/watches",
  //         id: "mct5",
  //         description: "",
  //         image: "/c3.jpg",
  //         price: "",
  //         color: "",
  //       },
  //     ];
  //     setProducts(product);
  //   }
  //   if (pathname === "/categories/men/clothing/top/tshirt") {
  //     const product = [
  //       {
  //         title: "Shirts",
  //         url: "/product/Shirt",
  //         id: "mct1",
  //         description: "White t-shirt, cotton, fit",
  //         image: "/c2.jpg",
  //         price: "25",
  //         color: "White",
  //       },
  //       {
  //         title: "Shirts2",
  //         url: "/product/Shirt2",
  //         id: "mct2",
  //         description: "White t-shirt, cotton, fit",
  //         image: "/c2.jpg",
  //         price: "25",
  //         color: "White",
  //       },
  //       {
  //         title: "Shirts3",
  //         url: "/product/Shirt3",
  //         id: "mct3",
  //         description: "White t-shirt, cotton, fit",
  //         image: "/c2.jpg",
  //         price: "25",
  //         color: "White",
  //       },
  //     ];
  //     setProducts(product);
  //   }
  //   if (pathname === "/product/") {
  //     const product = [
  //       {
  //         title: "Shirt",
  //         url: "/product/Shirt",
  //         id: "mct1",
  //         description: "White t-shirt, cotton, fit",
  //         image: "/c2.jpg",
  //         price: "25",
  //         color: "White",
  //         size: "xl",
  //       },
  //     ];
  //     setProducts(product);
  //   }
  // }, [pathname]);

  return (
    <>
      <main className="flex min-h-screen flex-col items-center mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        {/* <p className="text-4xl mt-8 text-gray-600 font-sans font-bold">
          {categoryTitle[0].name}
        </p> */}
        <div className="bg-white">
          <div className="mx-auto px-4 py-16 sm:py-24 lg:max-w-7xl">
            <div className="flex flex-col flex-wrap gap-x-4 gap-y-10 sm:flex-row xl:gap-x-8">
              {products.map((product) => (
                <CategoriesCard
                  key={product.category_id}
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
            {/* {pathname === "/categories/men/clothing" ? (
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
                    title={product.title}
                  />
                ))}
              </div>
            )} */}
          </div>
        </div>
      </main>
    </>
  );
}
