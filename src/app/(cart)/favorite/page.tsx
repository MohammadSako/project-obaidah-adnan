"use client";

import React from "react";
import { motion } from "framer-motion";
import FavoriteList from "../../../components/favorite/favoriteList";
import { useItemStore } from "@/lib/store";
import { Button } from "../../../components/UI/button";
import Link from "next/link";
import { IoArrowBackOutline } from "react-icons/io5";

function Favorite() {
  const totalFavQuantity = useItemStore((state) => state.totalFavQuantity);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="flex flex-col items-center my-8 gap-4 w-full overflow-hidden origin-center"
    >
      <main className="flex min-h-screen flex-col items-center mx-auto max-w-7xl px-6 sm:px-6 lg:px-14">
        <div className="font-sans">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
            Your favorites
          </h2>

          <Link href="/">
            <Button variant="outline" className="my-4 rounded-full">
              <IoArrowBackOutline className="mr-2" />
              Back to Items
            </Button>
          </Link>

          <p className="font-bold">Favorites</p>
          <p>{totalFavQuantity} items</p>
          <FavoriteList />
        </div>
      </main>
    </motion.section>
  );
}

export default Favorite;
