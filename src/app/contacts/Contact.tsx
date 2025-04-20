import Image from "next/image";
import XanderLogo from "@@/images/xander-logo-black.png";
import Navigation from "../header/Navigation";
import Link from "next/link";

export default function Contact() {
  return (
    <div
      id="contact"
      className="px-8 md:px-16 lg:px-32 py-10 bg-white text-black rounded-t-[5rem] -mt-16"
    >
      <div className="flex flex-col md:flex-row justify-start items-baseline gap-2 md:gap-16 mb-16">
        <h2 className="text-5xl md:text-8xl font-extrabold">
          Contacts<span className="text-[#F80000]">.</span>
        </h2>
        <p className="text-[#F80000] font-semibold">
          Determined for greatness and sees no limitation
        </p>
      </div>

      <div className="flex flex-col justify-center items-start gap-6">
        <div>
          <Link
            href="https://www.linkedin.com/in/xandereke/"
            target="_blank"
            className="text-[#F80000] text-2xl md:text-4xl font-semibold"
          >
            LinkedIn
          </Link>
        </div>

        <Link
          href="mailto:alexanderekexander@gmail.com"
          target="_blank"
          className="text-xl md:text-5xl"
        >
          alexanderekexander@gmail.com
        </Link>
        {/* https://mail.google.com/mail/?view=cm&fs=1&to=alexanderekexander@gmail.com&body=I%20would%20like%20to%20connect%20with%20you. */}

        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center border-y border-black py-10 md:py-14 mt-10">
          <div className="relative md:basis-1/6">
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

          <Navigation className="w-auto bg-[#1e1e1e] text-white" isFooter={true} />
        </div>

        <p className="text-center w-full">&copy; XAnDeR 2024</p>
      </div>
    </div>
  );
}
