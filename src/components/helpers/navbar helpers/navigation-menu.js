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

export function NavMenu() {
  const pathname = usePathname();

  const categories = [
    {
      cate: "Men's Clothing",
      id: "cate1",
      url: "/categories/men",
      clotheType: [
        {
          type: "Top Clothing",
          types: [
            { title: "T-Shirts" },
            { title: "Shirts" },
            { title: "Wool blouse" },
            { title: "Hats" },
            { title: "Watches" },
          ],
        },
        {
          type: "Lower Clothing",
          types: [
            { title: "Jeans" },
            { title: "Pants" },
            { title: "Socks" },
            { title: "Belts" },
          ],
        },
      ],
    },
    {
      cate: "Men's Shoes",
      id: "cate2",
      url: "/categories/men",
      clotheType: [
        {
          type: "Shoes",
          types: [
            { title: "Work & Safty Shoes" },
            { title: "Loafers & Slip-Ons" },
            { title: "Snow Boots" },
            { title: "Casual Shoes" },
            { title: "Boots" },
            { title: "Sandals" },
            { title: "Others" },
          ],
        },
      ],
    },
    {
      cate: "Women's Clothing",
      id: "cate3",
      url: "/categories/women",
      clotheType: [
        {
          type: "Top Clothing",
          types: [
            { title: "T-Shirts" },
            { title: "Shirts" },
            { title: "Wool blouse" },
            { title: "Hats" },
            { title: "Watches" },
            { title: "Bags" },
          ],
        },
        {
          type: "Lower Clothing",
          types: [
            { title: "Jeans" },
            { title: "Pants" },
            { title: "Socks" },
            { title: "Belts" },
          ],
        },
      ],
    },
    {
      cate: "Women's Shoes",
      id: "cate4",
      url: "/categories/women",
      clotheType: [
        {
          type: "Shoes",
          types: [
            { title: "Flats" },
            { title: "Slippers" },
            { title: "Loafers & Slip-Ons" },
            { title: "Sneakers" },
          ],
        },
      ],
    },
  ];

  return (
    <Menubar className="border-none">
      {categories.map((items) => (
        <MenubarMenu key={items.id}>
          <MenubarTrigger
            className={
              pathname === `${items.url}`
                ? "text-gray-800 text-xl font-medium hover:text-gray-800"
                : "text-gray-400 text-xl font-medium hover:text-gray-800"
            }
            style={{ cursor: "pointer" }}
          >
            <NavLink text={items.cate}>{items.cate}</NavLink>
          </MenubarTrigger>
          <MenubarContent>
            <Link href={items.url}>
              <MenubarItem style={{ cursor: "pointer" }}>
                Go to
                <Spacer />
                <span className="font-bold">{items.cate}</span>
              </MenubarItem>
            </Link>
            {items.clotheType.map((item) => (
              <MenubarSub key={item.type}>
                <Link href={items.url + `/` + item.type}>
                  <MenubarSubTrigger style={{ cursor: "pointer" }}>
                    {item.type}
                  </MenubarSubTrigger>
                </Link>
                <MenubarSubContent>
                  {item.types.map((list, index) => (
                    <Link key={index} href={items.url + `/` + list.title}>
                      <MenubarItem style={{ cursor: "pointer" }}>
                        {list.title}
                      </MenubarItem>
                    </Link>
                  ))}
                </MenubarSubContent>
              </MenubarSub>
            ))}
          </MenubarContent>
          <div className="hidden lg:block w-px h-4 bg-slate-800" />
        </MenubarMenu>
      ))}
    </Menubar>
  );
}
