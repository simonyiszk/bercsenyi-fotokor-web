import InnerLayout from "@/components/layouts/InnerLayout";
import Listing from "@/components/typography/Listing";
import Paragraph from "@/components/typography/Paragraph";
import Title from "@/components/typography/Title";
import { join, loremipsun } from "@/contents/mock";
import Image from "next/image";

export default function AboutPage() {
  return (
    <InnerLayout title="Rólunk" restrictHeight restrictWidth hideTitle>
      <div>
        <div className="w-full h-[300px] md:h-[600px] relative aspect-auto">
          <Image
            src={"http://placekitten.com/200/300"}
            layout="fill"
            alt="darkroom photo"
            objectFit="cover"
            className="aspect-auto z-0"
          />
        </div>
        <div className="bg-fotokor-zold relative h-7 md:w-2/3"></div>
        <div className="bg-black text-white md:w-1/2 md:-mt-40 md:mx-10 relative px-9 py-6">
          <Title type="mainTitle" className="mb-8 lowercase">
            Rólunk
          </Title>
          <Paragraph>{loremipsun.slice(0, 250)}</Paragraph>
        </div>
      </div>
      <div className="my-8">
        <hr className="my-8 border-black" />
        <Title className="mb-8" type="mainTitle">
          hogyan tudsz csatlakozni hozzánk?
        </Title>
        <Paragraph>{loremipsun.slice(0, 200)}</Paragraph>
        <div className=" grid md:grid-cols-2 gap-x-20 md:gap-y-10 gap-y-3 my-16">
          {join.map((e) => (
            <div key={e.number} className="flex flex-row gap-6">
              <div className="flex justify-center items-center">
                <span className="text-3xl font-medium">{e.number}</span>
              </div>
              <div>
                <Title type="lowerTitle">{e.title}</Title>
                <p>{e.description}</p>
              </div>
            </div>
          ))}
        </div>
        <hr className="my-8 border-black" />
      </div>
    </InnerLayout>
  );
}
