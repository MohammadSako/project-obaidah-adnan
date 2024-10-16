import React, { useState } from "react";
import { IoCartOutline } from "react-icons/io5";

import CartDrawer from "../cart/cartDrawer";
export default function Cart() {
  const [show, setShow] = useState(false);

  const openDrawerHandler = () => setShow((s) => !s);

  return (
    <div className="flex sm:flex-none flex-1 items-center justify-center sm:items-stretch">
      <div className="flex flex-shrink-0 items-center justify-items-start">
        <IoCartOutline
          onClick={openDrawerHandler}
          size={30}
          className="text-lg font-sans tracking-wide text-gray-400 hover:text-gray-800"
        />
        <CartDrawer show={show} />
      </div>
    </div>
  );
}
