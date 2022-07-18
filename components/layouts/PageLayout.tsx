type PageLayoutProps = {
  children: JSX.Element | JSX.Element[];
};

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="bg-white text-black ">
      <div className="flex flex-col min-h-screen">
        <header className="flex-none">
          header{/* replace with header component */}
        </header>
        <main className="flex flex-grow w-full">{children}</main>
        <footer className="flex-none">
          footer{/* replace with footer component */}
        </footer>
      </div>
    </div>
  );
}
