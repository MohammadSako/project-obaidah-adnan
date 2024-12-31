"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import ProductDetailPage from "../../../components/product-details/productDetailPage";
import { getProductByPathname } from "@/lib/db/products";

function ProductDetails() {
  const [products, setproducts] = useState([]);
  const pathname = usePathname();
  const path = pathname.slice(1);  // Remove the first character

  useEffect(() => {
    async function getDetails() {
      const { product } = await getProductByPathname(path);
      setproducts(product[0]);
    }
    getDetails();
  }, [path]);

  return <ProductDetailPage products={products} />;
}

export default ProductDetails;
