import Image from "next/image";
import Link from "next/link";
import { routes } from "@/contents/links";

export default function Header() {
  return (
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
      <div className="md:hidden text-2xl px-4 py-4">
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
      </div>
    </header>
  );
}
