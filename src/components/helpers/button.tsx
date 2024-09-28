import React from "react";

interface Props {
  text?: string;
  icon?: React.ReactElement;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  iconStyles?: string;
  isAnimated?: boolean;
  className?: string;
}

export const Button: React.FC<Props> = (props) => {
  const {
    text,
    isAnimated = true,
    className,
    icon,
    onClick,
    variant,
    iconStyles,
  } = props;
  return (
    <button
      onClick={onClick}
      className={`${
        variant === "primary"
          ? isAnimated
            ? "animated-btn-primary"
            : "button-base bg-darkGreen100 "
          : isAnimated
            ? "animated-btn-secondary"
            : "button-base bg-[#3a3a3a] "
      } ${className}`}
    >
      {icon && <div className={`w-4 h-4 mr-2 ${iconStyles}`}>{icon}</div>}
      <span>{text}</span>
    </button>
  );
};
