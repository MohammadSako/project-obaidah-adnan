import { z } from "zod";

export const ProductFormSchema = z.object({
    dashboardtype: z.string().min(1, {
      message: "Username must be at least 2 characters.",
    }),
    title: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    color: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    price: z.string().min(1, {
      message: "Username must be at least 1 characters.",
    }),
    size: z.string().min(1, { message: "Please select the product size." }),
    gender: z.string().min(1, {
      message: "Username must be at least 2 characters.",
    }),
    type: z.string().min(1, {
      message: "Username must be at least 2 characters.",
    }),
    category: z.string().min(1, {
      message: "Username must be at least 2 characters.",
    }),
    description: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    details: z
      .string()
      .min(2, {
        message: "Details must be at least 10 characters.",
      })
      .max(160, {
        message: "Details must not be longer than 30 characters.",
      }),
  });