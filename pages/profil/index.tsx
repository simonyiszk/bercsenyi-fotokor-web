import InnerLayout from "@/components/layouts/InnerLayout";
import CustomButton from "@/components/typography/CustomButton";
import { IUser } from "@/models/user";
import { firebaseAuth, firebaseFirestore } from "@/utils/firebase";
import { doc, DocumentReference, getDoc } from "firebase/firestore";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDocument } from "react-firebase-hooks/firestore";

export default function ProfilePage() {
  const [authUser, authLoading, authError] = useAuthState(firebaseAuth);
  const [userData, setUserData] = useState<IUser>();
  const [userDataLoading, setUserDataLoading] = useState(false);
  const [userError, setUserError] = useState<Error>();

  useEffect(() => {
    if (authUser) {
      setUserDataLoading(true);
      const userRef = doc(firebaseFirestore, "users", authUser.uid);
      getDoc(userRef)
        .then((snap) => {
          setUserData(snap.data() as IUser);
        })
        .catch((error) => {
          setUserError(error);
        })
        .finally(() => setUserDataLoading(false));
    }
  }, [authUser]);

  const router = useRouter();

  return (
    <InnerLayout title="Profil" restrictHeight restrictWidth>
      <>
        {(authLoading || userDataLoading) && <span>Loading...</span>}
        {authUser && userData && (
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
              {authUser.metadata.creationTime && (
                <p>{`regisztárlva: ${new Date(
                  authUser.metadata.creationTime
                ).toLocaleDateString("hu-HU")}`}</p>
              )}
              {authUser.metadata.lastSignInTime && (
                <p>{`utolsó bejelentkezés: ${new Date(
                  authUser.metadata.lastSignInTime
                ).toLocaleDateString("hu-HU")}`}</p>
              )}

              {userDataLoading && <p>betöltés</p>}
              {!userDataLoading && userData && (
                <>
                  <p>{userData?.role} jogod van</p>
                  {userData?.monogramm ? (
                    <p>{`a monogrammod "${userData.monogramm}"`}</p>
                  ) : (
                    <p>nincs beállítva monogramm</p>
                  )}
                </>
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
        {!authUser && !authLoading && (
          <div>
            <CustomButton
              variant="yellow"
              buttonType="Link"
              href="/bejelentkezes?redirect=/profil"
            >
              Bejelentkezés
            </CustomButton>
          </div>
        )}
      </>
    </InnerLayout>
  );
}
