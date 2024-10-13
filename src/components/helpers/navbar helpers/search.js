/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/

import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function Search() {
  return (
    <div className="relative my-2 rounded-md shadow-sm ">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <span className="text-gray-500 sm:text-sm">
          <FaMagnifyingGlass />
        </span>
      </div>
      <input
        id="search"
        name="search"
        type="text"
        placeholder="search in shop"
        className="block w-full rounded-md border-0 py-1.5 pl-9 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
    </div>
  );
}
