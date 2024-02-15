import { useState } from "react";
import Image from "next/image";
import Kobe from "@@/images/Kobe Design by Xander.png";
import CommuteApp from "@@/images/Xander Commute app.png";
import BrandShowcase from "@@/images/Spark Circle Brands Showcase.png";

const staticImages = [Kobe, CommuteApp, BrandShowcase];

export default function UIDesigns() {
  const [showMore, toggleShowMore] = useState(false);

  return (
    <div>
      <h6 className="mb-4">UI Designs</h6>

      <div className="flex justify-center items-center w-full gap-10">
        {staticImages.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden basis-1/3 rounded-2xl h-[19rem] border-8 border-black"
          >
            <Image
              alt="Designs by Xander"
              src={image}
              quality={100}
              placeholder="blur"
              sizes="100vw"
              style={{
                objectFit: "cover",
              }}
            />
          </div>
        ))}
      </div>

      <div className="flex justify-end mt-4 px-4">
        <button
          className="text-[#F80000]"
          onClick={() => toggleShowMore((prev) => !prev)}
        >
          See {showMore ? "less" : "more"}
        </button>
      </div>
    </div>
  );
}
