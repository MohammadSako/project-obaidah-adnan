// old method .......................
// import { NextApiRequest, NextApiResponse } from 'next';
// import { supabase } from "../lib/supabase";

// export const getProducts = async () => {
//   try {
//     const { data, error } = await supabase.from("items").select();

//     if (error) {
//       console.error("Error fetching products:", error);
//     }

//     if (data) {
//       return data;
//     }
//   } catch (error) {
//     console.error("Unexpected error:", error);
//   }
// };
//  ...................................

// Prisma
import prisma from "./prisma";
// import { delay } from './utils'
import { cache } from "react";

export const getProducts = cache(async function () {
  try {
    const products = await prisma.items.findMany();
    return { products };
  } catch (error) {
    return { error };
  }
});

export async function getProductsById(id: string) {
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
