import React from "react";
import FavoriteList from "../favorite/favoriteList";
import { motion } from "framer-motion";

function YourFavoriteItems() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="flex flex-col items-center my-2 gap-4 w-full overflow-hidden origin-center"
    >
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl font-medium tracking-tighter text-gray-900 sm:text-3xl">
                Explore Popular Categories
              </h1>
              <FavoriteList />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default YourFavoriteItems;
