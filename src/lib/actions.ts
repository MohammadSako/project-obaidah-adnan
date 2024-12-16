// "use server";

// import arcjet, { shield, detectBot, fixedWindow, request } from "@arcjet/next";
// import { ProductFormSchema } from "./schemas";

// type AddActionState = {
//   success?: string;
//   error?: string;
// };

// const aj = arcjet({
//   key: process.env.ARCJET_KEY!,
//   rules: [
//     shield({
//       mode: "LIVE",
//     }),
//     detectBot({
//       mode: "LIVE",
//       allow: [],
//     }),
//     fixedWindow({
//       mode: "LIVE",
//       window: "1m",
//       max: 5,
//     }),
//   ],
// });

// export async function addProductAction(
//   state: AddActionState,
//   formData: FormData
// ) {
//   try {
//     const req = await request();
//     const decision = await aj.protect(req);

//     if (decision.isDenied()) {
//       if (decision.reason.isRateLimit()) {
//         return {
//           error: "Too many registration attempts. Please try again later.",
//         };
//       }
//       if (decision.reason.isBot()) {
//         return {
//           error: "You are a bot. Please go away.",
//         };
//       }
//       return {
//         error: "An error occurred during registration.",
//       };
//     }

//     const data = Object.fromEntries(formData.entries());
//     const result = ProductFormSchema.safeParse(data);

//     if (!result.success) {
//       return { error: result.error.errors[0].message };
//     }

//     const title = data.title as string;
//     await getAction(title);
//     return { success: "Todo added successfully." };
//   } catch (error: unknown) {
//     return { error: (error as Error)?.message || "Failed to add todo." };
//   } finally {
//     // revalidatePath("/");
//   }
// }

// //https://github.com/HamedBahram/next-forms/tree/main/lib
