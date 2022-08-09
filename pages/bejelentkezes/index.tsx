import InnerLayout from "@/components/layouts/InnerLayout";
import CustomButton from "@/components/typography/CustomButton";
import { firebaseAuth } from "@/utils/firebase";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { FcGoogle } from "react-icons/fc";

export default function LoginPage() {
  const [signInWithGoogle, user, loading, error] =
    useSignInWithGoogle(firebaseAuth);

  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.replace("/profil");
    }
  }, [router, user]);
  return (
    <InnerLayout title="Bejelentkezés" restrictWidth restrictHeight>
      <CustomButton onClick={() => signInWithGoogle()}>
        <div className="flex flex-row items-center gap-2">
          <FcGoogle />
          <p>Bejelentkezés Google fiókkal</p>
        </div>
      </CustomButton>
    </InnerLayout>
  );
}
