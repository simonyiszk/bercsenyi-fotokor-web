import InnerLayout from "@/components/layouts/InnerLayout";
import Listing from "@/components/typography/Listing";
import Paragraph from "@/components/typography/Paragraph";
import Title from "@/components/typography/Title";
import { join, loremipsun } from "@/contents/mock";
import { IAboutPageContent } from "@/models/content";
import { firebaseFirestore } from "@/utils/firebase";
import { runningEnv } from "@/utils/variables";
import { doc, DocumentData, getDoc } from "firebase/firestore";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Image from "next/image";

export default function AboutPage({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { introduction, joinUs } = data as IAboutPageContent;
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
          <Paragraph>{introduction}</Paragraph>
        </div>
      </div>
      <div className="my-8">
        <hr className="my-8 border-black" />
        <Title className="mb-8" type="mainTitle">
          hogyan tudsz csatlakozni hozzánk?
        </Title>
        <Paragraph>{joinUs}</Paragraph>
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

export const getStaticProps: GetStaticProps = async () => {
  let data: DocumentData | undefined = undefined;
  try {
    const contentRef = doc(firebaseFirestore, "content", "about-us");
    const content = await getDoc(contentRef);

    data = content.data();
  } catch (error) {
    console.log("error", error);
  }

  const pageContent = data as IAboutPageContent | undefined;

  return {
    props: {
      data: pageContent,
    },
    revalidate: runningEnv === "development" ? 1 : 60 * 60,
    notFound: pageContent === undefined,
  };
};
