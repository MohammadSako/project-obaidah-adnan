"use client";

import { useAuthStore } from "@/lib/authStore";
import { DashNav } from "./components/dash-nav";
import LogoutBackdrop from "./components/logout-backdrop";
import OrderDeleteBackdrop from "./customer-orders/components/delete-Order-Backdrop";
import DeliveredBackdrop from "./customer-orders/components/deliverd-backdrop";
import { useOrderStore } from "@/lib/orderStore";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const { isAuthOpen } = useAuthStore();
  const { isBackdropOpen, isDeliverdBackdrop } = useOrderStore();
  return (
    <>
      {isAuthOpen && <LogoutBackdrop />}
      {isBackdropOpen && <OrderDeleteBackdrop />}
      {isDeliverdBackdrop && <DeliveredBackdrop />}
      <DashNav />
      <div className="flex flex-col px-10 min-h-screen w-full">{children}</div>
    </>
  );
};

export default DashboardLayout;

//https://payloadcms.com/
