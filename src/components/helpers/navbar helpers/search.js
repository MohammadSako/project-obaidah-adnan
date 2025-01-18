"use client";

import { searchInProducts } from "@/lib/db/products";
import { useI18n } from "@/locales/client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useDebounce } from "use-debounce";

export default function Search() {
  const router = useRouter();
  const [result, setResult] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedValue] = useDebounce(searchQuery, 1000);
  const t = useI18n();

  useEffect(() => {
    async function Search() {
      if (!debouncedValue) {
        setResult([]);
        return;
      }
      const response = await searchInProducts(debouncedValue);
      if (response.error) {
        console.error("Error fetching results:", response.error);
        setResult([]);
      } else {
        setResult(response.combinedResults || []);
      }
    }
    Search();
  }, [debouncedValue]);

  async function resultHandler(e) {
    setSearchQuery("");
    router.push(`/search/?q=${encodeURIComponent(e)}`);
  }

  return (
    <>
      <div className="relative my-2 rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <span className="text-gray-500 sm:text-sm">
            <FaMagnifyingGlass />
          </span>
        </div>
        <input
          id="search"
          name="search"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              resultHandler(e.target.value);
            }
          }}
          placeholder={t("common.search.product")}
          className="block w-full rounded-md border-0 py-1.5 pl-9 pr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-6"
        />
      </div>

      {result.length > 0 ? (
        <div className="p-2 rounded-md shadow-lg absolute z-[200] w-[810px] bg-white">
          {result.map((product) => (
            <div
              key={product.id}
              className="py-1 px-2 hover:bg-gray-50 cursor-pointer"
              onClick={() => resultHandler(product.title)}
            >
              {product.title}
            </div>
          ))}
        </div>
      ) : (
        debouncedValue && (
          <p className="text-gray-500 mt-2">No results found.</p>
        )
      )}
    </>
  );
}
