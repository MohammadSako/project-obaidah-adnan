"use client";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaRegCopyright } from "react-icons/fa6";
import Search from "../helpers/navbar helpers/search";
import BrandName from "../helpers/navbar helpers/brand-name";
import Languages from "../helpers/navbar helpers/languages";
import Cart from "../cart/cartDrawer/cart";
import Favorite from "../favorite/favorite";

const navigation = [
  { name: "About", href: "/about", current: false },
  { name: "Contact", href: "/contact", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar() {
  const pathname = usePathname();

  return (
    <Disclosure as="nav" className="bg-white mb-10 p-2">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        {/* First Nav ------------------------------- */}
        <div className="relative flex h-16 items-center sm:justify-between space-x-4">
          <div>
            <BrandName />
          </div>
          <div className="hidden sm:block grow mx-4">
            <Search />
          </div>
          <div>
            <Languages />
          </div>
          <div>
            <Favorite />
          </div>
          <div>
            <Cart />
          </div>
        </div>
        {/* Second Nav ----------------------------------- */}

        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block h-6 w-6 group-data-[open]:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden h-6 w-6 group-data-[open]:block"
              />
            </DisclosureButton>
          </div>

          <div className="flex sm:flex-none flex-1 items-center justify-center sm:items-stretch">
            <div className="flex flex-shrink-0 items-center">
              <Link href="/">
                <h1 className="sm:text-xl text-3xl font-sans tracking-wide sm:invisible visible">
                  OBAIDAH <span className="font-bold text-[#db2777]">Shop</span>
                </h1>
              </Link>
              <div className="-mt-2 sm:invisible visible">
                <FaRegCopyright size={10} />
              </div>
            </div>

            <div className="hidden sm:ml-6 sm:block">
              <div className="flex md:space-x-4">
                {navigation.map((item) => (
                  <Link key={item.name} href={item.href}>
                    <div
                      aria-current={item.current ? "page" : undefined}
                      className={
                        pathname === `${item.href}`
                          ? "text-gray-800 text-xl font-medium hover:text-gray-800"
                          : "text-gray-400 text-xl font-medium hover:text-gray-800"
                      }
                    >
                      {item.name}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile ----------------------------- */}
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          <Search />

          {navigation.map((item) => (
            <Link key={item.name} href={item.href}>
              <DisclosureButton
                as="a"
                aria-current={item.current ? "page" : undefined}
                className={classNames(
                  item.current
                    ? "bg-gray-900 text-white"
                    : "text-gray-500 hover:bg-gray-700 hover:text-white",
                  "block rounded-md px-3 py-2 text-xl font-medium"
                )}
              >
                {item.name}
              </DisclosureButton>
            </Link>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
