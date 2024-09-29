import React from "react";
import { delay } from '@/lib/utils'

export default async function MenPage() {
  await delay(1000)

  return (
    <main className="flex min-h-screen flex-col items-center p-10 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div className="mt-28 font-sans">
        <p className="text-ellipsis basis-3/4 sm:text-7xl text-4xl font-bold tracking-tight">
          MenPage
        </p>
      </div>
    </main>
  );
}
