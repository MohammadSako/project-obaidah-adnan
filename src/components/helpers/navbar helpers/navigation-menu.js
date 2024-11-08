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
      url: "/categories/men/clothing",
      clotheType: [
        {
          type: "Top Clothing",
          types: [
            { title: "T-Shirts", url: "tshirt" },
            { title: "Shirts", url: "shirt" },
            { title: "Wool blouse", url: "woolblouse" },
            { title: "Hats", url: "hats" },
            { title: "Watches", url: "watches" },
          ],
        },
        {
          type: "Lower Clothing",
          types: [
            { title: "Jeans", url: "jeans" },
            { title: "Pants", url: "pants" },
            { title: "Socks", url: "socks" },
            { title: "Belts", url: "belts" },
          ],
        },
      ],
    },
    {
      cate: "Men's Shoes",
      id: "cate2",
      url: "/categories/men/shoes",
      clotheType: [
        {
          type: "Men's Shoes",
          types: [
            { title: "Work & Safty Shoes", url: "work" },
            { title: "Loafers & Slip-Ons", url: "loafers" },
            { title: "Snow Boots", url: "snow" },
            { title: "Casual Shoes", url: "casual" },
            { title: "Boots", url: "boots" },
            { title: "Sandals", url: "sandals" },
            { title: "Others", url: "others" },
          ],
        },
      ],
    },
    {
      cate: "Women's Clothing",
      id: "cate3",
      url: "/categories/women/clothing",
      clotheType: [
        {
          type: "Top Clothing",
          types: [
            { title: "T-Shirts", url: "tshirt" },
            { title: "Shirts", url: "shirt" },
            { title: "Wool blouse", url: "woolblouse" },
            { title: "Hats", url: "hats" },
            { title: "Watches", url: "watches" },
            { title: "Bags", url: "bags" },
          ],
        },
        {
          type: "Lower Clothing",
          types: [
            { title: "Jeans", url: "jeans" },
            { title: "Pants", url: "pants" },
            { title: "Socks", url: "socks" },
            { title: "Belts", url: "belts" },
          ],
        },
      ],
    },
    {
      cate: "Women's Shoes",
      id: "cate4",
      url: "/categories/women/shoes",
      clotheType: [
        {
          type: "Women's Shoes",
          types: [
            { title: "Flats", url: "flats" },
            { title: "Slippers", url: "slippers" },
            { title: "Loafers & Slip-Ons", url: "loafers" },
            { title: "Sneakers", url: "sneakers" },
          ],
        },
      ],
    },
  ];

  return (
    <Menubar className="border-none">
      {categories.map((items) => (
        <MenubarMenu key={items.id}>
          <MenubarTrigger>
            <NavLink
              text={items.cate}
              className={
                pathname === `${items.url}`
                  ? "text-gray-800 text-2xl font-medium hover:text-gray-800 cursor-pointer"
                  : "text-gray-400 text-2xl font-medium hover:text-gray-800 cursor-pointer"
              }
            >
              {items.cate}
            </NavLink>
          </MenubarTrigger>
          <MenubarContent>
            <Link href={items.url}>
              <MenubarItem className="cursor-pointer">
                Go to
                <Spacer />
                <span className="font-bold">{items.cate}</span>
              </MenubarItem>
            </Link>
            {items.clotheType.map((item) => (
              <MenubarSub key={item.type}>
                <Link href={items.url + `/` + item.type}>
                  <MenubarSubTrigger className=" cursor-pointer">
                    {item.type}
                  </MenubarSubTrigger>
                </Link>
                <MenubarSubContent>
                  {item.types.map((list, index) => (
                    <Link key={index} href={items.url + `/` + list.url}>
                      <MenubarItem className=" cursor-pointer">
                        {list.title}
                      </MenubarItem>
                    </Link>
                  ))}
                </MenubarSubContent>
              </MenubarSub>
            ))}
          </MenubarContent>
          <div className="hidden lg:block w-px h-5 bg-slate-800" />
        </MenubarMenu>
      ))}
    </Menubar>
  );
}
