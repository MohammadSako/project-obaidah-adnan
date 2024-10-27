"use client";

import { Landing } from "../components/homescreen/landing";
import { Categories } from "../components/homescreen/categories";
import { YourFavoriteItems } from "../components/homescreen/yourFavoriteItems";
import { useItemStore } from "../lib/store";

export default function Home() {
  const { favorite } = useItemStore();

  return (
    <main className="flex min-h-screen flex-col items-center font-display">
      <Landing />
      <Categories />
      {favorite.length > 0 && <YourFavoriteItems data={favorite} />}
      {/* <BestSellers />
      <OurBrands />
      <NewArrivals />
      <Advertisement />
      <MediaHub />
      <Testimonials /> */}
    </main>
  );
}
