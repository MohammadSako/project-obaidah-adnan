import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Create categories
  const menClothingCategory = await prisma.category.create({
    data: {
      name: "Men's Clothing",
      image:
        "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg",
      url: "/categories/men/clothing",
    },
  });

  const womenClothingCategory = await prisma.category.create({
    data: {
      name: "Women's Clothing",
      image:
        "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg",
      url: "/categories/women/clothing",
    },
  });

  const menShoesCategory = await prisma.category.create({
    data: {
      name: "Men's Shoes",
      image:
        "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg",
      url: "/categories/men/shoes",
    },
  });

  const womenShoesCategory = await prisma.category.create({
    data: {
      name: "Women's Shoes",
      image:
        "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg",
      url: "/categories/women/shoes",
    },
  });

  ////////////////////////////// Create types for the categories
  const menTopClothingType = await prisma.subCategory.create({
    data: {
      name: "Top Clothing",
      category_id: menClothingCategory.category_id,
      url: "top",
    },
  });

  const menLowerClothingType = await prisma.subCategory.create({
    data: {
      name: "Lower Clothing",
      category_id: menClothingCategory.category_id,
      url: "lower",
    },
  });

  const womenTopClothingType = await prisma.subCategory.create({
    data: {
      name: "Top Clothing",
      category_id: womenClothingCategory.category_id,
      url: "top",
    },
  });

  const womenLowerClothingType = await prisma.subCategory.create({
    data: {
      name: "Lower Clothing",
      category_id: womenClothingCategory.category_id,
      url: "lower",
    },
  });

  const menShoesType = await prisma.subCategory.create({
    data: {
      name: "Men's Shoes",
      category_id: menShoesCategory.category_id,
      url: "shoes",
    },
  });
  const womenShoesType = await prisma.subCategory.create({
    data: {
      name: "Women's Shoes",
      category_id: womenShoesCategory.category_id,
      url: "shoes",
    },
  });

  ////////////////////////////// Create items for the types
  //////////////////////////////////////////////////////////
  const mtshirt = await prisma.item.create({
    data: {
      name: "T-Shirts",
      image: "",
      sub_category_id: menTopClothingType.sub_category_id,
      url: "tshirt",
    },
  });
  const wtshirt = await prisma.item.create({
    data: {
      name: "T-Shirts",
      image: "",
      sub_category_id: womenTopClothingType.sub_category_id,
      url: "tshirt",
    },
  });
  const mShirts = await prisma.item.create({
    data: {
      name: "Shirts",
      image: "",
      sub_category_id: menTopClothingType.sub_category_id,
      url: "shirt",
    },
  });
  const wShirts = await prisma.item.create({
    data: {
      name: "Shirts",
      image: "",
      sub_category_id: womenTopClothingType.sub_category_id,
      url: "shirt",
    },
  });
  const mblouse = await prisma.item.create({
    data: {
      name: "Wool blouses",
      image: "",
      sub_category_id: menTopClothingType.sub_category_id,
      url: "blouse",
    },
  });
  const wblouse = await prisma.item.create({
    data: {
      name: "Wool blouses",
      image: "",
      sub_category_id: womenTopClothingType.sub_category_id,
      url: "blouse",
    },
  });
  const mHats = await prisma.item.create({
    data: {
      name: "Hats",
      image: "",
      sub_category_id: menTopClothingType.sub_category_id,
      url: "hats",
    },
  });
  const wHats = await prisma.item.create({
    data: {
      name: "Hats",
      image: "",
      sub_category_id: womenTopClothingType.sub_category_id,
      url: "hats",
    },
  });
  const mWatches = await prisma.item.create({
    data: {
      name: "Watches",
      image: "",
      sub_category_id: menTopClothingType.sub_category_id,
      url: "watches",
    },
  });
  const wWatches = await prisma.item.create({
    data: {
      name: "Watches",
      image: "",
      sub_category_id: womenTopClothingType.sub_category_id,
      url: "watches",
    },
  });
  const mBag = await prisma.item.create({
    data: {
      name: "Bags",
      image: "",
      sub_category_id: menTopClothingType.sub_category_id,
      url: "bag",
    },
  });
  const wBag = await prisma.item.create({
    data: {
      name: "Bags",
      image: "",
      sub_category_id: womenTopClothingType.sub_category_id,
      url: "bag",
    },
  });
  const mJeans = await prisma.item.create({
    data: {
      name: "Jeans",
      image: "",
      sub_category_id: menLowerClothingType.sub_category_id,
      url: "jeans",
    },
  });
  const wJeans = await prisma.item.create({
    data: {
      name: "Jeans",
      image: "",
      sub_category_id: womenLowerClothingType.sub_category_id,
      url: "jeans",
    },
  });
  const mPants = await prisma.item.create({
    data: {
      name: "Pants",
      image: "",
      sub_category_id: menLowerClothingType.sub_category_id,
      url: "pants",
    },
  });
  const wPants = await prisma.item.create({
    data: {
      name: "Pants",
      image: "",
      sub_category_id: womenLowerClothingType.sub_category_id,
      url: "pants",
    },
  });
  const mSocks = await prisma.item.create({
    data: {
      name: "Socks",
      image: "",
      sub_category_id: menLowerClothingType.sub_category_id,
      url: "socks",
    },
  });
  const wSocks = await prisma.item.create({
    data: {
      name: "Socks",
      image: "",
      sub_category_id: womenLowerClothingType.sub_category_id,
      url: "socks",
    },
  });
  const mBelts = await prisma.item.create({
    data: {
      name: "Belts",
      image: "",
      sub_category_id: menLowerClothingType.sub_category_id,
      url: "belts",
    },
  });
  const wBelts = await prisma.item.create({
    data: {
      name: "Belts",
      image: "",
      sub_category_id: womenLowerClothingType.sub_category_id,
      url: "belts",
    },
  });
  const mWork = await prisma.item.create({
    data: {
      name: "Work & Safty Shoes",
      image: "",
      sub_category_id: menShoesType.sub_category_id,
      url: "work",
    },
  });
  const mLoafers = await prisma.item.create({
    data: {
      name: "Loafers & Slip-Ons",
      image: "",
      sub_category_id: menShoesType.sub_category_id,
      url: "loafers",
    },
  });
  const wLoafers = await prisma.item.create({
    data: {
      name: "Loafers & Slip-Ons",
      image: "",
      sub_category_id: womenShoesType.sub_category_id,
      url: "loafers",
    },
  });
  const mSnow = await prisma.item.create({
    data: {
      name: "Snow Boots",
      image: "",
      sub_category_id: menShoesType.sub_category_id,
      url: "snow",
    },
  });
  const wSnow = await prisma.item.create({
    data: {
      name: "Snow Boots",
      image: "",
      sub_category_id: womenShoesType.sub_category_id,
      url: "snow",
    },
  });
  const mCasual = await prisma.item.create({
    data: {
      name: "Casual Shoes",
      image: "",
      sub_category_id: menShoesType.sub_category_id,
      url: "casual",
    },
  });
  const mBoots = await prisma.item.create({
    data: {
      name: "Boots",
      image: "",
      sub_category_id: menShoesType.sub_category_id,
      url: "boots",
    },
  });
  const mSandals = await prisma.item.create({
    data: {
      name: "Sandals",
      image: "",
      sub_category_id: menShoesType.sub_category_id,
      url: "sandals",
    },
  });
  const mOthers = await prisma.item.create({
    data: {
      name: "Others",
      image: "",
      sub_category_id: menShoesType.sub_category_id,
      url: "others",
    },
  });
  const wOthers = await prisma.item.create({
    data: {
      name: "Others",
      image: "",
      sub_category_id: womenShoesType.sub_category_id,
      url: "others",
    },
  });
  const wFlats = await prisma.item.create({
    data: {
      name: "Flats",
      image: "",
      sub_category_id: womenShoesType.sub_category_id,
      url: "flats",
    },
  });
  const wSlippers = await prisma.item.create({
    data: {
      name: "Slippers",
      image: "",
      sub_category_id: womenShoesType.sub_category_id,
      url: "slippers",
    },
  });
  const wSneakers = await prisma.item.create({
    data: {
      name: "Sneakers",
      image: "",
      sub_category_id: womenShoesType.sub_category_id,
      url: "sneakers",
    },
  });

  // ////////////////////////////// Create item details for the items
  // const tshirtDetail = await prisma.itemDetail.create({
  //   data: {
  //     title: "T-Shirt Detail",
  //     image: "",
  //     alt: "Black T-Shirt",
  //     details: "Made from cotton.",
  //     color: "Black",
  //     itemId: mtshirt.sub_category_id,
  //     description: "A stylish black t-shirt.",
  //     price: "20",
  //     size: "M",
  //     url: "",
  //   },
  // });

  // const jeansDetail = await prisma.itemDetail.create({
  //   data: {
  //     title: "Jeans Detail",
  //     itemId: mJeans.sub_category_id,
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
  //     title: "Sneakers Detail",
  //     itemId: wSneakers.sub_category_id,
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
//       name: "Men's Clothing",
//       image:
//         "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg",
//       url: "/categories/men/clothing",
//     },
//   });

//   const womenClothingCategory = await prisma.category.create({
//     data: {
//       name: "Women's Clothing",
//       image:
//         "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg",
//       url: "/categories/women/clothing",
//     },
//   });

//   const menShoesCategory = await prisma.category.create({
//     data: {
//       name: "Men's Shoes",
//       image:
//         "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg",
//       url: "/categories/men/shoes",
//     },
//   });

//   const womenShoesCategory = await prisma.category.create({
//     data: {
//       name: "Women's Shoes",
//       image:
//         "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg",
//       url: "/categories/women/shoes",
//     },
//   });

//   ////////////////////////////// Create SubCategory
//   const menTopClothingType = await prisma.subCategory.create({
//     data: {
//       name: "Top Clothing",
//       category_id: menClothingCategory.sub_category_id,
//       url: "top",
//       image: "",
//     },
//   });

//   const menLowerClothingType = await prisma.subCategory.create({
//     data: {
//       name: "Lower Clothing",
//       category_id: menClothingCategory.sub_category_id,
//       url: "lower",
//       image: "",
//     },
//   });

//   const womenTopClothingType = await prisma.subCategory.create({
//     data: {
//       name: "Top Clothing",
//       category_id: womenClothingCategory.sub_category_id,
//       url: "top",
//       image: "",
//     },
//   });

//   const womenLowerClothingType = await prisma.subCategory.create({
//     data: {
//       name: "Lower Clothing",
//       category_id: womenClothingCategory.sub_category_id,
//       url: "top",
//       image: "",
//     },
//   });

//   const menShoesType = await prisma.subCategory.create({
//     data: {
//       name: "Men's Shoes",
//       category_id: menShoesCategory.sub_category_id,
//       url: "shoes",
//       image: "",
//     },
//   });
//   const womenShoesType = await prisma.subCategory.create({
//     data: {
//       name: "Women's Shoes",
//       category_id: womenShoesCategory.sub_category_id,
//       url: "shoes",
//       image: "",
//     },
//   });

//   ////////////////////////////// Create items for the subCategory
//   //////////////////////////////////////////////////////////
//   const mtshirt = await prisma.item.create({
//     data: {
//       name: "T-Shirts",
//       image: "",
//       sub_category_id: menTopClothingType.sub_category_id,
//       url: "tshirt",
//       category: "mtshirt",
//     },
//   });
//   const wtshirt = await prisma.item.create({
//     data: {
//       name: "T-Shirts",
//       image: "",
//       sub_category_id: womenTopClothingType.sub_category_id,
//       url: "tshirt",
//       category: "wtshirt",
//     },
//   });
//   const mShirts = await prisma.item.create({
//     data: {
//       name: "Shirts",
//       image: "",
//       sub_category_id: menTopClothingType.sub_category_id,
//       url: "shirt",
//       category: "mshirt",
//     },
//   });
//   const wShirts = await prisma.item.create({
//     data: {
//       name: "Shirts",
//       image: "",
//       sub_category_id: womenTopClothingType.sub_category_id,
//       url: "shirt",
//       category: "wshirt",
//     },
//   });
//   const mblouse = await prisma.item.create({
//     data: {
//       name: "Wool blouses",
//       image: "",
//       sub_category_id: menTopClothingType.sub_category_id,
//       url: "blouse",
//       category: "mblouse",
//     },
//   });
//   const wblouse = await prisma.item.create({
//     data: {
//       name: "Wool blouses",
//       image: "",
//       sub_category_id: womenTopClothingType.sub_category_id,
//       url: "blouse",
//       category: "wblouse",
//     },
//   });
//   const mHats = await prisma.item.create({
//     data: {
//       name: "Hats",
//       image: "",
//       sub_category_id: menTopClothingType.sub_category_id,
//       url: "hats",
//       category: "mhats",
//     },
//   });
//   const wHats = await prisma.item.create({
//     data: {
//       name: "Hats",
//       image: "",
//       sub_category_id: womenTopClothingType.sub_category_id,
//       url: "hats",
//       category: "whats",
//     },
//   });
//   const mWatches = await prisma.item.create({
//     data: {
//       name: "Watches",
//       image: "",
//       sub_category_id: menTopClothingType.sub_category_id,
//       url: "watches",
//       category: "mwatches",
//     },
//   });
//   const wWatches = await prisma.item.create({
//     data: {
//       name: "Watches",
//       image: "",
//       sub_category_id: womenTopClothingType.sub_category_id,
//       url: "watches",
//       category: "wwatches",
//     },
//   });
//   const mBag = await prisma.item.create({
//     data: {
//       name: "Bags",
//       image: "",
//       sub_category_id: menTopClothingType.sub_category_id,
//       url: "bag",
//       category: "mbag",
//     },
//   });
//   const wBag = await prisma.item.create({
//     data: {
//       name: "Bags",
//       image: "",
//       sub_category_id: womenTopClothingType.sub_category_id,
//       url: "bag",
//       category: "wbag",
//     },
//   });
//   const mJeans = await prisma.item.create({
//     data: {
//       name: "Jeans",
//       image: "",
//       sub_category_id: menLowerClothingType.sub_category_id,
//       url: "jeans",
//       category: "mjeans",
//     },
//   });
//   const wJeans = await prisma.item.create({
//     data: {
//       name: "Jeans",
//       image: "",
//       sub_category_id: womenLowerClothingType.sub_category_id,
//       url: "jeans",
//       category: "wjeans",
//     },
//   });
//   const mPants = await prisma.item.create({
//     data: {
//       name: "Pants",
//       image: "",
//       sub_category_id: menLowerClothingType.sub_category_id,
//       url: "pants",
//       category: "mpants",
//     },
//   });
//   const wPants = await prisma.item.create({
//     data: {
//       name: "Pants",
//       image: "",
//       sub_category_id: womenLowerClothingType.sub_category_id,
//       url: "pants",
//       category: "wpants",
//     },
//   });
//   const mSocks = await prisma.item.create({
//     data: {
//       name: "Socks",
//       image: "",
//       sub_category_id: menLowerClothingType.sub_category_id,
//       url: "socks",
//       category: "msocks",
//     },
//   });
//   const wSocks = await prisma.item.create({
//     data: {
//       name: "Socks",
//       image: "",
//       sub_category_id: womenLowerClothingType.sub_category_id,
//       url: "socks",
//       category: "wsocks",
//     },
//   });
//   const mBelts = await prisma.item.create({
//     data: {
//       name: "Belts",
//       image: "",
//       sub_category_id: menLowerClothingType.sub_category_id,
//       url: "belts",
//       category: "mbelts",
//     },
//   });
//   const wBelts = await prisma.item.create({
//     data: {
//       name: "Belts",
//       image: "",
//       sub_category_id: womenLowerClothingType.sub_category_id,
//       url: "belts",
//       category: "wbelts",
//     },
//   });
//   const mWork = await prisma.item.create({
//     data: {
//       name: "Work & Safty Shoes",
//       image: "",
//       sub_category_id: menShoesType.sub_category_id,
//       url: "work",
//       category: "mwork",
//     },
//   });
//   const mLoafers = await prisma.item.create({
//     data: {
//       name: "Loafers & Slip-Ons",
//       image: "",
//       sub_category_id: menShoesType.sub_category_id,
//       url: "loafers",
//       category: "mloafers",
//     },
//   });
//   const wLoafers = await prisma.item.create({
//     data: {
//       name: "Loafers & Slip-Ons",
//       image: "",
//       sub_category_id: womenShoesType.sub_category_id,
//       url: "loafers",
//       category: "wloafers",
//     },
//   });
//   const mSnow = await prisma.item.create({
//     data: {
//       name: "Snow Boots",
//       image: "",
//       sub_category_id: menShoesType.sub_category_id,
//       url: "snow",
//       category: "msnow",
//     },
//   });
//   const wSnow = await prisma.item.create({
//     data: {
//       name: "Snow Boots",
//       image: "",
//       sub_category_id: womenShoesType.sub_category_id,
//       url: "snow",
//       category: "wsnow",
//     },
//   });
//   const mCasual = await prisma.item.create({
//     data: {
//       name: "Casual Shoes",
//       image: "",
//       sub_category_id: menShoesType.sub_category_id,
//       url: "casual",
//       category: "mcasual",
//     },
//   });
//   const mBoots = await prisma.item.create({
//     data: {
//       name: "Boots",
//       image: "",
//       sub_category_id: menShoesType.sub_category_id,
//       url: "boots",
//       category: "mboots",
//     },
//   });
//   const mSandals = await prisma.item.create({
//     data: {
//       name: "Sandals",
//       image: "",
//       sub_category_id: menShoesType.sub_category_id,
//       url: "sandals",
//       category: "msandals",
//     },
//   });
//   const mOthers = await prisma.item.create({
//     data: {
//       name: "Others",
//       image: "",
//       sub_category_id: menShoesType.sub_category_id,
//       url: "others",
//       category: "mothers",
//     },
//   });
//   const wOthers = await prisma.item.create({
//     data: {
//       name: "Others",
//       image: "",
//       sub_category_id: womenShoesType.sub_category_id,
//       url: "others",
//       category: "wothers",
//     },
//   });
//   const wFlats = await prisma.item.create({
//     data: {
//       name: "Flats",
//       image: "",
//       sub_category_id: womenShoesType.sub_category_id,
//       url: "flats",
//       category: "wflats",
//     },
//   });
//   const wSlippers = await prisma.item.create({
//     data: {
//       name: "Slippers",
//       image: "",
//       sub_category_id: womenShoesType.sub_category_id,
//       url: "slippers",
//       category: "wslippers",
//     },
//   });
//   const wSneakers = await prisma.item.create({
//     data: {
//       name: "Sneakers",
//       image: "",
//       sub_category_id: womenShoesType.sub_category_id,
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
//   //     itemId: mtshirt.sub_category_id,
//   //     description: "A stylish black t-shirt.",
//   //     price: "20",
//   //     size: "M",
//   //     url: "",
//   //   },
//   // });

//   // const jeansDetail = await prisma.itemDetail.create({
//   //   data: {
//   //     title: "Jeans Detail",
//   //     itemId: mJeans.sub_category_id,
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
//   //     itemId: wSneakers.sub_category_id,
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
