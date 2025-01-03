"use client"

import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <main className="min-h-screen items-center mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div className="bg-white">
        <div className="flex flex-col items-center mx-auto px-4 py-16 sm:py-24 lg:max-w-7xl">
          <h2 className="text-4xl font-bold font-sans">Products Not Found</h2>
          <button
            onClick={() => router.back()}
            className="text-xl text-gray-500 mt-4 font-sans hover:text-blue-400"
          >
            Go back
          </button>
        </div>
      </div>
    </main>
  );
}
