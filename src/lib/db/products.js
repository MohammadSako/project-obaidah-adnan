"use server";

import { revalidatePath } from "next/cache";
import prisma from "./prisma";
import { cache } from "react";
import { supabase } from "../supabase";

export const getProducts = cache(async function () {
  try {
    const products = await prisma.itemDetail.findMany();
    return { products };
  } catch (error) {
    return { error };
  }
});

// To get the menu categories
export const getAllCategory = cache(async function () {
  try {
    // Fetch all categories with their types and items
    const categories = await prisma.category.findMany({
      include: {
        SubCategory: {
          include: {
            items: true, // Include all items for each type
          },
        },
      },
    });
    return { categories }; // Return the categories object
  } catch (error) {
    return { error: error.message || error }; // Handle errors
  }
});

export async function getProductByCategory(data) {
  try {
    const productByCategory = await prisma.item.findMany({
      where: {
        category: data,
      },
      include: {
        details: true,
      },
    });
    return { productByCategory };
  } catch (error) {
    return { error: error.message || error }; // Handle errors
  }
}

export async function getProductByUrl(url) {
  try {
    const productByUrl = await prisma.category.findMany({
      where: {
        url: url,
      },
      include: {
        SubCategory: {
          include: {
            items: true,
          },
        },
      },
    });
    return { productByUrl };
  } catch (error) {
    return { error: error.message || error }; // Handle errors
  }
}

export async function getProductByItemId(itemId) {
  try {
    const productByItemId = await prisma.item.findMany({
      where: {
        itemid: itemId,
      },
      include: {
        item_detail: true,
      },
    });
    return { productByItemId };
  } catch (error) {
    return { error: error.message || error }; // Handle errors
  }
}

// Get Product name by Searching
export async function searchInProducts(value) {
  try {
    const itemDetails = await prisma.itemDetail.findMany({
      where: {
        title: {
          contains: value,
          mode: "insensitive",
        },
      },
      select: {
        title: true,
        id: true,
      },
    });
    // const items = await prisma.item.findMany({
    //   where: {
    //     title: {
    //       contains: value,
    //       mode: "insensitive",
    //     },
    //   },
    //   select: {
    //     title: true,
    //     id: true,
    //   },
    // });
    // Combine the results and differentiate by source
    const combinedResults = [
      ...itemDetails.map((detail) => ({
        ...detail,
        source: "ItemDetail",
      })),
      // ...items.map((item) => ({
      //   ...item,
      //   source: "Item",
      // })),
    ];
    return { combinedResults };
  } catch (error) {
    console.error("Error while searching in products:", error);
    return { error };
  }
}

//Get Product by "searchInProducts" Value
export async function searchedProducts(values) {
  if (!Array.isArray(values) || values.length === 0) {
    throw new Error("Please provide an array of search terms.");
  }
  try {
    const itemDetails = await prisma.itemDetail.findMany({
      where: {
        OR: values.map((value) => ({
          title: {
            contains: value,
            mode: "insensitive",
          },
        })),
      },
    });
    // const items = await prisma.item.findMany({
    //   where: {
    //     OR: values.map((value) => ({
    //       title: {
    //         contains: value,
    //         mode: "insensitive",
    //       },
    //     })),
    //   },
    // });
    // Combine the results and differentiate by source
    const combinedResults = [
      ...itemDetails.map((detail) => ({
        ...detail,
        source: "ItemDetail",
      })),
      // ...items.map((item) => ({
      //   ...item,
      //   source: "Item",
      // })),
    ];
    return { combinedResults };
  } catch (error) {
    console.error("Error while searching in products:", error);
    return { error };
  }
}

//Get By Url
export async function getSearchedProductUrl(id) {
  try {
    const productUrl = await prisma.itemDetail.findMany({
      where: {
        id: id,
      },
      select: {
        url: true,
      },
    });
    return { productUrl };
  } catch (error) {
    return { error: error.message || error }; // Handle errors
  }
}

// fix best seller page by getting data from dashboardType.....

//Get By dashboardType
export async function getBestSellers() {
  try {
    const bestSellers = await prisma.itemDetail.findMany({
      where: {
        dashboardType: "bestsellers",
      },
      // select: {
      //   url: true,
      // },
    });
    return { bestSellers };
  } catch (error) {
    return { error: error.message || error }; // Handle errors
  }
}
export async function getNewArrivals() {
  try {
    const newArrivals = await prisma.itemDetail.findMany({
      where: {
        dashboardType: "newarrival",
      },
      // select: {
      //   url: true,
      // },
    });
    return { newArrivals };
  } catch (error) {
    return { error: error.message || error }; // Handle errors
  }
}
export async function getDiscounted() {
  try {
    const discounted = await prisma.itemDetail.findMany({
      where: {
        dashboardType: "discounted",
      },
      // select: {
      //   url: true,
      // },
    });
    return { discounted };
  } catch (error) {
    return { error: error.message || error }; // Handle errors
  }
}

// Add
export async function addProduct(productData) {
  const itemid = parseInt(productData.category);
  try {
    const product = await prisma.itemDetail.create({
      data: {
        title: productData.title,
        color: productData.color,
        size: productData.size,
        price: productData.price,
        image: productData.image,
        alt: productData.alt,
        gender: productData.gender,
        type: productData.type,
        category: itemid,
        description: productData.description,
        details: productData.details,
        dashboardType: productData.dashboardtype,
        imageid: productData.imageid,
        url: productData.url,
      },
    });
    revalidatePath("/");
    revalidatePath("/dashboard");
    return { product };
  } catch (error) {
    console.error("Error creating product:", error);
    return { error: error.message || "An unexpected error occurred" };
  }
}

//Delete
export async function deleteProductById(id) {
  try {
    const products = await prisma.itemDetail.delete({ where: { id } });
    revalidatePath("/");
    revalidatePath("/dashboard");
    return { products };
  } catch (error) {
    return { error };
  }
}

export async function getProductsById(id) {
  try {
    const products = await prisma.itemDetail.findUnique({ where: { id } });
    return { products };
  } catch (error) {
    return { error };
  }
}

//Update
export async function updateProductById(id, productData) {
  try {
    const result = await prisma.itemDetail.update({
      where: { id },
      data: {
        title: productData.title,
        color: productData.color,
        size: productData.size,
        price: productData.price,
        image: productData.image,
        alt: productData.alt,
        gender: productData.gender,
        type: productData.type,
        description: productData.description,
        details: productData.details,
        category: parseInt(productData.category),
        dashboardType: productData.dashboardtype,
        url: productData.url,
      },
    });
    revalidatePath("/");
    revalidatePath("/dashboard");
    console.log("Product updated successfully:", result);
  } catch (error) {
    console.error("Error updating product:", error);
    return {
      error: error.message || "An error occurred while updating the product",
    };
  }
}

//Delete Image
export async function deleteImageByUrl(imageURL) {
  try {
    const { data } = await supabase.storage
      .from("shopimages")
      .remove([imageURL]);
    console.log("successfully deleted", data);
  } catch (error) {
    console.error("Error deleting image:", error);
  }
}

//Update Image
export async function updateImageByUrl(imageURL, file) {
  try {
    const { data } = await supabase.storage
      .from("shopimages")
      .update([imageURL], file, {
        cacheControl: "3600",
        upsert: true,
      });
    console.log("successfully updated", data);
  } catch (error) {
    console.error("Error updating image:", error);
  }
}

//Get By Pathname
export async function getProductByPathname(path) {
  try {
    const product = await prisma.itemDetail.findMany({
      where: {
        url: path,
      },
    });
    return { product };
  } catch (error) {
    return { error };
  }
}

// https://www.prisma.io/docs/orm/prisma-client/queries/crud#create
// https://supabase.com/docs/reference/javascript/update
