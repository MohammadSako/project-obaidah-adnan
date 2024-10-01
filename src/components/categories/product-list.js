import Image from "next/image";
import Link from "next/link";

export default function ProductList() {

  const products = [
    {
      id: 1,
      name: "Basic Tee",
      href: "1",
      src: "/c3.jpg",

      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "Black",
    },
    {
      id: 2,
      name: "Basic Tee",
      href: "2",
      src: "/c2.jpg",

      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "gray",
    },
    {
      id: 3,
      name: "Basic Tee",
      href: "3",
      src: "/c3.jpg",

      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "Black",
    },
    {
      id: 4,
      name: "Basic Tee",
      href: "4",
      src: "/c2.jpg",

      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "gray",
    },
    {
      id: 5,
      name: "Basic Tee",
      href: "5",
      src: "/c3.jpg",

      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "Black",
    },
  ];

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <Link key={product.id} href={product.href}>
              <div key={product.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <Image
                    src={product.src}
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                    width={200}
                    height={200}
                    alt={product.imageAlt}
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.color}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    {product.price}
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
