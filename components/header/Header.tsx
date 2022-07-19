import Image from "next/image";
import Link from "next/link";
import { routes } from "@/contents/links";
import AppIcons from "../footer/AppIcons";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { fullConfig } from "@/utils/tailwindConfig";
import { useWindowDimensions } from "@/utils/hook";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { width } = useWindowDimensions();
  const breakpoints = fullConfig?.theme?.screens;

  const router = useRouter();

  useEffect(() => {
    setIsOpen(false);
  }, [router.pathname]);

  useEffect(() => {
    // @ts-expect-error tailwind types
    const mdBreakpoint = Number(breakpoints?.["md"].replace("px", ""));
    if (width && width > (mdBreakpoint ?? 768) && isOpen) {
      setIsOpen(false);
    }
  }, [width]);

  return (
    <>
      {isOpen && <MobileNav setIsOpen={setIsOpen} />}
      <header className="text-2xl">
        <div className="hidden md:inline-block w-full">
          <ul className="flex flex-row gap-4 lg:gap-8 items-center justify-center px-4 lg:px-14 py-8">
            <Link href={"/"} passHref>
              <div className="flex flex-row items-center gap-4 cursor-pointer">
                <Image
                  src={"/logo.png"}
                  width={"40px"}
                  height={"40px"}
                  alt="bercsényi fotókör logo"
                  className="rounded-full"
                  objectFit="cover"
                />
                <span>bercsényi fotókör</span>
              </div>
            </Link>
            <hr className="bg-black h-8 lg:h-[40px] w-[2px]" />
            {routes.folytkov.map(({ name, href }) => (
              <li key={name}>
                <Link href={href}>{name}</Link>
              </li>
            ))}
            <hr className="bg-black h-8 lg:h-[40px] w-[2px]" />
            {routes.other.map(({ name, href }) => (
              <li key={name}>
                <Link href={href}>{name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:hidden text-2xl px-6 py-4 flex flex-row justify-between items-center">
          <Link href={"/"} passHref>
            <div className="flex flex-row items-center gap-4 cursor-pointer">
              <Image
                src={"/logo.png"}
                width={"30px"}
                height={"30px"}
                alt="bercsényi fotókör logo"
                className="rounded-full"
                objectFit="cover"
              />
              <span>bercsényi fotókör</span>
            </div>
          </Link>
          <AppIcons
            onClick={() => setIsOpen(true)}
            icon="hamburger"
            size={{ height: "35px", width: "35px" }}
            className="cursor-pointer"
          />
        </div>
      </header>
    </>
  );
}

type MobileNavProps = {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

function MobileNav({ setIsOpen }: MobileNavProps) {
  return (
    <div className="md:hidden fixed h-screen w-screen bg-white z-50">
      <div className="flex flex-col items-center justify-center h-full gap-8">
        <AppIcons
          icon="close"
          size={{ height: "35px", width: "35px" }}
          onClick={() => setIsOpen(false)}
          className="cursor-pointer"
        />
        <ul className="flex flex-col gap-4 items-center justify-around h-1/2 text-2xl">
          {routes.folytkov.map(({ name, href }) => (
            <li key={name}>
              <Link href={href}>{name}</Link>
            </li>
          ))}
          <hr className="border-0 bg-black w-2/3 h-[2px]" />
          {routes.other.map(({ name, href }) => (
            <li key={name}>
              <Link href={href}>{name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
