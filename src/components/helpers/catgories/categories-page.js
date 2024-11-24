"use client";

import CategoriesCard from "@/components/helpers/catgories/categoriesCard";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function CategoriesPage() {
  const [products, setProducts] = useState([]);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/categories/men/clothing") {
      const product = [
        {
          category: "Top Clothing",
          title: "",
          url: "/categories/men/clothing/top",
          id: "mc1",
          description: "",
          image: "/c3.jpg",
          price: "",
          color: "",
        },
        {
          category: "Lower Clothing",
          title: "",
          url: "/categories/men/clothing/lower",
          id: "mc2",
          description: "",
          image: "/c2.jpg",
          price: "",
          color: "",
        },
      ];
      setProducts(product);
    }
    if (pathname === "/categories/men/clothing/top") {
      const product = [
        {
          category: "T-Shirts",
          title: "",
          url: "/categories/men/clothing/top/tshirts",
          id: "mct1",
          description: "",
          image: "/c3.jpg",
          price: "",
          color: "",
        },
        {
          category: "Shirts",
          title: "",
          url: "/categories/men/clothing/top/shirts",
          id: "mct2",
          description: "",
          image: "/c2.jpg",
          price: "",
          color: "",
        },
        {
          category: "Wool blouse",
          title: "",
          url: "/categories/men/clothing/top/woolblouse",
          id: "mct3",
          description: "",
          image: "/c3.jpg",
          price: "",
          color: "",
        },
        {
          category: "Hats",
          title: "",
          url: "/categories/men/clothing/top/hats",
          id: "mct4",
          description: "",
          image: "/c2.jpg",
          price: "",
          color: "",
        },
        {
          category: "Watches",
          title: "",
          url: "/categories/men/clothing/top/watches",
          id: "mct5",
          description: "",
          image: "/c3.jpg",
          price: "",
          color: "",
        },
      ];
      setProducts(product);
    }
    if (pathname === "/categories/men/clothing/top/tshirts") {
      const product = [
        {
          title: "Shirts",
          url: "/categories/men/clothing/top/shirts/Shirts",
          id: "mct1",
          description: "White t-shirt, cotton, fit",
          image: "/c2.jpg",
          price: "25",
          color: "White",
        },
        {
          title: "Shirts2",
          url: "/categories/men/clothing/top/shirts/Shirts2",
          id: "mct2",
          description: "White t-shirt, cotton, fit",
          image: "/c2.jpg",
          price: "25",
          color: "White",
        },
        {
          title: "Shirts3",
          url: "/categories/men/clothing/top/shirts/Shirts3",
          id: "mct3",
          description: "White t-shirt, cotton, fit",
          image: "/c2.jpg",
          price: "25",
          color: "White",
        },
      ];
      setProducts(product);
    }
  }, [pathname]);

  return (
    <main className="flex min-h-screen flex-col items-center mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div className="bg-white">
        <div className="mx-auto px-4 py-16 sm:py-24 lg:max-w-7xl">
          {pathname === "/categories/men/clothing" ? (
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
                />
              ))}
            </div>
          ) : pathname === `/categories/men/clothing/top/${""}/${""}` ? (
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-5">
              <p>Details Page</p>
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
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
  // return (
  //   <main className="flex min-h-screen flex-col items-center mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
  //     <div className="bg-white">
  //       <div className="mx-auto px-4 py-16 sm:py-24 lg:max-w-7xl">
  //         {/* <div className="flex flex-col flex-wrap gap-x-4 gap-y-10 sm:flex-row xl:gap-x-8"> */}
  //         <div className="grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-3 gap-5">
  //           {products.map((product) => (
  //             <CategoriesCard
  //               key={product.id}
  //               id={product.id}
  //               category={product.category}
  //               title={product.title}
  //               description={product.description}
  //               image={product.image}
  //               price={product.price}
  //               color={product.color}
  //               url={product.url}
  //             />
  //           ))}
  //         </div>
  //       </div>
  //     </div>
  //   </main>
  // );
}
