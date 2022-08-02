import clsx from "clsx";
import React from "react";

type CustomButtonType = "black" | "yellow" | "disabled";

export type CustomButtonProps = {
  variant: CustomButtonType;
  onClick: () => any;
  children: string;
  className?: string;
  asLink?: boolean;
};

const CustomButton = ({
  onClick,
  variant,
  children,
  className,
}: CustomButtonProps) => {
  return (
    <button
      className={clsx(
        className,
        variant === "black" && "text-white bg-black",
        variant === "yellow" && "text-black bg-fotokor-zold",
        variant === "disabled" && "text-gray-200 bg-black line-through",
        "rounded-sm px-4 py-1 text-base font-normal"
      )}
      onClick={onClick}
      disabled={variant === "disabled"}
    >
      {children}
    </button>
  );
};

export default CustomButton;
