import InnerLayout from "@/components/layouts/InnerLayout";
import CustomButton from "@/components/typography/CustomButton";
import Image from "next/image";
import { useRouter } from "next/router";

const NotFoundPage = () => {
  return (
    <>
      <InnerLayout
        restrictHeight
        restrictWidth
        title="404 - Nem található ez az oldal"
        hideTitle
      >
        <div className="max-w-md gap-4 mx-auto flex flex-col justify-center items-center">
          <div>
            <Image
              src={"/sad_cat.webp"}
              width={300}
              height={300}
              alt="not found image"
            />
          </div>
          <h1 className="text-2xl text-center mb-4">
            Ez az oldal nem található (404)
          </h1>
          <CustomButton asLink buttonType="Link" href="/">
            Vissza a főoldalra
          </CustomButton>
        </div>
      </InnerLayout>
    </>
  );
};

export default NotFoundPage;
