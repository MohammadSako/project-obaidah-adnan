"use client";
import { Suspense, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import ProductDetailPage from "../../../components/product-details/productDetailPage";
import { getProductByPathname, searchedRelatedProducts } from "@/lib/db/products";
import NotFound from "@/app/not-found";
import RelatedProducts from "../components/related-products";
import { ProductDetailsSkeleton } from "@/components/UI/skeletons";

function ProductDetails() {
  const [products, setproducts] = useState([]);
  const [related, setRelated] = useState([]);
  const pathname = usePathname();
  const path = pathname.slice(1); // Remove the first character
  useEffect(() => {
    async function getDetails() {
      const { product } = await getProductByPathname(path);
      const value = product[0].type;
      const response = await searchedRelatedProducts([value]);
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
      <Suspense fallback={<ProductDetailsSkeleton />}>
        <ProductDetailPage products={products} />
      </Suspense>
      {related.length > 0 && <RelatedProducts data={related} />}
    </>
  );
}

export default ProductDetails;
