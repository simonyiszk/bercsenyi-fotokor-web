import InnerLayout from "@/components/layouts/InnerLayout";
import CustomButton from "@/components/typography/CustomButton";
import { useRouter } from "next/router";
import { FcGoogle } from "react-icons/fc";
import { firebaseAuth, firebaseFirestore } from "@/utils/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import type { IUser } from "@/models/user";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect, useState } from "react";
import { routes } from "@/contents/links";

export default function LoginPage() {
  const router = useRouter();
  const provider = new GoogleAuthProvider();

  // TODO valami UI erre
  const [isLoginLoading, setIsLoginLoading] = useState(false);

  const handleSignInWithGoogle = async () => {
    const auth = firebaseAuth;
    try {
      setIsLoginLoading(true);
      const result = await signInWithPopup(auth, provider);

      const { user } = result;

      const docRef = doc(firebaseFirestore, "users", user.uid);
      const docSnapshot = await getDoc(docRef);

      if (!docSnapshot.exists()) {
        setDoc(doc(firebaseFirestore, "users", user.uid), {
          id: user.uid,
          role: "user",
          created_at: user.metadata.creationTime ?? new Date(),
          google: user.providerData[0],
        } as IUser);
        setIsLoginLoading(false);
      }
    } catch (error) {
      // TODO: handle error
      console.log(error);
      setIsLoginLoading(false);
    }
  };

  const [user, loading, error] = useAuthState(firebaseAuth);

  useEffect(() => {
    if (user) {
      if (
        router.query.redirect &&
        (routes.folytkov.find((r) => r.href === router.query.redirect) ||
          routes.other.find((r) => r.href === router.query.redirect))
      ) {
        router.replace(router.query.redirect as string);
        return;
      }
      router.replace("/profil");
    }
  }, [router, user]);

  return (
    <InnerLayout title="Bejelentkezés" restrictWidth restrictHeight>
      <CustomButton onClick={async () => await handleSignInWithGoogle()}>
        <div className="flex flex-row items-center gap-2">
          <FcGoogle />
          <p>Bejelentkezés Google fiókkal</p>
        </div>
      </CustomButton>
    </InnerLayout>
  );
}
