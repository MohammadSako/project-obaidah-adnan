import { getProducts } from "@/lib/db/products";
import { Landing } from "../components/homescreen/landing";
import { Categories } from "../components/homescreen/categories";
import { YourFavoriteItems } from "../components/homescreen/yourFavoriteItems";
import BestSellers from "@/components/homescreen/best-sellers";
import NewArrivals from "@/components/homescreen/new-arrivals";
import OurBrands from "@/components/homescreen/our-brands";

export default async function Home() {
  const { products = [] } = await getProducts();
  return (
    <main className="flex min-h-screen flex-col items-center font-display">
      <Landing />
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
``