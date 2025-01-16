import { getAllCategory } from "@/lib/db/products";
import CategoriesPage from "../../../../components/helpers/catgories/categories-page";

export default async function Page() {
    const { categories } = await getAllCategory();

  return <CategoriesPage data={categories} />;
}
