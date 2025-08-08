import Image from "next/image";
import Navigation from "./Navigation";
import BlueBackground from "@@/images/blue-background.jpg";
import XanderLogo from "@@/images/xander logo.png";
import Link from "next/link";

export default function Header() {
  return (
    <header id="home" className="flex flex-col h-screen relative">
      <div className="absolute top-0 left-0 right-0 bottom-0 h-screen overflow-hidden">
        <Image
          alt="background image"
          src={BlueBackground}
          placeholder="blur"
          quality={100}
          className="h-screen"
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className="flex flex-col h-screen w-full pt-10 px-8 md:px-16 lg:px-32 z-20 bg-black bg-opacity-85">
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

          <Navigation />

          <Link
            href="https://drive.google.com/file/d/1YOEa8rJglR8DyEFs7FeBYAR-zYuWOCHO/view?usp=drivesdk"
            target="_blank"
            className="px-4 py-1 border border-white rounded-xl"
          >
            Resume
          </Link>
        </div>

        <div className="flex-1 flex flex-col justify-center items-center">
          <div className="font-thin space-y-2 md:space-y-0.5">
            <p className="text-3xl md:text-md mb-16 md:mb-0">
              Hi, I heard you were looking for me.
            </p>
            <p className="text-6xl md:text-6xl font-bold">
              I&apos;m Alexander Eke
            </p>
            <p className="text-xl md:text-md">Graphics &amp; UI/UX Designer</p>
          </div>
        </div>
      </div>
    </header>
  );
}
