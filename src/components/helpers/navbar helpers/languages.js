// import Link from "next/link";
// import React from "react";
// import NavLink from "./nav-link";

// export default function Languages() {
//   return (
//     <div className="flex sm:flex-none flex-1 items-center justify-center sm:items-stretch">
//       <div className="flex flex-shrink-0 items-center justify-items-start">
//         <Link href="/">
//           <h1 className="text-lg font-sans font-bold tracking-wide  hover:text-black text-slate-500">
//             <NavLink text="عربي">عربي</NavLink>
//           </h1>
//         </Link>
//       </div>
//     </div>
//   );
// }

import React from "react";
import { LocaleSwitcher } from "../locale-switcher";

export default function Languages() {
  return (
    <div className="flex sm:flex-none flex-1 items-center justify-center sm:items-stretch">
      <div className="flex flex-shrink-0 mt-1 items-center justify-items-start">
        <LocaleSwitcher />
        {/* <LocaleSwitcher className="lg:hidden text-xl w-auto h-auto" /> */}
      </div>
    </div>
  );
}
