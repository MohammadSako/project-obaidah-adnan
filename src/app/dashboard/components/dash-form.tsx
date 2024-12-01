// /*
//   This example requires some changes to your config:

//   ```
//   // tailwind.config.js
//   module.exports = {
//     // ...
//     plugins: [
//       // ...
//       require('@tailwindcss/forms'),
//     ],
//   }
//   ```
// */

// "use client";

// import { useState } from "react";
// import { PhotoIcon } from "@heroicons/react/24/solid";

// export function DashForm() {
//   const [productType, setProductType] = useState("");
//   const [genderType, setGenderType] = useState("");

//   const handleProductTypeChange = (event) => {
//     setProductType(event.target.value);
//   };
//   const handleGenderChange = (event) => {
//     setGenderType(event.target.value);
//   };

//   return (
//     <form>
//       <div className="space-y-12">
//         <div className="border-b border-gray-900/10 pb-12">
//           <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
//             <div className="sm:col-span-2">
//               <label
//                 htmlFor="product-name"
//                 className="block text-sm/6 font-medium text-gray-900"
//               >
//                 Product Name
//               </label>
//               <div className="mt-2">
//                 <input
//                   id="product-name"
//                   name="product-name"
//                   type="text"
//                   className="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
//                 />
//               </div>
//             </div>

//             <div className="sm:col-span-2">
//               <label
//                 htmlFor="product-color"
//                 className="block text-sm/6 font-medium text-gray-900"
//               >
//                 Product Color
//               </label>
//               <div className="mt-2">
//                 <input
//                   id="product-color"
//                   name="product-color"
//                   type="text"
//                   className="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
//                 />
//               </div>
//             </div>

//             <div className="sm:col-span-2">
//               <label
//                 htmlFor="price"
//                 className="block text-sm/6 font-medium text-gray-900"
//               >
//                 Product Price
//               </label>
//               <div className="mt-2">
//                 <input
//                   id="price"
//                   name="price"
//                   type="number"
//                   className="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
//                 />
//               </div>
//             </div>

//             <div className="sm:col-span-2">
//               <label
//                 htmlFor="size"
//                 className="block text-sm/6 font-medium text-gray-900"
//               >
//                 Product Size
//               </label>
//               <div className="mt-2">
//                 <select
//                   id="size"
//                   name="size"
//                   className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm/6"
//                 >
//                   <option>Select Size</option>
//                   <option>3XL</option>
//                   <option>2XL</option>
//                   <option>XL</option>
//                   <option>L</option>
//                   <option>M</option>
//                   <option>S</option>
//                 </select>
//               </div>
//             </div>

//             <div className="sm:col-span-2">
//               <label
//                 htmlFor="gender"
//                 className="block text-sm/6 font-medium text-gray-900"
//               >
//                 Product Gender
//               </label>
//               <div className="mt-2">
//                 <select
//                   id="gender"
//                   name="gender"
//                   value={genderType}
//                   onChange={handleGenderChange}
//                   className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm/6"
//                 >
//                   <option>Select Gender</option>
//                   <option value="men">Men</option>
//                   <option value="women">Women</option>
//                 </select>
//               </div>
//             </div>

//             <div className="sm:col-span-2">
//               <label
//                 htmlFor="gender"
//                 className="block text-sm/6 font-medium text-gray-900"
//               >
//                 Product Type
//               </label>
//               <div className="mt-2">
//                 <select
//                   id="product-type"
//                   name="product-type"
//                   value={productType}
//                   onChange={handleProductTypeChange}
//                   className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm/6"
//                 >
//                   <option value="">Select Type</option>
//                   <option value="top">Top Clothes</option>
//                   <option value="lower">Lower Clothes</option>
//                 </select>
//               </div>
//             </div>

//             {productType === "top" && genderType === "women" && (
//               <div className="sm:col-span-3">
//                 <label
//                   htmlFor="product-category"
//                   className="block text-sm/6 font-medium text-gray-900"
//                 >
//                   Women Top Clothes
//                 </label>
//                 <div className="mt-2">
//                   <select
//                     id="product-category"
//                     name="product-category"
//                     className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm/6"
//                   >
//                     <option value="">Select Category</option>
//                     <option value="tshirt">T Shirt</option>
//                     <option value="shirt">Shirt</option>
//                     <option value="woolblouse">Wool Blouse</option>
//                     <option value="hat">Hat</option>
//                     <option value="watch">Watch</option>
//                     <option value="bag">Bag</option>
//                   </select>
//                 </div>
//               </div>
//             )}
//             {productType === "top" && genderType === "men" && (
//               <div className="sm:col-span-3">
//                 <label
//                   htmlFor="product-category"
//                   className="block text-sm/6 font-medium text-gray-900"
//                 >
//                   Men Top Clothes
//                 </label>
//                 <div className="mt-2">
//                   <select
//                     id="product-category"
//                     name="product-category"
//                     className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm/6"
//                   >
//                     <option value="">Select Category</option>
//                     <option value="tshirt">T Shirt</option>
//                     <option value="shirt">Shirt</option>
//                     <option value="woolblouse">Wool Blouse</option>
//                     <option value="hat">Hat</option>
//                     <option value="watch">Watch</option>
//                   </select>
//                 </div>
//               </div>
//             )}
//             {productType === "lower" && (
//               <div className="sm:col-span-3">
//                 <label
//                   htmlFor="product-category"
//                   className="block text-sm/6 font-medium text-gray-900"
//                 >
//                   Lower Clothes
//                 </label>
//                 <div className="mt-2">
//                   <select
//                     id="product-category"
//                     name="product-category"
//                     className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm/6"
//                   >
//                     <option value="">Select Category</option>
//                     <option value="pants">Pants</option>
//                     <option value="jeans">Jeans</option>
//                     <option value="belt">Belt</option>
//                     <option value="socks">Socks</option>
//                   </select>
//                 </div>
//               </div>
//             )}

//             <div className="col-span-full">
//               <label
//                 htmlFor="about"
//                 className="block text-sm/6 font-medium text-gray-900"
//               >
//                 Product Description
//               </label>
//               <div className="mt-2">
//                 <textarea
//                   id="about"
//                   name="about"
//                   rows={1}
//                   className="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
//                   defaultValue={""}
//                 />
//               </div>
//             </div>

//             <div className="col-span-full">
//               <label
//                 htmlFor="about"
//                 className="block text-sm/6 font-medium text-gray-900"
//               >
//                 Product Details
//               </label>
//               <div className="mt-2">
//                 <textarea
//                   id="about"
//                   name="about"
//                   rows={3}
//                   className="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
//                   defaultValue={""}
//                 />
//               </div>
//             </div>

//             <div className="col-span-full">
//               <label
//                 htmlFor="cover-photo"
//                 className="block text-sm/6 font-medium text-gray-900"
//               >
//                 Product Image
//               </label>
//               <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
//                 <div className="text-center">
//                   <PhotoIcon
//                     aria-hidden="true"
//                     className="mx-auto size-12 text-gray-300"
//                   />
//                   <div className="mt-4 flex text-sm/6 text-gray-600">
//                     <label
//                       htmlFor="file-upload"
//                       className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
//                     >
//                       <span>Upload a file</span>
//                       <input
//                         id="file-upload"
//                         name="file-upload"
//                         type="file"
//                         className="sr-only"
//                       />
//                     </label>
//                     <p className="pl-1">or drag and drop</p>
//                   </div>
//                   <p className="text-xs/5 text-gray-600">
//                     PNG, JPG, GIF up to 10MB
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div className="sm:col-span-full">
//               <label
//                 htmlFor="alt"
//                 className="block text-sm/6 font-medium text-gray-900"
//               >
//                 Image Alt
//               </label>
//               <div className="mt-2">
//                 <input
//                   id="alt"
//                   name="alt"
//                   type="text"
//                   className="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="mt-6 flex items-center justify-end gap-x-6">
//         <button type="button" className="text-sm/6 font-semibold text-gray-900">
//           Cancel
//         </button>
//         <button
//           type="submit"
//           className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//         >
//           Add
//         </button>
//       </div>
//     </form>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { optional, z } from "zod";

import { Button } from "@/components/UI/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/UI/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/UI/select";

import { Input } from "@/components/UI/input";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
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
  details: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  image: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  alt: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

type FormValues = z.infer<typeof formSchema>;
interface AddFormProps {
  onAddProduct: (data: FormValues) => void;
}

export function DashForm({ onAddProduct }: AddFormProps) {
  const [productType, setProductType] = useState("");
  const [genderType, setGenderType] = useState("");
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      color: "",
      price: "",
      size: "",
      gender: "",
      type: "",
      category: "",
      description: "",
      details: "",
      image: "",
      alt: "",
    },
  });

  const watchedProduct = form.watch("type");
  const watchedGender = form.watch("gender");

  useEffect(() => {
    setProductType(watchedProduct);
    setGenderType(watchedGender);
  }, [watchedProduct, watchedGender]);

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      ),
    });
    onAddProduct(values);
    form.reset({
      title: "",
      color: "",
      price: "",
      size: "",
      gender: "",
      type: "",
      category: "",
      description: "",
      details: "",
      image: "",
      alt: "",
    });
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-2">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>name</FormLabel>
                    <FormControl>
                      <Input placeholder="product name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="sm:col-span-2">
              <FormField
                control={form.control}
                name="color"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>color</FormLabel>
                    <FormControl>
                      <Input placeholder="product color" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="sm:col-span-2">
              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>price</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="product price"
                        type="number"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="sm:col-span-2">
              <FormField
                control={form.control}
                name="size"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Product Size</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select the product size" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="3xl">3XL</SelectItem>
                        <SelectItem value="2XL">2XL</SelectItem>
                        <SelectItem value="XL">XL</SelectItem>
                        <SelectItem value="L">L</SelectItem>
                        <SelectItem value="M">M</SelectItem>
                        <SelectItem value="S">S</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="sm:col-span-2">
              <FormField
                control={form.control}
                name="gender"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Product Gender</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select the product gender" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="men">Men</SelectItem>
                        <SelectItem value="women">Women</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="sm:col-span-2">
              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Product Type</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select the product type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="top">Top Clothes</SelectItem>
                        <SelectItem value="lower">Lower Clothes</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {productType === "top" && genderType === "women" && (
              <div className="sm:col-span-2">
                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Women Top Clothes</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select women product category" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="tshirts">T Shirt</SelectItem>
                          <SelectItem value="shirts">Shirt</SelectItem>
                          <SelectItem value="woolblouses">
                            Wool Blouse
                          </SelectItem>
                          <SelectItem value="hats">Hat</SelectItem>
                          <SelectItem value="watchs">Watch</SelectItem>
                          <SelectItem value="bags">Bag</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            )}
            {productType === "top" && genderType === "men" && (
              <div className="sm:col-span-2">
                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Men Top Clothes</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select men product category" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="tshirts">T Shirt</SelectItem>
                          <SelectItem value="shirts">Shirt</SelectItem>
                          <SelectItem value="woolblouses">
                            Wool Blouse
                          </SelectItem>
                          <SelectItem value="hats">Hat</SelectItem>
                          <SelectItem value="watchs">Watch</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            )}
            {productType === "lower" && (
              <div className="sm:col-span-2">
                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Lower Clothes</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select men product category" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="pants">Pants</SelectItem>
                          <SelectItem value="jeans">Jeans</SelectItem>
                          <SelectItem value="belts">Belt</SelectItem>
                          <SelectItem value="socks">Socks</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            )}
            <div className="sm:col-span-2">
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>description</FormLabel>
                    <FormControl>
                      <Input placeholder="product description" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="sm:col-span-2">
              <FormField
                control={form.control}
                name="details"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>details</FormLabel>
                    <FormControl>
                      <Input placeholder="product details" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="sm:col-span-2">
              <FormField
                control={form.control}
                name="image"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>image</FormLabel>
                    <FormControl>
                      <Input placeholder="product image" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="sm:col-span-2">
              <FormField
                control={form.control}
                name="alt"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>alt</FormLabel>
                    <FormControl>
                      <Input placeholder="product alt" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Add Product
          </button>
        </form>
      </Form>
    </>
  );
}
