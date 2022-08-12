import InnerLayout from "@/components/layouts/InnerLayout";
import {
  withAuthUserTokenSSR,
  withAuthUser,
  AuthAction,
} from "next-firebase-auth";

function HandleUsersPage() {
  return (
    <InnerLayout title="Felhasználók kezelése" restrictHeight restrictWidth>
      <span>asd</span>
    </InnerLayout>
  );
}

export const getServerSideProps = withAuthUserTokenSSR({
  whenUnauthed: AuthAction.REDIRECT_TO_LOGIN,
})();

export default withAuthUser()(HandleUsersPage);
