import SubmitForm from "@/components/form/SubmitForm";
import InnerLayout from "@/components/layouts/InnerLayout";
import Listing from "@/components/typography/Listing";
import Paragraph from "@/components/typography/Paragraph";
import Title from "@/components/typography/Title";
import { imgUploadDescription, imgUploadRules } from "@/contents/text";
import { useState } from "react";

type ImageSubmitType = {
  name: string;
  imageFile: FileList | null | undefined;
};

export default function SubmitPage() {
  const [image, setImage] = useState<ImageSubmitType>({
    name: "",
    imageFile: null,
  });

  return (
    <InnerLayout title="folytköv: feltöltés" restrictHeight restrictWidth>
      <div className="grid md:grid-cols-2 md:gap-x-32 md:gap-y-16 gap-y-4">
        <div>
          <Title className="mb-4" type="lowerTitle">
            feltöltés
          </Title>
          <SubmitForm />
        </div>

        <div></div>

        <div>
          <Title className="mb-4" type="lowerTitle">
            tájékoztató
          </Title>
          <Paragraph>{imgUploadDescription}</Paragraph>
        </div>
        <div>
          <Listing title="a képre vonatkozó előírások" items={imgUploadRules} />
        </div>
      </div>
    </InnerLayout>
  );
}
