"use client"

import { addProduct } from "@/lib/db/products";
import { DashForm } from "../../../components/dashboard/dash-form";
import { Suspense } from "react";
import { FormSkeleton } from "@/components/UI/skeletons";

export default function AddProducts() {
  async function addProductHandle(data) {
    console.log("addProductHandle", data);
    
    try {
      await addProduct(data);
    } catch (error) {
      console.error("Error adding product:", error);
    }
  }

  return (
    <>
      <header>
        <div className="mx-auto py-6">
          <h1 className="text-3xl font-bold tracking-tight text-slate-800">
            Add Products
          </h1>
        </div>
      </header>
      <Suspense fallback={<FormSkeleton />}>
        <DashForm onAddProduct={addProductHandle} />
      </Suspense>
    </>
  );
}
