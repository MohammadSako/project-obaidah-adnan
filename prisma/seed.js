// prisma/seed.js
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const Shirt = await prisma.items.create({
    data: {
      title: "Black T-Shirt",
      color: "black",
      size: "lg",
      price: "25",
      image:
        "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg",
      alt: "Black Shirt",
      gender: "men",
      type: "top",
      description:
        "The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: Black. Need to add an extra pop of color to your outfit? Our white tee has you covered.",
      details:
        "The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming Charcoal Gray limited release.",
      category: "shirt",
    },
  });
  const whiteShirt = await prisma.items.create({
    data: {
      title: "White T-Shirt",
      color: "white",
      size: "xl",
      price: "55",
      image:
        "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-02.jpg",
      alt: "Black Shirt",
      gender: "women",
      type: "top",
      description:
        "The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: Black. Need to add an extra pop of color to your outfit? Our white tee has you covered.",
      details:
        "The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming Charcoal Gray limited release.",
      category: "shirt",
    },
  });
  const GrayShirt = await prisma.items.create({
    data: {
      title: "Gray T-Shirt",
      color: "gray",
      size: "m",
      price: "33",
      image:
        "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-03.jpg",
      alt: "Gray T-Shirt",
      gender: "men",
      type: "top",
      description:
        "The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: Black. Need to add an extra pop of color to your outfit? Our white tee has you covered.",
      details:
        "The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming Charcoal Gray limited release.",
      category: "shirt",
    },
  });

  console.log(whiteShirt, Shirt, GrayShirt);
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
