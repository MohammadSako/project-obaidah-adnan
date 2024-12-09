"use client";

import { addProduct } from "@/lib/db/products";
import { DashForm } from "../components/dash-form";

export default function Dashboard() {
  async function addProductHandle(data) {
    const productData = {
      alt: data.alt,
      category: parseInt(data.category),
      color: data.color,
      dashboardtype: data.dashboardtype,
      description: data.description,
      details: data.details,
      gender: data.gender,
      image: data.image,
      price: data.price,
      size: data.size,
      title: data.title,
      type: data.type,
    };

    console.log("@!@!@!!!@!@!@!@!@!@!", productData);

    try {
      await addProduct(productData);
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
      <DashForm onAddProduct={addProductHandle} />
    </>
  );
}
