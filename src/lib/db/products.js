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
        OR: [
          {
            title: {
              contains: value,
              mode: "insensitive",
            },
          },
          {
            titleAr: {
              contains: value,
              mode: "insensitive",
            },
          },
        ],
      },
      select: {
        title: true,
        titleAr: true,
        id: true,
        image: true,
        description: true,
        descriptionAr: true,
        price: true,
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
          titleAr: {
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

//Get Product by "searchedRelatedProducts" Value
export async function searchedRelatedProducts(values) {
  if (!Array.isArray(values) || values.length === 0) {
    throw new Error("Please provide an array of search terms.");
  }
  try {
    const itemDetails = await prisma.itemDetail.findMany({
      where: {
        OR: values.map((value) => ({
          type: {
            contains: value,
            mode: "insensitive",
          },
        })),
      },
    });
    const combinedResults = [
      ...itemDetails.map((detail) => ({
        ...detail,
        source: "ItemDetail",
      })),
    ];
    return { combinedResults };
  } catch (error) {
    console.error("Error while searching in products:", error);
    return { error };
  }
}

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

// Add Products
export async function addProduct(productData) {
  try {
    const product = await prisma.itemDetail.create({
      data: {
        title: productData.title,
        titleAr: productData.titleAr,
        color: productData.color,
        colorAr: productData.colorAr,
        size: productData.size,
        price: parseInt(productData.price),
        image: productData.image,
        alt: productData.alt,
        gender: productData.gender,
        type: productData.type,
        category: parseInt(productData.category),
        description: productData.description,
        descriptionAr: productData.descriptionAr,
        details: productData.details,
        detailsAr: productData.detailsAr,
        dashboardType: productData.dashboardtype,
        imageid: productData.imageid,
        qty: parseInt(productData.qty),
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
        titleAr: productData.titleAr,
        color: productData.color,
        colorAr: productData.colorAr,
        size: productData.size,
        price: parseInt(productData.price),
        image: productData.image,
        alt: productData.alt,
        gender: productData.gender,
        type: productData.type,
        description: productData.description,
        descriptionAr: productData.descriptionAr,
        details: productData.details,
        detailsAr: productData.detailsAr,
        category: parseInt(productData.category),
        dashboardType: productData.dashboardtype,
        qty: parseInt(productData.qty),
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

// Carousel

export async function addCarousel(carousel) {
  try {
    const product = await prisma.carouselImages.create({
      data: {
        title: carousel.title,
        titleAr: carousel.titleAr,
        description: carousel.description,
        descriptionAr: carousel.descriptionAr,
        image: carousel.image,
        alt: carousel.alt,
        imageid: carousel.imageid,
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

export const getCarousel = cache(async function () {
  try {
    const carouselData = await prisma.carouselImages.findMany();
    return { carouselData };
  } catch (error) {
    return { error };
  }
});

export async function deleteCarouselById(id) {
  try {
    const carouselData = await prisma.carouselImages.delete({ where: { id } });
    revalidatePath("/");
    revalidatePath("/dashboard");
    return { carouselData };
  } catch (error) {
    return { error };
  }
}

export async function deleteCarouselImage(imageid) {
  try {
    const { data } = await supabase.storage
      .from("shopimages")
      .remove([`carousel_images/${imageid}`]);
    console.log("successfully deleted", data);
  } catch (error) {
    console.error("Error deleting image:", error);
  }
}

// Brand
export async function addBrand(brand) {
  try {
    const product = await prisma.brandsImages.create({
      data: {
        title: brand.title,
        titleAr: brand.titleAr,
        description: brand.description,
        descriptionAr: brand.descriptionAr,
        image: brand.image,
        alt: brand.alt,
        imageid: brand.imageid,
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

export const getBrand = cache(async function () {
  try {
    const brandData = await prisma.brandsImages.findMany();
    return { brandData };
  } catch (error) {
    return { error };
  }
});

export async function deleteBrandById(id) {
  try {
    const carouselData = await prisma.brandsImages.delete({ where: { id } });
    revalidatePath("/");
    revalidatePath("/dashboard");
    return { carouselData };
  } catch (error) {
    return { error };
  }
}

export async function deleteBrandImage(imageid) {
  try {
    const { data } = await supabase.storage
      .from("shopimages")
      .remove([`brand_images/${imageid}`]);
    console.log("successfully deleted", data);
  } catch (error) {
    console.error("Error deleting image:", error);
  }
}

// Advertisment
export async function addAdvertisment(advertisement) {
  try {
    const product = await prisma.advertisements.create({
      data: {
        title: advertisement.title,
        titleAr: advertisement.titleAr,
        description: advertisement.description,
        descriptionAr: advertisement.descriptionAr,
        image: advertisement.image,
        alt: advertisement.alt,
        imageid: advertisement.imageid,
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

export const getAdvertisment = cache(async function () {
  try {
    const advertismentData = await prisma.advertisements.findMany();
    return { advertismentData };
  } catch (error) {
    return { error };
  }
});

export async function deleteAdvertismentById(id) {
  try {
    const advertismentData = await prisma.advertisements.delete({
      where: { id },
    });
    revalidatePath("/");
    revalidatePath("/dashboard");
    return { advertismentData };
  } catch (error) {
    return { error };
  }
}

export async function deleteAdvertismentImage(imageid) {
  try {
    const { data } = await supabase.storage
      .from("shopimages")
      .remove([`advertisement_images/${imageid}`]);
    console.log("successfully deleted", data);
  } catch (error) {
    console.error("Error deleting image:", error);
  }
}

export async function addCustomerData(customerData) {
  if (!customerData || !Array.isArray(customerData.items)) {
    console.error("Invalid customer data format.");
    return { error: "Invalid customer data format." };
  }

  try {
    // Create the customer order in the database
    const custData = await prisma.customersOrders.create({
      data: {
        additional: customerData.additional,
        city: customerData.city,
        delivered: customerData.delivered,
        email: customerData.email,
        firstline: customerData.firstline,
        firstname: customerData.firstname,
        lastname: customerData.lastname,
        phonenumber: customerData.phonenumber,
        secondline: customerData.secondline,
        totalall: parseInt(customerData.totalall),
        items: {
          create: customerData.items.map((item) => ({
            alt: item.alt,
            category: parseInt(item.category),
            color: item.color,
            colorAr: item.colorAr,
            dashboardType: item.dashboardType,
            description: item.description,
            descriptionAr: item.descriptionAr,
            details: item.details,
            detailsAr: item.detailsAr,
            gender: item.gender,
            id: item.id,
            image: item.image,
            imageid: item.imageid,
            price: parseInt(item.price),
            quantity: parseInt(item.quantity),
            size: item.size,
            title: item.title,
            titleAr: item.titleAr,
            totalPrice: parseInt(item.totalPrice),
            type: item.type,
          })),
        },
      },
      include: {
        items: true,
      },
    });
    // Update item quantities in the database for each item
    const updateQtyPromises = customerData.items.map((item) =>
      prisma.itemDetail.update({
        where: { id: item.id }, // Corrected: match the item by its ID
        data: {
          qty: {
            decrement: item.quantity, // Decrease by the quantity of the ordered item
          },
        },
      })
    );

    // Wait for all quantity updates to complete
    const updateQtyResults = await Promise.all(updateQtyPromises);

    // Revalidate path after successful update
    revalidatePath("/");

    console.log("Customer Order Created:", custData);
    console.log("Updated Item Quantities:", updateQtyResults);
    return { custData };
  } catch (error) {
    console.error("Error creating customer order:", error);
    return { error: error.message || "An unexpected error occurred" };
  }
}


export const getCustomers = cache(async function () {
  try {
    const customers = await prisma.customersOrders.findMany();
    return { customers };
  } catch (error) {
    return { error: error.message || error }; // Handle errors
  }
});

export async function getOrdersById(id) {
  try {
    const orders = await prisma.customersOrders.findUnique({
      where: {
        id: id,
      },
      include: {
        items: true,
      },
    });
    return { orders };
  } catch (error) {
    return { error: error.message || error }; // Handle errors
  }
}

export async function deleteOrderById(id) {
  try {
    const carouselData = await prisma.customersOrders.delete({ where: { id } });
    revalidatePath("/");
    revalidatePath("/dashboard");
    return { carouselData };
  } catch (error) {
    return { error };
  }
}

export async function updateOrderById(id) {
  try {
    const result = await prisma.customersOrders.update({
      where: { id },
      data: {
        delivered: true,
      },
    });
    revalidatePath("/");
    revalidatePath("/dashboard");
    console.log("customer data updated successfully:", result);
  } catch (error) {
    console.error("Error updating customer data:", error);
    return {
      error: error.message || "An error occurred while updating customer data",
    };
  }
}

// https://www.prisma.io/docs/orm/prisma-client/queries/crud#create
// https://supabase.com/docs/reference/javascript/update
