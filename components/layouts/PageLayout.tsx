import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

type PageLayoutProps = {
  children: JSX.Element | JSX.Element[];
};

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="bg-white text-black ">
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex flex-grow w-full">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
