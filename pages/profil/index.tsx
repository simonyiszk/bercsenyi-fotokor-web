import InnerLayout from "@/components/layouts/InnerLayout";
import CustomButton from "@/components/typography/CustomButton";
import { useRouter } from "next/router";

export default function ProfilePage() {
  const router = useRouter();
  return (
    <InnerLayout title="Profil" restrictHeight restrictWidth>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <p>Elek Teszt</p>
          <p>tesztelek@gmail.com</p>
          <p>admin jogod van</p>
        </div>
        <div className="flex flex-col gap-2 my-4 md:order-3">
          <CustomButton
            variant={"black"}
            onClick={() => {
              router.push("/profil/szerkesztes");
            }}
          >
            monogramm beállítása
          </CustomButton>
          <CustomButton variant={"yellow"} onClick={() => {}}>
            kijelentkezés
          </CustomButton>
        </div>
        <div className="flex flex-col gap-2">
          <CustomButton
            variant={"black"}
            onClick={() => {
              router.push("/admin/felhasznalok");
            }}
          >
            felhasználók kezelése
          </CustomButton>
          <CustomButton
            variant={"disabled"}
            onClick={() => {
              router.push("/admin/posztok");
            }}
          >
            posztok kezelése
          </CustomButton>
          <CustomButton
            variant={"disabled"}
            onClick={() => {
              router.push("/admin/eszkozok");
            }}
          >
            bérelhető eszközök
          </CustomButton>
          <CustomButton
            variant={"disabled"}
            onClick={() => {
              router.push("/admin/tartalom");
            }}
          >
            tartalom kezelése
          </CustomButton>
        </div>
        <div></div>
      </div>
    </InnerLayout>
  );
}
