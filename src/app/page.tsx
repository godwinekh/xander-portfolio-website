import Image from "next/image";
import Header from "./header/Header";
import BlueBackground from "@@/images/blue-background.jpg";
import Bio from "./bio/Bio";
import Portfolio from "./portfolio.tsx/Portfolio";
import Contact from "./contacts/Contact";

export default function Home() {
  return (
    <main className="max-w-full h-full pt-10 container flex flex-col relative bg-black bg-opacity-85 text-white">
      
      <Header />
      <Bio />
      <Portfolio />
      <Contact />
    </main>
  );
}
