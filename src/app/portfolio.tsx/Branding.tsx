import Image from "next/image";
import NYDF from "@@/images/NYDF Guildline cover.png";
import SparkCircle from "@@/images/Spark circle brand cover.png";
import Benzasayz from "@@/images/Benza Sayz brand cover.png";
import Link from "next/link";
import ArrowDownRight from "./ArrowDownRight";

const staticImages = [NYDF, SparkCircle, Benzasayz];

export default function Branding() {
  return (
    <div className="flex justify-center items-center w-full gap-10">
      {staticImages.map((image, index) => (
        <div key={index} className="relative basis-1/3 h-[19rem]">
          <div className="overflow-hidden w-full h-full rounded-3xl">
            <Image
              alt="Brandings by Xander"
              src={image}
              quality={100}
              placeholder="blur"
              sizes="100vw"
              style={{
                objectFit: "cover",
              }}
            />
          </div>
          <Link href="#" className="circle-with-arrow">
            <ArrowDownRight className="arrow" />
          </Link>
        </div>
      ))}
    </div>
  );
}
