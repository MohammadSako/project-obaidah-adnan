"use client";

import { useI18n } from "@/locales/client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
function OrderDetails({ data }) {
  const [orders, setOrders] = useState([]);
  const t = useI18n();

  useEffect(() => {
    if (data) {
      setOrders(data);
    }
  }, [data]);
  console.log(orders);

  return (
    <>
      <div className="mt-6 p-4 rounded-md shadow-lg shadow-blue-200">
        <div className="flex justify-between">
          <div className="space-y-2 text-2xl text-gray-500">
            <p>
              <span className="text-2xl font-bold text-blue-500">
                {t("checkout.address.firstline")}:{" "}
              </span>
              {orders.firstline}
            </p>
            <p>
              <span className="text-2xl font-bold text-blue-500">
                {t("checkout.address.secondline")}:{" "}
              </span>
              {orders.secondline}
            </p>
            <p>
              <span className="text-2xl font-bold text-blue-500">
                {t("common.form.city")}:{" "}
              </span>
              {orders.city}
            </p>
            <p>
              <span className="text-2xl font-bold text-blue-500">
                {t("common.form.phonenumber")}:{" "}
              </span>
              {orders.phonenumber}
            </p>
            <p>
              <span className="text-2xl font-bold text-blue-500">
                {t("common.form.email")}:{" "}
              </span>
              {orders.email}
            </p>
            <p>
              <span className="text-2xl font-bold text-blue-500">
                {t("common.form.additional")}:{" "}
              </span>
              {orders.additional}
            </p>
          </div>
          <div className="grid content-between">
            <p className="flex justify-end text-xl text-gray-500">
              In Delivery
            </p>
            <p className="flex justify-end text-2xl text-gray-800 gap-2">
              <span className="text-2xl capitalize font-bold text-blue-500">
                {t("product.total")}:
              </span>
              {orders.totalall}
              <span className="text-lg">{t("product.price")}</span>
            </p>
          </div>
        </div>
      </div>
      {orders.items && (
        <div className="mt-6 p-4 rounded-md shadow-lg shadow-gray-500">
          {orders.items.map((item) => (
            <>
              <div key={item.id} className="flex flex-row">
                <div className="basis-1/2 space-y-4">
                  <div className="flex flex-row gap-4 items-center">
                    <h1 className="text-3xl font-bold text-gray-900 capitalize">
                      {item.title || "No Title"}
                    </h1>
                    <div className="h-25 w-25 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <Image
                        width={50}
                        height={50}
                        alt={item.image}
                        src={item.image}
                      />
                    </div>
                  </div>
                  <h4 className="text-lg text-blue-500 font-bold mt-2">
                    <span className="capitalize">{item.clotheType}</span>{" "}
                    {item.gender === "men"
                      ? t("categories.formen")
                      : t("categories.forwomen")}
                  </h4>
                  <div>
                    <div className="flex flex-row gap-2">
                      <h3 className="text-xl text-gray-800">
                        {t("product.color")}
                      </h3>
                      <h4 className="w-fit text-xl font-medium text-blue-600 border-gray-800 border rounded-md px-4 py-1 capitalize">
                        {item.color || "N/A"}
                      </h4>
                    </div>
                  </div>
                  <div>
                    <div className="flex flex-row gap-2">
                      <h3 className="text-xl text-gray-800">
                        {t("product.size")}
                      </h3>
                      <h4 className="w-fit text-xl text-blue-600 font-bold border-gray-800 border rounded-md px-4 py-1 ">
                        {item.size || "N/A"}
                      </h4>
                    </div>
                  </div>
                  <div className="flex flex-row gap-2 text-end">
                    <p className="text-2xl text-gray-800">
                      {t("common.price")}:
                    </p>
                    <p className="text-2xl text-gray-600">
                      {item.price || "N/A"}
                      <span className="text-lg text-gray-600 mx-2">
                        {t("product.perunit")}
                      </span>
                    </p>
                  </div>
                  <div className="flex flex-row gap-2 text-end">
                    <p className="text-2xl text-gray-800">
                      {t("common.total")}:
                    </p>
                    <p className="text-2xl text-gray-600">
                      {item.totalPrice || "N/A"}
                      <span className="text-lg text-gray-600 mx-2">
                        {t("product.price")}
                      </span>
                    </p>
                  </div>
                  {/* -------------- */}
                </div>
                <div className="basis-1/2 space-y-4">
                  <h4 className="text-lg text-blue-500 font-bold mt-2">
                    <span className="capitalize">{item.dashboardType}</span>{" "}
                  </h4>
                  <div className="flex flex-row gap-2">
                    <h3 className="text-xl text-gray-500 font-bold">
                      {t("product.quantity")}:
                    </h3>
                    <h4 className="w-fit text-lg text-gray-400 border-gray-800 capitalize">
                      {item.quantity || "N/A"}
                    </h4>
                  </div>
                  <div>
                    <div className="flex flex-row gap-2">
                      <h3 className="text-xl text-gray-500 font-bold">
                        {t("dashboard.typeofitem")}:
                      </h3>
                      <h4 className="w-fit text-lg text-gray-400 border-gray-800 capitalize">
                        {item.type || "N/A"}
                      </h4>
                    </div>
                  </div>
                  <div className="flex flex-row gap-2">
                    <h3 className="text-xl text-gray-500 font-bold">
                      {t("product.description")}:
                    </h3>
                    <h4 className="w-fit text-lg text-gray-400 border-gray-800 capitalize">
                      {item.description || "N/A"}
                    </h4>
                  </div>
                  <div className="flex flex-row gap-2">
                    <h3 className="text-xl text-gray-500 font-bold">
                      {t("product.details")}:
                    </h3>
                    <h4 className="w-fit text-lg text-gray-400 border-gray-800 capitalize">
                      {item.details || "N/A"}
                    </h4>
                  </div>
                  <div className="flex flex-row gap-2">
                    <h3 className="text-xl text-gray-500 font-bold">
                      {t("dashboard.category")}:
                    </h3>
                    <h4 className="w-fit text-lg text-gray-400 border-gray-800 capitalize">
                      {item.category || "N/A"}
                    </h4>
                  </div>
                </div>
              </div>
              <div className="border-t border-1 border-gray-400 w-full my-6" />
            </>
          ))}
        </div>
      )}
    </>
  );
}

export default OrderDetails;
