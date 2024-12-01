import Image from "next/image";
import React from "react";

function DashList() {
  const product = [
    {
      category: "Top Clothing",
      title: "",
      url: "/categories/men/clothing/top",
      id: "mc1",
      description: "",
      image: "/c3.jpg",
      price: "",
      color: "",
    },
    {
      category: "Lower Clothing",
      title: "",
      url: "/categories/men/clothing/lower",
      id: "mc2",
      description: "",
      image: "/c2.jpg",
      price: "",
      color: "",
    },
  ];

  return (
    <div>
      <ul role="list" className="-my-6 divide-y divide-gray-200">
        <p className="my-2 text-sm text-gray-600">
          {totalQuantity} products in total
        </p>
        {product.map((product) => (
          <li key={product.id} className="flex py-6">
            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
              <Image
                width={500}
                height={500}
                alt={product.image}
                src={product.image}
                className="h-full w-full object-cover object-center"
              />
            </div>

            <div className="ml-4 flex flex-1 flex-col gap-4">
              <div>
                <div className="flex justify-between text-base font-semibold text-gray-800">
                  <h3>{product.title}</h3>
                  <p className="ml-4 font-bold">
                    JD
                    <span>{product.price}</span>
                  </p>
                </div>
                <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                <p className="mt-1 text-sm text-gray-500">
                  {product.description}
                </p>
                <p className="mt-1 text-xs text-gray-500">
                  Price per unit: JD{product.price}
                </p>
              </div>
              <div className="flex flex-1 items-end justify-between text-sm">
                {/* <p className="text-gray-500">
                        Qty{" "}
                        <span className="font-bold text-lg">
                          {product.quantity}
                        </span>
                      </p> */}

                <div className="flex">Delete </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DashList;
