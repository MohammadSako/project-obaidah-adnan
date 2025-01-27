// "use client";

// import { useI18n } from "@/locales/client";
// import Link from "next/link";
// import { RiSecurePaymentLine } from "react-icons/ri";

// export default function Checkout({
//   allPrice,
//   totalQuantity,
//   pagePath,
//   onClick,
// }) {
//   const t = useI18n();

//   return (
//     <div className="space-y-4 font-sans">
//       <p className="text-lg font-semibold my-2">{t("checkout.ordersummary")}</p>
//       <div className="flex flex-row justify-between">
//         <p>
//           {t("product.products")} ({totalQuantity})
//         </p>
//         <p>JD{allPrice}</p>
//       </div>
//       <div className="border-t-2 border-black py-6 space-y-4">
//         <div className="flex justify-between text-base font-medium text-gray-900">
//           <p className="font-bold">{t("checkout.subtotalvat")}</p>
//           <p className="text-2xl font-bold">
//             <span className="text-sm">JD</span>
//             {allPrice}
//           </p>
//         </div>
//         <div>
//           <p className="mt-0.5 text-sm text-gray-500">
//             {t("common.shippinginfo")}
//           </p>
//           <p className="mt-0.5 text-sm text-gray-500">
//             {t("common.shippingagree")}{" "}
//             <Link href="#" className="text-blue-500 hover:text-blue-300">
//               {t("common.privacy")}
//             </Link>
//           </p>
//         </div>

//         {(pagePath === "/drawer" || pagePath === "/cart") && (
//           <div className="space-y-6">
//             <div>
//               <Link
//                 onClick={onClick}
//                 href="/checkout"
//                 className="flex items-center justify-center rounded-full border border-transparent bg-[#014F93] px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-[#014780]"
//               >
//                 {t("common.proceedtocheckout")}
//               </Link>
//             </div>
//             <div className="flex flex-row space-x-2 items-center">
//               <RiSecurePaymentLine size={20} />
//               <p className="underline">{t("common.secureshopping")}</p>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

"use client";

import { useItemStore } from "@/lib/store";
import { useI18n } from "@/locales/client";
import Link from "next/link";
import { RiSecurePaymentLine } from "react-icons/ri";

export default function Checkout({
  allPrice,
  totalQuantity,
  pagePath,
  onClick,
}) {
  
  const { addItem, favorite } = useItemStore();
  const t = useI18n();
  return (
    <div className="space-y-4 font-sans">
      <p className="text-lg font-semibold my-2">{t("checkout.ordersummary")}</p>
      <div className="flex flex-row justify-between">
        <p>
          {t("product.products")} ( {totalQuantity} )
        </p>
        <p>JD{allPrice}</p>
      </div>
      <div className="border-t-2 border-black py-6 space-y-4">
        <div className="flex justify-between text-base font-medium text-gray-900">
          <p className="font-bold">{t("checkout.subtotalvat")}</p>
          <p className="text-2xl font-bold">
            <span className="text-sm">{t("product.price")}</span>
            {allPrice}
          </p>
        </div>
        <div>
          <p className="mt-0.5 text-sm text-gray-500">
            {t("common.shippinginfo")}
          </p>
          <p className="mt-0.5 text-sm text-gray-500">
            {t("common.shippingagree")}{" "}
            <Link href="#" className="text-blue-500 hover:text-blue-300">
              {t("common.privacy")}
            </Link>
          </p>
        </div>

        {pagePath === "/favorite" && (
          <div
            onClick={() => favorite.forEach((item) => addItem(item))}
            style={{ cursor: "pointer" }}
            className="flex items-center justify-center rounded-full border border-[#014F93] px-6 py-3 text-base font-medium text-[#014F93] hover:text-white shadow-sm hover:bg-[#014780]"
          >
            {t("product.addalltocart")}
          </div>
        )}

        {pagePath === "/drawer" && (
          <div className="space-y-6">
            <div>
              <Link
                onClick={onClick}
                href="/checkout"
                className="flex items-center justify-center rounded-full border border-transparent bg-[#014F93] px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-[#014780]"
              >
                {t("common.proceedtocheckout")}
              </Link>
            </div>
            <div className="flex flex-row space-x-2 items-center">
              <RiSecurePaymentLine size={20} />
              <p className="underline">{t("common.secureshopping")}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
