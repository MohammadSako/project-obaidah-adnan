import { Landing } from "../components/homescreen/landing";
import { Categories } from "../components/homescreen/categories";
// import { supabase } from "@/lib/supabase";

export default function Home() {
  // const addNewProduct = async () => {
  //   const { data, error } = await supabase.from("items").insert({
  //     title: "T-Shert",
  //     price: 10,
  //     color: "White",
  //     size: "lg",
  //     image:
  //       "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-03.jpg",
  //   });
  //   if (data) console.log(data);
  //   if (error) console.log(error);
  // };
  // addNewProduct();

  return (
    <main className="flex min-h-screen flex-col items-center font-display">
      <Landing />
      <Categories />
    </main>
  );
}
