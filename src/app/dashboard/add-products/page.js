"use client";

import { addProduct } from "@/lib/db/products";
import { DashForm } from "../components/dash-form";
import { revalidatePath } from "next/cache";

export default function addProducts() {
  async function addProductHandle(data) {
    try {
      await addProduct(data);
    } catch (error) {
      console.error("Error adding product:", error);
    }
    revalidatePath('/')
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
      <DashForm onAddProduct={addProductHandle} />
    </>
  );
}
