import PageLayout from "@/components/layouts/PageLayout";
import { AppProps } from "next/app";

import "./../styles/global.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </>
  );
}
