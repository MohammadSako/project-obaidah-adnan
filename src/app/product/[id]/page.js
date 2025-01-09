"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import ProductDetailPage from "../../../components/product-details/productDetailPage";
import { getProductByPathname, searchedProducts } from "@/lib/db/products";
import NotFound from "@/app/not-found";
import RelatedProducts from "@/components/helpers/related-products";

function ProductDetails() {
  const [products, setproducts] = useState([]);
  const [related, setRelated] = useState([]);
  const pathname = usePathname();
  const path = pathname.slice(1); // Remove the first character
  useEffect(() => {
    async function getDetails() {
      const { product } = await getProductByPathname(path);
      const value = product[0].gender;
      const response = await searchedProducts([value]);
      setproducts(product[0]);
      setRelated(response.combinedResults);
    }
    getDetails();
  }, [path]);

  if (!products) {
    return <NotFound />;
  }

  return (
    <>
      <ProductDetailPage products={products} />
      {related.length > 0 && <RelatedProducts data={related} />}
    </>
  );
}

export default ProductDetails;
