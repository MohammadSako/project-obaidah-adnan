import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { FaRegCopyright, FaWhatsapp } from "react-icons/fa6";

const navigation = [
  { name: "About", href: "about", current: false },
  { name: "Contact", href: "contact", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar() {
  return (
    <Disclosure as="nav" className="bg-white mb-10 p-2">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        {/* ---------------------- */}

        <div className="relative flex h-16 items-center justify-between">
          <div className="hidden sm:block">
            <div className="flex md:space-x-4">
              <Link
                href="https://wa.me/962777935735"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="text-[#31D14F] hover:text-[#1f8131]">
                  <FaWhatsapp size={25} />
                </div>
              </Link>
              <p className="">(+962) 777 935 735</p>
            </div>
          </div>
          <div className="flex sm:flex-none flex-1 items-center justify-center sm:items-stretch">
            <div className="flex flex-shrink-0 items-center justify-items-start">
              <Link href="/">
                <h1 className="text-xl font-sans tracking-wide hover:text-gray-300">عربي</h1>
              </Link>
            </div>
          </div>
        </div>

        {/* ---------------------- */}

        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-row gap-1">
            <Link href="/">
              <h1 className="text-3xl font-sans lg:block hidden tracking-tight">
                OBAIDAH Shop
              </h1>
            </Link>
            <div className="mt-2 lg:block hidden">
              <FaRegCopyright size={10} />
            </div>
          </div>

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
                <h1 className="sm:text-2xl text-3xl font-sans tracking-wide lg:invisible visible">
                  OBAIDAH Shop
                </h1>
              </Link>
              <div className="-mt-2 lg:invisible visible">
                <FaRegCopyright size={10} />
              </div>
            </div>

            <div className="hidden sm:ml-6 sm:block">
              <div className="flex md:space-x-4">
                {navigation.map((item) => (
                  <Link key={item.name} href={item.href}>
                    <div
                      aria-current={item.current ? "page" : undefined}
                      className={classNames(
                        item.current
                          ? "text-gray-900"
                          : "text-gray-400  hover:text-gray-900",
                        "rounded-md px-5 py-2 lg:text-xl text-lg font-medium"
                      )}
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

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
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
