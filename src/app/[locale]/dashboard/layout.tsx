"use client";

import { DashNav } from "./components/dash-nav";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <DashNav />
      <div className="flex flex-col px-10 min-h-screen w-full">{children}</div>
    </>
  );
};

export default DashboardLayout;

//https://payloadcms.com/
