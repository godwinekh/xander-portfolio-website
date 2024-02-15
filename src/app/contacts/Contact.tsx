import Image from "next/image";
import XanderLogo from "@@/images/xander logo.png";
import Navigation from "../header/Navigation";

export default function Contact() {
  return (
    <div
      id="contact"
      className="px-32 py-10 bg-white text-black rounded-t-[5rem] -mt-16"
    >
      <div className="flex justify-start items-baseline gap-16 mb-16">
        <h2 className="text-8xl font-extrabold">
          Contacts<span className="text-[#F80000]">.</span>
        </h2>
        <p className="text-[#F80000] font-semibold">
          Determined for greatness and sees no limitation
        </p>
      </div>

      <div className="flex flex-col justify-center items-start gap-6">
        <div>
          <p className="text-[#F80000] text-4xl font-semibold">LinkedIn</p>
        </div>

        <p className="text-5xl">hey@xandereke.com</p>

        <div className="flex justify-between items-center border-y border-black py-14 mt-10">
          <div className="relative basis-1/6 bg-[#1e1e1e]">
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

          <Navigation className="bg-[#1e1e1e] text-white" />
        </div>

        <p>&copy; XAnDeR 2024</p>
      </div>
    </div>
  );
}
