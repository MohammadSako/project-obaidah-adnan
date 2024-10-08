"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const CategoriesLayout = ({ children }: { children: React.ReactNode }) => {
  const url = usePathname();

  return (
    <section className="py-24">
      <div className="p-4 flex flex-col">
        <div className="py-6">
          <nav className="flex flex-row">
            <ul
              role="list"
              className="flex flex-1 flex-row gap-x-12 justify-center text-lg sm:text-2xl text-gray-400 "
            >
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                <Link
                  href="/categories/men"
                  className={
                    url === "/categories/men"
                      ? "text-gray-800"
                      : "text-gray-400"
                  }
                >
                  Men
                </Link>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Link
                  href="/categories/women"
                  className={
                    url === "/categories/women"
                      ? "text-gray-800"
                      : "text-gray-400"
                  }
                >
                  Women
                </Link>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Link
                  href="/categories/mixed"
                  className={
                    url === "/categories/mixed"
                      ? "text-gray-800"
                      : "text-gray-400"
                  }
                >
                  Mixed
                </Link>
              </motion.li>
            </ul>
          </nav>
        </div>

        <main>{children}</main>
      </div>
    </section>
  );
};

export default CategoriesLayout;
