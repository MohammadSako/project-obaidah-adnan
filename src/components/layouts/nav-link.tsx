"use client";

import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../UI/tooltip";
import { cn } from "@/lib/utils";

export const NavLink = ({
  text,
  icon,
  tooltipTx,
  textClassName,
  onClick,
  badgeCount,
}: {
  text: string | React.ReactNode;
  icon?: React.ReactElement;
  href?: string;
  tooltipTx?: string;
  onClick?: () => void;
  badgeCount?: number;
  textClassName?: string;
}) => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={100}>
        <TooltipTrigger>
          <div className="relative block h-[30px] font-medium cursor-pointer">
            {!!badgeCount && (
              <div className="absolute top-0 -right-2 w-4 h-4 bg-red-600 text-white font-medium z-30 rounded-full text-xs">
                {badgeCount}
              </div>
            )}
            <div
              onClick={onClick}
              className="relative block h-[30px] overflow-hidden font-medium cursor-pointer"
            >
              <motion.div whileHover={{ y: -30 }} className={textClassName}>
                <div
                  className={cn(
                    `flex items-center h-[30px] text-gray-700 gap-1`,
                  )}
                >
                  {icon}
                  {text}
                </div>
                <div className="flex items-center h-[30px] text-darkGreen gap-1">
                  {icon}
                  {text}
                </div>
              </motion.div>
            </div>
          </div>
        </TooltipTrigger>
        {tooltipTx && (
          <TooltipContent side="bottom">
            <p>{tooltipTx}</p>
          </TooltipContent>
        )}
      </Tooltip>
    </TooltipProvider>
  );
};