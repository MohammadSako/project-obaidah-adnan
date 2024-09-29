"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const CategoriesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="py-24">
      <div className="p-4 flex flex-col">
        <div className="py-6 pb-12">
          <nav className="flex flex-row">
            <ul role="list" className="flex flex-1 flex-row gap-x-4 justify-center">
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                <Link href="/categories/men">Men</Link>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Link href="/categories/women">Women</Link>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Link href="/categories/mixed">Mixed</Link>
              </motion.li>
            </ul>
          </nav>
        </div>

        <main className="bg-gray-50 p-6">{children}</main>
      </div>
    </section>
  );
};

export default CategoriesLayout;
