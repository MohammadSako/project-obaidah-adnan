import {
  getBestSellers,
  getNewArrivals,
  getDiscounted,
  getCarousel,
  getAdvertisment,
  getBrand,
} from "@/lib/db/products";
import { Landing } from "../components/homescreen/landing";
import { Categories } from "../components/homescreen/categories";
import { YourFavoriteItems } from "../components/homescreen/yourFavoriteItems";
import { Advertisement } from "@/components/homescreen/advertisement";
import BestSellers from "@/components/homescreen/best-sellers";
import NewArrivals from "@/components/homescreen/new-arrivals";
import Discounted from "@/components/homescreen/discounted";
import OurBrands from "@/components/homescreen/our-brands";
import { Metadata } from "next";
import { Suspense } from "react";
import { CardSkeleton } from "@/components/UI/skeletons";

export const metadata: Metadata = {
  title: "Obaidah Shop",
};

export default async function Home() {
  const { carouselData = [] } = await getCarousel();
  const { bestSellers = [] } = await getBestSellers();
  const { newArrivals = [] } = await getNewArrivals();
  const { discounted = [] } = await getDiscounted();
  const { advertismentData = [] } = await getAdvertisment();
  const { brandData = [] } = await getBrand();

  return (
    <main className="flex min-h-screen flex-col items-center font-display">
      <Suspense fallback={<CardSkeleton />}>
        {carouselData.length > 0 && <Landing data={carouselData} />}
      </Suspense>
      <YourFavoriteItems />
      {bestSellers.length > 0 && <BestSellers data={bestSellers} />}
      {discounted.length > 0 && <Discounted data={discounted} />}
      {brandData.length > 0 && <OurBrands data={brandData} />}
      {newArrivals.length > 0 && <NewArrivals data={newArrivals} />}
      {advertismentData.length > 0 && <Advertisement data={advertismentData} />}
      <Categories />
      {/* <MediaHub /> */}
      {/* <Testimonials /> */}
      {/* <Logos /> */}
    </main>
  );
}
