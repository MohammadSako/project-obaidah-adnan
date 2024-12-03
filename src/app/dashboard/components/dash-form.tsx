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
});

type FormValues = z.infer<typeof formSchema>;
interface AddFormProps {
  onAddProduct: (data: FormValues) => void;
}

export function DashForm({ onAddProduct }: AddFormProps) {
  const [productType, setProductType] = useState("");
  const [genderType, setGenderType] = useState("");
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
    },
  });

  const watchedProduct = form.watch("type");
  const watchedGender = form.watch("gender");

  useEffect(() => {
    setProductType(watchedProduct);
    setGenderType(watchedGender);
  }, [watchedProduct, watchedGender]);

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
      });
      setUploadedImageUrl("");
      setUploadedImageAlt("");
    }
  }

  const imageDeleteHandler = () => {
    CloudinaryDelete({uploadedImagePublicId});//need to hide env's
    setUploadedImageUrl("");
    setUploadedImageAlt("");
  };

  return (
    <div className="flex sm:flex-row gap-8 flex-col-reverse">
      <div className="basis-3/4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
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
                        <Input placeholder="Product details" {...field} />
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

      <div className="basis-2/4 mt-16">
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
