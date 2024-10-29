// import Image from "next/image";
// import { useItemStore } from "../../lib/store";
// import Link from "next/link";

// /*
//   This example requires some changes to your config:
  
//   ```
//   // tailwind.config.js
//   module.exports = {
//     // ...
//     plugins: [
//       // ...
//       require('@tailwindcss/aspect-ratio'),
//     ],
//   }
//   ```
// */

// export default function FavoriteList() {
//   const favorite = useItemStore((state) => state.favorite);

//   return (
//     <div className="bg-white">
//       <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
//         <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
//           {favorite.map((product) => (
//             <Link key={product.id} href="/favorite">
//               <div className="group relative">
//                 <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
//                   <Image
//                     src={product.image}
//                     style={{
//                       width: "100%",
//                       height: "auto",
//                     }}
//                     width={200}
//                     height={200}
//                     alt={product.image}
//                   />
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import Image from "next/image";
import { useItemStore } from "../../lib/store";
import Link from "next/link";

export default function FavoriteList() {
  const favorite = useItemStore((state) => state.favorite);

  return (
    <div className="space-y-4 font-sans">
      <p className="text-lg font-semibold my-2">Order summary</p>
      <div className="flex flex-row justify-between">
        <p className="">Products ({totalQuantity})</p>
        <p className="">JD{totalAllPrice}</p>
      </div>
      <div className="border-t-2 border-black py-6 space-y-4">
        <div className="flex justify-between text-base font-medium text-gray-900">
          <p className="font-bold">Subtotal incl. VAT</p>
          <p className="text-2xl font-bold">
            <span className="text-sm">JD</span>
            {totalAllPrice}
          </p>
        </div>
        <p className="mt-0.5 text-sm text-gray-500">
          By clicking &quot;check out&quot; you&apos;re agreeing to our{" "}
          <Link href="#">Privacy Policy</Link>
        </p>

        <div>
          <Link
            href="#"
            className="flex items-center justify-center rounded-full border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
          >
            Go to checkout
          </Link>
        </div>
        <div className="flex flex-row space-x-2 items-center">
          <RiSecurePaymentLine size={20} />
          <p className="underline">Secure shopping with SSL encryption</p>
        </div>
      </div>
    </div>
  );
}
