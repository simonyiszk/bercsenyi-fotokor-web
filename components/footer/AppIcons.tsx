import Image, { ImageProps } from "next/image";
import clsx from "clsx";

type AppIconsType = {
  icon: "schdesign" | "facebook" | "instagram" | "email";
  className?: string;
  size?: {
    height: string;
    width: string;
  };
};

export default function AppIcons({ icon, className, size }: AppIconsType) {
  return (
    <Image
      className={clsx(className)}
      src={iconPaths[icon]}
      alt={`${icon} icon`}
      {...size}
    />
  );
}

const iconPaths = {
  schdesign: "/svgFiles/schdesign.svg",
  email: "/svgFiles/email.svg",
  instagram: "/svgFiles/ig.svg",
  facebook: "/svgFiles/fb.svg",
};
