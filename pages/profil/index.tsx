import InnerLayout from "@/components/layouts/InnerLayout";
import CustomButton from "@/components/typography/CustomButton";
import { firebaseAuth } from "@/utils/firebase";
import { useRouter } from "next/router";
import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth";

export default function ProfilePage() {
  const [signInWithGoogle, user, loading, error] =
    useSignInWithGoogle(firebaseAuth);

  console.log(user, loading, error);

  return (
    <InnerLayout title="Profil" restrictHeight restrictWidth>
      <>
        {user && (
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p>{user.user.displayName}</p>
              <p>{user.user.email}</p>
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
              <CustomButton variant={"yellow"} onClick={() => {}}>
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
        {!user && (
          <div>
            <CustomButton variant="yellow" onClick={() => signInWithGoogle()}>
              Bejelentkezés Google fiókkal
            </CustomButton>
          </div>
        )}
      </>
    </InnerLayout>
  );
}
