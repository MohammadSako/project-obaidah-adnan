"use client";

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react";

import { Button } from "@/components/UI/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/UI/dropdown-menu";
import { Input } from "@/components/UI/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/UI/table";
import Image from "next/image";
import { deleteImageByUrl, deleteProductById } from "@/lib/db/products";
import { useRouter } from "next/navigation";

export type Product = {
  id: string;
  title: string;
  color: string;
  size: string;
  price: string;
  image: string;
  imageid: string;
  alt: string;
  gender: string;
  type: string;
  description: string;
  details: string;
  category: string;
  dashboardType: "product" | "discounted" | "bestseller" | "newarrival";
};

interface DataTableProps {
  data: Product[];
}

export function DataTable({ data }: DataTableProps) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});
  const router = useRouter();

  const columns: ColumnDef<Product>[] = [
    {
      accessorKey: "title",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Name
            <ArrowUpDown />
          </Button>
        );
      },
      cell: ({ row }) => (
        <div className="capitalize font-bold truncate max-w-32 text-red-500">
          {row.getValue("title")}
        </div>
      ),
    },
    {
      accessorKey: "qty",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Available Quantity
            <ArrowUpDown />
          </Button>
        );
      },
      cell: ({ row }) => (
        <div className="capitalize font-bold">{row.getValue("qty")}</div>
      ),
    },
    {
      accessorKey: "dashboardType",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Type
            <ArrowUpDown />
          </Button>
        );
      },
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("dashboardType")}</div>
      ),
    },
    {
      accessorKey: "gender",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Gender
            <ArrowUpDown />
          </Button>
        );
      },
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("gender")}</div>
      ),
    },

    {
      accessorKey: "type",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Top/Lower
            <ArrowUpDown />
          </Button>
        );
      },
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("type")}</div>
      ),
    },
    {
      accessorKey: "category",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Category
            <ArrowUpDown />
          </Button>
        );
      },
      cell: ({ row }) => {
        const category = row.getValue("category");
        let categoryLabel: string;
        switch (category) {
          case 1:
            categoryLabel = "men T-Shirts";
            break;
          case 2:
            categoryLabel = "Women T-Shirts";
            break;
          case 3:
            categoryLabel = "Men Shirts";
            break;
          case 4:
            categoryLabel = "Women Shirts";
            break;
          case 5:
            categoryLabel = "Men Wool blouses";
            break;
          case 6:
            categoryLabel = "Women Wool blouses";
            break;
          case 7:
            categoryLabel = "Men Hats";
            break;
          case 8:
            categoryLabel = "Women Hats";
            break;
          case 9:
            categoryLabel = "Men Watches";
            break;
          case 10:
            categoryLabel = "Women Watches";
            break;
          case 11:
            categoryLabel = "Men Bags";
            break;
          case 12:
            categoryLabel = "Women Bags";
            break;
          case 13:
            categoryLabel = "Men Jeans";
            break;
          case 14:
            categoryLabel = "Women Jeans";
            break;
          case 15:
            categoryLabel = "Men Pants";
            break;
          case 16:
            categoryLabel = "Women Pants";
            break;
          case 17:
            categoryLabel = "Men Socks";
            break;
          case 18:
            categoryLabel = "Women Socks";
            break;
          case 19:
            categoryLabel = "Men Belts";
            break;
          case 20:
            categoryLabel = "Women Belts";
            break;
          case 21:
            categoryLabel = "Men Work & Safty Shoes";
            break;
          case 22:
            categoryLabel = "Men Loafers & Slip-Ons";
            break;
          case 23:
            categoryLabel = "Women Loafers & Slip-Ons";
            break;
          case 24:
            categoryLabel = "Men Snow Boots";
            break;
          case 25:
            categoryLabel = "Women Snow Boots";
            break;
          case 26:
            categoryLabel = "Men Casual Shoes";
            break;
          case 27:
            categoryLabel = "Men Boots";
            break;
          case 28:
            categoryLabel = "Men Sandals";
            break;
          case 29:
            categoryLabel = "Men Others";
            break;
          case 30:
            categoryLabel = "Women Others";
            break;
          case 31:
            categoryLabel = "Women Flats";
            break;
          case 32:
            categoryLabel = "Women Slippers";
            break;
          case 33:
            categoryLabel = "Women Sneakers";
            break;
          default:
            categoryLabel = String(category); // Fallback if the category doesn't match
            break;
        }
        return <div className="capitalize">{categoryLabel}</div>;
      },
    },
    {
      accessorKey: "size",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Size
            <ArrowUpDown />
          </Button>
        );
      },
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("size")}</div>
      ),
    },
    {
      accessorKey: "color",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Color
            <ArrowUpDown />
          </Button>
        );
      },
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("color")}</div>
      ),
    },
    {
      accessorKey: "price",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Price
            <ArrowUpDown />
          </Button>
        );
      },
      cell: ({ row }) => {
        const amount = parseFloat(row.getValue("price"));

        const formatted = new Intl.NumberFormat("en-JO", {
          style: "currency",
          currency: "JOD",
        }).format(amount);

        return <div className="text-right font-medium">{formatted}</div>;
      },
    },
    {
      accessorKey: "description",
      header: "Description",
      cell: ({ row }) => (
        <div className="capitalize truncate w-20">{row.getValue("description")}</div>
      ),
    },
    {
      accessorKey: "details",
      header: "Details",
      cell: ({ row }) => (
        <div className="capitalize truncate w-20">{row.getValue("details")}</div>
      ),
    },
    {
      accessorKey: "image",
      header: "Image",
      cell: ({ row }) => (
        <Image src={row.getValue("image")} width={50} height={50} alt="image" />
      ),
    },
    {
      id: "actions",
      enableHiding: false,
      cell: ({ row }) => {
        const product = row.original;
        const imageid = product.imageid;

        async function onDeleteHandle(id: string) {
          try {
            await deleteImageByUrl(imageid);
            await deleteProductById(id);
          } catch (error) {
            console.error("Error adding product:", error);
          }
        }
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => onDeleteHandle(product.id)}>
                Delete Product
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() => {
                  router.push("/dashboard/" + product.id + "/edit");
                }}
              >
                Update Product
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });
  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter Product Name..."
          value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("title")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-lg text-muted-foreground">
          Total Items:{" "}
          <span className="font-bold">
            {table.getFilteredRowModel().rows.length}
          </span>
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
