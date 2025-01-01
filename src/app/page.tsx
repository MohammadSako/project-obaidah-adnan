import { getProducts } from "@/lib/db/products";
import { Landing } from "../components/homescreen/landing";
import { Categories } from "../components/homescreen/categories";
import { YourFavoriteItems } from "../components/homescreen/yourFavoriteItems";
import BestSellers from "@/components/homescreen/best-sellers";
import NewArrivals from "@/components/homescreen/new-arrivals";
import OurBrands from "@/components/homescreen/our-brands";
import { Metadata } from "next";
import { Suspense } from "react";
import { CardSkeleton } from "@/components/UI/skeletons";

export const metadata: Metadata = {
  title: "Obaidah Shop",
};

export default async function Home() {
  const { products = [] } = await getProducts();
 
  return (
    <main className="flex min-h-screen flex-col items-center font-display">
      <Suspense fallback={<CardSkeleton />}>
        <Landing />
      </Suspense>

      {products.length > 0 && <BestSellers data={products} />}
      {products.length > 0 && <NewArrivals data={products} />}
      <YourFavoriteItems />
      <OurBrands />
      <Categories />
      {/* <Advertisement />
      <MediaHub />
      <Testimonials /> */}
    </main>
  );
}
