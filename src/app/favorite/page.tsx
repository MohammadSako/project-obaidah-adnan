// "use client";

// import React from "react";
// import FavoriteList from "../../components/favorite/favoriteList";
// import { useItemStore } from "@/lib/store";
// import { Button } from "../../components/UI/button";
// import Link from "next/link";
// import { IoArrowBackOutline } from "react-icons/io5";

// function Favorite() {
//   const totalFavQuantity = useItemStore((state) => state.totalFavQuantity);

//   return (
//     <main className="flex min-h-screen flex-col items-center mx-auto max-w-7xl px-6 sm:px-6 lg:px-14">
//       <div className="font-sans">
//         <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
//           Your favorites
//         </h2>

//         <Link href="/">
//           <Button variant="outline" className="my-4 rounded-full">
//             <IoArrowBackOutline className="mr-2" />
//             Back to Items
//           </Button>
//         </Link>

//         <p className="font-bold">Favorites</p>
//         <p>{totalFavQuantity} items</p>
//         <FavoriteList />
//       </div>
//     </main>
//   );
// }

// export default Favorite;

"use client";

import React from "react";
import FavoriteList from "../../components/favorite/favoriteList";
import { useItemStore } from "@/lib/store";
import { Button } from "../../components/UI/button";
import Link from "next/link";
import { IoArrowBackOutline } from "react-icons/io5";

function FavoritePage() {
  const { totalFavQuantity } = useItemStore();

  return (
    <main className="min-h-screen px-6 sm:px-6 lg:px-20">
      {totalFavQuantity === 0 && (
        <div>
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
          Favourites is empty
          </h2>
          <Link href="/">
            <Button variant="outline" className="my-4 rounded-full">
              <IoArrowBackOutline className="mr-2" />
              Back to Items
            </Button>
          </Link>
          <p className="text-gray-500">
            This list is currently empty. Look around to find items you’d like
            to compare to save for your future home. We’ll keep them here until
            you’re ready for them.{" "}
          </p>
        </div>
      )}
      {totalFavQuantity > 0 && (
        <div>
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
            Your favorites
          </h2>
          <div className="flex md:flex-row flex-col-reverse font-sans justify-center gap-10 ">
            <div className="basis-3/5">
            <p>{totalFavQuantity} items</p>
              <FavoriteList />
            </div>
            <div className="basis-2/5">
              <div className="space-y-4 font-sans">
                <p className="text-lg font-semibold my-2">Order summary</p>
                <div className="flex flex-row justify-between">
                  <p className="">Products ({totalFavQuantity})</p>
                  <p className="">JD{totalFavQuantity}</p>
                </div>
                <div className="border-t-2 border-black py-2 space-y-3">
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <p className="font-bold">Subtotal incl. VAT</p>
                    <p className="text-2xl font-bold">
                      <span className="text-sm">JD</span>
                      {totalFavQuantity}
                    </p>
                  </div>
                  <p className="mt-0.5 text-sm text-gray-500">
                    By clicking &quot;check out&quot; you&apos;re agreeing to
                    our <Link href="#">Privacy Policy</Link>
                  </p>

                  <div>
                    <Link
                      href="#"
                      className="flex items-center justify-center rounded-full border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                    >
                      Go to checkout
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default FavoritePage;
