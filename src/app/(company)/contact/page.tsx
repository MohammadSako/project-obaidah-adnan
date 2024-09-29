"use client";

import React from "react";
import { motion } from "framer-motion";

function Contact() {
  return (
    <motion.section
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: 0.3 }}
    className="flex flex-col items-center my-8 gap-4 w-full overflow-hidden origin-center"
  >
    <main className="flex min-h-screen flex-col items-center p-10 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div className="mt-28 font-sans">
        <p className="text-ellipsis basis-3/4 sm:text-7xl text-4xl font-bold tracking-tight">
          For any inquiries, work or collaboration proposals please don’t
          hesitate to get in touch.
        </p>
        <p className="text-ellipsis basis-3/4 sm:text-6xl text-xl font-bold tracking-tight text-gray-500 mt-4">
          obaidah.shop@gmail.com
        </p>
      </div>
    </main></motion.section>
  );
}

export default Contact;
