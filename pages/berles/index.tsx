import InnerLayout from "@/components/layouts/InnerLayout";
import Listing from "@/components/typography/Listing";
import Paragraph from "@/components/typography/Paragraph";
import { links } from "@/contents/links";
import { loremipsun } from "@/contents/mock";
import Image from "next/image";

export default function RentPage() {
  const items = ["Zenit 123", "Hasselblad 123", "Canon AE-1"];
  return (
    <InnerLayout title="Bérlés" restrictHeight restrictWidth>
      <div className="grid md:grid-cols-2 gap-8 md:gap-16">
        <div className="flex flex-col gap-8">
          <Paragraph>{loremipsun.repeat(1)}</Paragraph>
          <div className="flex flex-col">
            <span className="text-base">kérdés esetén írj nekünk:</span>
            <span className="text-xl font-medium">{links.fotokor.email}</span>
          </div>
        </div>
        <div className="w-full h-96 relative aspect-auto">
          <Image
            src={"http://placekitten.com/200/300"}
            layout="fill"
            alt="darkroom photo"
            objectFit="cover"
          />
        </div>

        <Listing title="mit tudsz kölcsönözni tőlünk?" items={items} />
      </div>
    </InnerLayout>
  );
}
