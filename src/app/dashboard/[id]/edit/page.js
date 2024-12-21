"use client";

import { UpdateForm } from "@/components/dashboard/dash-update";
import { getProductsById, updateProductById } from "@/lib/db/products";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function UpdateProduct() {
  const param = useParams();
  const router = useRouter();
  const id = parseInt(param.id);
  const [newData, setNewData] = useState("");
  const [data, setData] = useState(false);

  useEffect(() => {
    async function edit() {
      try {
        const { products = [] } = await getProductsById(id);
        setNewData(products);
        setData(true);
      } catch (error) {
        return { error };
      }
    }
    edit();
  }, [id]);

  async function UpdateProductHandle(updateData) {
      console.log("AAAAAAAAAAAAAAAAAA", updateData);
    // try {
    //   if (!updateData || typeof updateData !== "object") {
    //     throw new Error("Invalid update data provided.");
    //   }
    //   await updateProductById(id, updateData);
    //   console.log(`Product with ID ${id} updated successfully.`);
    // } catch (error) {
    //   console.error("Error updating product:", error.message);
    // }
  }

  // async function UpdateProductHandle(updateData) {
  //   // console.log("AAAAAAAAAAAAAAAAAA", updateData);
  //   // setData(true);
  //   try {
  //     await updateProductById({id, updateData});
  //     // router.push("/dashboard");
  //   } catch (error) {
  //     console.error("Error updating product:", error);
  //   }
  //   // finally {
  //   //   setData(false);
  //   // }
  // }

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <header>
        <div className="mx-auto py-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-800">
            Update Product:{" "}
            <span className="font-light text-gray-600 border-2 p-1 border-blue-400 rounded-lg">
              {newData.title}
            </span>
          </h1>
        </div>
      </header>
      <UpdateForm editData={newData} onUpdateProduct={UpdateProductHandle} />
    </>
  );
}
export default UpdateProduct;

// // https://supabase.com/docs/reference/javascript/storage-from-update
// // https://supabase.com/docs/reference/javascript/update
