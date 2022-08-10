import InnerLayout from "@/components/layouts/InnerLayout";
import Listing from "@/components/typography/Listing";
import Paragraph from "@/components/typography/Paragraph";
import { links } from "@/contents/links";
import { IRentPageContent } from "@/models/content";
import { firebaseFirestore } from "@/utils/firebase";
import { runningEnv } from "@/utils/variables";
import { doc, DocumentData, getDoc } from "firebase/firestore";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Image from "next/image";

export default function RentPage({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log(runningEnv);
  const { description, items } = data as IRentPageContent;
  return (
    <InnerLayout title="Bérlés" restrictHeight restrictWidth>
      <div className="grid md:grid-cols-2 gap-8 md:gap-16">
        <div className="flex flex-col gap-8">
          <Paragraph>{description}</Paragraph>
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

export const getStaticProps: GetStaticProps = async () => {
  let data: DocumentData | undefined = undefined;
  try {
    const contentRef = doc(firebaseFirestore, "content", "rent");
    const content = await getDoc(contentRef);

    data = content.data();
  } catch (error) {
    console.log("error", error);
  }

  const pageContent = data as IRentPageContent | undefined;

  return {
    props: {
      data: pageContent,
    },
    revalidate: runningEnv === "development" ? 0 : 60 * 60,
    notFound: pageContent === undefined,
  };
};
