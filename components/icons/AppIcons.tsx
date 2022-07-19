import Image, { ImageProps } from "next/image";
import clsx from "clsx";

type AppIconsType = {
  icon:
    | "schdesign"
    | "facebook"
    | "instagram"
    | "email"
    | "hamburger"
    | "close";
  className?: string;
  size?: {
    height: string;
    width: string;
  };
  onClick?: () => void;
};

export default function AppIcons({
  icon,
  className,
  size,
  onClick,
}: AppIconsType) {
  return (
    <Image
      onClick={() => onClick && onClick()}
      className={clsx(className)}
      src={iconPaths[icon]}
      alt={`${icon} icon`}
      priority
      {...size}
    />
  );
}

const iconPaths = {
  schdesign: "/svgFiles/schdesign.svg",
  email: "/svgFiles/email.svg",
  instagram: "/svgFiles/ig.svg",
  facebook: "/svgFiles/fb.svg",
  hamburger: "/svgFiles/hamburger.svg",
  close: "/svgFiles/close.svg",
};
