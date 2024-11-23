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

export function BreadCrumb() {
  return (
    <Breadcrumb>
      <BreadcrumbList className="text-lg">
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <Slash />
        <BreadcrumbItem>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1">
              Categories
              <ChevronDown className="h-4 w-4" />
              <span className="sr-only">Toggle menu</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem>
                <Link href="/categories/men/clothing">Men&apos;s Clothing</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/categories/men/shoes">Men&apos;s Shoes</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/categories/women/clothing">
                  Women&apos;s Clothing
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/categories/women/shoes">Women&apos;s Shoes</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </BreadcrumbItem>
        <Slash />
        <BreadcrumbItem>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1">
              Men&apos;s Clothing
              <ChevronDown className="h-4 w-4" />
              <span className="sr-only">Toggle menu</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem>
                <Link href="/categories/men/clothing/top">Top Clothing</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/categories/men/clothing/lower">
                  Lower Clothing
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </BreadcrumbItem>
        <Slash />
        <BreadcrumbItem>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1">
              Top Clothing
              <ChevronDown className="h-4 w-4" />
              <span className="sr-only">Toggle menu</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem>
                <Link href="/categories/men/clothing/top/tshirts">
                  T-Shirts
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/categories/men/clothing/top/shirt">Shirts</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/categories/men/clothing/top/woolblouse">
                  Wool Blouse
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/categories/men/clothing/top/hats">Hats</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/categories/men/clothing/top/watches">Watches</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
