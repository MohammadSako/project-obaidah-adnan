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
          title: "Top Clothing",
          url: "/categories/men/clothing/top",
          id: "mc1",
          description: "",
          image: "/c3.jpg",
          price: "",
          color: "",
        },
        {
          title: "Lower Clothing",
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
          title: "T-Shirts",
          url: "/categories/men/clothing/top/tshirts",
          id: "mct1",
          description: "",
          image: "/c1.jpg",
          price: "",
          color: "",
        },
        {
          title: "Shirts",
          url: "/categories/men/clothing/top/shirts",
          id: "mct2",
          description: "",
          image: "/c2.jpg",
          price: "",
          color: "",
        },
        {
          title: "Wool blouse",
          url: "/categories/men/clothing/top/woolblouse",
          id: "mct3",
          description: "",
          image: "/c3.jpg",
          price: "",
          color: "",
        },
        {
          title: "Hats",
          url: "/categories/men/clothing/top/hats",
          id: "mct4",
          description: "",
          image: "/c1.jpg",
          price: "",
          color: "",
        },
        {
          title: "Watches",
          url: "/categories/men/clothing/top/watches",
          id: "mct5",
          description: "",
          image: "/c2.jpg",
          price: "",
          color: "",
        },
      ];
      setProducts(product);
    }
  }, [pathname]);

  return (
    <main className="flex min-h-screen flex-col items-center mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="flex flex-col gap-x-6 gap-y-10 sm:flex-row xl:gap-x-8">
            {products.map((product) => (
              <CategoriesCard
                key={product.id}
                id={product.id}
                title={product.title}
                description={product.description}
                image={product.image}
                price={product.price}
                color={product.color}
                url={product.url}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
