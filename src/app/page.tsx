// "use client";

import { Landing } from "../components/homescreen/landing";
import { Categories } from "../components/homescreen/categories";
// import getCookies from "../../util/getCookies";
// import { useEffect } from "react";
// import { cartActions } from "../../store/cart-slice";
// import store from "../../store";

// interface Items {
//   id: number;
//   title: string;
//   description: string;
//   image: string;
//   price: number;
//   color: string;
// }

export default function Home() {
  // without prisma
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

  // with nookie
  // const cookies = getCookies();
  // useEffect(() => {
  //   return () => {
  //     const items: Items[] = cookies?.["cartItems"]
  //       ? JSON.parse(cookies?.["cartItems"])
  //       : [];

  //     console.log("from Cookies", items);

  //     items?.forEach(({ id, title, price, description, image }) => {
  //       store.dispatch(
  //         cartActions.addItemToCart({
  //           id,
  //           title,
  //           price,
  //           description,
  //           image,
  //         })
  //       );
  //     });
  //   };
  // }, []);

  return (
    <main className="flex min-h-screen flex-col items-center font-display">
      <Landing />
      <Categories />
    </main>
  );
}
