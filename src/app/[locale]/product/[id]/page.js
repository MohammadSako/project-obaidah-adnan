"use client";
import { Suspense, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import ProductDetailPage from "../../../../components/product-details/productDetailPage";
import { getProductsById, searchedRelatedProducts } from "@/lib/db/products";
import NotFound from "@/app/not-found";
import RelatedProducts from "../components/related-products";
import { ProductDetailsSkeleton } from "@/components/UI/skeletons";

function ProductDetails() {
  const [products, setproducts] = useState([]);
  const [related, setRelated] = useState([]);
  const param = useParams()
  
  useEffect(() => {
    async function getDetails() {
      const { products } = await getProductsById(param.id);
      const value = products.type;
      const response = await searchedRelatedProducts([value]);
      setproducts(products);
      setRelated(response.combinedResults);
    }
    getDetails();
  }, [param.id]);

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
