import clsx from "clsx";

type TitleProps = {
  children: string;
  type: "mainTitle" | "lowerTitle";
  className?: string;
};

export default function Title({ children, type, className }: TitleProps) {
  const mutualStyles = "font-medium";

  if (type === "mainTitle") {
    return (
      <h1 className={clsx(mutualStyles, className, "text-4xl")}>{children}</h1>
    );
  }

  if (type === "lowerTitle") {
    return (
      <h2 className={clsx(mutualStyles, className, "text-2xl")}>{children}</h2>
    );
  }
  return null;
}
