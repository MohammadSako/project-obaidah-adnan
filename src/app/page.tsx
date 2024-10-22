"use client";
import { Landing } from "../components/homescreen/landing";
import { Categories } from "../components/homescreen/categories";
import YourFavoriteItems from '../components/homescreen/yourFavoriteItems';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center font-display">
      <Landing />
      <Categories />
      <YourFavoriteItems />
    </main>
  );
}
