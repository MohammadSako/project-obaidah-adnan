"use client";

import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { CldImage, CldUploadWidget } from "next-cloudinary";
import {
  Form,
  FormControl,
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
import { PhotoIcon } from "@heroicons/react/24/outline";
import { CloudinaryDelete } from "@/lib/db/cloudinary";
import { Textarea } from "@/components/UI/textarea";

const formSchema = z.object({
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
    .min(10, {
      message: "Details must be at least 10 characters.",
    })
    .max(160, {
      message: "Details must not be longer than 30 characters.",
    }),
});

type FormValues = z.infer<typeof formSchema>;
interface AddFormProps {
  onAddProduct: (data: FormValues) => void;
}

export function DashForm({ onAddProduct }: AddFormProps) {
  const [productType, setProductType] = useState("");
  const [genderType, setGenderType] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");
  const [uploadedImageAlt, setUploadedImageAlt] = useState("");
  const [uploadedImagePublicId, setUploadedImagePublicId] = useState("");
  const [uploadedImageError, setUploadedImageError] = useState(false);
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
      dashboardtype: "",
    },
  });

  const watchedProduct = form.watch("type");
  const watchedGender = form.watch("gender");
  const watchedCategory = form.watch("category");

  useEffect(() => {
    setProductType(watchedProduct);
    setGenderType(watchedGender);
    setProductCategory(watchedCategory);
  }, [watchedProduct, watchedGender, watchedCategory]);

  useEffect(() => {
    if (uploadedImageUrl) {
      setUploadedImageError(false);
    }
  }, [uploadedImageUrl]);

  function onSubmit(values: z.infer<typeof formSchema>) {
    const data = {
      category: values.category,
      color: values.color,
      description: values.description,
      details: values.details,
      gender: values.gender,
      price: values.price,
      size: values.size,
      title: values.title,
      type: values.type,
      dashboardtype: values.dashboardtype,
      image: uploadedImageUrl,
      alt: uploadedImageAlt,
    };
    console.log(data);
    if (!uploadedImageUrl) {
      setUploadedImageError(true);
      return;
    } else {
      toast({
        title: "You submitted the following values:",
        description: (
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="text-white">
              {JSON.stringify(values, null, 2)}
            </code>
          </pre>
        ),
      });
      onAddProduct(data);
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
        dashboardtype: "",
      });
      setUploadedImageUrl("");
      setUploadedImageAlt("");
    }
  }

  const imageDeleteHandler = () => {
    CloudinaryDelete({ uploadedImagePublicId }); //need to hide env's
    setUploadedImageUrl("");
    setUploadedImageAlt("");
  };

  return (
    <div className="flex sm:flex-row gap-8 flex-col-reverse">
      <div className="basis-3/4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
              <div className="sm:col-span-6 md:col-span-3">
                <FormField
                  control={form.control}
                  name="dashboardtype"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Item Type</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select the Item Type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="product">Product</SelectItem>
                          <SelectItem value="discounted">Discounted</SelectItem>
                          <SelectItem value="bestsellers">
                            Bestseller
                          </SelectItem>
                          <SelectItem value="newarrival">
                            New Arrival
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="sm:col-span-6 md:col-span-3">
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
              <div className="sm:col-span-6 md:col-span-3">
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
                          <SelectItem value="shoes">Shoes</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              {productType === "top" && genderType === "women" && (
                <div className="sm:col-span-6 md:col-span-3">
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
                            <SelectItem value="2">T Shirt</SelectItem>
                            <SelectItem value="4">Shirt</SelectItem>
                            <SelectItem value="6">Wool Blouse</SelectItem>
                            <SelectItem value="8">Hat</SelectItem>
                            <SelectItem value="10">Watch</SelectItem>
                            <SelectItem value="32">Bag</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              )}
              {productType === "top" && genderType === "men" && (
                <div className="sm:col-span-6 md:col-span-3">
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
                            <SelectItem value="1">T Shirt</SelectItem>
                            <SelectItem value="3">Shirt</SelectItem>
                            <SelectItem value="5">Wool Blouse</SelectItem>
                            <SelectItem value="7">Hat</SelectItem>
                            <SelectItem value="9">Watch</SelectItem>
                            <SelectItem value="31">Bag</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              )}
              {productType === "lower" && genderType === "men" && (
                <div className="sm:col-span-6 md:col-span-3">
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
                            <SelectItem value="13">Pants</SelectItem>
                            <SelectItem value="11">Jeans</SelectItem>
                            <SelectItem value="17">Belt</SelectItem>
                            <SelectItem value="15">Socks</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              )}
              {productType === "lower" && genderType === "women" && (
                <div className="sm:col-span-6 md:col-span-3">
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
                            <SelectItem value="14">Pants</SelectItem>
                            <SelectItem value="12">Jeans</SelectItem>
                            <SelectItem value="18">Belt</SelectItem>
                            <SelectItem value="16">Socks</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              )}
              {productType === "shoes" && genderType === "men" && (
                <div className="sm:col-span-6 md:col-span-3">
                  <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Men Shoes</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select men shoes category" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="19">
                              Work & Safty Shoes
                            </SelectItem>
                            <SelectItem value="20">
                              Loafers & Slip-Ons
                            </SelectItem>
                            <SelectItem value="22">Snow Boots</SelectItem>
                            <SelectItem value="24">Casual Shoes</SelectItem>
                            <SelectItem value="25">Boots</SelectItem>
                            <SelectItem value="26">Sandals</SelectItem>
                            <SelectItem value="27">Others</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              )}
              {productType === "shoes" && genderType === "women" && (
                <div className="sm:col-span-6 md:col-span-3">
                  <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Women Shoes</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select women shoes category" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="21">
                              Loafers & Slip-Ons
                            </SelectItem>
                            <SelectItem value="23">Snow Boots</SelectItem>
                            <SelectItem value="28">Flats</SelectItem>
                            <SelectItem value="29">Slippers</SelectItem>
                            <SelectItem value="30">Sneakers</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              )}
              {productCategory === "watchs" ? (
                <div className="sm:col-span-6 md:col-span-3">
                  <FormField
                    control={form.control}
                    name="size"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Hand watch size</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select hand watch size" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="22mm">22 mm</SelectItem>
                            <SelectItem value="24mm">24 mm</SelectItem>
                            <SelectItem value="26mm">26 mm</SelectItem>
                            <SelectItem value="28mm">28 mm</SelectItem>
                            <SelectItem value="30mm">30 mm</SelectItem>
                            <SelectItem value="32mm">32 mm</SelectItem>
                            <SelectItem value="34mm">34 mm</SelectItem>
                            <SelectItem value="36mm">36 mm</SelectItem>
                            <SelectItem value="38mm">38 mm</SelectItem>
                            <SelectItem value="40mm">40 mm</SelectItem>
                            <SelectItem value="42mm">42 mm</SelectItem>
                            <SelectItem value="45mm">46 mm</SelectItem>
                            <SelectItem value="50mm">50 mm</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              ) : productType === "shoes" ? (
                <div className="sm:col-span-6 md:col-span-3">
                  <FormField
                    control={form.control}
                    name="size"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Shoe size</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select hand watch size" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="34.5">34.5</SelectItem>
                            <SelectItem value="35">35</SelectItem>
                            <SelectItem value="35.5">35.5</SelectItem>
                            <SelectItem value="36">36</SelectItem>
                            <SelectItem value="36.5">36.5</SelectItem>
                            <SelectItem value="37">37</SelectItem>
                            <SelectItem value="37.5">37.5</SelectItem>
                            <SelectItem value="38">38</SelectItem>
                            <SelectItem value="38.5">38.5</SelectItem>
                            <SelectItem value="39">39</SelectItem>
                            <SelectItem value="39.5">39.5</SelectItem>
                            <SelectItem value="40">40</SelectItem>
                            <SelectItem value="40.5">40.5</SelectItem>
                            <SelectItem value="41">41</SelectItem>
                            <SelectItem value="41.5">41.5</SelectItem>
                            <SelectItem value="42">42</SelectItem>
                            <SelectItem value="42.5">42.5</SelectItem>
                            <SelectItem value="43">43</SelectItem>
                            <SelectItem value="43.5">43.5</SelectItem>
                            <SelectItem value="44">44</SelectItem>
                            <SelectItem value="44.5">44.5</SelectItem>
                            <SelectItem value="45">45</SelectItem>
                            <SelectItem value="45.5">45.5</SelectItem>
                            <SelectItem value="46">46</SelectItem>
                            <SelectItem value="46.5">46.5</SelectItem>
                            <SelectItem value="47">47</SelectItem>
                            <SelectItem value="47.5">47.5</SelectItem>
                            <SelectItem value="48">48</SelectItem>
                            <SelectItem value="48.5">48.5</SelectItem>
                            <SelectItem value="49">49</SelectItem>
                            <SelectItem value="49.5">49.5</SelectItem>
                            <SelectItem value="50">50</SelectItem>
                            <SelectItem value="50.5">50.5</SelectItem>
                            <SelectItem value="51">51</SelectItem>
                            <SelectItem value="51.5">51.5</SelectItem>
                            <SelectItem value="52">52</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              ) : (
                <div className="sm:col-span-6 md:col-span-3">
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
              )}
              <div className="sm:col-span-6 md:col-span-3">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Product name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="sm:col-span-6 md:col-span-3">
                <FormField
                  control={form.control}
                  name="color"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Color</FormLabel>
                      <FormControl>
                        <Input placeholder="Product color" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="sm:col-span-6 md:col-span-3">
                <FormField
                  control={form.control}
                  name="price"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Price</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Product price"
                          type="number"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="sm:col-span-6 md:col-span-3">
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Input placeholder="Product description" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="sm:col-span-6 md:col-span-3">
                <FormField
                  control={form.control}
                  name="details"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Details</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Product details"
                          className="resize-none"
                          {...field}
                        />
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
      </div>

      <div className="basis-2/4 mt-8">
        <div className="sm:col-span-2 mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
          <div className="text-center">
            <PhotoIcon
              aria-hidden="true"
              className="mx-auto size-12 text-gray-300"
            />
            <div className=" flex text-sm/6 text-gray-600">
              <div className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                <CldUploadWidget
                  uploadPreset="obaidahpreset"
                  // onSuccess={(results) =>
                  //   console.log(results)
                  // }
                  onSuccess={(results) => {
                    setUploadedImageUrl(results?.info?.url);
                    setUploadedImageAlt(results?.info?.display_name);
                    setUploadedImagePublicId(results?.info?.public_id);
                  }}
                >
                  {({ open, isLoading }) => {
                    return (
                      <>
                        {isLoading ? (
                          <button>Wait...</button>
                        ) : (
                          <button onClick={() => open()}>
                            Upload an Image
                          </button>
                        )}
                      </>
                    );
                  }}
                </CldUploadWidget>
              </div>
            </div>
          </div>
        </div>
        {uploadedImageError && (
          <p className="bg-red-600 text-white text-lg mt-2 rounded shadow-lg px-2 text-center">
            Select the product image!!
          </p>
        )}

        {uploadedImageUrl && (
          <>
            <div className="sm:col-span-2 mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-2 py-2">
              <CldImage
                src={uploadedImageUrl}
                alt={uploadedImageAlt}
                width="150"
                height="150"
                crop={{
                  type: "auto",
                  source: true,
                }}
              />
            </div>
            <div className="flex justify-center">
              <button
                onClick={imageDeleteHandler}
                className="mt-2 text-lg text-white font-semibold bg-red-600 px-6 py-2 rounded-lg"
              >
                Delete Image
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
// "use client";

// import { useEffect, useState } from "react";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { CldImage, CldUploadWidget } from "next-cloudinary";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/UI/form";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/UI/select";
// import { Input } from "@/components/UI/input";
// import { useToast } from "@/hooks/use-toast";
// import { PhotoIcon } from "@heroicons/react/24/outline";
// import { CloudinaryDelete } from "@/lib/db/cloudinary";
// import { Textarea } from "@/components/UI/textarea";

// const formSchema = z.object({
//   dashboardtype: z.string().min(1, {
//     message: "Username must be at least 2 characters.",
//   }),
//   title: z.string().min(2, {
//     message: "Username must be at least 2 characters.",
//   }),
//   color: z.string().min(2, {
//     message: "Username must be at least 2 characters.",
//   }),
//   price: z.string().min(1, {
//     message: "Username must be at least 1 characters.",
//   }),
//   size: z.string().min(1, { message: "Please select the product size." }),
//   gender: z.string().min(1, {
//     message: "Username must be at least 2 characters.",
//   }),
//   type: z.string().min(1, {
//     message: "Username must be at least 2 characters.",
//   }),
//   category: z.string().min(1, {
//     message: "Username must be at least 2 characters.",
//   }),
//   description: z.string().min(2, {
//     message: "Username must be at least 2 characters.",
//   }),
//   details: z
//     .string()
//     .min(10, {
//       message: "Details must be at least 10 characters.",
//     })
//     .max(160, {
//       message: "Details must not be longer than 30 characters.",
//     }),
// });

// type FormValues = z.infer<typeof formSchema>;
// interface AddFormProps {
//   onAddProduct: (data: FormValues) => void;
// }

// export function DashForm({ onAddProduct }: AddFormProps) {
//   const [productType, setProductType] = useState("");
//   const [genderType, setGenderType] = useState("");
//   const [productCategory, setProductCategory] = useState("");
//   const [uploadedImageUrl, setUploadedImageUrl] = useState("");
//   const [uploadedImageAlt, setUploadedImageAlt] = useState("");
//   const [uploadedImagePublicId, setUploadedImagePublicId] = useState("");
//   const [uploadedImageError, setUploadedImageError] = useState(false);
//   const { toast } = useToast();

//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       title: "",
//       color: "",
//       price: "",
//       size: "",
//       gender: "",
//       type: "",
//       category: "",
//       description: "",
//       details: "",
//       dashboardtype: "",
//     },
//   });

//   const watchedProduct = form.watch("type");
//   const watchedGender = form.watch("gender");
//   const watchedCategory = form.watch("category");

//   useEffect(() => {
//     setProductType(watchedProduct);
//     setGenderType(watchedGender);
//     setProductCategory(watchedCategory);
//   }, [watchedProduct, watchedGender, watchedCategory]);

//   useEffect(() => {
//     if (uploadedImageUrl) {
//       setUploadedImageError(false);
//     }
//   }, [uploadedImageUrl]);

//   function onSubmit(values: z.infer<typeof formSchema>) {
//     const data = {
//       category: values.category,
//       color: values.color,
//       description: values.description,
//       details: values.details,
//       gender: values.gender,
//       price: values.price,
//       size: values.size,
//       title: values.title,
//       type: values.type,
//       dashboardtype: values.dashboardtype,
//       image: uploadedImageUrl,
//       alt: uploadedImageAlt,
//     };
//     console.log(data);
//     if (!uploadedImageUrl) {
//       setUploadedImageError(true);
//       return;
//     } else {
//       toast({
//         title: "You submitted the following values:",
//         description: (
//           <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
//             <code className="text-white">
//               {JSON.stringify(values, null, 2)}
//             </code>
//           </pre>
//         ),
//       });
//       onAddProduct(data);
//       form.reset({
//         title: "",
//         color: "",
//         price: "",
//         size: "",
//         gender: "",
//         type: "",
//         category: "",
//         description: "",
//         details: "",
//         dashboardtype: "",
//       });
//       setUploadedImageUrl("");
//       setUploadedImageAlt("");
//     }
//   }

//   const imageDeleteHandler = () => {
//     CloudinaryDelete({ uploadedImagePublicId }); //need to hide env's
//     setUploadedImageUrl("");
//     setUploadedImageAlt("");
//   };

//   return (
//     <div className="flex sm:flex-row gap-8 flex-col-reverse">
//       <div className="basis-3/4">
//         <Form {...form}>
//           <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
//             <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
//               <div className="sm:col-span-6 md:col-span-3">
//                 <FormField
//                   control={form.control}
//                   name="dashboardtype"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel>Item Type</FormLabel>
//                       <Select
//                         onValueChange={field.onChange}
//                         defaultValue={field.value}
//                       >
//                         <FormControl>
//                           <SelectTrigger>
//                             <SelectValue placeholder="Select the Item Type" />
//                           </SelectTrigger>
//                         </FormControl>
//                         <SelectContent>
//                           <SelectItem value="product">Product</SelectItem>
//                           <SelectItem value="discounted">Discounted</SelectItem>
//                           <SelectItem value="bestsellers">
//                             Bestseller
//                           </SelectItem>
//                           <SelectItem value="newarrival">
//                             New Arrival
//                           </SelectItem>
//                         </SelectContent>
//                       </Select>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />
//               </div>
//               <div className="sm:col-span-6 md:col-span-3">
//                 <FormField
//                   control={form.control}
//                   name="gender"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel>Product Gender</FormLabel>
//                       <Select
//                         onValueChange={field.onChange}
//                         defaultValue={field.value}
//                       >
//                         <FormControl>
//                           <SelectTrigger>
//                             <SelectValue placeholder="Select the product gender" />
//                           </SelectTrigger>
//                         </FormControl>
//                         <SelectContent>
//                           <SelectItem value="men">Men</SelectItem>
//                           <SelectItem value="women">Women</SelectItem>
//                         </SelectContent>
//                       </Select>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />
//               </div>
//               <div className="sm:col-span-6 md:col-span-3">
//                 <FormField
//                   control={form.control}
//                   name="type"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel>Product Type</FormLabel>
//                       <Select
//                         onValueChange={field.onChange}
//                         defaultValue={field.value}
//                       >
//                         <FormControl>
//                           <SelectTrigger>
//                             <SelectValue placeholder="Select the product type" />
//                           </SelectTrigger>
//                         </FormControl>
//                         <SelectContent>
//                           <SelectItem value="top">Top Clothes</SelectItem>
//                           <SelectItem value="lower">Lower Clothes</SelectItem>
//                         </SelectContent>
//                       </Select>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />
//               </div>
//               {productType === "top" && genderType === "women" && (
//                 <div className="sm:col-span-6 md:col-span-3">
//                   <FormField
//                     control={form.control}
//                     name="category"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>Women Top Clothes</FormLabel>
//                         <Select
//                           onValueChange={field.onChange}
//                           defaultValue={field.value}
//                         >
//                           <FormControl>
//                             <SelectTrigger>
//                               <SelectValue placeholder="Select women product category" />
//                             </SelectTrigger>
//                           </FormControl>
//                           <SelectContent>
//                             <SelectItem value="tshirts">T Shirt</SelectItem>
//                             <SelectItem value="shirts">Shirt</SelectItem>
//                             <SelectItem value="woolblouses">
//                               Wool Blouse
//                             </SelectItem>
//                             <SelectItem value="hats">Hat</SelectItem>
//                             <SelectItem value="watchs">Watch</SelectItem>
//                             <SelectItem value="bags">Bag</SelectItem>
//                           </SelectContent>
//                         </Select>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                 </div>
//               )}
//               {productType === "top" && genderType === "men" && (
//                 <div className="sm:col-span-6 md:col-span-3">
//                   <FormField
//                     control={form.control}
//                     name="category"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>Men Top Clothes</FormLabel>
//                         <Select
//                           onValueChange={field.onChange}
//                           defaultValue={field.value}
//                         >
//                           <FormControl>
//                             <SelectTrigger>
//                               <SelectValue placeholder="Select men product category" />
//                             </SelectTrigger>
//                           </FormControl>
//                           <SelectContent>
//                             <SelectItem value="tshirts">T Shirt</SelectItem>
//                             <SelectItem value="shirts">Shirt</SelectItem>
//                             <SelectItem value="woolblouses">
//                               Wool Blouse
//                             </SelectItem>
//                             <SelectItem value="hats">Hat</SelectItem>
//                             <SelectItem value="watchs">Watch</SelectItem>
//                           </SelectContent>
//                         </Select>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                 </div>
//               )}
//               {productType === "lower" && (
//                 <div className="sm:col-span-6 md:col-span-3">
//                   <FormField
//                     control={form.control}
//                     name="category"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>Lower Clothes</FormLabel>
//                         <Select
//                           onValueChange={field.onChange}
//                           defaultValue={field.value}
//                         >
//                           <FormControl>
//                             <SelectTrigger>
//                               <SelectValue placeholder="Select men product category" />
//                             </SelectTrigger>
//                           </FormControl>
//                           <SelectContent>
//                             <SelectItem value="pants">Pants</SelectItem>
//                             <SelectItem value="jeans">Jeans</SelectItem>
//                             <SelectItem value="belts">Belt</SelectItem>
//                             <SelectItem value="socks">Socks</SelectItem>
//                           </SelectContent>
//                         </Select>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                 </div>
//               )}
//               {productCategory === "watchs" ? (
//                 <div className="sm:col-span-6 md:col-span-3">
//                   <FormField
//                     control={form.control}
//                     name="size"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>Hand watch size</FormLabel>
//                         <Select
//                           onValueChange={field.onChange}
//                           defaultValue={field.value}
//                         >
//                           <FormControl>
//                             <SelectTrigger>
//                               <SelectValue placeholder="Select hand watch size" />
//                             </SelectTrigger>
//                           </FormControl>
//                           <SelectContent>
//                             <SelectItem value="22mm">22 mm</SelectItem>
//                             <SelectItem value="24mm">24 mm</SelectItem>
//                             <SelectItem value="26mm">26 mm</SelectItem>
//                             <SelectItem value="28mm">28 mm</SelectItem>
//                             <SelectItem value="30mm">30 mm</SelectItem>
//                             <SelectItem value="32mm">32 mm</SelectItem>
//                             <SelectItem value="34mm">34 mm</SelectItem>
//                             <SelectItem value="36mm">36 mm</SelectItem>
//                             <SelectItem value="38mm">38 mm</SelectItem>
//                             <SelectItem value="40mm">40 mm</SelectItem>
//                             <SelectItem value="42mm">42 mm</SelectItem>
//                             <SelectItem value="45mm">46 mm</SelectItem>
//                             <SelectItem value="50mm">50 mm</SelectItem>
//                           </SelectContent>
//                         </Select>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                 </div>
//               ) : (
//                 <div className="sm:col-span-6 md:col-span-3">
//                   <FormField
//                     control={form.control}
//                     name="size"
//                     render={({ field }) => (
//                       <FormItem>
//                         <FormLabel>Product Size</FormLabel>
//                         <Select
//                           onValueChange={field.onChange}
//                           defaultValue={field.value}
//                         >
//                           <FormControl>
//                             <SelectTrigger>
//                               <SelectValue placeholder="Select the product size" />
//                             </SelectTrigger>
//                           </FormControl>
//                           <SelectContent>
//                             <SelectItem value="3xl">3XL</SelectItem>
//                             <SelectItem value="2XL">2XL</SelectItem>
//                             <SelectItem value="XL">XL</SelectItem>
//                             <SelectItem value="L">L</SelectItem>
//                             <SelectItem value="M">M</SelectItem>
//                             <SelectItem value="S">S</SelectItem>
//                           </SelectContent>
//                         </Select>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                 </div>
//               )}
//               <div className="sm:col-span-6 md:col-span-3">
//                 <FormField
//                   control={form.control}
//                   name="title"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel>Name</FormLabel>
//                       <FormControl>
//                         <Input placeholder="Product name" {...field} />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />
//               </div>
//               <div className="sm:col-span-6 md:col-span-3">
//                 <FormField
//                   control={form.control}
//                   name="color"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel>Color</FormLabel>
//                       <FormControl>
//                         <Input placeholder="Product color" {...field} />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />
//               </div>
//               <div className="sm:col-span-6 md:col-span-3">
//                 <FormField
//                   control={form.control}
//                   name="price"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel>Price</FormLabel>
//                       <FormControl>
//                         <Input
//                           placeholder="Product price"
//                           type="number"
//                           {...field}
//                         />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />
//               </div>

//               <div className="sm:col-span-6 md:col-span-3">
//                 <FormField
//                   control={form.control}
//                   name="description"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel>Description</FormLabel>
//                       <FormControl>
//                         <Input placeholder="Product description" {...field} />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />
//               </div>
//               <div className="sm:col-span-6 md:col-span-3">
//                 <FormField
//                   control={form.control}
//                   name="details"
//                   render={({ field }) => (
//                     <FormItem>
//                       <FormLabel>Details</FormLabel>
//                       <FormControl>
//                         <Textarea
//                           placeholder="Product details"
//                           className="resize-none"
//                           {...field}
//                         />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />
//               </div>
//             </div>
//             <button
//               type="submit"
//               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//             >
//               Add Product
//             </button>
//           </form>
//         </Form>
//       </div>

//       <div className="basis-2/4 mt-8">
//         <div className="sm:col-span-2 mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
//           <div className="text-center">
//             <PhotoIcon
//               aria-hidden="true"
//               className="mx-auto size-12 text-gray-300"
//             />
//             <div className=" flex text-sm/6 text-gray-600">
//               <div className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
//                 <CldUploadWidget
//                   uploadPreset="obaidahpreset"
//                   // onSuccess={(results) =>
//                   //   console.log(results)
//                   // }
//                   onSuccess={(results) => {
//                     setUploadedImageUrl(results?.info?.url);
//                     setUploadedImageAlt(results?.info?.display_name);
//                     setUploadedImagePublicId(results?.info?.public_id);
//                   }}
//                 >
//                   {({ open, isLoading }) => {
//                     return (
//                       <>
//                         {isLoading ? (
//                           <button>Wait...</button>
//                         ) : (
//                           <button onClick={() => open()}>
//                             Upload an Image
//                           </button>
//                         )}
//                       </>
//                     );
//                   }}
//                 </CldUploadWidget>
//               </div>
//             </div>
//           </div>
//         </div>
//         {uploadedImageError && (
//           <p className="bg-red-600 text-white text-lg mt-2 rounded shadow-lg px-2 text-center">
//             Select the product image!!
//           </p>
//         )}

//         {uploadedImageUrl && (
//           <>
//             <div className="sm:col-span-2 mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-2 py-2">
//               <CldImage
//                 src={uploadedImageUrl}
//                 alt={uploadedImageAlt}
//                 width="150"
//                 height="150"
//                 crop={{
//                   type: "auto",
//                   source: true,
//                 }}
//               />
//             </div>
//             <div className="flex justify-center">
//               <button
//                 onClick={imageDeleteHandler}
//                 className="mt-2 text-lg text-white font-semibold bg-red-600 px-6 py-2 rounded-lg"
//               >
//                 Delete Image
//               </button>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }
