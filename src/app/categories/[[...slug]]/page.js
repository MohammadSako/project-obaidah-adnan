// import { getProductsById } from "../../../lib/db/products";
// import ProductOverView from "../../../components/helpers/productOverView";

// export default async function Page({ params }) {
//   const id = parseInt(params.id);
//   const products = await getProductsById(id);

//   return (
//     <>
//       <ProductOverView data={products} />
//     </>
//   );
// }

import CategoriesPage from "../../../components/helpers/catgories/categories-page";

export default function Page() {

  return (
    <>
      <CategoriesPage />
    </>
  );
}
