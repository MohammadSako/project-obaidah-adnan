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
        <div className="flex flex-col items-center mx-auto px-4 py-16 sm:py-24 lg:max-w-7xl">
          <h2 className="text-4xl text-gray-600">Products not found</h2>
          <button
            onClick={() => router.push(updatedPath)}
            className="text-3xl font-bold text-blue-500 mt-4 font-sans hover:text-blue-400 border-2 px-4 py-2 rounded-lg shadow-md hover:shadow-none"
          >
            Back
          </button>
        </div>
      </div>
    </main>
  );
}
