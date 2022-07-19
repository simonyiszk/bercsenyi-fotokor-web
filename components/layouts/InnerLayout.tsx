import clsx from "clsx";
import Head from "next/head";

type InnerLayoutProps = {
  children: JSX.Element | JSX.Element[];
  restrictWidth?: boolean;
  restrictHeight?: boolean;
  title: string;
  hideTitle?: boolean;
};

export default function InnerLayout({
  children,
  restrictWidth,
  restrictHeight,
  title,
  hideTitle,
}: InnerLayoutProps) {
  return (
    <>
      <Head>
        {/* todo seo stuff 
        https://github.com/simonyiszk/bercsenyi-fotokor-web/milestone/3
        */}
        <title>{`${title.toLocaleLowerCase()} - bercsényi fotókör`}</title>
      </Head>
      <div
        className={clsx(
          restrictWidth && "max-w-6xl px-5",
          restrictHeight && "py-16",
          "w-full h-full mx-auto"
        )}
      >
        {/* todo replace with Title component - https://github.com/simonyiszk/bercsenyi-fotokor-web/issues/28 */}
        {!hideTitle && (
          <h1 className="mb-8 text-4xl font-medium">{title.toLowerCase()}</h1>
        )}
        {children}
      </div>
    </>
  );
}
