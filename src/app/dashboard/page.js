"use client";

import { addProduct } from "@/lib/db/products";
import { DashForm } from "./components/dash-form";

export default function Dashboard() {
  
  async function addProductHandle(data) {
    console.log("##################", data);
    try {
      await addProduct(data);
    } catch (error) {
      console.error("Error adding product:", error);
    }
  }

  return (
    <>
      <DashForm onAddProduct={addProductHandle} />
    </>
  );
}

