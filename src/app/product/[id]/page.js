import { getProductsById } from "@/lib/db/products";
import Image from "next/image";
import React from "react";

async function ProductDetails() {
  // const id = parseInt(params.id);
  const { products = [] } = await getProductsById(3);

  return (
    <div className="bg-white mx-10">
      <div className="pt-6">
        <div className="px-4 pb-16 pt-10 sm:px-6 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            {products.image ? (
              <Image
              src={products.image}
              style={{
                width: "auto",
                height: "auto",
                objectFit: "cover",
              }}
              width={400}
              height={200}
              alt={products.alt || "Product Image"}
            />
            ) : (
              <p className="text-gray-500">No image available.</p>
            )}
          </div>

          <div className="mt-6">
            <div className="flex flex-row justify-between">
              <h1 className="text-2xl font-bold tracking-tight text-gray-500 sm:text-3xl">
                {products.title || "No Title"}
              </h1>
              <p className="text-3xl tracking-tight font-bold text-red-500">
                <span className="text-lg">JD</span> {products.price || "N/A"}
              </p>
            </div>

            <h4 className="text-lg tracking-tight text-gray-500">
              {products?.description}
            </h4>

            <div className="mt-2">
              <div className="flex flex-row justify-between">
                <h3 className="text-xl font-bold text-gray-600">Color</h3>
                <h4 className="text-xl font-medium text-gray-800">
                  {products.color || "N/A"}
                </h4>
              </div>
            </div>
            <div className="mt-2">
              <div className="flex flex-row justify-between">
                <h3 className="text-xl font-bold text-gray-600">Size</h3>
                <h4 className="text-xl font-medium text-gray-800">
                  {products.size || "N/A"}
                </h4>
              </div>
            </div>

            <button
              type="submit"
              className="mt-10 flex w-full items-center justify-center rounded-full border border-transparent bg-indigo-600 px-8 py-3 text-lg font-bold text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Add to bag
            </button>
            <button
              type="submit"
              className="mt-4 flex w-full items-center justify-center rounded-full border border-transparent bg-red-600 px-8 py-3 text-lg font-bold text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Add to favorite
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;


// import { getProductsById } from "../../../lib/db/products";
// import ProductOverView from "../../../components/helpers/productOverView";

// export default async function Page({ params }) {
//   const id = parseInt(params.id);
//   const products = await getProductsById(id);

//   return (
//     <>
//       <ProductOverView data={products} />
//     </>
//   );
// }

// import { getProducts } from "@/lib/db/products";