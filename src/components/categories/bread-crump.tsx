"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/UI/breadcrumb";

// import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";

export function BreadCrumbs() {
  const path = usePathname();
  const pathName = path.split("/").filter((path) => path);

  return (
    <>
      <Breadcrumb className="m-4">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />

          {pathName.map((link, index) => {
            // const href = `/${pathName.slice(0, index + 1).join("/")}`; // Correct href generation
            const linkName = link[0].toUpperCase() + link.slice(1, link.length); // Capitalize first letter of each link

            return (
              <Fragment key={index}>
                <BreadcrumbItem>
                  {/* <Link href={href}>{linkName}</Link> */}
                  <div>{linkName}</div>
                </BreadcrumbItem>
                {index < pathName.length - 1 && <BreadcrumbSeparator />}
              </Fragment>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </>
  );
}
