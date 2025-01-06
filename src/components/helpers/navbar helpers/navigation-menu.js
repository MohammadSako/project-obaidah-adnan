"use client";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/UI/menubar";
import { Spacer } from "@nextui-org/react";
import Link from "next/link";
import NavLink from "./nav-link";
import { usePathname } from "next/navigation";
import { getAllCategory } from "@/lib/db/products";
import { useEffect, useState } from "react";

export function NavMenu() {
  const pathname = usePathname();
  const [allCategory, setAllCategory] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { categories = [] } = await getAllCategory();
        setAllCategory(categories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  //to highlight the NavLink when categories has changed
  const pathSegments = pathname.split("/").filter((segment) => segment);
  const selectedPath = "/" + pathSegments.slice(0, 3).join("/");

  return (
    <Menubar className="border-none">
      {allCategory.map((items) => (
        <MenubarMenu key={items.id}>
          <MenubarTrigger>
            <NavLink
              text={items.title}
              className={
                selectedPath === `${items.url}`
                  ? "text-gray-800 text-2xl font-medium hover:text-gray-800 cursor-pointer"
                  : "text-gray-400 text-2xl font-medium hover:text-gray-800 cursor-pointer"
              }
            >
              {items.title}
            </NavLink>
          </MenubarTrigger>
          <MenubarContent>
            <Link href={items.url}>
              <MenubarItem className="cursor-pointer">
                Go to
                <Spacer />
                <span className="font-bold">{items.title}</span>
              </MenubarItem>
            </Link>
            {items.SubCategory.map((item) => (
              <MenubarSub key={item.id}>
                <Link href={item.url}>
                  <MenubarSubTrigger className="cursor-pointer">
                    {item.title}
                  </MenubarSubTrigger>
                </Link>
                <MenubarSubContent>
                  {item.items.map((list) => (
                    <Link key={list.id} href={`${list.url}`}>
                      <MenubarItem className="cursor-pointer">
                        {list.title}
                      </MenubarItem>
                    </Link>
                  ))}
                </MenubarSubContent>
              </MenubarSub>
            ))}
          </MenubarContent>
          <div className="hidden lg:block w-px h-6 bg-gray-400" />
        </MenubarMenu>
      ))}
    </Menubar>
  );
}
