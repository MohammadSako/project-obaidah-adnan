// import { getProductByCategory } from "@/lib/db/products";
import CategoriesPage from "../../../components/helpers/catgories/categories-page";

export default async function Page() {
  // const { productByCategory } = await getProductByCategory("msnow");

  // console.log("getProductByCategory.................", productByCategory);

  return (
    <>
      <CategoriesPage />
    </>
  );
}
