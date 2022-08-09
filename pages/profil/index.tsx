import InnerLayout from "@/components/layouts/InnerLayout";
import CustomButton from "@/components/typography/CustomButton";
import { firebaseAuth } from "@/utils/firebase";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

export default function ProfilePage() {
  const [uUser, uLoading, uError] = useAuthState(firebaseAuth);
  console.log(uUser);

  useEffect(() => {
    console.log("uUser change");
  }, [uUser]);

  const router = useRouter();

  return (
    <InnerLayout title="Profil" restrictHeight restrictWidth>
      <>
        {uLoading && <span>Loading...</span>}
        {uUser && (
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <Image
                src={uUser.photoURL ?? "https://placehold.jp/150x150.png"}
                width={64}
                height={64}
                alt={"user profile pic"}
              />
              <p>{uUser.displayName}</p>
              <p>{uUser.email}</p>
              {uUser.metadata.creationTime && (
                <p>{`regisztárlva: ${new Date(
                  uUser.metadata.creationTime
                ).toLocaleDateString("hu-HU")}`}</p>
              )}
              {uUser.metadata.lastSignInTime && (
                <p>{`utolsó bejelentkezés: ${new Date(
                  uUser.metadata.lastSignInTime
                ).toLocaleDateString("hu-HU")}`}</p>
              )}

              <p>admin jogod van</p>
            </div>
            <div className="flex flex-col gap-2 my-4 md:order-3">
              <CustomButton
                buttonType="Link"
                href="/profil/szerkesztes"
                variant={"black"}
              >
                monogramm beállítása
              </CustomButton>
              <CustomButton
                variant={"yellow"}
                onClick={async () => {
                  await firebaseAuth.signOut();
                }}
              >
                kijelentkezés
              </CustomButton>
            </div>
            <div className="flex flex-col gap-2">
              <CustomButton buttonType="Link" href="/admin/felhasznalok">
                felhasználók kezelése
              </CustomButton>
              <CustomButton buttonType="Link" href="/admin/posztok">
                posztok kezelése
              </CustomButton>
              <CustomButton buttonType="Link" href="/admin/eszkozok">
                bérelhető eszközök
              </CustomButton>
              <CustomButton buttonType="Link" href="/admin/tartalom">
                tartalom kezelése
              </CustomButton>
            </div>
            <div></div>
          </div>
        )}
        {!uUser && !uLoading && (
          <div>
            <CustomButton
              variant="yellow"
              buttonType="Link"
              href="/bejelentkezes"
              onClick={(e) => {
                e.preventDefault();
                router.replace("/bejelentkezes");
              }}
            >
              Bejelentkezés
            </CustomButton>
          </div>
        )}
      </>
    </InnerLayout>
  );
}
