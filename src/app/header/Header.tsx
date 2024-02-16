import Image from "next/image";
import Navigation from "./Navigation";
import BlueBackground from "@@/images/blue-background.jpg";
import XanderLogo from "@@/images/xander logo.png";

export default function Header() {
  return (
    <header
      id="home"
      className="flex flex-col h-[28rem] md:h-screen px-8 md:px-16 lg:px-32"
    >
      <div className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden -z-10">
        <Image
          alt="background image"
          src={BlueBackground}
          placeholder="blur"
          quality={100}
          className="h-[35rem] md:h-auto"
          style={{ objectFit: "cover" }}
        />
      </div>
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

      <div className="flex-1 flex flex-col justify-center items-center">
        <div className="font-thin space-y-2 md:space-y-0.5">
          <p>Hi, I heard you were looking for me.</p>
          <p className="text-4xl md:text-6xl font-bold">
            I&apos;m Alexander Eke
          </p>
          <p>Graphics &amp; UI/UX Designer</p>
        </div>
      </div>
    </header>
  );
}
