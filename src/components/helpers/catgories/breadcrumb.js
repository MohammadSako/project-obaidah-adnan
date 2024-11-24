import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/UI/breadcrumb";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/UI/dropdown-menu";
import { ChevronDown, Slash } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function BreadCrumb() {
  const pathname = usePathname();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (pathname === "/categories/men/clothing") {
      const product = [
        {
          category: "Top Clothing",
          url: "/categories/men/clothing/top",
          id: "mc1",
        },
        {
          category: "Lower Clothing",
          url: "/categories/men/clothing/lower",
          id: "mc2",
        },
      ];
      setProducts(product);
    }
    if (pathname === "/categories/men/clothing/top") {
      const product = [
        {
          category: "T-Shirts",
          url: "/categories/men/clothing/top/tshirts",
          id: "mct1",
        },
        {
          category: "Shirts",
          url: "/categories/men/clothing/top/shirts",
          id: "mct2",
        },
        {
          category: "Wool blouse",
          url: "/categories/men/clothing/top/woolblouse",
          id: "mct3",
        },
        {
          category: "Hats",
          url: "/categories/men/clothing/top/hats",
          id: "mct4",
        },
        {
          category: "Watches",
          url: "/categories/men/clothing/top/watches",
          id: "mct5",
        },
      ];
      setProducts(product);
    }
    if (pathname === "/categories/men/clothing/top/tshirts") {
      const product = [
        {
          category: "T-Shirts",
          url: "/categories/men/clothing/top/shirts",
          id: "mct1",
        },
      ];
      setProducts(product);
    }
  }, [pathname]);

  return (
    <Breadcrumb>
      <BreadcrumbList className="text-md">
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <Slash />
        <BreadcrumbItem>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1">
              Categories
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              {products.map((prod) => (
                <DropdownMenuItem key={prod.id}>
                  <Link href={prod.url}>{prod.category}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </BreadcrumbItem>
        <Slash />
      </BreadcrumbList>
    </Breadcrumb>
  );
}
// https://www.youtube.com/watch?v=zy8rqihtvA8
