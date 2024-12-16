"use server";

import { revalidatePath } from "next/cache";
// import { delay } from './utils'
import prisma from "./prisma";
import { cache } from "react";

export const getProducts = cache(async function () {
  try {
    const products = await prisma.itemDetail.findMany();
    // const products = await prisma.items.findMany();
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
        types: {
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
// export const getProductByCategory = cache(async function () {
//   console.log("server........",data);

//   try {
//     // Fetch all categories with their types and items
//     const data = await prisma.item.findMany({
//       where: {
//         category: mshirt, // Filter by the category
//       },
//       include: {
//         itemDetail: true, // Include the related ItemDetail entries (sub-items)
//       },
//     });

//     return { data }; // Return the categories object
//   } catch (error) {
//     return { error: error.message || error }; // Handle errors
//   }
// });

// to find a specific type..
// export const getProducts = cache(async function () {
//   try {
//     const products = await prisma.items.findMany({where: {title: {equals: "shirt"}}});
//     return { products };
//   } catch (error) {
//     return { error };
//   }
// });

export async function addProduct(productData) {
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
        description: productData.description,
        details: productData.details,
        category: productData.category,
        dashboardType: productData.dashboardtype,
        url: productData.title,
      },
    });
    revalidatePath("/", "/dashboard");
    return { product };
  } catch (error) {
    console.error("Error creating product:", error);
    return { error: error.message || "An unexpected error occurred" };
  }
}

export async function getProductsById(id) {
  try {
    const products = await prisma.items.findUnique({ where: { id } });
    return { products };
  } catch (error) {
    return { error };
  }
}

// export async function getTodosByUserId(userId: string) {
//   try {
//     await delay(1000)
//     const todos = await prisma.todo.findMany({ where: { userId } })
//     return { todos }
//   } catch (error) {
//     return { error }
//   }
// }

// export const getTodosByUserId = cache(async function (userId: string) {
//   try {
//     await delay(1000)
//     const todos = await prisma.todo.findMany({ where: { userId } })
//     return { todos }
//   } catch (error) {
//     return { error }
//   }
// })

// export async function getTodos() {
//   try {
//     console.log('getTodos')
//     const todos = await prisma.todo.findMany()
//     return { todos }
//   } catch (error) {
//     return { error }
//   }
// }

// export const getTodos = cache(async function () {
//   try {
//     console.log('getTodos')
//     const todos = await prisma.todo.findMany()
//     return { todos }
//   } catch (error) {
//     return { error }
//   }
// })

// export async function createTodo(title: string, userId: string) {
//   try {
//     const todo = await prisma.todo.create({ data: { title, userId } })
//     return { todo }
//   } catch (error) {
//     return { error }
//   }
// }

// export async function getTodoById(id: string) {
//   try {
//     const todo = await prisma.todo.findUnique({ where: { id } })
//     return { todo }
//   } catch (error) {
//     return { error }
//   }
// }

// export async function updateTodo(id: string, isCompleted: boolean) {
//   try {
//     const todo = await prisma.todo.update({
//       where: { id },
//       data: { isCompleted }
//     })
//     return { todo }
//   } catch (error) {
//     return { error }
//   }
// }
