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
  const menTopClothingType = await prisma.type.create({
    data: {
      name: "Top Clothing",
      categoryId: menClothingCategory.id,
      url: "top",
    },
  });

  const menLowerClothingType = await prisma.type.create({
    data: {
      name: "Lower Clothing",
      categoryId: menClothingCategory.id,
      url: "lower",
    },
  });

  const womenTopClothingType = await prisma.type.create({
    data: {
      name: "Top Clothing",
      categoryId: womenClothingCategory.id,
      url: "top",
    },
  });

  const womenLowerClothingType = await prisma.type.create({
    data: {
      name: "Lower Clothing",
      categoryId: womenClothingCategory.id,
      url: "top",
    },
  });

  const menShoesType = await prisma.type.create({
    data: {
      name: "Men's Shoes",
      categoryId: menShoesCategory.id,
      url: "shoes",
    },
  });
  const womenShoesType = await prisma.type.create({
    data: {
      name: "Women's Shoes",
      categoryId: womenShoesCategory.id,
      url: "shoes",
    },
  });

  ////////////////////////////// Create items for the types
  //////////////////////////////////////////////////////////
  const mtshirt = await prisma.item.create({
    data: {
      name: "T-Shirts",
      image: "",
      typeId: menTopClothingType.id,
      url: "tshirt",
      category: "mtshirt",
    },
  });
  const wtshirt = await prisma.item.create({
    data: {
      name: "T-Shirts",
      image: "",
      typeId: womenTopClothingType.id,
      url: "tshirt",
      category: "wtshirt",
    },
  });
  const mShirts = await prisma.item.create({
    data: {
      name: "Shirts",
      image: "",
      typeId: menTopClothingType.id,
      url: "shirt",
      category: "mshirt",
    },
  });
  const wShirts = await prisma.item.create({
    data: {
      name: "Shirts",
      image: "",
      typeId: womenTopClothingType.id,
      url: "shirt",
      category: "wshirt",
    },
  });
  const mblouse = await prisma.item.create({
    data: {
      name: "Wool blouses",
      image: "",
      typeId: menTopClothingType.id,
      url: "blouse",
      category: "mblouse",
    },
  });
  const wblouse = await prisma.item.create({
    data: {
      name: "Wool blouses",
      image: "",
      typeId: womenTopClothingType.id,
      url: "blouse",
      category: "wblouse",
    },
  });
  const mHats = await prisma.item.create({
    data: {
      name: "Hats",
      image: "",
      typeId: menTopClothingType.id,
      url: "hats",
      category: "mhats",
    },
  });
  const wHats = await prisma.item.create({
    data: {
      name: "Hats",
      image: "",
      typeId: womenTopClothingType.id,
      url: "hats",
      category: "whats",
    },
  });
  const mWatches = await prisma.item.create({
    data: {
      name: "Watches",
      image: "",
      typeId: menTopClothingType.id,
      url: "watches",
      category: "mwatches",
    },
  });
  const wWatches = await prisma.item.create({
    data: {
      name: "Watches",
      image: "",
      typeId: womenTopClothingType.id,
      url: "watches",
      category: "wwatches",
    },
  });
  const mBag = await prisma.item.create({
    data: {
      name: "Bags",
      image: "",
      typeId: menTopClothingType.id,
      url: "bag",
      category: "mbag",
    },
  });
  const wBag = await prisma.item.create({
    data: {
      name: "Bags",
      image: "",
      typeId: womenTopClothingType.id,
      url: "bag",
      category: "wbag",
    },
  });
  const mJeans = await prisma.item.create({
    data: {
      name: "Jeans",
      image: "",
      typeId: menLowerClothingType.id,
      url: "jeans",
      category: "mjeans",
    },
  });
  const wJeans = await prisma.item.create({
    data: {
      name: "Jeans",
      image: "",
      typeId: womenLowerClothingType.id,
      url: "jeans",
      category: "wjeans",
    },
  });
  const mPants = await prisma.item.create({
    data: {
      name: "Pants",
      image: "",
      typeId: menLowerClothingType.id,
      url: "pants",
      category: "mpants",
    },
  });
  const wPants = await prisma.item.create({
    data: {
      name: "Pants",
      image: "",
      typeId: womenLowerClothingType.id,
      url: "pants",
      category: "wpants",
    },
  });
  const mSocks = await prisma.item.create({
    data: {
      name: "Socks",
      image: "",
      typeId: menLowerClothingType.id,
      url: "socks",
      category: "msocks",
    },
  });
  const wSocks = await prisma.item.create({
    data: {
      name: "Socks",
      image: "",
      typeId: womenLowerClothingType.id,
      url: "socks",
      category: "wsocks",
    },
  });
  const mBelts = await prisma.item.create({
    data: {
      name: "Belts",
      image: "",
      typeId: menLowerClothingType.id,
      url: "belts",
      category: "mbelts",
    },
  });
  const wBelts = await prisma.item.create({
    data: {
      name: "Belts",
      image: "",
      typeId: womenLowerClothingType.id,
      url: "belts",
      category: "wbelts",
    },
  });
  const mWork = await prisma.item.create({
    data: {
      name: "Work & Safty Shoes",
      image: "",
      typeId: menShoesType.id,
      url: "work",
      category: "mwork",
    },
  });
  const mLoafers = await prisma.item.create({
    data: {
      name: "Loafers & Slip-Ons",
      image: "",
      typeId: menShoesType.id,
      url: "loafers",
      category: "mloafers",
    },
  });
  const wLoafers = await prisma.item.create({
    data: {
      name: "Loafers & Slip-Ons",
      image: "",
      typeId: womenShoesType.id,
      url: "loafers",
      category: "wloafers",
    },
  });
  const mSnow = await prisma.item.create({
    data: {
      name: "Snow Boots",
      image: "",
      typeId: menShoesType.id,
      url: "snow",
      category: "msnow",
    },
  });
  const wSnow = await prisma.item.create({
    data: {
      name: "Snow Boots",
      image: "",
      typeId: womenShoesType.id,
      url: "snow",
      category: "wsnow",
    },
  });
  const mCasual = await prisma.item.create({
    data: {
      name: "Casual Shoes",
      image: "",
      typeId: menShoesType.id,
      url: "casual",
      category: "mcasual",
    },
  });
  const mBoots = await prisma.item.create({
    data: {
      name: "Boots",
      image: "",
      typeId: menShoesType.id,
      url: "boots",
      category: "mboots",
    },
  });
  const mSandals = await prisma.item.create({
    data: {
      name: "Sandals",
      image: "",
      typeId: menShoesType.id,
      url: "sandals",
      category: "msandals",
    },
  });
  const mOthers = await prisma.item.create({
    data: {
      name: "Others",
      image: "",
      typeId: menShoesType.id,
      url: "others",
      category: "mothers",
    },
  });
  const wOthers = await prisma.item.create({
    data: {
      name: "Others",
      image: "",
      typeId: womenShoesType.id,
      url: "others",
      category: "wothers",
    },
  });
  const wFlats = await prisma.item.create({
    data: {
      name: "Flats",
      image: "",
      typeId: womenShoesType.id,
      url: "flats",
      category: "wflats",
    },
  });
  const wSlippers = await prisma.item.create({
    data: {
      name: "Slippers",
      image: "",
      typeId: womenShoesType.id,
      url: "slippers",
      category: "wslippers",
    },
  });
  const wSneakers = await prisma.item.create({
    data: {
      name: "Sneakers",
      image: "",
      typeId: womenShoesType.id,
      url: "sneakers",
      category: "wsneakers",
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
  //     itemId: mtshirt.id,
  //     description: "A stylish black t-shirt.",
  //     price: "20",
  //     size: "M",
  //     url: "",
  //   },
  // });

  // const jeansDetail = await prisma.itemDetail.create({
  //   data: {
  //     title: "Jeans Detail",
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
  //     title: "Sneakers Detail",
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
