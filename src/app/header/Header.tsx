import Image from "next/image";
import Navigation from "./Navigation";
import XanderLogo from "@@/images/xander logo.png";

export default function Header() {
  return (
    <header id="home" className="flex flex-col h-screen px-32">
      <div className="flex justify-between items-baseline">
        <div className="relative basis-1/4">
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

        <Navigation />

        <button className="px-4 py-1 border border-white rounded-xl">
          Resume
        </button>
      </div>

      <div className="flex-1 flex flex-col justify-center items-center space-y-0.5">
        <div className="font-thin">
          <p>Hi, I heard you were looking for me.</p>
          <p className="text-6xl font-bold">I&apos;m Alexander Eke</p>
          <p>Graphics &amp; UI/UX Designer</p>
        </div>
      </div>
    </header>
  );
}
