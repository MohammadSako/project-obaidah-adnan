"use client";

import { useAuthStore } from "@/lib/authStore";
import { DashNav } from "./components/dash-nav";
import LogoutBackdrop from "./components/logout-backdrop";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const { isAuthOpen } = useAuthStore();
console.log(isAuthOpen);

  return (
    <>
      {isAuthOpen && <LogoutBackdrop />}
      <DashNav />
      <div className="flex flex-col px-10 min-h-screen w-full">{children}</div>
    </>
  );
};

export default DashboardLayout;

//https://payloadcms.com/
