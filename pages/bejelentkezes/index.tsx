import InnerLayout from "@/components/layouts/InnerLayout";
import CustomButton from "@/components/typography/CustomButton";
import { useRouter } from "next/router";
import { FcGoogle } from "react-icons/fc";
import { doc, getDoc, setDoc } from "firebase/firestore";
import type { IUser } from "@/models/user";
import { useEffect, useState } from "react";
import { routes } from "@/contents/links";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";
import { firebaseAuth } from "@/utils/firebase";
import firebase from "firebase/app";
import "firebase/auth";
import { withAuthUser, AuthAction, useAuthUser } from "next-firebase-auth";

function LoginPage() {
  const router = useRouter();
  const provider = new GoogleAuthProvider();

  // TODO valami UI erre

  return (
    <InnerLayout title="Bejelentkezés" restrictWidth restrictHeight>
      <CustomButton
        onClick={async () => {
          const auth = getAuth();
          auth.languageCode = "hu";
          signInWithPopup(auth, provider)
            .then((result) => {
              const credential =
                GoogleAuthProvider.credentialFromResult(result);
              const token = credential?.accessToken;
              // The signed-in user info.
              const user = result.user;
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              // The email of the user's account used.
              const email = error.customData.email;
              // The AuthCredential type that was used.
              const credential = GoogleAuthProvider.credentialFromError(error);
              console.log(errorMessage);
            });
        }}
      >
        <div className="flex flex-row items-center gap-2">
          <FcGoogle />
          <p>Bejelentkezés Google fiókkal</p>
        </div>
      </CustomButton>
    </InnerLayout>
  );
}

export default withAuthUser({
  whenAuthed: AuthAction.REDIRECT_TO_APP,
  whenAuthedBeforeRedirect: AuthAction.SHOW_LOADER,
})(LoginPage);
