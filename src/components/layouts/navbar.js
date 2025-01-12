'use client'

import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { FaRegCopyright } from "react-icons/fa6";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { NavMenu } from "../helpers/navbar helpers/navigation-menu";
import Search from "../helpers/navbar helpers/search";
import BrandName from "../helpers/navbar helpers/brand-name";
import Languages from "../helpers/navbar helpers/languages";
import Cart from "../cart/cartDrawer/cart";
import Favorite from "../favorite/favorite";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Men's Clothing", href: "/categories/men/clothing", current: false },
  { name: "Men's Shoes", href: "/categories/men/shoes", current: false },
  {
    name: "Women's Clothing",
    href: "/categories/women/clothing",
    current: false,
  },
  { name: "Women's Shoes", href: "/categories/women/shoes", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function NavBar() {
  return (
    <Disclosure as="nav" className="bg-white">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <FirstNav />
        <SecondNav />
        <div className="flex-grow border-t border-gray-200" />
      </div>
      <MobileNav />
    </Disclosure>
  );
}

const FirstNav = () => {
  return (
    <div className="relative flex h-16 items-center sm:justify-between space-x-4">
      <div>
        <BrandName />
      </div>
      <div className="sm:block grow mx-4">
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
  );
};

const SecondNav = () => {
  return (
    <div className="relative flex h-16 items-center justify-between">
      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
        {/* Mobile menu button*/}
        <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-slate-900 hover:bg-slate-50 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-slate-900">
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
        <div className="hidden sm:ml-6 sm:block">
          <div className="flex md:space-x-4 gap-4 items-center justify-between self-center">
            <NavMenu />
          </div>
        </div>
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
      </div>
    </div>
  );
};

// const MobileNav = () => {
//   return (
//     <DisclosurePanel className="sm:hidden">
//       <div className="space-y-1 px-2">
//         <NavMenu />
//         {navigation.map((item) => (
//           <Link key={item.name} href={item.href}>
//             <DisclosureButton
//               as="a"
//               aria-current={item.current ? "page" : undefined}
//               className={classNames(
//                 item.current
//                   ? "bg-gray-900 text-white"
//                   : "text-gray-500 hover:bg-gray-700 hover:text-white",
//                 "block rounded-md px-3 py-2 text-xl font-medium"
//               )}
//             >
//               {item.name}
//             </DisclosureButton>
//           </Link>
//         ))}
//       </div>
//     </DisclosurePanel>
//   );
// };
const MobileNav = () => {
  const pathname = usePathname();  // Get the current pathname
  const pathSegments = pathname.split("/").filter((segment) => segment);
  const selectedPath = "/" + pathSegments.slice(0, 3).join("/");  // Get the first 3 segments of the path
  
  return (
    <DisclosurePanel className="sm:hidden">
      <div className="space-y-1 px-2">
        {navigation.map((item) => {
          const isActive = selectedPath === item.href;  // Check if the item's href matches the current path
          return (
            <Link key={item.name} href={item.href}>
              <DisclosureButton
                as="a"
                aria-current={isActive ? "page" : undefined}
                className={classNames(
                  isActive
                    ? "bg-gray-100 text-gray-900"  // Active item styles
                    : "text-gray-500 hover:bg-gray-700 hover:text-white",  // Inactive item styles
                  "block rounded-md px-3 py-2 text-xl font-medium"
                )}
              >
                {item.name}
              </DisclosureButton>
            </Link>
          );
        })}
      </div>
    </DisclosurePanel>
  );
};