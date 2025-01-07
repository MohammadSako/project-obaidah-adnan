import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  {
    name: "All Products",
    href: "/dashboard",
  },
  { name: "Customer Orders", href: "/dashboard/customer-orders" },
  { name: "|", href: "#" },
  { name: "Add Products", href: "/dashboard/add-products" },
  { name: "Carousel", href: "/dashboard/add-carousel" },
  { name: "Brands", href: "/dashboard/add-brands" },
  { name: "Advertisments", href: "/dashboard/add-advertisment" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function DashNav() {
  const pathname = usePathname();

  return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-[#06b6d4]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <p className="text-white text-2xl font-semibold">Dashboard</p>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    {navigation.map((item) => {
                      const isActive = pathname === item.href;
                      return (
                        <Link
                          key={item.name}
                          href={item.href}
                          aria-current={isActive ? "page" : undefined}
                          className={classNames(
                            isActive
                              ? "bg-white text-[#06b6d4]"
                              : "text-white hover:bg-white hover:text-[#06b6d4] font-bold",
                            "rounded-md px-3 py-2 text-lg font-medium"
                          )}
                        >
                          {item.name}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="-mr-2 flex md:hidden">
                {/* Mobile menu button */}
                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon
                    aria-hidden="true"
                    className="block size-6 group-data-[open]:hidden"
                  />
                  <XMarkIcon
                    aria-hidden="true"
                    className="hidden size-6 group-data-[open]:block"
                  />
                </DisclosureButton>
              </div>
            </div>
          </div>

          <DisclosurePanel className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
              {navigation.map((item) => {
                const isActive = pathname === item.href; // Check if the pathname matches the item href
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={classNames(
                      isActive
                        ? "bg-white text-[#06b6d4]"
                        : "text-white hover:bg-white hover:text-[#06b6d4] font-bold",
                      "rounded-md px-3 py-2 text-sm font-medium"
                    )}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </DisclosurePanel>
        </Disclosure>
      </div>
    </>
  );
}
