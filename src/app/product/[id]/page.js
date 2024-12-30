"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import ProductDetailPage from "../../../components/product-details/productDetailPage";
import { getProductsById } from "@/lib/db/products";

function ProductDetails() {
  const pathname = usePathname();
  const [products, setproducts] = useState([]);
  
  useEffect(() => {
    async function getDetails() {
      const { product = [] } = await getProductsById(pathname);
      console.log("NNNNNNNNNNNNNNNN", product);
      setproducts(product);
    }
    getDetails();
  }, [pathname]);

  // return <ProductDetailPage products={products} />;
}

export default ProductDetails;
