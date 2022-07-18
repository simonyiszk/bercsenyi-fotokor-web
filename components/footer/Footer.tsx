import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import SchdesignLogo from "./SchdesignLogo";

export default function Footer() {
  const footerText = {
    uri: "fotokor.bercsenyi.bme.hu",
    name: "bercsényi fotókör",
    schdesign: "https://schdesign.hu",
  };

  const socials = {
    email: "bercsenyifotokor@gmail.com",
    fb: "https://www.facebook.com/bercsenyifotokor",
    ig: "https://www.instagram.com/bmebercsenyifotokor/",
  };

  return (
    <footer className="font-roboto-mono flex flex-col justify-center gap-2 md:p-8 p-4 items-center">
      <span className="font-medium text-lg xs:text-2xl">{footerText.uri}</span>
      <span className="text-lg xs:text-xl">{footerText.name}</span>
      <div className="flex flex-row gap-2 text-2xl xs:text-3xl items-center">
        <a href={`mailto:${socials.email}`}>
          <HiMail />
        </a>
        <a href={socials.fb} target="_blank" rel="noreferrer">
          <FaFacebook />
        </a>
        <a href={socials.ig} target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>
      </div>
      <a
        href={footerText.schdesign}
        target="_blank"
        rel="noreferrer"
        className="font-light text-xl flex flex-row gap-3"
      >
        <span className="-mt-[3px]">made by</span>
        <span>
          <SchdesignLogo />
        </span>
      </a>
    </footer>
  );
}
