import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Create categories
  const menClothingCategory = await prisma.category.create({
    data: {
      title: "Men's Clothing",
      image:
        "https://zdyevmocczycunsqlkpo.supabase.co/storage/v1/object/public/shopimages/category_images/c3.avif",
      url: "/categories/men/clothing",
    },
  });

  const womenClothingCategory = await prisma.category.create({
    data: {
      title: "Women's Clothing",
      image:
        "https://zdyevmocczycunsqlkpo.supabase.co/storage/v1/object/public/shopimages/category_images/c2.avif",
      url: "/categories/women/clothing",
    },
  });

  const menShoesCategory = await prisma.category.create({
    data: {
      title: "Men's Shoes",
      image:
        "https://zdyevmocczycunsqlkpo.supabase.co/storage/v1/object/public/shopimages/category_images/men%20shoes.avif",
      url: "/categories/men/shoes",
    },
  });

  const womenShoesCategory = await prisma.category.create({
    data: {
      title: "Women's Shoes",
      image:
        "https://zdyevmocczycunsqlkpo.supabase.co/storage/v1/object/public/shopimages/category_images/women%20shoes.avif",
      url: "/categories/women/shoes",
    },
  });

  ////////////////////////////// Create types for the categories
  const menTopClothingType = await prisma.subCategory.create({
    data: {
      title: "Top Clothing",
      category_id: menClothingCategory.id,
      url: "/categories/men/clothing/top",
      image:
        "https://zdyevmocczycunsqlkpo.supabase.co/storage/v1/object/public/shopimages/category_images/c3.avif",
    },
  });

  const menLowerClothingType = await prisma.subCategory.create({
    data: {
      title: "Lower Clothing",
      category_id: menClothingCategory.id,
      url: "/categories/men/clothing/lower",
      image:
        "https://zdyevmocczycunsqlkpo.supabase.co/storage/v1/object/public/shopimages/category_images/jeans.avif",
    },
  });

  const womenTopClothingType = await prisma.subCategory.create({
    data: {
      title: "Top Clothing",
      category_id: womenClothingCategory.id,
      url: "/categories/women/clothing/top",
      image:
        "https://zdyevmocczycunsqlkpo.supabase.co/storage/v1/object/public/shopimages/category_images/c2.avif",
    },
  });

  const womenLowerClothingType = await prisma.subCategory.create({
    data: {
      title: "Lower Clothing",
      category_id: womenClothingCategory.id,
      url: "/categories/women/clothing/lower",
      image:
        "https://zdyevmocczycunsqlkpo.supabase.co/storage/v1/object/public/shopimages/category_images/women%20jeans.avif",
    },
  });

  const menShoesType = await prisma.subCategory.create({
    data: {
      title: "Men's Shoes",
      category_id: menShoesCategory.id,
      url: "/categories/men/shoes",
      image:
        "https://zdyevmocczycunsqlkpo.supabase.co/storage/v1/object/public/shopimages/category_images/men%20shoes.avif",
    },
  });
  const womenShoesType = await prisma.subCategory.create({
    data: {
      title: "Women's Shoes",
      category_id: womenShoesCategory.id,
      url: "/categories/women/shoes",
      image:
        "https://zdyevmocczycunsqlkpo.supabase.co/storage/v1/object/public/shopimages/category_images/women%20shoes.avif",
    },
  });

  ////////////////////////////// Create items for the types
  //////////////////////////////////////////////////////////
  const mtshirt = await prisma.item.create({
    data: {
      title: "Men T-Shirts",
      image: "https://zdyevmocczycunsqlkpo.supabase.co/storage/v1/object/public/shopimages/category_images/c3.avif",
      sub_category_id: menTopClothingType.id,
      url: "/categories/men/clothing/top/mtshirt",
      itemid: "mtshirt",
    },
  });
  const wtshirt = await prisma.item.create({
    data: {
      title: "Women T-Shirts",
      image: "https://zdyevmocczycunsqlkpo.supabase.co/storage/v1/object/public/shopimages/category_images/c2.avif",
      sub_category_id: womenTopClothingType.id,
      url: "/categories/women/clothing/top/wtshirt",
      itemid: "wtshirt",
    },
  });
  const mShirts = await prisma.item.create({
    data: {
      title: "Men Shirts",
      image: "https://zdyevmocczycunsqlkpo.supabase.co/storage/v1/object/public/shopimages/sub_category_images/shirt.avif",
      sub_category_id: menTopClothingType.id,
      url: "/categories/men/clothing/top/mshirt",
      itemid: "mshirt",
    },
  });
  const wShirts = await prisma.item.create({
    data: {
      title: "Women Shirts",
      image: "https://zdyevmocczycunsqlkpo.supabase.co/storage/v1/object/public/shopimages/sub_category_images/wshirt.avif",
      sub_category_id: womenTopClothingType.id,
      url: "/categories/women/clothing/top/wshirt",
      itemid: "wshirt",
    },
  });
  const mblouse = await prisma.item.create({
    data: {
      title: "Men Wool blouses",
      image: "https://zdyevmocczycunsqlkpo.supabase.co/storage/v1/object/public/shopimages/sub_category_images/mwool.avif",
      sub_category_id: menTopClothingType.id,
      url: "/categories/men/clothing/top/mblouse",
      itemid: "mblouse",
    },
  });
  const wblouse = await prisma.item.create({
    data: {
      title: "Women Wool blouses",
      image: "https://zdyevmocczycunsqlkpo.supabase.co/storage/v1/object/public/shopimages/sub_category_images/wool.avif",
      sub_category_id: womenTopClothingType.id,
      url: "/categories/women/clothing/top/wblouse",
      itemid: "wblouse",
    },
  });
  const mHats = await prisma.item.create({
    data: {
      title: "Men Hats",
      image: "https://zdyevmocczycunsqlkpo.supabase.co/storage/v1/object/public/shopimages/sub_category_images/hat%20m.avif",
      sub_category_id: menTopClothingType.id,
      url: "/categories/men/clothing/top/mhats",
      itemid: "mhats",
    },
  });
  const wHats = await prisma.item.create({
    data: {
      title: "Women Hats",
      image: "https://zdyevmocczycunsqlkpo.supabase.co/storage/v1/object/public/shopimages/sub_category_images/hat%20w.avif",
      sub_category_id: womenTopClothingType.id,
      url: "/categories/women/clothing/top/whats",
      itemid: "whats",
    },
  });
  const mWatches = await prisma.item.create({
    data: {
      title: "Men Watches",
      image: "https://zdyevmocczycunsqlkpo.supabase.co/storage/v1/object/public/shopimages/sub_category_images/m%20watch.avif",
      sub_category_id: menTopClothingType.id,
      url: "/categories/men/clothing/top/mwatches",
      itemid: "mwatches",
    },
  });
  const wWatches = await prisma.item.create({
    data: {
      title: "Women Watches",
      image: "https://zdyevmocczycunsqlkpo.supabase.co/storage/v1/object/public/shopimages/sub_category_images/w%20watch.avif",
      sub_category_id: womenTopClothingType.id,
      url: "/categories/women/clothing/top/wwatches",
      itemid: "wwatches",
    },
  });
  const mBag = await prisma.item.create({
    data: {
      title: "Men Bags",
      image: "https://zdyevmocczycunsqlkpo.supabase.co/storage/v1/object/public/shopimages/sub_category_images/m%20bag.avif",
      sub_category_id: menTopClothingType.id,
      url: "/categories/men/clothing/top/mbag",
      itemid: "mbag",
    },
  });
  const wBag = await prisma.item.create({
    data: {
      title: "Women Bags",
      image: "https://zdyevmocczycunsqlkpo.supabase.co/storage/v1/object/public/shopimages/sub_category_images/w%20bag.avif",
      sub_category_id: womenTopClothingType.id,
      url: "/categories/women/clothing/top/wbag",
      itemid: "wbag",
    },
  });
  const mJeans = await prisma.item.create({
    data: {
      title: "Men Jeans",
      image: "https://zdyevmocczycunsqlkpo.supabase.co/storage/v1/object/public/shopimages/sub_category_images/jeans.avif",
      sub_category_id: menLowerClothingType.id,
      url: "/categories/men/clothing/lower/mjeans",
      itemid: "mjeans",
    },
  });
  const wJeans = await prisma.item.create({
    data: {
      title: "Women Jeans",
      image: "https://zdyevmocczycunsqlkpo.supabase.co/storage/v1/object/public/shopimages/sub_category_images/women%20jeans.avif",
      sub_category_id: womenLowerClothingType.id,
      url: "/categories/women/clothing/lower/wjeans",
      itemid: "wjeans",
    },
  });
  const mPants = await prisma.item.create({
    data: {
      title: "Men Pants",
      image: "https://zdyevmocczycunsqlkpo.supabase.co/storage/v1/object/public/shopimages/sub_category_images/m%20pants.avif",
      sub_category_id: menLowerClothingType.id,
      url: "/categories/men/clothing/lower/mpants",
      itemid: "mpants",
    },
  });
  const wPants = await prisma.item.create({
    data: {
      title: "Women Pants",
      image: "https://zdyevmocczycunsqlkpo.supabase.co/storage/v1/object/public/shopimages/sub_category_images/w%20pants.avif",
      sub_category_id: womenLowerClothingType.id,
      url: "/categories/women/clothing/lower/wpants",
      itemid: "wpants",
    },
  });
  const mSocks = await prisma.item.create({
    data: {
      title: "Men Socks",
      image: "https://zdyevmocczycunsqlkpo.supabase.co/storage/v1/object/public/shopimages/sub_category_images/m%20soks.avif",
      sub_category_id: menLowerClothingType.id,
      url: "/categories/men/clothing/lower/msocks",
      itemid: "msocks",
    },
  });
  const wSocks = await prisma.item.create({
    data: {
      title: "Women Socks",
      image: "https://zdyevmocczycunsqlkpo.supabase.co/storage/v1/object/public/shopimages/sub_category_images/w%20socks.avif",
      sub_category_id: womenLowerClothingType.id,
      url: "/categories/women/clothing/lower/wsocks",
      itemid: "wsocks",
    },
  });
  const mBelts = await prisma.item.create({
    data: {
      title: "Men Belts",
      image: "https://zdyevmocczycunsqlkpo.supabase.co/storage/v1/object/public/shopimages/sub_category_images/m%20belt.avif",
      sub_category_id: menLowerClothingType.id,
      url: "/categories/men/clothing/lower/mbelts",
      itemid: "mbelts",
    },
  });
  const wBelts = await prisma.item.create({
    data: {
      title: "Women Belts",
      image: "https://zdyevmocczycunsqlkpo.supabase.co/storage/v1/object/public/shopimages/sub_category_images/w%20belt.avif",
      sub_category_id: womenLowerClothingType.id,
      url: "/categories/women/clothing/lower/wbelts",
      itemid: "wbelts",
    },
  });
  const mWork = await prisma.item.create({
    data: {
      title: "Men Work & Safty Shoes",
      image: "https://zdyevmocczycunsqlkpo.supabase.co/storage/v1/object/public/shopimages/sub_category_images/work%20safty.avif",
      sub_category_id: menShoesType.id,
      url: "/categories/men/shoes/mwork",
      itemid: "mwork",
    },
  });
  const mLoafers = await prisma.item.create({
    data: {
      title: "Men Loafers & Slip-Ons",
      image: "https://zdyevmocczycunsqlkpo.supabase.co/storage/v1/object/public/shopimages/sub_category_images/Loafers%20&%20Slip-Ons%20m.avif",
      sub_category_id: menShoesType.id,
      url: "/categories/men/shoes/mloafers",
      itemid: "mloafers",
    },
  });
  const wLoafers = await prisma.item.create({
    data: {
      title: "Women Loafers & Slip-Ons",
      image: "https://zdyevmocczycunsqlkpo.supabase.co/storage/v1/object/public/shopimages/sub_category_images/Loafers%20&%20Slip-Ons%20w.avif",
      sub_category_id: womenShoesType.id,
      url: "/categories/women/shoes/wloafers",
      itemid: "wloafers",
    },
  });
  const mSnow = await prisma.item.create({
    data: {
      title: "Men Snow Boots",
      image: "https://zdyevmocczycunsqlkpo.supabase.co/storage/v1/object/public/shopimages/sub_category_images/Snow%20Boots%20m.avif",
      sub_category_id: menShoesType.id,
      url: "/categories/men/shoes/msnow",
      itemid: "msnow",
    },
  });
  const wSnow = await prisma.item.create({
    data: {
      title: "Women Snow Boots",
      image: "https://zdyevmocczycunsqlkpo.supabase.co/storage/v1/object/public/shopimages/sub_category_images/Snow%20Boots%20w.avif",
      sub_category_id: womenShoesType.id,
      url: "/categories/women/shoes/wsnow",
      itemid: "wsnow",
    },
  });
  const mCasual = await prisma.item.create({
    data: {
      title: "Men Casual Shoes",
      image: "https://zdyevmocczycunsqlkpo.supabase.co/storage/v1/object/public/shopimages/sub_category_images/Casual%20Shoes.avif",
      sub_category_id: menShoesType.id,
      url: "/categories/men/shoes/mcasual",
      itemid: "mcasual",
    },
  });
  const mBoots = await prisma.item.create({
    data: {
      title: "Men Boots",
      image: "https://zdyevmocczycunsqlkpo.supabase.co/storage/v1/object/public/shopimages/sub_category_images/Boots%20m.avif",
      sub_category_id: menShoesType.id,
      url: "/categories/men/shoes/mboots",
      itemid: "mboots",
    },
  });
  const mSandals = await prisma.item.create({
    data: {
      title: "Men Sandals",
      image: "https://zdyevmocczycunsqlkpo.supabase.co/storage/v1/object/public/shopimages/sub_category_images/Sandals%20m.avif",
      sub_category_id: menShoesType.id,
      url: "/categories/men/shoes/msandals",
      itemid: "msandals",
    },
  });
  const mOthers = await prisma.item.create({
    data: {
      title: "Men Others",
      image: "https://zdyevmocczycunsqlkpo.supabase.co/storage/v1/object/public/shopimages/sub_category_images/m%20belt.avif",
      sub_category_id: menShoesType.id,
      url: "/categories/men/shoes/mothers",
      itemid: "mothers",
    },
  });
  const wOthers = await prisma.item.create({
    data: {
      title: "Women Others",
      image: "https://zdyevmocczycunsqlkpo.supabase.co/storage/v1/object/public/shopimages/sub_category_images/w%20belt.avif",
      sub_category_id: womenShoesType.id,
      url: "/categories/women/shoes/wothers",
      itemid: "wothers",
    },
  });
  const wFlats = await prisma.item.create({
    data: {
      title: "Women Flats",
      image: "https://zdyevmocczycunsqlkpo.supabase.co/storage/v1/object/public/shopimages/sub_category_images/Flats%20w.avif",
      sub_category_id: womenShoesType.id,
      url: "/categories/women/shoes/wflats",
      itemid: "wflats",
    },
  });
  const wSlippers = await prisma.item.create({
    data: {
      title: "Women Slippers",
      image: "https://zdyevmocczycunsqlkpo.supabase.co/storage/v1/object/public/shopimages/sub_category_images/Slippers%20w.avif",
      sub_category_id: womenShoesType.id,
      url: "/categories/women/shoes/wslippers",
      itemid: "wslippers",
    },
  });
  const wSneakers = await prisma.item.create({
    data: {
      title: "Women Sneakers",
      image: "https://zdyevmocczycunsqlkpo.supabase.co/storage/v1/object/public/shopimages/sub_category_images/sneakers%20w.avif",
      sub_category_id: womenShoesType.id,
      url: "/categories/women/shoes/wsneakers",
      itemid: "wsneakers",
    },
  });

  // ////////////////////////////// Create item details for the items
  // const tshirtDetail = await prisma.itemDetail.create({
  //   data: {
  //     title: "T-Shirt",
  //     image: "",
  //     alt: "Black T-Shirt",
  //     details: "Made from cotton.",
  //     color: "Black",
  //     itemId: mtshirt.id,
  //     description: "A stylish black t-shirt.",
  //     price: "20",
  //     size: "M",
  //     url: "",
  //   },
  // });

  // const jeansDetail = await prisma.itemDetail.create({
  //   data: {
  //     title: "Jeans",
  //     itemId: mJeans.id,
  //     color: "Blue",
  //     size: "32",
  //     price: "40",
  //     image: "",
  //     alt: "Blue Jeans",
  //     description: "Comfortable denim jeans.",
  //     details: "Made from denim.",
  //     url: "",
  //   },
  // });

  // const sneakersDetail = await prisma.itemDetail.create({
  //   data: {
  //     title: "Sneakers",
  //     itemId: wSneakers.id,
  //     color: "White",
  //     size: "10",
  //     price: "50",
  //     image: "",
  //     alt: "White Sneakers",
  //     description: "Stylish white sneakers.",
  //     details: "Made for comfort and style.",
  //     url: "",
  //   },
  // });

  console.log("Seeding completed successfully!");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error("Error in seeding:", e);
    await prisma.$disconnect();
    process.exit(1);
  });

// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// async function main() {
//   // Create categories
//   const menClothingCategory = await prisma.category.create({
//     data: {
//       title: "Men's Clothing",
//       image:
//         "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg",
//       url: "/categories/men/clothing",
//     },
//   });

//   const womenClothingCategory = await prisma.category.create({
//     data: {
//       title: "Women's Clothing",
//       image:
//         "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg",
//       url: "/categories/women/clothing",
//     },
//   });

//   const menShoesCategory = await prisma.category.create({
//     data: {
//       title: "Men's Shoes",
//       image:
//         "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg",
//       url: "/categories/men/shoes",
//     },
//   });

//   const womenShoesCategory = await prisma.category.create({
//     data: {
//       title: "Women's Shoes",
//       image:
//         "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg",
//       url: "/categories/women/shoes",
//     },
//   });

//   ////////////////////////////// Create SubCategory
//   const menTopClothingType = await prisma.subCategory.create({
//     data: {
//       title: "Top Clothing",
//       id: menClothingCategory.id,
//       url: "top",
//       image: "",
//     },
//   });

//   const menLowerClothingType = await prisma.subCategory.create({
//     data: {
//       title: "Lower Clothing",
//       id: menClothingCategory.id,
//       url: "lower",
//       image: "",
//     },
//   });

//   const womenTopClothingType = await prisma.subCategory.create({
//     data: {
//       title: "Top Clothing",
//       id: womenClothingCategory.id,
//       url: "top",
//       image: "",
//     },
//   });

//   const womenLowerClothingType = await prisma.subCategory.create({
//     data: {
//       title: "Lower Clothing",
//       id: womenClothingCategory.id,
//       url: "top",
//       image: "",
//     },
//   });

//   const menShoesType = await prisma.subCategory.create({
//     data: {
//       title: "Men's Shoes",
//       id: menShoesCategory.id,
//       url: "shoes",
//       image: "",
//     },
//   });
//   const womenShoesType = await prisma.subCategory.create({
//     data: {
//       title: "Women's Shoes",
//       id: womenShoesCategory.id,
//       url: "shoes",
//       image: "",
//     },
//   });

//   ////////////////////////////// Create items for the subCategory
//   //////////////////////////////////////////////////////////
//   const mtshirt = await prisma.item.create({
//     data: {
//       title: "T-Shirts",
//       image: "",
//       id: menTopClothingType.id,
//       url: "tshirt",
//       category: "mtshirt",
//     },
//   });
//   const wtshirt = await prisma.item.create({
//     data: {
//       title: "T-Shirts",
//       image: "",
//       id: womenTopClothingType.id,
//       url: "tshirt",
//       category: "wtshirt",
//     },
//   });
//   const mShirts = await prisma.item.create({
//     data: {
//       title: "Shirts",
//       image: "",
//       id: menTopClothingType.id,
//       url: "shirt",
//       category: "mshirt",
//     },
//   });
//   const wShirts = await prisma.item.create({
//     data: {
//       title: "Shirts",
//       image: "",
//       id: womenTopClothingType.id,
//       url: "shirt",
//       category: "wshirt",
//     },
//   });
//   const mblouse = await prisma.item.create({
//     data: {
//       title: "Wool blouses",
//       image: "",
//       id: menTopClothingType.id,
//       url: "blouse",
//       category: "mblouse",
//     },
//   });
//   const wblouse = await prisma.item.create({
//     data: {
//       title: "Wool blouses",
//       image: "",
//       id: womenTopClothingType.id,
//       url: "blouse",
//       category: "wblouse",
//     },
//   });
//   const mHats = await prisma.item.create({
//     data: {
//       title: "Hats",
//       image: "",
//       id: menTopClothingType.id,
//       url: "hats",
//       category: "mhats",
//     },
//   });
//   const wHats = await prisma.item.create({
//     data: {
//       title: "Hats",
//       image: "",
//       id: womenTopClothingType.id,
//       url: "hats",
//       category: "whats",
//     },
//   });
//   const mWatches = await prisma.item.create({
//     data: {
//       title: "Watches",
//       image: "",
//       id: menTopClothingType.id,
//       url: "watches",
//       category: "mwatches",
//     },
//   });
//   const wWatches = await prisma.item.create({
//     data: {
//       title: "Watches",
//       image: "",
//       id: womenTopClothingType.id,
//       url: "watches",
//       category: "wwatches",
//     },
//   });
//   const mBag = await prisma.item.create({
//     data: {
//       title: "Bags",
//       image: "",
//       id: menTopClothingType.id,
//       url: "bag",
//       category: "mbag",
//     },
//   });
//   const wBag = await prisma.item.create({
//     data: {
//       title: "Bags",
//       image: "",
//       id: womenTopClothingType.id,
//       url: "bag",
//       category: "wbag",
//     },
//   });
//   const mJeans = await prisma.item.create({
//     data: {
//       title: "Jeans",
//       image: "",
//       id: menLowerClothingType.id,
//       url: "jeans",
//       category: "mjeans",
//     },
//   });
//   const wJeans = await prisma.item.create({
//     data: {
//       title: "Jeans",
//       image: "",
//       id: womenLowerClothingType.id,
//       url: "jeans",
//       category: "wjeans",
//     },
//   });
//   const mPants = await prisma.item.create({
//     data: {
//       title: "Pants",
//       image: "",
//       id: menLowerClothingType.id,
//       url: "pants",
//       category: "mpants",
//     },
//   });
//   const wPants = await prisma.item.create({
//     data: {
//       title: "Pants",
//       image: "",
//       id: womenLowerClothingType.id,
//       url: "pants",
//       category: "wpants",
//     },
//   });
//   const mSocks = await prisma.item.create({
//     data: {
//       title: "Socks",
//       image: "",
//       id: menLowerClothingType.id,
//       url: "socks",
//       category: "msocks",
//     },
//   });
//   const wSocks = await prisma.item.create({
//     data: {
//       title: "Socks",
//       image: "",
//       id: womenLowerClothingType.id,
//       url: "socks",
//       category: "wsocks",
//     },
//   });
//   const mBelts = await prisma.item.create({
//     data: {
//       title: "Belts",
//       image: "",
//       id: menLowerClothingType.id,
//       url: "belts",
//       category: "mbelts",
//     },
//   });
//   const wBelts = await prisma.item.create({
//     data: {
//       title: "Belts",
//       image: "",
//       id: womenLowerClothingType.id,
//       url: "belts",
//       category: "wbelts",
//     },
//   });
//   const mWork = await prisma.item.create({
//     data: {
//       title: "Work & Safty Shoes",
//       image: "",
//       id: menShoesType.id,
//       url: "work",
//       category: "mwork",
//     },
//   });
//   const mLoafers = await prisma.item.create({
//     data: {
//       title: "Loafers & Slip-Ons",
//       image: "",
//       id: menShoesType.id,
//       url: "loafers",
//       category: "mloafers",
//     },
//   });
//   const wLoafers = await prisma.item.create({
//     data: {
//       title: "Loafers & Slip-Ons",
//       image: "",
//       id: womenShoesType.id,
//       url: "loafers",
//       category: "wloafers",
//     },
//   });
//   const mSnow = await prisma.item.create({
//     data: {
//       title: "Snow Boots",
//       image: "",
//       id: menShoesType.id,
//       url: "snow",
//       category: "msnow",
//     },
//   });
//   const wSnow = await prisma.item.create({
//     data: {
//       title: "Snow Boots",
//       image: "",
//       id: womenShoesType.id,
//       url: "snow",
//       category: "wsnow",
//     },
//   });
//   const mCasual = await prisma.item.create({
//     data: {
//       title: "Casual Shoes",
//       image: "",
//       id: menShoesType.id,
//       url: "casual",
//       category: "mcasual",
//     },
//   });
//   const mBoots = await prisma.item.create({
//     data: {
//       title: "Boots",
//       image: "",
//       id: menShoesType.id,
//       url: "boots",
//       category: "mboots",
//     },
//   });
//   const mSandals = await prisma.item.create({
//     data: {
//       title: "Sandals",
//       image: "",
//       id: menShoesType.id,
//       url: "sandals",
//       category: "msandals",
//     },
//   });
//   const mOthers = await prisma.item.create({
//     data: {
//       title: "Others",
//       image: "",
//       id: menShoesType.id,
//       url: "others",
//       category: "mothers",
//     },
//   });
//   const wOthers = await prisma.item.create({
//     data: {
//       title: "Others",
//       image: "",
//       id: womenShoesType.id,
//       url: "others",
//       category: "wothers",
//     },
//   });
//   const wFlats = await prisma.item.create({
//     data: {
//       title: "Flats",
//       image: "",
//       id: womenShoesType.id,
//       url: "flats",
//       category: "wflats",
//     },
//   });
//   const wSlippers = await prisma.item.create({
//     data: {
//       title: "Slippers",
//       image: "",
//       id: womenShoesType.id,
//       url: "slippers",
//       category: "wslippers",
//     },
//   });
//   const wSneakers = await prisma.item.create({
//     data: {
//       title: "Sneakers",
//       image: "",
//       id: womenShoesType.id,
//       url: "sneakers",
//       category: "wsneakers",
//     },
//   });

//   // ////////////////////////////// Create item details for the items
//   // const tshirtDetail = await prisma.itemDetail.create({
//   //   data: {
//   //     title: "T-Shirt Detail",
//   //     image: "",
//   //     alt: "Black T-Shirt",
//   //     details: "Made from cotton.",
//   //     color: "Black",
//   //     itemId: mtshirt.id,
//   //     description: "A stylish black t-shirt.",
//   //     price: "20",
//   //     size: "M",
//   //     url: "",
//   //   },
//   // });

//   // const jeansDetail = await prisma.itemDetail.create({
//   //   data: {
//   //     title: "Jeans Detail",
//   //     itemId: mJeans.id,
//   //     color: "Blue",
//   //     size: "32",
//   //     price: "40",
//   //     image: "",
//   //     alt: "Blue Jeans",
//   //     description: "Comfortable denim jeans.",
//   //     details: "Made from denim.",
//   //     url: "",
//   //   },
//   // });

//   // const sneakersDetail = await prisma.itemDetail.create({
//   //   data: {
//   //     title: "Sneakers Detail",
//   //     itemId: wSneakers.id,
//   //     color: "White",
//   //     size: "10",
//   //     price: "50",
//   //     image: "",
//   //     alt: "White Sneakers",
//   //     description: "Stylish white sneakers.",
//   //     details: "Made for comfort and style.",
//   //     url: "",
//   //   },
//   // });

//   console.log("Seeding completed successfully!");
// }

// main()
//   .then(async () => {
//     await prisma.$disconnect();
//   })
//   .catch(async (e) => {
//     console.error("Error in seeding:", e);
//     await prisma.$disconnect();
//     process.exit(1);
//   });
