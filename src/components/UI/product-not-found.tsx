"use client"

import { usePathname, useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  const pathname = usePathname();
  const lastSlashIndex = pathname.lastIndexOf("/");
  const updatedPath = pathname.slice(0, lastSlashIndex);

  return (
    <main className="min-h-screen items-center mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div className="bg-white">
        <div className="flex flex-col gap-2 items-center mx-auto px-4 py-16 sm:py-24 lg:max-w-7xl">
          <h2 className="text-3xl text-gray-600 font-sans">Product not found</h2>
          <button
            onClick={() => router.push(updatedPath)}
            className="text-xl text-blue-500 mt-4 font-sans hover:text-blue-400 border-2 px-4 py-1 rounded-lg shadow-md hover:shadow-none"
          >
            Back
          </button>
          <button
            onClick={() => router.push("/")}
            className="text-xl text-gray-500 mt-4 font-sans hover:text-gray-400 px-4 py-1 rounded-lg"
          >
            Back to main page
          </button>
        </div>
      </div>
    </main>
  );
}
