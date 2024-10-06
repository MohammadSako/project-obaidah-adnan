import Image from "next/image";
import Link from "next/link";

export default async function ProductList({ products }) {
  // const products = [
  //   {
  //     id: 1,
  //     name: "Basic Tee",
  //     href: "1",
  //     src: "/c3.jpg",

  //     imageAlt: "Front of men's Basic Tee in black.",
  //     price: "$35",
  //     color: "Black",
  //   },
  //   {
  //     id: 2,
  //     name: "Basic Tee",
  //     href: "2",
  //     src: "/c2.jpg",

  //     imageAlt: "Front of men's Basic Tee in black.",
  //     price: "$35",
  //     color: "gray",
  //   },
  //   {
  //     id: 3,
  //     name: "Basic Tee",
  //     href: "3",
  //     src: "/c3.jpg",

  //     imageAlt: "Front of men's Basic Tee in black.",
  //     price: "$35",
  //     color: "Black",
  //   },
  //   {
  //     id: 4,
  //     name: "Basic Tee",
  //     href: "4",
  //     src: "/c2.jpg",

  //     imageAlt: "Front of men's Basic Tee in black.",
  //     price: "$35",
  //     color: "gray",
  //   },
  //   {
  //     id: 5,
  //     name: "Basic Tee",
  //     href: "5",
  //     src: "/c3.jpg",

  //     imageAlt: "Front of men's Basic Tee in black.",
  //     price: "$35",
  //     color: "Black",
  //   },
  // ];

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <Link key={product.id} href={product.title}>
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
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.title}
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.color}
                    </p>
                  </div>
                  <p className="text-lg font-medium text-gray-900">
                    <span className="font-semibold text-red-700">{product.price}</span>{" "}
                    <span className="text-xs -mt-2">JD</span>
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
