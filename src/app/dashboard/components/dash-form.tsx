"use client";

import { useEffect, useRef, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { CldImage } from "next-cloudinary";
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
interface AddFormProps {
  onAddProduct: (data: FormValues) => void;
}

export function DashForm({ onAddProduct }: AddFormProps) {
  const [productType, setProductType] = useState("");
  const [genderType, setGenderType] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");
  const [uploadedImageError, setUploadedImageError] = useState(false);

  const [image, setImage] = useState<File | null>(null); // Store the image file
  const [imagePreview, setImagePreview] = useState(""); // Store the preview of the image
  const [isUploading, setIsUploading] = useState(false); // Track upload state
  const fileInputRef = useRef<HTMLInputElement | null>(null);
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
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleUpload = async () => {
    if (!image) return;
    setIsUploading(true);
    // Create a FormData object to send the image to your API
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "obaidahpreset"); // Use your Cloudinary upload preset
    try {
      // Upload to Cloudinary
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dilj6mttl/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );
      const imageUrl = await response.json();
      return imageUrl.secure_url;
    } catch (error) {
      console.error("Error uploading image:", error);
    } finally {
      setIsUploading(false);
    }
  };

  // to store image in supabase storage
  // https://supabase.com/docs/guides/storage/uploads/standard-uploads
  // https://www.youtube.com/watch?v=cN2RE6EpExE&t=5s
  // https://supabase.com/docs/guides/getting-started/tutorials/with-nextjs#create-an-upload-widget
  // https://supabase.com/docs/guides/storage/serving/image-transformations

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const imageUrl = await handleUpload();
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
        image: imageUrl,
        alt: values.title,
        url: values.title,
      };

      if (!imagePreview && !uploadedImageUrl) {
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
        setImagePreview("");
        removeImageHandler();
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  }

  // formAction method:
  // https://www.youtube.com/watch?v=g2ut2KXZCo0
  // https://github.com/HamedBahram/next-forms/blob/main/components/new-todo-form.tsx


  // const imageDeleteHandler = () => {
  //   CloudinaryDelete({ uploadedImagePublicId }); //need to hide env's
  //   setUploadedImageUrl("");
  //   setUploadedImageAlt("");
  // };
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
              Add Product
            </button>
          </form>
        </Form>
      </div>

      <div className="lg:basis-1/4 basis-2/4 mt-8">
        {!uploadedImageUrl && (
          <div className="sm:col-span-2 mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-4 py-4">
            <div className="text-center">
              <PhotoIcon
                aria-hidden="true"
                className="mx-auto size-12 text-gray-300"
              />
              <div className=" flex text-sm/6 text-gray-600">
                <div className="relative flex flex-col justify-center">
                  {isUploading && "Uploading..."}
                  {!isUploading &&
                    imagePreview &&
                    "Click to choose another image"}
                  {!isUploading && !imagePreview && "Upload an Image"}
                  <Input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    className="my-2"
                  />
                  {imagePreview && !isUploading && (
                    <>
                      <p
                        onClick={removeImageHandler}
                        className="absolute top-[90px] z-50 cursor-pointer right-3 text-xl text-black bg-white rounded-full w-7 h-7"
                      >
                        X
                      </p>
                      <CldImage
                        src={imagePreview}
                        alt={imagePreview}
                        width="230"
                        height="300"
                        style={{ margin: "auto" }}
                        crop={{
                          type: "auto",
                          source: true,
                        }}
                      />
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
        {uploadedImageError && (
          <p className="bg-red-600 text-white text-lg mt-2 rounded shadow-lg px-2 text-center">
            Select the product image!!
          </p>
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
