import Header from "./header";
import Hero from "./hero";
import Footer from "./footer";

export default function Main({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      <main className="flex-grow main">{children}</main>
      <Footer />
    </div>
  );
}
