import { useItemStore } from "@/lib/store";
import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";

function CartButton({ quantity, id }) {
  const { increaseItem, decreaseItem } = useItemStore();

  return (
    <>
      <div className="flex flex-row items-center ring-1 ring-stone-600 rounded-full p-1">
        <button className="bg-white hover:bg-stone-300 rounded-full p-2">
          <FaPlus onClick={() => increaseItem(id)} />
        </button>
        <p className="text-lg font-bold">{quantity}</p>
        <button className="bg-white hover:bg-stone-300 rounded-full p-2">
          <FaMinus onClick={() => decreaseItem(id)} />
        </button>
      </div>
    </>
  );
}

export default CartButton;
