import clsx from "clsx";
import React from "react";

export enum CustomButtonType {
  black = "black",
  yellow = "yellow",
}

export type CustomButtonProps = {
  variant: CustomButtonType;
  onClick: () => any;
  children: string;
  className?: string;
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
        variant == CustomButtonType.black && "text-white bg-black",
        variant == CustomButtonType.yellow && "text-black bg-fotokor-zold",
        "rounded-sm px-4 py-1 text-base font-normal"
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default CustomButton;
