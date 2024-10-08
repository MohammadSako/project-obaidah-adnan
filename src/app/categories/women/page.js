// "use client";

import React from "react";
// import { motion } from "framer-motion";
import ProductList from "../../../components/categories/product-list";
import { getProducts } from "@/lib/db/products";

export default async function WomenPage() {
  const { products = [] } = await getProducts();

  return (
    // <motion.section
    //   initial={{ opacity: 0 }}
    //   whileInView={{ opacity: 1 }}
    //   viewport={{ once: true }}
    //   transition={{ duration: 0.8, delay: 0.3 }}
    //   className="flex flex-col items-center my-2 gap-4 w-full overflow-hidden origin-center"
    // >
    <main className="flex min-h-screen flex-col items-center mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <ProductList products={products} />
    </main>
    // </motion.section>
  );
}
