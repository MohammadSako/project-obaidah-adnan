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

export const getCategories = cache(async function () {
  try {
    const categories = await prisma.inventory.findMany();
    return { categories };
  } catch (error) {
    return { error };
  }
});
export const getMenCategories = cache(async function (category) {
  try {
    const men_categories = await prisma.inventory.findMany({
      where: { category },
    });
    return { men_categories };
  } catch (error) {
    return { error };
  }
});

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
