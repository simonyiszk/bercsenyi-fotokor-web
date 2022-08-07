import clsx from "clsx";
import React from "react";
import Link from "next/link";
type CustomButtonType = "black" | "yellow" | "disabled";

export type CustomButtonProps = {
  variant?: CustomButtonType;
  onClick?: () => any;
  children: string;
  className?: string;
  asLink?: boolean;
  buttonType?: "button" | "a" | "Link";
  /**
   * use if its buttonType === "a" or "Link"
   */
  href?: string;
};

const CustomButton = ({
  onClick,
  variant = "black",
  children,
  className,
  buttonType = "button",
  href,
}: CustomButtonProps) => {
  const style = clsx(
    className,
    variant === "black" && "text-white bg-black",
    variant === "yellow" && "text-black bg-fotokor-zold",
    variant === "disabled" && "text-gray-200 bg-black line-through",
    "rounded-sm px-4 py-1 text-base font-normal text-center"
  );

  if (["button", "Link"].includes(buttonType)) {
    if (buttonType === "a") {
      return (
        <a href={href} target={"_blank"} rel={"noreferrer"} className={style}>
          {children}
        </a>
      );
    }
    if (buttonType === "Link") {
      return (
        <Link href={href ?? "/"}>
          <a className={style}>{children}</a>
        </Link>
      );
    }
  }

  const cb = React.createElement(
    buttonType,
    {
      className: style,
      disabled: variant === "disabled",
      onClick: onClick,
    },
    children
  );

  return cb;
};

export default CustomButton;
