import Link from "next/link";
import React from "react";
import HeaderFavoriteButton from "./HeaderFavoriteButton";

export default function Favorite() {
  return (
    <div className="flex sm:flex-none flex-1 items-center justify-center sm:items-stretch">
      <div className="flex flex-shrink-0 items-center justify-items-start">
        <Link href="#">
          <HeaderFavoriteButton />
        </Link>
      </div>
    </div>
  );
}
