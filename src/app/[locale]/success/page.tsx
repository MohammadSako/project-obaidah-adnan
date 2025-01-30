"use client";

import Lottie from "lottie-react";
import SuccessLottie from "@/success-lottie.json";
import Link from "next/link";
import { useI18n } from "@/locales/client";
import { Button } from "@/components/UI/button";

export default function Success() {
  const t = useI18n();
  return (
    <section className="flex flex-col w-full min-h-screen items-center justify-center">
      <div className="flex flex-col gap-2 text-center max-w-screen-sm items-center">
        <div className="w-24 h-24">
          <Lottie animationData={SuccessLottie} loop={false} />
        </div>
        <h1 className="font-bold text-forest ltr:font-display text-3xl mt-3">
          {t("success.placed")}
        </h1>
        <p className="text-slate-600 font-medium text-xl">{t("success.thanks")}</p>
        <p className="text-slate-600 font-medium text-xl">{t("checkout.orders.success2")}</p>
        <div className="flex items-center gap-4 mt-4">
          <Link href={`/`}>
            <Button variant="outline">
              {t("success.back")}
            </Button>
          </Link>
          {/* <Link href={`/settings/orders`}>
            <Button>
              {t("success.view")}
            </Button>
          </Link> */}
        </div>
      </div>
    </section>
  );
}
