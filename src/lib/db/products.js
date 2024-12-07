"use server";

// import { delay } from './utils'
import prisma from "./prisma";
import { cache } from "react";

export const getProducts = cache(async function () {
  try {
    const products = await prisma.items.findMany();
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

export const getProduct = cache(async function () {
  try {
    // const product = await prisma.category.findMany();
    const menCategory = await prisma.category.findUnique({
      where: {
        id: 1, // Replace with the category ID you're interested in
      },
      include: {
        types: {
          include: {
            items: true, // This will include all items in each type
          },
        },
      },
    });
    return { menCategory };
  } catch (error) {
    return { error };
  }
});


// to find a specific type..
// export const getProducts = cache(async function () {
//   try {
//     const products = await prisma.items.findMany({where: {title: {equals: "shirt"}}});
//     return { products };
//   } catch (error) {
//     return { error };
//   }
// });

export async function addProduct(data) {
  try {
    const product = await prisma.items.create({
      data: {
        title: data.title,
        color: data.color,
        size: data.size,
        price: data.price,
        image: data.image,
        alt: data.alt,
        gender: data.gender,
        type: data.type,
        description: data.description,
        details: data.details,
        category: data.category,
        dashboardType: data.dashboardtype,
      },
    });
    console.log("Product created:", product);
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
