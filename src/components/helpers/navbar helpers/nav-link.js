"use client";

import { motion } from "framer-motion";

const NavLink = ({ text, className }) => {
  return (
    <div className="hidden lg:block h-[30px] overflow-hidden font-medium">
      <motion.div whileHover={{ y: -31 }}>
        <div className={className}>{text}</div>
        <div className={className}>{text}</div>
      </motion.div>
    </div>
  );
};

export default NavLink;

export const NavLinkIcon = ({ icon }) => {
  return (
    <div className="h-[35px] overflow-hidden">
      <motion.div whileHover={{ y: -35 }}>
        <div className="flex items-center h-[33px] gap-1">{icon}</div>
        <div className="flex items-center h-[33px] gap-1">{icon}</div>
      </motion.div>
    </div>
  );
};
