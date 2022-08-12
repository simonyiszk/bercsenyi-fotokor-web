import InnerLayout from "@/components/layouts/InnerLayout";
import CustomButton from "@/components/typography/CustomButton";
import Image from "next/image";
import {
  useAuthUser,
  withAuthUser,
  withAuthUserTokenSSR,
  AuthAction,
} from "next-firebase-auth";

function ProfilePage() {
  const authUser = useAuthUser();

  return (
    <InnerLayout title="Profil" restrictHeight restrictWidth>
      <>
        {authUser.firebaseUser && (
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <Image
                src={authUser.photoURL ?? "https://placehold.jp/150x150.png"}
                width={64}
                height={64}
                alt={"user profile pic"}
              />
              <p>{authUser.displayName}</p>
              <p>{authUser.email}</p>
              {authUser.firebaseUser?.metadata.creationTime && (
                <p>{`regisztárlva: ${new Date(
                  authUser.firebaseUser?.metadata.creationTime
                ).toLocaleDateString("hu-HU")}`}</p>
              )}
              {authUser.firebaseUser?.metadata.lastSignInTime && (
                <p>{`utolsó bejelentkezés: ${new Date(
                  authUser.firebaseUser?.metadata.lastSignInTime
                ).toLocaleDateString("hu-HU")}`}</p>
              )}
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
                  await authUser.signOut();
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
        {!authUser.firebaseUser && (
          <CustomButton
            buttonType="Link"
            href="/bejelentkezes?redirect=/feltoltes"
          >
            bejelentkezés
          </CustomButton>
        )}
      </>
    </InnerLayout>
  );
}

export const getServerSideProps = withAuthUserTokenSSR({
  whenUnauthed: AuthAction.REDIRECT_TO_LOGIN,
})();

export default withAuthUser()(ProfilePage);
