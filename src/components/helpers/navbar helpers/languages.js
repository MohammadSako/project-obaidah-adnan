import Link from "next/link";
import React from "react";

export default function Languages() {
  return (
    <div className="flex sm:flex-none flex-1 items-center justify-center sm:items-stretch">
      <div className="flex flex-shrink-0 items-center justify-items-start">
        <Link href="/">
          <h1 className="text-lg font-sans tracking-wide text-gray-400 hover:text-gray-800">
            عربي
          </h1>
        </Link>
      </div>
    </div>
  );
}
