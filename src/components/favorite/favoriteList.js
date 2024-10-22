import Image from "next/image";
import { useItemStore } from "../../lib/store";

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/

export default function FavoriteList() {
  const favorite = useItemStore((state) => state.favorite);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {favorite.map((product) => (
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
