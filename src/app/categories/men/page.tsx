"use client";

import { motion } from "framer-motion";
import React from "react";

export default function MenPage() {

  return (
    <motion.section
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: 0.3 }}
    className="flex flex-col items-center my-2 gap-4 w-full overflow-hidden origin-center"
  >
    <main className="flex min-h-screen flex-col items-center p-10 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div className="mt-28 font-sans">
        <p className="text-ellipsis basis-3/4 sm:text-7xl text-4xl font-bold tracking-tight">
          MenPage
        </p>
      </div>
    </main>
    </motion.section>
  );
}
