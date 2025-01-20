// import { getAllCategory } from "@/lib/db/products";
import CategoriesPage from "../../../../components/helpers/catgories/categories-page";

export default async function Page() {
  // const { categories } = await getAllCategory();

  const categories = [
    {
      id: 1,
      title: "Men's Clothing",
      image:
        "https://zdyevmocczycunsqlkpo.supabase.co/storage/v1/object/public/shopimages/category_images/c3.avif",
      url: "/categories/men/clothing",
      SubCategory: [
        {
          id: 1,
          title: "Top Clothing",
          image:
            "https://zdyevmocczycunsqlkpo.supabase.co/storage/v1/object/public/shopimages/category_images/c3.avif",
          url: "/categories/men/clothing/top",
          category_id: 1,
          items: [
            {
              id: 1,
              title: "Men T-Shirts",
              image:
                "https://zdyevmocczycunsqlkpo.supabase.co/storage/v1/object/public/shopimages/category_images/c3.avif",
              url: "/categories/men/clothing/top/mtshirt",
              itemid: "mtshirt",
              sub_category_id: 1,
            },
            {
              id: 3,
              title: "Men Shirts",
              image:
                "https://zdyevmocczycunsqlkpo.supabase.co/storage/v1/object/public/shopimages/sub_category_images/shirt.avif",
              url: "/categories/men/clothing/top/mshirt",
              itemid: "mshirt",
              sub_category_id: 1,
            },
            {
              id: 5,
              title: "Men Wool blouses",
              image:
                "https://zdyevmocczycunsqlkpo.supabase.co/storage/v1/object/public/shopimages/sub_category_images/mwool.avif",
              url: "/categories/men/clothing/top/mblouse",
              itemid: "mblouse",
              sub_category_id: 1,
            },
            {
              id: 7,
              title: "Men Hats",
              image:
                "https://zdyevmocczycunsqlkpo.supabase.co/storage/v1/object/public/shopimages/sub_category_images/hat%20m.avif",
              url: "/categories/men/clothing/top/mhats",
              itemid: "mhats",
              sub_category_id: 1,
            },
            {
              id: 9,
              title: "Men Watches",
              image:
                "https://zdyevmocczycunsqlkpo.supabase.co/storage/v1/object/public/shopimages/sub_category_images/m%20watch.avif",
              url: "/categories/men/clothing/top/mwatches",
              itemid: "mwatches",
              sub_category_id: 1,
            },
            {
              id: 11,
              title: "Men Bags",
              image:
                "https://zdyevmocczycunsqlkpo.supabase.co/storage/v1/object/public/shopimages/sub_category_images/m%20bag.avif",
              url: "/categories/men/clothing/top/mbag",
              itemid: "mbag",
              sub_category_id: 1,
            },
          ],
        },
        {
          id: 2,
          title: "Lower Clothing",
          image:
            "https://zdyevmocczycunsqlkpo.supabase.co/storage/v1/object/public/shopimages/category_images/jeans.avif",
          url: "/categories/men/clothing/lower",
          category_id: 1,
          items: [
            {
              id: 13,
              title: "Men Jeans",
              image:
                "https://zdyevmocczycunsqlkpo.supabase.co/storage/v1/object/public/shopimages/sub_category_images/jeans.avif",
              url: "/categories/men/clothing/lower/mjeans",
              itemid: "mjeans",
              sub_category_id: 2,
            },
            {
              id: 15,
              title: "Men Pants",
              image:
                "https://zdyevmocczycunsqlkpo.supabase.co/storage/v1/object/public/shopimages/sub_category_images/m%20pants.avif",
              url: "/categories/men/clothing/lower/mpants",
              itemid: "mpants",
              sub_category_id: 2,
            },
            {
              id: 17,
              title: "Men Socks",
              image:
                "https://zdyevmocczycunsqlkpo.supabase.co/storage/v1/object/public/shopimages/sub_category_images/m%20soks.avif",
              url: "/categories/men/clothing/lower/msocks",
              itemid: "msocks",
              sub_category_id: 2,
            },
            {
              id: 19,
              title: "Men Belts",
              image:
                "https://zdyevmocczycunsqlkpo.supabase.co/storage/v1/object/public/shopimages/sub_category_images/m%20belt.avif",
              url: "/categories/men/clothing/lower/mbelts",
              itemid: "mbelts",
              sub_category_id: 2,
            },
          ],
        },
      ],
    },
    {
      id: 2,
      title: "Women's Clothing",
      image:
        "https://zdyevmocczycunsqlkpo.supabase.co/storage/v1/object/public/shopimages/category_images/c2.avif",
      url: "/categories/women/clothing",
      SubCategory: [
        {
          id: 3,
          title: "Top Clothing",
          image:
            "https://zdyevmocczycunsqlkpo.supabase.co/storage/v1/object/public/shopimages/category_images/c2.avif",
          url: "/categories/women/clothing/top",
          category_id: 2,
          items: [
            {
              id: 2,
              title: "Women T-Shirts",
              image:
                "https://zdyevmocczycunsqlkpo.supabase.co/storage/v1/object/public/shopimages/category_images/c2.avif",
              url: "/categories/women/clothing/top/wtshirt",
              itemid: "wtshirt",
              sub_category_id: 3,
            },
            {
              id: 4,
              title: "Women Shirts",
              image:
                "https://zdyevmocczycunsqlkpo.supabase.co/storage/v1/object/public/shopimages/sub_category_images/wshirt.avif",
              url: "/categories/women/clothing/top/wshirt",
              itemid: "wshirt",
              sub_category_id: 3,
            },
            {
              id: 6,
              title: "Women Wool blouses",
              image:
                "https://zdyevmocczycunsqlkpo.supabase.co/storage/v1/object/public/shopimages/sub_category_images/wool.avif",
              url: "/categories/women/clothing/top/wblouse",
              itemid: "wblouse",
              sub_category_id: 3,
            },
            {
              id: 8,
              title: "Women Hats",
              image:
                "https://zdyevmocczycunsqlkpo.supabase.co/storage/v1/object/public/shopimages/sub_category_images/hat%20w.avif",
              url: "/categories/women/clothing/top/whats",
              itemid: "whats",
              sub_category_id: 3,
            },
            {
              id: 10,
              title: "Women Watches",
              image:
                "https://zdyevmocczycunsqlkpo.supabase.co/storage/v1/object/public/shopimages/sub_category_images/w%20watch.avif",
              url: "/categories/women/clothing/top/wwatches",
              itemid: "wwatches",
              sub_category_id: 3,
            },
            {
              id: 12,
              title: "Women Bags",
              image:
                "https://zdyevmocczycunsqlkpo.supabase.co/storage/v1/object/public/shopimages/sub_category_images/w%20bag.avif",
              url: "/categories/women/clothing/top/wbag",
              itemid: "wbag",
              sub_category_id: 3,
            },
          ],
        },
        {
          id: 4,
          title: "Lower Clothing",
          image:
            "https://zdyevmocczycunsqlkpo.supabase.co/storage/v1/object/public/shopimages/category_images/women%20jeans.avif",
          url: "/categories/women/clothing/lower",
          category_id: 2,
          items: [
            {
              id: 14,
              title: "Women Jeans",
              image:
                "https://zdyevmocczycunsqlkpo.supabase.co/storage/v1/object/public/shopimages/sub_category_images/women%20jeans.avif",
              url: "/categories/women/clothing/lower/wjeans",
              itemid: "wjeans",
              sub_category_id: 4,
            },
            {
              id: 16,
              title: "Women Pants",
              image:
                "https://zdyevmocczycunsqlkpo.supabase.co/storage/v1/object/public/shopimages/sub_category_images/w%20pants.avif",
              url: "/categories/women/clothing/lower/wpants",
              itemid: "wpants",
              sub_category_id: 4,
            },
            {
              id: 18,
              title: "Women Socks",
              image:
                "https://zdyevmocczycunsqlkpo.supabase.co/storage/v1/object/public/shopimages/sub_category_images/w%20socks.avif",
              url: "/categories/women/clothing/lower/wsocks",
              itemid: "wsocks",
              sub_category_id: 4,
            },
            {
              id: 20,
              title: "Women Belts",
              image:
                "https://zdyevmocczycunsqlkpo.supabase.co/storage/v1/object/public/shopimages/sub_category_images/w%20belt.avif",
              url: "/categories/women/clothing/lower/wbelts",
              itemid: "wbelts",
              sub_category_id: 4,
            },
          ],
        },
      ],
    },
    {
      id: 3,
      title: "Men's Shoes",
      image:
        "https://zdyevmocczycunsqlkpo.supabase.co/storage/v1/object/public/shopimages/category_images/men%20shoes.avif",
      url: "/categories/men/shoes",
      SubCategory: [
        {
          id: 5,
          title: "Men's Shoes",
          image:
            "https://zdyevmocczycunsqlkpo.supabase.co/storage/v1/object/public/shopimages/category_images/men%20shoes.avif",
          url: "/categories/men/shoes",
          category_id: 3,
          items: [
            {
              id: 21,
              title: "Men Work & Safty Shoes",
              image:
                "https://zdyevmocczycunsqlkpo.supabase.co/storage/v1/object/public/shopimages/sub_category_images/work%20safty.avif",
              url: "/categories/men/shoes/mwork",
              itemid: "mwork",
              sub_category_id: 5,
            },
            {
              id: 22,
              title: "Men Loafers & Slip-Ons",
              image:
                "https://zdyevmocczycunsqlkpo.supabase.co/storage/v1/object/public/shopimages/sub_category_images/Loafers%20&%20Slip-Ons%20m.avif",
              url: "/categories/men/shoes/mloafers",
              itemid: "mloafers",
              sub_category_id: 5,
            },
            {
              id: 24,
              title: "Men Snow Boots",
              image:
                "https://zdyevmocczycunsqlkpo.supabase.co/storage/v1/object/public/shopimages/sub_category_images/Snow%20Boots%20m.avif",
              url: "/categories/men/shoes/msnow",
              itemid: "msnow",
              sub_category_id: 5,
            },
            {
              id: 26,
              title: "Men Casual Shoes",
              image:
                "https://zdyevmocczycunsqlkpo.supabase.co/storage/v1/object/public/shopimages/sub_category_images/Casual%20Shoes.avif",
              url: "/categories/men/shoes/mcasual",
              itemid: "mcasual",
              sub_category_id: 5,
            },
            {
              id: 27,
              title: "Men Boots",
              image:
                "https://zdyevmocczycunsqlkpo.supabase.co/storage/v1/object/public/shopimages/sub_category_images/Boots%20m.avif",
              url: "/categories/men/shoes/mboots",
              itemid: "mboots",
              sub_category_id: 5,
            },
            {
              id: 28,
              title: "Men Sandals",
              image:
                "https://zdyevmocczycunsqlkpo.supabase.co/storage/v1/object/public/shopimages/sub_category_images/Sandals%20m.avif",
              url: "/categories/men/shoes/msandals",
              itemid: "msandals",
              sub_category_id: 5,
            },
            {
              id: 29,
              title: "Men Others",
              image:
                "https://zdyevmocczycunsqlkpo.supabase.co/storage/v1/object/public/shopimages/sub_category_images/m%20belt.avif",
              url: "/categories/men/shoes/mothers",
              itemid: "mothers",
              sub_category_id: 5,
            },
          ],
        },
      ],
    },
    {
      id: 4,
      title: "Women's Shoes",
      image:
        "https://zdyevmocczycunsqlkpo.supabase.co/storage/v1/object/public/shopimages/category_images/women%20shoes.avif",
      url: "/categories/women/shoes",
      SubCategory: [
        {
          id: 6,
          title: "Women's Shoes",
          image:
            "https://zdyevmocczycunsqlkpo.supabase.co/storage/v1/object/public/shopimages/category_images/women%20shoes.avif",
          url: "/categories/women/shoes",
          category_id: 4,
          items: [
            {
              id: 23,
              title: "Women Loafers & Slip-Ons",
              image:
                "https://zdyevmocczycunsqlkpo.supabase.co/storage/v1/object/public/shopimages/sub_category_images/Loafers%20&%20Slip-Ons%20w.avif",
              url: "/categories/women/shoes/wloafers",
              itemid: "wloafers",
              sub_category_id: 6,
            },
            {
              id: 25,
              title: "Women Snow Boots",
              image:
                "https://zdyevmocczycunsqlkpo.supabase.co/storage/v1/object/public/shopimages/sub_category_images/Snow%20Boots%20w.avif",
              url: "/categories/women/shoes/wsnow",
              itemid: "wsnow",
              sub_category_id: 6,
            },
            {
              id: 30,
              title: "Women Others",
              image:
                "https://zdyevmocczycunsqlkpo.supabase.co/storage/v1/object/public/shopimages/sub_category_images/w%20belt.avif",
              url: "/categories/women/shoes/wothers",
              itemid: "wothers",
              sub_category_id: 6,
            },
            {
              id: 31,
              title: "Women Flats",
              image:
                "https://zdyevmocczycunsqlkpo.supabase.co/storage/v1/object/public/shopimages/sub_category_images/Flats%20w.avif",
              url: "/categories/women/shoes/wflats",
              itemid: "wflats",
              sub_category_id: 6,
            },
            {
              id: 32,
              title: "Women Slippers",
              image:
                "https://zdyevmocczycunsqlkpo.supabase.co/storage/v1/object/public/shopimages/sub_category_images/Slippers%20w.avif",
              url: "/categories/women/shoes/wslippers",
              itemid: "wslippers",
              sub_category_id: 6,
            },
            {
              id: 33,
              title: "Women Sneakers",
              image:
                "https://zdyevmocczycunsqlkpo.supabase.co/storage/v1/object/public/shopimages/sub_category_images/sneakers%20w.avif",
              url: "/categories/women/shoes/wsneakers",
              itemid: "wsneakers",
              sub_category_id: 6,
            },
          ],
        },
      ],
    },
  ];

  return <CategoriesPage data={categories} />;
}
