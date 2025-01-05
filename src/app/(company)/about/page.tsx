"use client";

import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.section
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: 0.3 }}
    className="flex flex-col mt-24 items-center my-8 gap-4 w-full overflow-hidden origin-center"
  >
    <main className="flex min-h-screen flex-col items-center mx-auto max-w-7xl px-6 sm:px-6 lg:px-14">
      <div className="sm:mt-28 mt-10 font-sans">
        <p className="text-ellipsis basis-3/4 sm:text-7xl text-4xl font-bold tracking-tight">
        <span className="text-gray-700">OBAIDAH</span> <span className="text-[#06b6d4]">Online Shop, </span>
          <span className="text-gray-500">
            based in Amman, Jordan. help clients to Find their needs through A
            wide content online shop.
          </span>
        </p>
      </div>
    </main>
    </motion.section>
  );
}
export default About;