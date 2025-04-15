import Image from "next/image";
import Header from "./header/Header";
import BlueBackground from "@@/images/blue-background.jpg";
import Bio from "./bio/Bio";
import Portfolio from "./portfolio.tsx/Portfolio";
import Contact from "./contacts/Contact";

export default function Home() {
  return (
    <main className="max-w-full h-full container flex flex-col relative bg-slate-950 text-white">

      <Header />
      <Bio />
      <Portfolio />
      <Contact />
    </main>
  );
}
