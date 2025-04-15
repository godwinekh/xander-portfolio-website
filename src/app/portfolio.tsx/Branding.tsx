import Image from "next/image";
import NYDF from "@@/images/NYDF Guildline cover.png";
import SparkCircle from "@@/images/Spark circle brand cover.png";
import Benzasayz from "@@/images/Benza Sayz brand cover.png";
import Link from "next/link";
import ArrowDownRight from "./ArrowDownRight";

const brands = [
  {
    image: NYDF,
    link: "https://drive.google.com/file/d/1iMs9IvvwqcwPzb4qlonANV8KzMzlkszL/view?usp=drive_link",
  },
  {
    image: SparkCircle,
    link: "https://drive.google.com/file/d/1_qS4pq_IveIH2NFwXkJ7En-0dX_Sa48q/view?usp=drive_link",
  },
  {
    image: Benzasayz,
    link: "https://drive.google.com/file/d/1plR-s9-AcV__8242HEe5i34PZx0wAOGw/view?usp=drive_link",
  },
];

export default function Branding() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center w-full gap-10">
      {brands.map((brand, index) => (
        <div key={index} className="relative md:w-1/3 h-[19rem]">
          <div className="overflow-hidden w-full h-full rounded-3xl">
            <Image
              alt="Brandings by Xander"
              src={brand.image}
              quality={100}
              placeholder="blur"
              sizes="100vw"
              className="object-cover w-full h-full"
            />
          </div>
          <Link
            href={brand.link}
            target="_blank"
            className="absolute -bottom-2 -right-4 flex justify-center items-center w-24 h-24 md:w-28 md:h-28 rounded-full bg-black"
          >
            <div className="w-20 h-20 md:w-24 md:h-24 bg-red-600 rounded-full flex justify-center items-center">
              <ArrowDownRight className="w-14 h-14 md:w-20 md:h-20" />
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
