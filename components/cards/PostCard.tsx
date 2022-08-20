import { IFolytkovPageContent } from "@/models/content";
import Image from "next/image";

export default function PostCard({
  id,
  monogram,
  posted_at,
  serial,
  url,
}: IFolytkovPageContent) {
  return (
    <div className="w-full h-full p-4">
      <div>
        <Image
          src={url}
          alt={id}
          width="100%"
          height="100%"
          layout="responsive"
          objectFit="contain"
        />
      </div>
      <h1>{`${serial}-${monogram}`}</h1>
      <span>{new Date(posted_at).toLocaleString("hu-HU")}</span>
    </div>
  );
}
