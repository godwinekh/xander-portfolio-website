"use client";
import Image from "next/image";
import Zander from "@@/images/xander.jpg";
import moreText from "./moreText";
import { useState } from "react";

export default function Bio() {
  const [showMore, toggleShowMore] = useState(false);

  return (
    <div
      id="bio"
      className="px-8 md:px-16 lg:px-32 pt-10 pb-32 bg-[#1e1e1e] rounded-t-[5rem] -md:mt-10"
    >
      <div className="flex flex-col md:flex-row justify-start items-baseline gap-2 md:gap-16 mb-16">
        <h2 className="text-5xl md:text-8xl font-extrabold">
          Bio<span className="text-[#F80000]">.</span>
        </h2>
        <p className="text-[#F80000] md:font-semibold">
          Determined for greatness and sees no limitation
        </p>
      </div>

      <div className="flex flex-col justify-center items-center space-y-6 text-center md:text-left">
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 lg:gap-0">
          <div className="basis-1/3 flex justify-center items-center">
            <div className="w-72 h-72 rounded-full overflow-hidden border border-white">
              <Image
                alt="background image"
                src={Zander}
                sizes="100vw"
                placeholder="blur"
                quality={100}
                style={{ objectFit: "cover", objectPosition: "top" }}
              />
            </div>
          </div>

          {/* Bio text */}
          <div className="lg:basis-1/2 space-y-6 font-thin">
            <p>
              Greetings! I'm Xander, a versatile creative professional with a
              passion for turning ideas into captivating visual experiences.
              With a diverse skill set that spans graphic and UI/UX design,
              content creation, and data analytics, I bring a unique blend of
              creativity and analytical thinking to every project.
            </p>
            <div className="space-y-1">
              <h6 className="font-light">Certifications and Expertise:</h6>
              <p>
                I hold a design and innovation certificate from the University
                of Sydney, showcasing my commitment to a cutting-edge design
                approach. Additionally, my UI/UX design proficiency is backed by
                certification from the University of Minnesota. These
                credentials, combined with certifications as a Google IT
                professional, a certified data analyst, and a Google Project
                Management certificate, underscore my dedication to staying at
                the forefront of technology and project management
                methodologies.
              </p>
            </div>
          </div>
        </div>

        {/* More text */}
        <div className={`lg:w-11/12 font-thin ${showMore ? "block" : "hidden"}`}>
          {moreText.map((skill, index) => (
            <div key={index} className="my-6 space-y-1">
              <h6 className="font-light">{skill.heading}</h6>
              <p>{skill.body}</p>
            </div>
          ))}
          <p>
            Thank you for visiting, and I look forward to connecting with you.
          </p>
        </div>
      </div>

      <div className="flex justify-end mt-10 lg:w-11/12">
        <button onClick={() => toggleShowMore((prev) => !prev)}>
          See {showMore ? "less" : "more"}
        </button>
      </div>
    </div>
  );
}
