import { useState } from "react";
import Image from "next/image";
import MockUiNydf from "@@/images/webui-nydf.png";
import MockUiPkm from "@@/images/webui-pkm.png";
import MockUiSc from "@@/images/webui-sc.png";
import Link from "next/link";

const uiData = [
  { image: MockUiNydf, link: "https://www.nixerlexfoundation.org" },
  { image: MockUiSc, link: "https://www.dsparkcircle.com" },
  { image: MockUiPkm, link: "https://www.promiseskeptministry.org" },
];

export default function UIDesigns() {
  const [showMore, toggleShowMore] = useState(false);

  return (
    <div>
      <h6 className="mb-4">UI Designs</h6>

      <div className="flex flex-col md:flex-row justify-center items-center w-full gap-10">
        {uiData.map((ui, index) => (
          <Link
            href={ui.link}
            target="_blank"
            key={index}
            className="relative overflow-hidden md:basis-1/3 rounded-2xl h-80 md:h-64 lg:h-[19rem] border-8 border-black"
          >
            <Image
              alt="UI Designs by Xander"
              src={ui.image}
              quality={100}
              placeholder="blur"
              sizes="100vw"
              style={{
                objectFit: "cover",
              }}
            />
          </Link>
        ))}
      </div>

      {/* <div className="flex justify-center md:justify-end mt-4 px-4">
        <Link
          href="#"
          target="_blank"
          className="text-[#F80000]"
          onClick={() => toggleShowMore((prev) => !prev)}
        >
          See {showMore ? "less" : "more"}
        </Link>
      </div> */}
    </div>
  );
}
