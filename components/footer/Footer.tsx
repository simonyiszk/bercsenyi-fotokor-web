import React from "react";

import AppIcons from "./AppIcons";

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
      <div className="flex flex-row gap-2 items-center">
        <a href={`mailto:${socials.email}`}>
          <AppIcons icon="email" size={{ height: "30px", width: "30px" }} />
        </a>
        <a href={socials.fb} target="_blank" rel="noreferrer">
          <AppIcons icon="facebook" size={{ height: "30px", width: "30px" }} />
        </a>
        <a href={socials.ig} target="_blank" rel="noreferrer">
          <AppIcons icon="instagram" size={{ height: "30px", width: "30px" }} />
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
          <AppIcons
            icon="schdesign"
            size={{ height: "30px", width: "110px" }}
          />
        </span>
      </a>
    </footer>
  );
}
