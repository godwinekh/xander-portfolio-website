import { useState } from "react";
import Image from "next/image";
import IntlEducation from "@@/images/International Day of Education 2024.png";
import BSLogo from "@@/images/Benza sayz logo steel 3d.png";
import CamStitches from "@@/images/CS Label.png";
import Kobe from "@@/images/Kobe Design by Xander.png";
import Wingy from "@@/images/wingy.png";
import Mattress from "@@/images/Mattress & Beddings.png";
import BSDesign from "@@/images/BS Social Media Designs 2.png";
import BSReview from "@@/images/Benza sayz review JW4.png";
import Praying from "@@/images/Praying Moment Every month design.png";
import NYDF from "@@/images/NYDF vision1x1.png";
import Jovial from "@@/images/Jovial bw.png";
import Link from "next/link";

const staticImages = [
  IntlEducation,
  BSLogo,
  CamStitches,
  Kobe,
  Wingy,
  Mattress,
  BSDesign,
  BSReview,
  Praying,
  NYDF,
  BSLogo,
  Jovial,
];

export default function ContentDesigns() {
  const [showMore, toggleShowMore] = useState(false);

  return (
    <div>
      <h6 className="mb-4">Branding and Content Designs</h6>

      <div className="flex flex-wrap justify-start items-center w-full gap-6">
        {staticImages.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden w-full h-auto md:w-40 md:h-40 rounded-2xl border-4 border-black"
          >
            <Image
              alt="Content Designs by Xander"
              src={image}
              quality={100}
              placeholder="blur"
              className="w-full h-auto"
              style={{
                objectFit: "cover",
              }}
            />
          </div>
        ))}
      </div>

      <div className="flex justify-center md:justify-end mt-4 px-4">
        <Link
          href="https://drive.google.com/drive/folders/1vzmDL8htnTl53rgWyCf-eS_9w43KuFh9?usp=sharing"
          target="_blank"
          className="text-[#F80000]"
          onClick={() => toggleShowMore((prev) => !prev)}
        >
          See {showMore ? "less" : "more"}
        </Link>
      </div>
    </div>
  );
}
