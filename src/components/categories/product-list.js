import Image from "next/image";
import Link from "next/link";
// import { motion } from "framer-motion";

export default async function ProductList({ products }) {
  return (
    // <motion.section
    //   initial={{ opacity: 0 }}
    //   whileInView={{ opacity: 1 }}
    //   viewport={{ once: true }}
    //   transition={{ duration: 0.8, delay: 0.3 }}
    //   className="flex flex-col items-center my-2 gap-4 w-full overflow-hidden origin-center"
    // >
      <main className="flex min-h-screen flex-col items-center mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {products.map((product) => (
                <Link key={product.id} href={product.id.toString()}>
                  <div key={product.id} className="group relative">
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                      <Image
                        src={product.image}
                        style={{
                          width: "100%",
                          height: "auto",
                        }}
                        width={200}
                        height={200}
                        alt={product.image}
                      />
                    </div>
                    <div className="mt-4 flex justify-between">
                      <div>
                        <p className="text-sm text-gray-700">
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          />
                          {product.title}
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          {product.color}
                        </p>
                      </div>
                      <p className="text-lg font-medium text-gray-900">
                        <span className="font-semibold text-red-700">
                          {product.price}
                        </span>{" "}
                        <span className="text-xs -mt-2">JD</span>
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
    // </motion.section>
  );
}
