import Header from "./header";

import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto max-w-screen-md justify-content px-2">
        {children}
      </main>
      <Footer />
    </div>
  );
}
