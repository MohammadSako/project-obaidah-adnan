"use client";

import { useEffect, useRef, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/UI/form";

import { Input } from "@/components/UI/input";
import { useToast } from "@/hooks/use-toast";
import { PhotoIcon } from "@heroicons/react/24/outline";
import { Textarea } from "@/components/UI/textarea";
import {
  ItemType,
  PantsSize,
  MenLowerClothes,
  MenShoes,
  MenTopClothes,
  ProductGender,
  ProductSize,
  ProductType,
  ShoesSize,
  WatcheSize,
  WomenLowerClothes,
  WomenShoes,
  WomenTopClothes,
} from "./products-size";
import { supabase } from "@/lib/supabase";
import { v4 as uuidv4 } from "uuid";
import Image from "next/image";

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
    .min(2, {
      message: "Details must be at least 10 characters.",
    })
    .max(160, {
      message: "Details must not be longer than 30 characters.",
    }),
});

type FormValues = z.infer<typeof formSchema>;
// interface AddFormProps {
//   editData: (data: FormValues) => void;
// }

interface EditData {
  title: string;
  color: string;
  price: string;
  image: string;
  url: string;
  size: string;
  gender: string;
  type: string;
  category: string;
  description: string;
  details: string;
  dashboardType: string;
}
interface AddFormProps {
  onUpdateProduct: (data: FormValues) => void;
  editData: Partial<EditData>; // Use Partial if not all fields are guaranteed
}

export function UpdateForm({ editData, onUpdateProduct }: AddFormProps) {
  const [productType, setProductType] = useState("");
  const [genderType, setGenderType] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [uploadedImageUrl, setUploadedImageUrl] = useState(editData.url || "");
  const [uploadedImageError, setUploadedImageError] = useState(false);
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState(editData.image || "");
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const { toast } = useToast();
  console.log("111111 imagePreview", imagePreview);
  console.log("222222 image", image);
  console.log("33333 uploadedImageUrl", uploadedImageUrl);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: editData.title || "",
      color: editData.color || "",
      price: editData.price || "",
      size: editData.size || "",
      gender: editData.gender || "",
      type: editData.type || "",
      category: editData.category || "",
      description: editData.description || "",
      details: editData.details || "",
      dashboardtype: editData.dashboardType || "",
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
    if (imagePreview) {
      setUploadedImageError(false);
    }
  }, [imagePreview]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
    }
  };

  const removeImageHandler = () => {
    setImage(null);
    setImagePreview("");
    setUploadedImageUrl("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleUpload = async () => {
    if (!image) return;
    const uuid = uuidv4();
    const imageUuid = `${uuid}_${image.name.replace(/\s+/g, "")}`;
    setUploadedImageUrl(imageUuid);
    setIsUploading(true);
    try {
      const { data } = await supabase.storage
        .from("shopimages")
        .upload(imageUuid, image, {
          cacheControl: "3600",
          upsert: false,
        });
      const imageUrls = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/${data?.fullPath}`;
      return { image: imageUrls, url: data?.path };
    } catch (error) {
      console.error("Error uploading image:", error);
    } finally {
      setIsUploading(false);
    }
  };

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      if (!imagePreview) {
        setUploadedImageError(true);
        console.warn("Uploaded image URL is missing.");
        return;
      }

      const uploadResult = image
        ? await handleUpload()
        : { image: imagePreview, url: uploadedImageUrl };

      if (!uploadResult || !uploadResult.image || !uploadResult.url) {
        throw new Error(
          "Missing data from the upload response. Check the handleUpload function!"
        );
      }

      const { image: uploadedImage, url: uploadedUrl } = uploadResult;

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
        image: uploadedImage,
        alt: values.title,
        url: uploadedUrl,
      };

      console.log(
        image ? "Data for new image:" : "Data for existing image:",
        data
      );

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
      onUpdateProduct(data);
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
      setImagePreview("");
      removeImageHandler();
    } catch (error) {
      console.error("Error on submitting:", error.message || error);
    }
  }

  // async function onSubmit(values: z.infer<typeof formSchema>) {
  //   try {
  //     const uploadResult = await handleUpload();

  //     if (!uploadResult) {
  //       throw new Error(
  //         "missing data from the upload response, check the handleUpload function!"
  //       );
  //     }

  //     const { image, url } = uploadResult;
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
  //       image: image,
  //       alt: values.title,
  //       url: url,
  //     };
  //     console.log("123", data);

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
  //       onUpdateProduct(data);
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
  //       setImagePreview("");
  //       removeImageHandler();
  //     }
  //   } catch (error) {
  //     console.error("Error uploading image:", error);
  //   }
  // }

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
                    <ItemType
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    />
                  )}
                />
              </div>
              <div className="sm:col-span-6 md:col-span-3">
                <FormField
                  control={form.control}
                  name="gender"
                  render={({ field }) => (
                    <ProductGender
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    />
                  )}
                />
              </div>
              <div className="sm:col-span-6 md:col-span-3">
                <FormField
                  control={form.control}
                  name="type"
                  render={({ field }) => (
                    <ProductType
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    />
                  )}
                />
              </div>

              {/* category */}
              {productType === "top" && genderType === "men" && (
                <div className="sm:col-span-6 md:col-span-3">
                  <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                      <MenTopClothes
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      />
                    )}
                  />
                </div>
              )}
              {productType === "top" && genderType === "women" && (
                <div className="sm:col-span-6 md:col-span-3">
                  <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                      <WomenTopClothes
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      />
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
                      <MenLowerClothes
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      />
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
                      <WomenLowerClothes
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      />
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
                      <MenShoes
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      />
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
                      <WomenShoes
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      />
                    )}
                  />
                </div>
              )}

              {/* size */}
              {productCategory === "mwatches" ||
              productCategory === "wwatches" ? (
                <div className="sm:col-span-6 md:col-span-3">
                  <FormField
                    control={form.control}
                    name="size"
                    render={({ field }) => (
                      <WatcheSize
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      />
                    )}
                  />
                </div>
              ) : productType === "shoes" ? (
                <div className="sm:col-span-6 md:col-span-3">
                  <FormField
                    control={form.control}
                    name="size"
                    render={({ field }) => (
                      <ShoesSize
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      />
                    )}
                  />
                </div>
              ) : productCategory === "mjeans" ||
                productCategory === "wjeans" ||
                productCategory === "mpants" ||
                productCategory === "wjeans" ? (
                <div className="sm:col-span-6 md:col-span-3">
                  <FormField
                    control={form.control}
                    name="size"
                    render={({ field }) => (
                      <PantsSize
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      />
                    )}
                  />
                </div>
              ) : (
                <div className="sm:col-span-6 md:col-span-3">
                  <FormField
                    control={form.control}
                    name="size"
                    render={({ field }) => (
                      <ProductSize
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      />
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
              Update Product
            </button>
          </form>
        </Form>
      </div>

      <div className="lg:basis-1/4 basis-2/4 mt-8">
        <div className="sm:col-span-2 mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-4 py-4">
          <div className="text-center">
            <PhotoIcon
              aria-hidden="true"
              className="mx-auto size-12 text-gray-300"
            />
            <div className=" flex text-sm/6 text-gray-600">
              <div className="relative flex flex-col justify-center">
                {isUploading && "Uploading..."}
                {!isUploading && imagePreview && "You can choose another image"}
                {!isUploading && !imagePreview && "Upload an Image"}
                {!imagePreview && (
                  <Input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    className="my-2"
                  />
                )}
                {imagePreview && !isUploading && (
                  <>
                    <p
                      onClick={removeImageHandler}
                      className="absolute top-[35px] z-50 cursor-pointer right-3 text-xl text-black bg-white rounded-full w-7 h-7"
                    >
                      X
                    </p>
                    <Image
                      src={imagePreview}
                      alt={imagePreview}
                      width="250"
                      height="300"
                      style={{ margin: "auto" }}
                    />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {uploadedImageError && (
          <p className="bg-red-600 text-white text-lg mt-2 rounded shadow-lg px-2 text-center">
            Select the product image!!
          </p>
        )}
      </div>
    </div>
  );
}
