
import React from "react";
import ProductList from "../../../components/categories/product-list";
import { getProducts } from "@/lib/db/products";
// import { supabase } from "../../../lib/supabase";

export default async function MenPage() {
  // const [products, setProducts] = useState([]);
  // const getProductsFromSupabase = async () => {
  //   try {
  //     const { data, error } = await supabase.from("items").select();

  //     if (error) {
  //       console.error("Error fetching products:", error);
  //       // Handle the error gracefully, e.g., show an error message or retry
  //     }

  //     if (data) {
  //       setProducts(data);
  //     }
  //   } catch (error) {
  //     console.error("Unexpected error:", error);
  //     // Handle unexpected errors
  //   }
  // };
  // useEffect(() => {
  //   getProductsFromSupabase();
  // }, []);

  const { products = [] } = await getProducts();

  return <ProductList products={products} />;
}
