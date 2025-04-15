import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import Close from "@/icons/close";
import Menu from "@/icons/menu";
import XanderLogo from "@@/images/xander logo.png";
import Linkedin from "@/icons/linkedin";

interface NavProps {
  className?: string;
}

function Navbar({ className }: NavProps) {
  const dottedRed = <span className="text-[#F80000] md:hidden">.</span>;

  return (
    <nav className={`rounded-full px-16 py-2 ${className}`}>
      <Link href="#home" className="hidden md:block">
        Home
      </Link>
      <Link href="#bio">Bio{dottedRed}</Link>
      <Link href="#portfolio">Portfolio{dottedRed}</Link>
      <Link href="#contact">Contact{dottedRed}</Link>
    </nav>
  );
}

export default function Navigation({ className }: NavProps) {
  return (
    <Fragment>
      <Navbar
        className={`hidden md:flex justify-center items-center gap-16 ${className}`}
      />

      <button className="md:hidden">
        <Menu className="w-8 h-8" />
      </button>

      {/* Menu for small screens */}
      <div className="fixed md:hidden top-0 left-0 right-0 bottom-0 bg-[#590202] flex flex-col px-8 py-8">
        <div className="flex justify-between items-center md:items-baseline">
          <div className="relative basis-1/3 md:basis-1/4">
            <Image
              alt="Xander Name Logo"
              src={XanderLogo}
              placeholder="blur"
              sizes="100vw"
              quality={100}
              style={{
                objectFit: "cover",
              }}
            />
          </div>

          <Close />

          <Link
            href="https://drive.google.com/file/d/1kc6-uLPUvezlapXVbJLtItjmAC2e54n2/view?usp=sharing"
            target="_blank"
            className="px-4 py-1 border border-white rounded-xl"
          >
            Resume
          </Link>
        </div>

        <Navbar className="grow flex flex-col justify-center gap-6 px-0 text-3xl font-extrabold" />

        <Link href="https://www.linkedin.com/in/xandereke/" target="_blank">
          <Linkedin className="w-10 h-10" />
        </Link>
      </div>
    </Fragment>
  );
}
